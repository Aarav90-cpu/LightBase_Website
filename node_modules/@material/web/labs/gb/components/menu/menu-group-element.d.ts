/**
 * @license
 * Copyright 2026 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
import { CSSResultOrNative, LitElement } from 'lit';
import { type MenuItemCheckable } from './menu.js';
declare const baseClass: import("@material/web/labs/behaviors/mixin.js").MixinReturn<typeof LitElement, import("../../../behaviors/element-internals.js").WithElementInternals>;
/**
 * A Material Design menu group component.
 *
 * @slot - Used to display the menu group's items.
 */
export declare class MenuGroupElement extends baseClass {
    static styles: CSSResultOrNative[];
    checkable: MenuItemCheckable | null;
    get menu(): HTMLElement | null;
    get items(): HTMLElement[];
    private readonly menuContext;
    constructor();
    protected render(): import("lit-html").TemplateResult<1>;
}
export {};
