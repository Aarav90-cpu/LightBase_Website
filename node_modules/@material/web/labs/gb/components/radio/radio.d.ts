/**
 * @license
 * Copyright 2026 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
import { type ClassInfo } from 'lit/directives/class-map.js';
/** Radio classes. */
export declare const RADIO_CLASSES: {
    readonly radio: "radio";
    readonly hover: string;
    readonly focus: string;
    readonly active: string;
    readonly checked: string;
    readonly disabled: string;
};
/** The state provided to the `radioClasses()` function. */
export interface RadioClassesState {
    /** Emulates `:hover`. */
    hover?: boolean;
    /** Emulates `:focus`. */
    focus?: boolean;
    /** Emulates `:active`. */
    active?: boolean;
    /** Emulates `:checked`. */
    checked?: boolean;
    /** Emulates `:disabled`. */
    disabled?: boolean;
}
/**
 * Returns the radio classes to apply to an element based on the given state.
 *
 * @param state The state of the radio.
 * @return An object of class names and truthy values if they apply.
 */
export declare function radioClasses({ hover, focus, active, checked, disabled, }?: RadioClassesState): ClassInfo;
/**
 * Sets up radio functionality for the given element.
 *
 * @param radio The element on which to set up radio functionality.
 * @param opts Setup options, supports a cleanup `signal`.
 */
export declare function setupRadio(radio: HTMLElement, opts?: {
    signal?: AbortSignal;
}): void;
/**
 * A Lit directive that adds radio styling and functionality to its element.
 *
 * @example
 * ```ts
 * html`
 *   <input type="radio" class="${radio()}" name="radio-group">
 *   <input type="radio" class="${radio()}" name="radio-group">
 *   <input type="radio" class="${radio()}" name="radio-group">
 * `;
 * ```
 */
export declare const radio: (state?: RadioClassesState & import("../shared/directives.js").AdditionalClasses) => import("lit-html/directive.js").DirectiveResult;
