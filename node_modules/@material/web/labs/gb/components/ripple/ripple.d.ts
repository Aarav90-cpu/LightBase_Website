/**
 * @license
 * Copyright 2026 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
import { type ClassInfo } from 'lit/directives/class-map.js';
/** Ripple classes. */
export declare const RIPPLE_CLASSES: {
    ripple: string;
    rippleTarget: string;
    rippleHost: string;
    hover: string;
    active: string;
    disabled: string;
};
/** The state provided to the `rippleClasses()` function. */
export interface RippleClassesState {
    /** Emulates `:hover`. */
    hover?: boolean;
    /** Emulates `:active`. */
    active?: boolean;
    /** Emulates `:disabled`. */
    disabled?: boolean;
}
/**
 * Returns the ripple classes to apply to an element based on the given state.
 *
 * @param state The state of the ripple.
 * @return An object of class names and truthy values if they apply.
 */
export declare function rippleClasses({ hover, active, disabled, }?: RippleClassesState): ClassInfo;
/**
 * Sets up ripple functionality for the given element.
 *
 * @param ripple The element on which to set up ripple functionality.
 * @param opts Setup options, supports a cleanup `signal`.
 */
export declare function setupRipple(ripple: HTMLElement, opts?: {
    signal?: AbortSignal;
}): void;
/**
 * A Lit directive that adds updates the position of a ripple to match pointer
 * interactions. Use with the `.ripple` class.
 *
 * @example
 * ```ts
 * class Component extends LitElement {
 *   static styles = [rippleStyles, css`...`];
 *
 *   render() {
 *     return html`<button class="ripple" ${ripple()}>Ripple effect</button>`;
 *   }
 * }
 * ```
 *
 * Use the `.ripple-target` class if the interactive element is a parent or
 * child of the ripple element.
 *
 * The `ripple()` directive should be applied to the parent element, which may
 * be the `.ripple-target` instead of the `.ripple`.
 *
 * @example
 * ```ts
 * html`
 *   <div class="card ripple" ${ripple()}>
 *     Child interactive element
 *     <button class="ripple-target card-btn"></button>
 *   </div>
 *
 *   <button class="ripple-target" ${ripple()}>
 *     Parent interactive element
 *     <span class="ripple"></span>
 *   </button>
 * `;
 * ```
 */
export declare const ripple: () => import("lit-html/directive.js").DirectiveResult;
