/**
 * @license
 * Copyright 2026 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
// Generated stylesheet for ./labs/gb/components/focus/focus-ring.css.
import { css } from 'lit';
export const styles = css `/*!
 * Copyright 2026 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */@layer md.sys;@layer md.comp.focus-ring{.focus-ring-outer,.focus-ring-inner{--focus-ring-outline: none;--focus-ring-offset: 0;--focus-ring-animation: none;outline:var(--focus-ring-outline);outline-offset:var(--focus-ring-offset);animation:var(--focus-ring-animation),var(--ripple-animation, none)}.focus-ring-outer:is(:focus-visible,.focus-visible),.focus-ring-outer:has(.focus-ring-target:focus-visible),.focus-ring-target:focus-visible .focus-ring-outer,:host(:focus-visible) .focus-ring-outer.focus-ring-host{--focus-ring-outline: 3px solid var(--md-sys-color-secondary);--focus-ring-offset: 2px;--focus-ring-animation: focus-ring-outer-grow 150ms cubic-bezier(0.2, 0, 0, 1), focus-ring-outer-shrink 450ms 150ms cubic-bezier(0.2, 0, 0, 1)}.focus-ring-inner:is(:focus-visible,.focus-visible),.focus-ring-inner:has(.focus-ring-target:focus-visible),.focus-ring-target:focus-visible .focus-ring-inner,:host(:focus-visible) .focus-ring-inner.focus-ring-host{--focus-ring-outline: 3px solid var(--md-sys-color-secondary);--focus-ring-offset: -3px;--focus-ring-animation: focus-ring-inner-grow 150ms cubic-bezier(0.2, 0, 0, 1), focus-ring-inner-shrink 450ms 150ms cubic-bezier(0.2, 0, 0, 1)}@keyframes focus-ring-outer-grow{from{outline-width:0}to{outline-width:8px}}@keyframes focus-ring-outer-shrink{from{outline-width:8px}}@keyframes focus-ring-inner-grow{from{outline-width:0;outline-offset:0}to{outline-width:8px;outline-offset:-8px}}@keyframes focus-ring-inner-shrink{from{outline-width:8px;outline-offset:-8px}}}
`;
export default styles.styleSheet;
//# sourceMappingURL=focus-ring.cssresult.js.map