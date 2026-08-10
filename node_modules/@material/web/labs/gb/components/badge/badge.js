/**
 * @license
 * Copyright 2026 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
import { createClassMapDirective } from '../shared/directives.js';
/** Badge classes. */
export const BADGE_CLASSES = {
    badge: 'badge',
    badgeLarge: 'badge-large',
};
/**
 * Returns the badge classes to apply to an element.
 *
 * @param state The state of the badge.
 * @return An object of class names and truthy values if they apply.
 */
export function badgeClasses({ large = false, } = {}) {
    return {
        [BADGE_CLASSES.badge]: true,
        [BADGE_CLASSES.badgeLarge]: large,
    };
}
/**
 * A Lit directive that adds badge styling to its element.
 *
 * @example
 * ```ts
 * html`<span class="${badge({large: true})}">1</span>`;
 * ```
 */
export const badge = createClassMapDirective({
    getClasses: badgeClasses,
});
//# sourceMappingURL=badge.js.map