/**
 * @license
 * Copyright 2026 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
import { createContext } from '@lit/context';
import { FOCUS_RING_TYPES, focusRingClasses } from '../focus/focus-ring.js';
import { rippleClasses, setupRipple } from '../ripple/ripple.js';
import { createClassMapDirective } from '../shared/directives.js';
import { PSEUDO_CLASSES } from '../shared/pseudo-classes.js';
/** Menu context to provide to menu items. */
export const menuContext = createContext(Symbol('menuContext'));
/** Menu color configurations. */
export const MENU_COLORS = {
    standard: 'standard',
    vibrant: 'vibrant',
};
/** Menu classes. */
export const MENU_CLASSES = {
    menu: 'menu',
    menuVibrant: 'menu-vibrant',
};
/**
 * Returns the menu classes to apply to an element based on the given state.
 *
 * @param state The state of the menu.
 * @return An object of class names and truthy values if they apply.
 */
export function menuClasses({ color } = {}) {
    return {
        [MENU_CLASSES.menu]: true,
        [MENU_CLASSES.menuVibrant]: color === MENU_COLORS.vibrant,
    };
}
/**
 * Sets up menu functionality for the given element.
 *
 * @param menu The element on which to set up menu functionality.
 * @param opts Setup options, supports a cleanup `signal`.
 */
export function setupMenu(menu, opts) {
    // TODO: add event listeners from <md-gb-menu>
}
/**
 * A Lit directive that adds menu styling and functionality to its element.
 *
 * @example
 * ```ts
 * html`<div class="${menu()}">TODO: add examples</div>`;
 * ```
 */
export const menu = createClassMapDirective({
    getClasses: menuClasses,
    setupElement: setupMenu,
});
/** Context provided to menu items for the checkable state of a menu item group. */
export const menuItemCheckable = createContext(Symbol('menuItemCheckable'));
/** Menu item classes. */
export const MENU_ITEM_CLASSES = {
    menuItem: 'menu-item',
    checked: PSEUDO_CLASSES.checked,
    hover: PSEUDO_CLASSES.hover,
    focus: PSEUDO_CLASSES.focus,
    active: PSEUDO_CLASSES.active,
    disabled: PSEUDO_CLASSES.disabled,
};
/**
 * Returns the menu item classes to apply to an element based on the given
 * state.
 *
 * @param state The state of the menu item.
 * @return An object of class names and truthy values if they apply.
 */
export function menuItemClasses({ checked = false, hover = false, focus = false, active = false, disabled = false, } = {}) {
    return {
        ...rippleClasses(),
        ...focusRingClasses({ type: FOCUS_RING_TYPES.inner }),
        [MENU_ITEM_CLASSES.menuItem]: true,
        [MENU_ITEM_CLASSES.checked]: checked,
        [MENU_ITEM_CLASSES.hover]: hover,
        [MENU_ITEM_CLASSES.focus]: focus,
        [MENU_ITEM_CLASSES.active]: active,
        [MENU_ITEM_CLASSES.disabled]: disabled,
    };
}
/**
 * Sets up menu item functionality for the given element.
 *
 * @param menuItem The element on which to set up menu item functionality.
 * @param opts Setup options, supports a cleanup `signal`.
 */
export function setupMenuItem(menuItem, opts) {
    setupRipple(menuItem, opts);
}
/**
 * A Lit directive that adds menu item styling and functionality to its element.
 *
 * @example
 * ```ts
 * html`<div class="${menuItem()}">TODO: add examples</div>`;
 * ```
 */
export const menuItem = createClassMapDirective({
    getClasses: menuItemClasses,
    setupElement: setupMenuItem,
});
//# sourceMappingURL=menu.js.map