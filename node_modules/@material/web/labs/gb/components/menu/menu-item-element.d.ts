/**
 * @license
 * Copyright 2026 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
import { CSSResultOrNative, LitElement } from 'lit';
declare const baseClass: import("@material/web/labs/behaviors/mixin.js").MixinReturn<import("@material/web/labs/behaviors/mixin.js").MixinReturn<typeof LitElement, import("../../../behaviors/focusable.js").Focusable>, import("../../../behaviors/element-internals.js").WithElementInternals>;
/**
 * A Material Design menu item component.
 *
 * @slot - Used to display the item's primary label.
 * @slot leading - Used to display icons and content before the item's main content.
 * @slot supporting-text - Used to display supporting text below the main label.
 * @slot trailing-text - Used to display metadata or text after the item's main content.
 * @slot trailing - Used to display icons and content after the item's main content.
 * @fires {Event} change - Fired when a checkbox or menu item is checked or unchecked. --bubbles
 * @fires {InputEvent} input - Fired when a checkbox or menu item is checked or unchecked. --bubbles --composed
 * @csspart menu-item - The menu item's root element.
 * @cssprop --between-space
 * @cssprop --bottom-space
 * @cssprop --container-color
 * @cssprop --height
 * @cssprop --inner-corner-corner-size
 * @cssprop --label-text-color
 * @cssprop --label-text
 * @cssprop --label-text-tracking
 * @cssprop --leading-icon-color
 * @cssprop --leading-icon-size
 * @cssprop --leading-space
 * @cssprop --shape
 * @cssprop --supporting-text-color
 * @cssprop --supporting-text
 * @cssprop --supporting-text-tracking
 * @cssprop --top-space
 * @cssprop --trailing-icon-color
 * @cssprop --trailing-icon-size
 * @cssprop --trailing-space
 * @cssprop --trailing-supporting-text-color
 * @cssprop --trailing-supporting-text
 * @cssprop --trailing-supporting-text-tracking
 */
export declare class MenuItemElement extends baseClass {
    static styles: CSSResultOrNative[];
    checked: boolean;
    disabled: boolean;
    get menu(): HTMLElement | null;
    private readonly menuContext?;
    private readonly checkable?;
    constructor();
    connectedCallback(): void;
    disconnectedCallback(): void;
    protected render(): import("lit-html").TemplateResult<1>;
    private renderContent;
    protected updated(): void;
}
export {};
