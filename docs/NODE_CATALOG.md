# EBN Node Catalog (auto-generated)

> Regenerate with `npx vite-node scripts/audit-nodes.mjs --catalog`.
> 1635 nodes total, 0 broken. Hand-authored: 69; auto-generated After Effects DOM: 1566 (see scripts/generate-ae-nodes.mjs).

## Actions

| Node | Role | Status | Inputs | Outputs |
|---|---|---|---|---|
| Select Layer by ID | exec+data | ✅ | exec_in, comp, layer_id | layer, exec_out |

## Data

| Node | Role | Status | Inputs | Outputs |
|---|---|---|---|---|
| Color Picker | data | ✅ | color | hex, rgb, rgba, rgb255 |
| Get Property Value | data | ✅ | layer, property | value |
| Integer | misc | ✅ | — | — |
| New File | data | ✅ | path | file |
| New Folder | data | ✅ | path | folder |
| Property Path | misc | ✅ | — | — |
| Read Value at Time | data | ✅ | layer, property, time | value |
| Split Vector | misc | ✅ | — | — |
| String | misc | ✅ | — | — |
| Vector 2 Array | data | ✅ | x, y | value |

## Flow

| Node | Role | Status | Inputs | Outputs |
|---|---|---|---|---|
| Debug | exec+data | ✅ | exec_in, value, label | exec_out, value |
| Get Application | data | ✅ | — | value |
| Get Project Items | data | ✅ | — | value |
| Reroute | misc | ✅ | — | — |
| Start | exec | ✅ | — | exec_out |

## Globals

| Node | Role | Status | Inputs | Outputs |
|---|---|---|---|---|
| Get Global | misc | ✅ | — | — |
| Set Global | misc | ✅ | — | — |

## Javascript > Array

| Node | Role | Status | Inputs | Outputs |
|---|---|---|---|---|
| Array Get Element | data | ✅ | array, index | value |
| Array Length | data | ✅ | array | length |
| Array Push | exec+data | ✅ | exec_in, array, value | exec_out, length |
| New Array | data | ✅ | — | array |

## Javascript > Control Flow

| Node | Role | Status | Inputs | Outputs |
|---|---|---|---|---|
| Call Function | exec+data | ✅ | exec_in, arg1, arg2, arg3, arg4 | exec_out, result |
| Define Function | exec+data | ✅ | functionName, params | exec_body, param1, param2, param3, param4 |
| For Each (Array) | exec+data | ✅ | exec_in, array | exec_body, item, index, exec_done |
| For Loop | exec+data | ✅ | exec_in, start, end, step | exec_body, index, exec_done |
| Return | exec | ✅ | exec_in, value | — |
| Switch Statement | exec | ✅ | exec_in, value, case1_val, case2_val, case3_val | exec_case1, exec_case2, exec_case3, exec_default, exec_done |
| Walk Property Tree | exec+data | ✅ | exec_in, root | exec_body, property, exec_done |
| While Loop | exec | ✅ | exec_in, cond | exec_body, exec_done |

## Javascript > File I/O

| Node | Role | Status | Inputs | Outputs |
|---|---|---|---|---|
| Load JSON | exec+data | ✅ | exec_in, file_name | exec_out, payload |
| Save JSON | exec | ✅ | exec_in, payload, file_name | exec_out |

## Javascript > Logic

| Node | Role | Status | Inputs | Outputs |
|---|---|---|---|---|
| And | data | ✅ | a, b | result |
| Boolean | data | ✅ | value | value |
| Not | data | ✅ | a | result |
| Or | data | ✅ | a, b | result |
| Parse Number | data | ✅ | value | result |
| To String | data | ✅ | value | result |

## Javascript > Math

| Node | Role | Status | Inputs | Outputs |
|---|---|---|---|---|
| Math Function | data | ✅ | a, b | result |
| Math Random | data | ✅ | — | result |
| Random Integer | data | ✅ | min, max | result |

## Javascript > Object

| Node | Role | Status | Inputs | Outputs |
|---|---|---|---|---|
| New Object | data | ✅ | — | object |
| Object Builder | data | ✅ | — | object |
| Object Get Key | data | ✅ | object, key | value |
| Object Set Key | exec | ✅ | exec_in, object, key, value | exec_out |

## Javascript > ScriptUI

| Node | Role | Status | Inputs | Outputs |
|---|---|---|---|---|
| Custom UI Code | exec | ✅ | exec_in | exec_out |
| ScriptUI Builder | exec+data | ✅ | exec_in | exec_out, window_obj |
| Show Window | exec | ✅ | exec_in, window_obj | exec_out |
| UI Event Listener | exec | ✅ | exec_in, target | exec_out, exec_callback |

## Javascript > String

| Node | Role | Status | Inputs | Outputs |
|---|---|---|---|---|
| Concatenate | data | ✅ | a, b | result |
| String Length | data | ✅ | string | length |
| String Replace | data | ✅ | string, find, replace | result |
| String Split | data | ✅ | string, separator | array |

## Logic

| Node | Role | Status | Inputs | Outputs |
|---|---|---|---|---|
| If | misc | ✅ | — | — |
| Select (a ? b : c) | misc | ✅ | — | — |
| Set Local Variable | exec+data | ✅ | exec_in, value | exec_out, value |

## Loops

| Node | Role | Status | Inputs | Outputs |
|---|---|---|---|---|
| For Each Selected Layer | misc | ✅ | — | — |

## Math

| Node | Role | Status | Inputs | Outputs |
|---|---|---|---|---|
| Compare | misc | ✅ | — | — |
| Math | misc | ✅ | — | — |
| Vector Math | misc | ✅ | — | — |

## Mutators

| Node | Role | Status | Inputs | Outputs |
|---|---|---|---|---|
| Add Keyframe at Time | exec | ✅ | exec_in, layer, property, time, value | exec_out |
| Remove Keyframe | exec | ✅ | exec_in, layer, property, index | exec_out |
| Set Expression | exec | ✅ | exec_in, layer, property, expression | exec_out |
| Set Property | exec | ✅ | exec_in, layer, property, value | exec_out |

## Selectors

| Node | Role | Status | Inputs | Outputs |
|---|---|---|---|---|
| All Selected Layers | data | ✅ | comp | layers |
| Get Active Comp | exec+data | ✅ | exec_in | comp, exec_out |
| Select Layer by Index | exec+data | ✅ | exec_in, comp, layer_index | layer, exec_out |
| Select Layer by Name | exec+data | ✅ | exec_in, comp, layer_name | layer, exec_out |
| Select Layers by Class | data | ✅ | comp | layers |

