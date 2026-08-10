/**
 * @license
 * Copyright 2026 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
import { type ClassInfo } from 'lit/directives/class-map.js';
/** Fab color configuration types. */
export type FabColor = 'primary' | 'primary-container' | 'secondary' | 'secondary-container' | 'tertiary' | 'tertiary-container';
/** Fab size configuration types. */
export type FabSize = 'default' | 'md' | 'lg';
/** Fab color configurations. */
export declare const FAB_COLORS: {
    readonly primary: "primary";
    readonly primaryContainer: "primary-container";
    readonly secondary: "secondary";
    readonly secondaryContainer: "secondary-container";
    readonly tertiary: "tertiary";
    readonly tertiaryContainer: "tertiary-container";
};
/** Fab size configurations. */
export declare const FAB_SIZES: {
    readonly default: "default";
    readonly md: "md";
    readonly lg: "lg";
};
/** Fab classes. */
export declare const FAB_CLASSES: {
    readonly fab: "fab";
    readonly fabPrimary: "fab-primary";
    readonly fabPrimaryContainer: "fab-primary-container";
    readonly fabSecondary: "fab-secondary";
    readonly fabSecondaryContainer: "fab-secondary-container";
    readonly fabTertiary: "fab-tertiary";
    readonly fabTertiaryContainer: "fab-tertiary-container";
    readonly fabMd: "fab-md";
    readonly fabLg: "fab-lg";
    readonly hover: string;
    readonly active: string;
};
/** The state provided to the `fabClasses()` function. */
export interface FabClassesState {
    /** The color of the fab. */
    color?: FabColor;
    /** The size of the fab. */
    size?: FabSize;
    /** Emulates `:hover`. */
    hover?: boolean;
    /** Emulates `:active`. */
    active?: boolean;
}
/**
 * Returns the fab classes to apply to an element based on the given state.
 *
 * @param state The state of the fab.
 * @return An object of class names and truthy values if they apply.
 */
export declare function fabClasses({ color, size, hover, active, }?: FabClassesState): ClassInfo;
/**
 * Sets up fab functionality for the given element.
 *
 * @param fab The element on which to set up fab functionality.
 * @param opts Setup options, supports a cleanup `signal`.
 */
export declare function setupFab(fab: HTMLElement, opts?: {
    signal?: AbortSignal;
}): void;
/**
 * A Lit directive that adds fab styling and functionality to its element.
 *
 * @example
 * ```ts
 * html`
 *   <button class="${fab()}">
 *     <md-icon>add</md-icon>
 *   </button>
 *
 *   <button class="${fab()}">
 *     <md-icon>add</md-icon>
 *     Extended
 *   </button>
 * `;
 * ```
 */
export declare const fab: (state?: FabClassesState & import("../shared/directives.js").AdditionalClasses) => import("lit-html/directive.js").DirectiveResult;
