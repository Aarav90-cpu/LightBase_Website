/**
 * @license
 * Copyright 2026 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
import { type ClassInfo } from 'lit/directives/class-map.js';
/** Icon Button color configuration types. */
export type IconButtonColor = 'filled' | 'tonal' | 'outlined' | 'standard';
/** Icon Button color configurations. */
export declare const ICON_BUTTON_COLORS: {
    readonly filled: "filled";
    readonly tonal: "tonal";
    readonly outlined: "outlined";
    readonly standard: "standard";
};
/** Icon Button size configuration types. */
export type IconButtonSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
/** Icon Button size configurations. */
export declare const ICON_BUTTON_SIZES: {
    readonly xs: "xs";
    readonly sm: "sm";
    readonly md: "md";
    readonly lg: "lg";
    readonly xl: "xl";
};
/** Icon Button width configuration types. */
export type IconButtonWidth = 'narrow' | 'wide' | '';
/** Icon Button width configurations. */
export declare const ICON_BUTTON_WIDTHS: {
    readonly narrow: "narrow";
    readonly wide: "wide";
};
/** Icon Button classes. */
export declare const ICON_BUTTON_CLASSES: {
    iconBtn: string;
    iconBtnFilled: string;
    iconBtnTonal: string;
    iconBtnOutlined: string;
    iconBtnStandard: string;
    iconBtnXs: string;
    iconBtnSm: string;
    iconBtnMd: string;
    iconBtnLg: string;
    iconBtnXl: string;
    iconBtnSquare: string;
    iconBtnNarrow: string;
    iconBtnWide: string;
    iconBtnUnselected: string;
    iconBtnSelected: string;
    active: string;
    disabled: string;
};
/** The state provided to the `iconButtonClasses()` function. */
export interface IconButtonClassesState {
    /** The color of the icon button. */
    color?: IconButtonColor;
    /** The size of the icon button. */
    size?: IconButtonSize;
    /** The width of the icon button. */
    width?: IconButtonWidth;
    /** Whether the icon button is a square shape. */
    square?: boolean;
    /** Whether the toggle button is selected, if not undefined. */
    selected?: boolean;
    /** Emulates `:active`. */
    active?: boolean;
    /** Emulates `:disabled`. */
    disabled?: boolean;
}
/**
 * Returns the icon button classes to apply to an element based on the given
 * state.
 *
 * @param state The state of the icon button.
 * @return An object of class names and truthy values if they apply.
 */
export declare function iconButtonClasses({ color, size, width, square, selected, active, disabled, }?: IconButtonClassesState): ClassInfo;
/**
 * Sets up icon button functionality for the given element.
 *
 * @param iconButton The element on which to set up icon button functionality.
 * @param opts Setup options, supports a cleanup `signal`.
 */
export declare function setupIconButton(iconButton: HTMLElement, opts?: {
    signal?: AbortSignal;
}): void;
/**
 * A Lit directive that adds icon button styling and functionality to its element.
 *
 * @example
 * ```ts
 * html`<button class="${iconButton({color: 'filled'})}">
 *   <md-icon>favorite</md-icon>
 * </button>`;
 * ```
 */
export declare const iconButton: (state?: IconButtonClassesState & import("../shared/directives.js").AdditionalClasses) => import("lit-html/directive.js").DirectiveResult;
