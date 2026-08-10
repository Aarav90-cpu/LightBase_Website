/**
 * @license
 * Copyright 2026 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
import { type ClassInfo } from 'lit/directives/class-map.js';
/** Switch classes. */
export declare const SWITCH_CLASSES: {
    readonly switch: "switch";
    readonly checked: string;
    readonly hover: string;
    readonly active: string;
    readonly disabled: string;
};
/** The state provided to the `switchClasses()` function. */
export interface SwitchClassesState {
    /** Emulates `:checked`. */
    checked?: boolean;
    /** Emulates `:hover`. */
    hover?: boolean;
    /** Emulates `:active`. */
    active?: boolean;
    /** Emulates `:disabled`. */
    disabled?: boolean;
}
/**
 * Returns the switch classes to apply to an element based on the given state.
 *
 * @param state The state of the switch.
 * @return An object of class names and truthy values if they apply.
 */
export declare function switchClasses({ checked, hover, active, disabled, }?: SwitchClassesState): ClassInfo;
/**
 * Sets up switch functionality for the given element.
 *
 * @param switchEl The element on which to set up switch functionality.
 * @param opts Setup options, supports a cleanup `signal`.
 */
export declare function setupSwitch(switchEl: HTMLElement, opts?: {
    signal?: AbortSignal;
}): void;
/**
 * A Lit directive that adds switch styling and functionality to its element.
 *
 * @example
 * ```ts
 * html`
 *   <input role="switch" type="checkbox" class="${switchToggle()}">
 *
 *   <button role="switch" aria-checked="false" class="${switchToggle()}"></button>
 * `;
 * ```
 */
export declare const switchToggle: (state?: SwitchClassesState & import("../shared/directives.js").AdditionalClasses) => import("lit-html/directive.js").DirectiveResult;
