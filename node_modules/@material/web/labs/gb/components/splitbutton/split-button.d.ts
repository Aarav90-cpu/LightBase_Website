/**
 * @license
 * Copyright 2026 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
import { type ClassInfo } from 'lit/directives/class-map.js';
/** Split Button color configuration types. */
export type SplitButtonColor = 'filled' | 'elevated' | 'tonal' | 'outlined';
/** Split Button size configuration types. */
export type SplitButtonSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
/** Split Button classes. */
export declare const SPLIT_BUTTON_CLASSES: {
    readonly splitButton: "split-btn";
    readonly splitButtonSelected: "split-btn-selected";
};
/** The state provided to the `splitButtonClasses()` function. */
export interface SplitButtonClassesState {
    /** Whether the split trailing button is selected. */
    selected?: boolean;
}
/**
 * Returns the split button classes to apply to an element based on the given
 * state.
 *
 * @param state The state of the split button.
 * @return An object of class names and truthy values if they apply.
 */
export declare function splitButtonClasses({ selected, }?: SplitButtonClassesState): ClassInfo;
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
export declare const splitButton: (state?: SplitButtonClassesState & import("../shared/directives.js").AdditionalClasses) => import("lit-html/directive.js").DirectiveResult;
