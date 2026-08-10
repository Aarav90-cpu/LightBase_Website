/**
 * @license
 * Copyright 2026 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
import { type ClassInfo } from 'lit/directives/class-map.js';
/** Button color configuration types. */
export type ButtonColor = 'filled' | 'elevated' | 'tonal' | 'outlined' | 'text';
/** Button color configurations. */
export declare const BUTTON_COLORS: {
    readonly filled: "filled";
    readonly elevated: "elevated";
    readonly tonal: "tonal";
    readonly outlined: "outlined";
    readonly text: "text";
};
/** Button size configuration types. */
export type ButtonSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
/** Button size configurations. */
export declare const BUTTON_SIZES: {
    readonly xs: "xs";
    readonly sm: "sm";
    readonly md: "md";
    readonly lg: "lg";
    readonly xl: "xl";
};
/** Button classes. */
export declare const BUTTON_CLASSES: {
    btn: string;
    btnFilled: string;
    btnElevated: string;
    btnTonal: string;
    btnOutlined: string;
    btnText: string;
    btnXs: string;
    btnSm: string;
    btnMd: string;
    btnLg: string;
    btnXl: string;
    btnSquare: string;
    btnUnselected: string;
    btnSelected: string;
    active: string;
    disabled: string;
};
/** The state provided to the `buttonClasses()` function. */
export interface ButtonClassesState {
    /** The color of the button. */
    color?: ButtonColor;
    /** The size of the button. */
    size?: ButtonSize;
    /** Whether the button is a square shape. */
    square?: boolean;
    /** Whether the toggle button is selected, if not undefined. */
    selected?: boolean;
    /** Emulates `:active`. */
    active?: boolean;
    /** Emulates `:disabled`. */
    disabled?: boolean;
}
/**
 * Returns the button classes to apply to an element based on the given state.
 *
 * @param state The state of the button.
 * @return An object of class names and truthy values if they apply.
 */
export declare function buttonClasses({ color, size, square, selected, active, disabled, }?: ButtonClassesState): ClassInfo;
/**
 * Sets up button functionality for the given element.
 *
 * @param button The element on which to set up button functionality.
 * @param opts Setup options, supports a cleanup `signal`.
 */
export declare function setupButton(button: HTMLElement, opts?: {
    signal?: AbortSignal;
}): void;
/**
 * A Lit directive that adds button styling and functionality to its element.
 *
 * @example
 * ```ts
 * html`<button class="${button({color: 'filled'})}">Filled</button>`;
 * ```
 */
export declare const button: (state?: ButtonClassesState & import("../shared/directives.js").AdditionalClasses) => import("lit-html/directive.js").DirectiveResult;
