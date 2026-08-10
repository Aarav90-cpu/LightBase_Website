/**
 * @license
 * Copyright 2026 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
import { type ClassInfo } from 'lit/directives/class-map.js';
/** Card color configuration types. */
export type CardColor = 'elevated' | 'filled' | 'outlined';
/** Card color configurations. */
export declare const CARD_COLORS: {
    readonly elevated: "elevated";
    readonly filled: "filled";
    readonly outlined: "outlined";
};
/** Card classes. */
export declare const CARD_CLASSES: {
    readonly card: "card";
    readonly cardElevated: "card-elevated";
    readonly cardFilled: "card-filled";
    readonly cardOutlined: "card-outlined";
    readonly hover: string;
    readonly focus: string;
    readonly disabled: string;
};
/** The state provided to the `cardClasses()` function. */
export interface CardClassesState {
    /** The color of the card. */
    color?: CardColor;
    /** Whether the card is interactive. */
    interactive?: boolean;
    /** Emulates `:hover`. */
    hover?: boolean;
    /** Emulates `:focus`. */
    focus?: boolean;
    /** Emulates `:disabled`. */
    disabled?: boolean;
}
/**
 * Returns the card classes to apply to an element based on the given state.
 *
 * @param state The state of the card.
 * @return An object of class names and truthy values if they apply.
 */
export declare function cardClasses({ color, interactive, hover, focus, disabled, }?: CardClassesState): ClassInfo;
/**
 * A Lit directive that adds card styling and functionality to its element.
 *
 * @example
 * ```ts
 * html`
 *   <div class="${card({color: 'filled'})} flex flex-row p-4">
 *     Card content
 *   </div>
 * `
 * ```
 */
export declare const card: (state?: CardClassesState & import("../shared/directives.js").AdditionalClasses) => import("lit-html/directive.js").DirectiveResult;
