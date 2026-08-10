/**
 * @license
 * Copyright 2026 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
import { createClassMapDirective } from '../shared/directives.js';
/** Split Button classes. */
export const SPLIT_BUTTON_CLASSES = {
    splitButton: 'split-btn',
    splitButtonSelected: 'split-btn-selected',
};
/**
 * Returns the split button classes to apply to an element based on the given
 * state.
 *
 * @param state The state of the split button.
 * @return An object of class names and truthy values if they apply.
 */
export function splitButtonClasses({ selected = false, } = {}) {
    return {
        [SPLIT_BUTTON_CLASSES.splitButton]: true,
        [SPLIT_BUTTON_CLASSES.splitButtonSelected]: selected,
    };
}
/**
 * A Lit directive that adds split button styling and functionality to its
 * element.
 *
 * @example
 * ```ts
 * html`
 *   <div class="${splitButton()}">
 *     <button class="${button({color: 'filled'})}">Label</button>
 *     <button class="${button({color: 'filled'})}" popovertarget="menu"></button>
 *     <md-gb-menu id="menu">
 *       <md-gb-menu-item>Option 1</md-gb-menu-item>
 *       <md-gb-menu-item>Option 2</md-gb-menu-item>
 *     </md-gb-menu>
 *   </div>
 * `;
 * ```
 */
export const splitButton = createClassMapDirective({
    getClasses: splitButtonClasses,
});
//# sourceMappingURL=split-button.js.map