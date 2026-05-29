// Extend Blue Node — dockable agent panel for After Effects.
//
// Install: drop this file into
//   <AE>/Support Files/Scripts/ScriptUI Panels/EBN Agent.jsx
// then open it from Window ▸ EBN Agent. It will dock like any native
// AE panel. (You can still File ▸ Scripts ▸ Run Script File… it as a
// floating palette during development.)
//
// Auto-starts listening on 127.0.0.1:7879 the moment it loads. The
// renderer (Electron app) talks to it with the same 8-hex-length-prefix
// protocol used by jsx/host.jsx's EBN.run / EBN.ping.

#target aftereffects

if (typeof EBN === 'undefined') {
    // @include "host.jsx"
}

(function (thisObj) {
    var DEFAULT_PORT = 7879;
    var POLL_MS = 60;
    var AUTOSTART = true;

    var state = {
        srv: null,
        taskId: null,
        port: DEFAULT_PORT,
        requestCount: 0,
        lastAt: null,
        lastOk: null
    };

    var ui = {};

    // ---------- protocol ----------

    function pad8(n) {
        var s = n.toString(16);
        while (s.length < 8) s = '0' + s;
        return s;
    }

    function readN(conn, n) {
        var got = '';
        var safety = 0;
        while (got.length < n && conn.connected && safety < 10000) {
            var chunk = conn.read(n - got.length);
            if (chunk === null || chunk === '') {
                if (conn.eof) break;
            } else {
                got += chunk;
            }
            safety++;
        }
        return got;
    }

    function writeJson(conn, jsonStr) {
        conn.write(pad8(jsonStr.length) + jsonStr);
    }

    function handle(conn) {
        var ok = false;
        try {
            var header = readN(conn, 8);
            if (header.length < 8) return;
            var len = parseInt(header, 16);
            if (isNaN(len) || len < 0 || len > 16 * 1024 * 1024) {
                writeJson(conn, '{"ok":false,"message":"agent: bad length header"}');
                return;
            }
            var body = readN(conn, len);
            var req = null;
            try { req = JSON.parse(body); } catch (e) {
                writeJson(conn, '{"ok":false,"message":"agent: bad JSON request"}');
                return;
            }
            var out;
            if (req && req.op === 'ping') {
                out = EBN.ping();
                ok = true;
            } else if (req && req.op === 'run') {
                out = EBN.run(String(req.script || ''));
                // EBN.run returns a JSON string; mark this request green
                // regardless of script success — the transport worked.
                ok = true;
            } else {
                out = '{"ok":false,"message":"agent: unknown op"}';
            }
            writeJson(conn, out);
        } catch (e) {
            try {
                writeJson(conn, '{"ok":false,"message":"agent: ' + String(e).replace(/"/g, "'") + '"}');
            } catch (_) {}
        } finally {
            state.requestCount++;
            state.lastAt = new Date();
            state.lastOk = ok;
            refresh();
        }
    }

    // ---------- listener ----------

    function tick() {
        if (!state.srv) return;
        try {
            var conn = state.srv.poll();
            if (conn) {
                handle(conn);
                try { conn.close(); } catch (_) {}
            }
        } catch (e) {
            setStatus('error', 'poll error: ' + e);
        }
    }
    // Expose for app.scheduleTask which calls it by name.
    $.global.EBN_AGENT_TICK = tick;

    function start(p) {
        if (state.srv) { refresh(); return; }
        state.port = p || DEFAULT_PORT;
        state.srv = new Socket();
        if (!state.srv.listen(state.port, 'BINARY')) {
            state.srv = null;
            setStatus('error', 'Port ' + state.port + ' in use');
            return;
        }
        state.taskId = app.scheduleTask('EBN_AGENT_TICK()', POLL_MS, true);
        setStatus('listening', 'Listening on 127.0.0.1:' + state.port);
    }

    function stop() {
        if (state.taskId !== null) {
            try { app.cancelTask(state.taskId); } catch (_) {}
            state.taskId = null;
        }
        if (state.srv) {
            try { state.srv.close(); } catch (_) {}
            state.srv = null;
        }
        setStatus('stopped', 'Stopped');
    }

    // ---------- UI ----------

    function setStatus(kind, msg) {
        ui._statusKind = kind;
        ui._statusMsg = msg;
        refresh();
    }

    function pad2(n) { return (n < 10 ? '0' : '') + n; }
    function fmtTime(d) {
        if (!d) return '—';
        return pad2(d.getHours()) + ':' + pad2(d.getMinutes()) + ':' + pad2(d.getSeconds());
    }

    function dotColor(kind) {
        // Returns [r,g,b] for the status dot.
        if (kind === 'listening') return [0.27, 0.78, 0.45]; // green
        if (kind === 'error')     return [0.95, 0.36, 0.36]; // red
        return [0.55, 0.55, 0.60];                            // grey (stopped/idle)
    }

    function paintDot(g, kind) {
        var c = dotColor(kind);
        g.graphics.backgroundColor = g.graphics.newBrush(g.graphics.BrushType.SOLID_COLOR, c);
    }

    function refresh() {
        if (!ui.window) return;
        var kind = ui._statusKind || 'stopped';
        var msg = ui._statusMsg || 'Idle';
        try {
            paintDot(ui.dot, kind);
            ui.dot.notify('onDraw');
            ui.statusLabel.text = msg;
            ui.portLabel.text = 'Port ' + state.port;
            ui.runningLabel.text = state.srv ? 'ON' : 'OFF';
            ui.countLabel.text = String(state.requestCount);
            ui.lastLabel.text = fmtTime(state.lastAt) +
                (state.lastAt ? (state.lastOk ? '  ✓' : '  ✗') : '');
            ui.startBtn.enabled = !state.srv;
            ui.stopBtn.enabled  = !!state.srv;
        } catch (_) {}
    }

    function buildUI(parent) {
        var w = (parent instanceof Panel)
            ? parent
            : new Window('palette', 'EBN Agent', undefined, { resizeable: true });

        w.orientation = 'column';
        w.alignChildren = ['fill', 'top'];
        w.spacing = 10;
        w.margins = 12;

        // --- status row: dot + status text ---
        var statusRow = w.add('group');
        statusRow.orientation = 'row';
        statusRow.alignChildren = ['left', 'center'];
        statusRow.spacing = 8;

        var dot = statusRow.add('panel');
        dot.preferredSize = [12, 12];
        dot.onDraw = function () {
            var g = this.graphics;
            var brush = g.newBrush(g.BrushType.SOLID_COLOR, dotColor(ui._statusKind || 'stopped'));
            g.newPath();
            g.ellipsePath(0, 0, 12, 12);
            g.fillPath(brush);
        };

        var statusLabel = statusRow.add('statictext', undefined, 'Idle');
        statusLabel.characters = 36;

        // --- info grid ---
        var grid = w.add('panel', undefined, '');
        grid.orientation = 'column';
        grid.alignChildren = ['fill', 'top'];
        grid.margins = [10, 8, 10, 10];
        grid.spacing = 4;

        function row(label) {
            var g = grid.add('group');
            g.orientation = 'row';
            g.alignChildren = ['left', 'center'];
            g.spacing = 8;
            var l = g.add('statictext', undefined, label);
            l.preferredSize.width = 90;
            var v = g.add('statictext', undefined, '—');
            v.characters = 22;
            return v;
        }

        var portLabel    = row('Port');
        var runningLabel = row('Listener');
        var countLabel   = row('Requests');
        var lastLabel    = row('Last');

        // --- controls ---
        var btnRow = w.add('group');
        btnRow.orientation = 'row';
        btnRow.alignment = ['fill', 'top'];
        btnRow.alignChildren = ['fill', 'center'];
        btnRow.spacing = 8;

        var startBtn = btnRow.add('button', undefined, 'Start');
        var stopBtn  = btnRow.add('button', undefined, 'Stop');

        startBtn.onClick = function () { start(state.port); };
        stopBtn.onClick  = function () { stop(); };

        ui = {
            window: w,
            dot: dot,
            statusLabel: statusLabel,
            portLabel: portLabel,
            runningLabel: runningLabel,
            countLabel: countLabel,
            lastLabel: lastLabel,
            startBtn: startBtn,
            stopBtn: stopBtn,
            _statusKind: 'stopped',
            _statusMsg: 'Idle'
        };

        w.onClose = function () { stop(); };

        if (w instanceof Window) {
            w.center();
            w.show();
        } else {
            w.layout.layout(true);
            w.layout.resize();
            w.onResizing = w.onResize = function () { this.layout.resize(); };
        }

        return w;
    }

    buildUI(thisObj);
    refresh();
    if (AUTOSTART) start(DEFAULT_PORT);
})(this);
