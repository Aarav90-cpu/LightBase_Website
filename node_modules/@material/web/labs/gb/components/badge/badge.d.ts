/**
 * @license
 * Copyright 2026 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
import { type ClassInfo } from 'lit/directives/class-map.js';
/** Badge classes. */
export declare const BADGE_CLASSES: {
    readonly badge: "badge";
    readonly badgeLarge: "badge-large";
};
/** The state provided to the `badgeClasses()` function. */
export interface BadgeClassesState {
    /** Whether the badge is large. */
    large?: boolean;
}
/**
 * Returns the badge classes to apply to an element.
 *
 * @param state The state of the badge.
 * @return An object of class names and truthy values if they apply.
 */
export declare function badgeClasses({ large, }?: BadgeClassesState): ClassInfo;
/**
 * A Lit directive that adds badge styling to its element.
 *
 * @example
 * ```ts
 * html`<span class="${badge({large: true})}">1</span>`;
 * ```
 */
export declare const badge: (state?: BadgeClassesState & import("../shared/directives.js").AdditionalClasses) => import("lit-html/directive.js").DirectiveResult;
