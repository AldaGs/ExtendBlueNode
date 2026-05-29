// Header status chips: shows whether After Effects is running and whether
// the agent socket is live, with the active port so users can sanity-check
// the link. Offers a one-click Launch AE button when AE isn't running.
//
// Polls every POLL_MS. Cheap: tasklist + a single TCP ping. Pauses when
// the document tab isn't visible so we don't beat on the agent forever.

import { useCallback, useEffect, useRef, useState } from 'react';
import { aeStatus, bridgeInfo, launchAE, pingHost } from '../cep';

const POLL_MS = 3000;

function useLiveness() {
  const [ae, setAe] = useState({ running: false, path: null, available: false });
  const [agent, setAgent] = useState({ connected: false, checking: true });
  const timer = useRef(null);

  const tick = useCallback(async () => {
    const info = bridgeInfo();
    if (!info) {
      setAgent({ connected: false, checking: false });
    } else {
      const r = await pingHost();
      setAgent({ connected: !!r?.ok, checking: false });
    }
    setAe(await aeStatus());
  }, []);

  useEffect(() => {
    tick();
    const start = () => {
      if (timer.current) return;
      timer.current = setInterval(tick, POLL_MS);
    };
    const stop = () => {
      if (!timer.current) return;
      clearInterval(timer.current);
      timer.current = null;
    };
    const onVis = () => (document.hidden ? stop() : (start(), tick()));
    start();
    document.addEventListener('visibilitychange', onVis);
    return () => {
      stop();
      document.removeEventListener('visibilitychange', onVis);
    };
  }, [tick]);

  return { ae, agent, refresh: tick };
}

export default function ConnectionStatus() {
  const { ae, agent, refresh } = useLiveness();
  const [launching, setLaunching] = useState(false);
  const info = bridgeInfo();

  const onLaunch = async () => {
    setLaunching(true);
    try {
      const r = await launchAE();
      if (!r?.ok) {
        // Surface the error inline; not worth a toast system yet.
        console.warn('[EBN] launchAE failed:', r?.message);
      }
      // Give AE a moment to splash before the next poll picks it up.
      setTimeout(refresh, 1500);
    } finally {
      setLaunching(false);
    }
  };

  const aeKind = !ae.available ? 'muted' : ae.running ? 'ok' : 'warn';
  const aeText = !ae.available
    ? 'AE: browser'
    : ae.running
    ? 'AE running'
    : 'AE not running';

  let agentKind;
  let agentText;
  if (!info) {
    agentKind = 'muted';
    agentText = 'No bridge';
  } else if (info.kind === 'cep') {
    agentKind = agent.connected ? 'ok' : 'warn';
    agentText = agent.connected ? 'CEP linked' : 'CEP idle';
  } else {
    agentKind = agent.connected ? 'ok' : 'warn';
    agentText = `${agent.connected ? 'Linked' : 'No link'} · :${info.port}`;
  }

  const showLaunch = ae.available && !ae.running;

  return (
    <div className="ebn-conn">
      <div
        className={`ebn-conn-tag ebn-conn-tag--${aeKind}`}
        title={ae.path || (ae.available ? 'After Effects executable not found' : 'Launch the desktop app to detect AE')}
      >
        <span className="ebn-conn-tag__dot" />
        <span>{aeText}</span>
      </div>
      <div
        className={`ebn-conn-tag ebn-conn-tag--${agentKind}`}
        title={
          info?.kind === 'agent'
            ? `Socket bridge to ${info.host}:${info.port} — open EBN Agent panel in AE if disconnected`
            : info?.kind === 'cep'
            ? 'Legacy CEP transport'
            : 'No transport available — open in Electron or AE'
        }
      >
        <span className="ebn-conn-tag__dot" />
        <span>{agentText}</span>
      </div>
      {showLaunch && (
        <button
          type="button"
          className="ebn-conn-btn"
          onClick={onLaunch}
          disabled={launching}
          title="Start After Effects"
        >
          {launching ? 'Starting…' : 'Launch AE'}
        </button>
      )}
    </div>
  );
}
