/**
 * @license
 * Copyright 2026 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
import { PSEUDO_CLASSES } from '../shared/pseudo-classes.js';
/** Focus ring type configurations. */
export const FOCUS_RING_TYPES = {
    outer: 'outer',
    inner: 'inner',
};
/** Focus ring classes. */
export const FOCUS_RING_CLASSES = {
    focusRingOuter: 'focus-ring-outer',
    focusRingInner: 'focus-ring-inner',
    focusRingTarget: 'focus-ring-target',
    focusRingHost: 'focus-ring-host',
    focusVisible: PSEUDO_CLASSES.focusVisible,
};
/**
 * Returns the focus ring classes to apply to an element based on the given
 * state.
 *
 * @param state The state of the focus ring.
 * @return An object of class names and truthy values if they apply.
 */
export function focusRingClasses({ type = FOCUS_RING_TYPES.outer, focusVisible = false, } = {}) {
    return {
        [FOCUS_RING_CLASSES.focusRingOuter]: type === FOCUS_RING_TYPES.outer || !type,
        [FOCUS_RING_CLASSES.focusRingInner]: type === FOCUS_RING_TYPES.inner,
        [FOCUS_RING_CLASSES.focusVisible]: focusVisible,
    };
}
//# sourceMappingURL=focus-ring.js.map