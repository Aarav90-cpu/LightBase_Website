/**
 * @license
 * Copyright 2026 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
import { type ClassInfo } from 'lit/directives/class-map.js';
/** Checkbox classes. */
export declare const CHECKBOX_CLASSES: {
    readonly checkbox: "checkbox";
    readonly invalid: string;
    readonly hover: string;
    readonly focus: string;
    readonly active: string;
    readonly checked: string;
    readonly indeterminate: string;
    readonly disabled: string;
};
/** The state provided to the `checkboxClasses()` function. */
export interface CheckboxClassesState {
    /** Emulates `:invalid`. */
    invalid?: boolean;
    /** Emulates `:hover`. */
    hover?: boolean;
    /** Emulates `:focus`. */
    focus?: boolean;
    /** Emulates `:active`. */
    active?: boolean;
    /** Emulates `:checked`. */
    checked?: boolean;
    /** Emulates `:indeterminate`. */
    indeterminate?: boolean;
    /** Emulates `:disabled`. */
    disabled?: boolean;
}
/**
 * Returns the checkbox classes to apply to an element based on the given state.
 *
 * @param state The state of the checkbox.
 * @return An object of class names and truthy values if they apply.
 */
export declare function checkboxClasses({ invalid, hover, focus, active, checked, indeterminate, disabled, }?: CheckboxClassesState): ClassInfo;
/**
 * Sets up checkbox functionality for the given element.
 *
 * @param checkbox The element on which to set up checkbox functionality.
 * @param opts Setup options, supports a cleanup `signal`.
 */
export declare function setupCheckbox(checkbox: HTMLElement, opts?: {
    signal?: AbortSignal;
}): void;
/**
 * A Lit directive that adds checkbox styling and functionality to its element.
 *
 * @example
 * ```ts
 * html`<input type="checkbox" class="${checkbox()}">`;
 * ```
 */
export declare const checkbox: (state?: CheckboxClassesState & import("../shared/directives.js").AdditionalClasses) => import("lit-html/directive.js").DirectiveResult;
