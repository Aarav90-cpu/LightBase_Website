/**
 * @license
 * Copyright 2026 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
import { FOCUS_RING_CLASSES } from '../focus/focus-ring.js';
import { RIPPLE_CLASSES, setupRipple } from '../ripple/ripple.js';
import { createClassMapDirective } from '../shared/directives.js';
import { PSEUDO_CLASSES } from '../shared/pseudo-classes.js';
/** List classes. */
export const LIST_CLASSES = {
    list: 'list',
    listSegmented: 'list-segmented',
};
/**
 * Returns the list classes to apply to an element based on the given state.
 *
 * @param state The state of the list.
 * @return An object of class names and truthy values if they apply.
 */
export function listClasses({ segmented = false, } = {}) {
    return {
        [LIST_CLASSES.list]: true,
        [LIST_CLASSES.listSegmented]: segmented,
    };
}
/**
 * A Lit directive that adds list styling and functionality to its element.
 *
 * @example
 * ```ts
 * html`
 *   <ul class="${list()}">
 *     <li><button class="${listItem()}">List item 1</button></li>
 *     <li><button class="${listItem()}">List item 2</button></li>
 *     <li><button class="${listItem()}">List item 3</button></li>
 *   </ul>
 * `;
 * ```
 */
export const list = createClassMapDirective({
    getClasses: listClasses,
});
/** List item classes. */
export const LIST_ITEM_CLASSES = {
    listItem: 'list-item',
    listItemStatic: 'list-item-static',
    listItemContent: 'list-item-content',
    listItemLeading: 'list-item-leading',
    listItemTrailing: 'list-item-trailing',
    listItemOverline: 'list-item-overline',
    listItemSupportingText: 'list-item-supporting-text',
    listItemTrailingText: 'list-item-trailing-text',
    listItemAvatar: 'list-item-avatar',
    checked: PSEUDO_CLASSES.checked,
    hover: PSEUDO_CLASSES.hover,
    focus: PSEUDO_CLASSES.focus,
    active: PSEUDO_CLASSES.active,
    disabled: PSEUDO_CLASSES.disabled,
};
/**
 * Returns the list item classes to apply to an element based on the given
 * state.
 *
 * @param state The state of the list item.
 * @return An object of class names and truthy values if they apply.
 */
export function listItemClasses({ static: staticItem = false, checked = false, hover = false, focus = false, active = false, disabled = false, } = {}) {
    return {
        [RIPPLE_CLASSES.ripple]: !staticItem,
        [FOCUS_RING_CLASSES.focusRingInner]: !staticItem,
        [LIST_ITEM_CLASSES.listItem]: true,
        [LIST_ITEM_CLASSES.listItemStatic]: staticItem,
        [LIST_ITEM_CLASSES.checked]: checked,
        [LIST_ITEM_CLASSES.hover]: hover,
        [LIST_ITEM_CLASSES.focus]: focus,
        [LIST_ITEM_CLASSES.active]: active,
        [LIST_ITEM_CLASSES.disabled]: disabled,
    };
}
/**
 * Sets up list item functionality for the given element.
 *
 * @param listItem The element on which to set up list item functionality.
 * @param opts Setup options, supports a cleanup `signal`.
 */
export function setupListItem(listItem, opts) {
    setupRipple(listItem, opts);
}
/**
 * A Lit directive that adds list item styling and functionality to its element.
 *
 *
 * @example
 * ```ts
 * html`
 *   <ul class="${list()}">
 *     <li><button class="${listItem()}">List item 1</button></li>
 *     <li><button class="${listItem()}">List item 2</button></li>
 *     <li><button class="${listItem()}">List item 3</button></li>
 *   </ul>
 * `;
 * ```
 */
export const listItem = createClassMapDirective({
    getClasses: listItemClasses,
    setupElement: setupListItem,
});
//# sourceMappingURL=list.js.map