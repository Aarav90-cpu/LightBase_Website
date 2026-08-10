/**
 * @license
 * Copyright 2026 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
import { focusRingClasses } from '../focus/focus-ring.js';
import { rippleClasses, setupRipple } from '../ripple/ripple.js';
import { createClassMapDirective } from '../shared/directives.js';
import { PSEUDO_CLASSES } from '../shared/pseudo-classes.js';
/** Checkbox classes. */
export const CHECKBOX_CLASSES = {
    checkbox: 'checkbox',
    invalid: PSEUDO_CLASSES.invalid,
    hover: PSEUDO_CLASSES.hover,
    focus: PSEUDO_CLASSES.focus,
    active: PSEUDO_CLASSES.active,
    checked: PSEUDO_CLASSES.checked,
    indeterminate: PSEUDO_CLASSES.indeterminate,
    disabled: PSEUDO_CLASSES.disabled,
};
/**
 * Returns the checkbox classes to apply to an element based on the given state.
 *
 * @param state The state of the checkbox.
 * @return An object of class names and truthy values if they apply.
 */
export function checkboxClasses({ invalid = false, hover = false, focus = false, active = false, checked = false, indeterminate = false, disabled = false, } = {}) {
    return {
        ...rippleClasses(),
        ...focusRingClasses(),
        [CHECKBOX_CLASSES.checkbox]: true,
        [CHECKBOX_CLASSES.checked]: checked,
        [CHECKBOX_CLASSES.indeterminate]: indeterminate,
        [CHECKBOX_CLASSES.disabled]: disabled,
        [CHECKBOX_CLASSES.invalid]: invalid,
        [CHECKBOX_CLASSES.hover]: hover,
        [CHECKBOX_CLASSES.focus]: focus,
        [CHECKBOX_CLASSES.active]: active,
    };
}
/**
 * Sets up checkbox functionality for the given element.
 *
 * @param checkbox The element on which to set up checkbox functionality.
 * @param opts Setup options, supports a cleanup `signal`.
 */
export function setupCheckbox(checkbox, opts) {
    setupRipple(checkbox, opts);
}
/**
 * A Lit directive that adds checkbox styling and functionality to its element.
 *
 * @example
 * ```ts
 * html`<input type="checkbox" class="${checkbox()}">`;
 * ```
 */
export const checkbox = createClassMapDirective({
    getClasses: checkboxClasses,
    setupElement: setupCheckbox,
});
//# sourceMappingURL=checkbox.js.map