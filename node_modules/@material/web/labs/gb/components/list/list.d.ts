/**
 * @license
 * Copyright 2026 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
import { type ClassInfo } from 'lit/directives/class-map.js';
/** List classes. */
export declare const LIST_CLASSES: {
    readonly list: "list";
    readonly listSegmented: "list-segmented";
};
/** The state provided to the `listClasses()` function. */
export interface ListClassesState {
    /** Whether to render the list with segmented items. */
    segmented?: boolean;
}
/**
 * Returns the list classes to apply to an element based on the given state.
 *
 * @param state The state of the list.
 * @return An object of class names and truthy values if they apply.
 */
export declare function listClasses({ segmented, }?: ListClassesState): ClassInfo;
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
export declare const list: (state?: ListClassesState & import("../shared/directives.js").AdditionalClasses) => import("lit-html/directive.js").DirectiveResult;
/** List item classes. */
export declare const LIST_ITEM_CLASSES: {
    readonly listItem: "list-item";
    readonly listItemStatic: "list-item-static";
    readonly listItemContent: "list-item-content";
    readonly listItemLeading: "list-item-leading";
    readonly listItemTrailing: "list-item-trailing";
    readonly listItemOverline: "list-item-overline";
    readonly listItemSupportingText: "list-item-supporting-text";
    readonly listItemTrailingText: "list-item-trailing-text";
    readonly listItemAvatar: "list-item-avatar";
    readonly checked: string;
    readonly hover: string;
    readonly focus: string;
    readonly active: string;
    readonly disabled: string;
};
/** The state provided to the `listItemClasses()` function. */
export interface ListItemClassesState {
    /** Whether the list item is non-interactive. */
    static?: boolean;
    /** Emulates `:checked`. */
    checked?: boolean;
    /** Emulates `:hover`. */
    hover?: boolean;
    /** Emulates `:focus`. */
    focus?: boolean;
    /** Emulates `:active`. */
    active?: boolean;
    /** Emulates `:disabled`. */
    disabled?: boolean;
}
/**
 * Returns the list item classes to apply to an element based on the given
 * state.
 *
 * @param state The state of the list item.
 * @return An object of class names and truthy values if they apply.
 */
export declare function listItemClasses({ static: staticItem, checked, hover, focus, active, disabled, }?: ListItemClassesState): ClassInfo;
/**
 * Sets up list item functionality for the given element.
 *
 * @param listItem The element on which to set up list item functionality.
 * @param opts Setup options, supports a cleanup `signal`.
 */
export declare function setupListItem(listItem: HTMLElement, opts?: {
    signal?: AbortSignal;
}): void;
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
export declare const listItem: (state?: ListItemClassesState & import("../shared/directives.js").AdditionalClasses) => import("lit-html/directive.js").DirectiveResult;
