/**
 * @license
 * Copyright 2026 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
import { CSSResultOrNative, LitElement } from 'lit';
import { type MenuColor } from './menu.js';
declare const baseClass: import("@material/web/labs/behaviors/mixin.js").MixinReturn<import("@material/web/labs/behaviors/mixin.js").MixinReturn<typeof LitElement, import("../../../behaviors/focusable.js").Focusable>, import("../../../behaviors/element-internals.js").WithElementInternals>;
/**
 * A Material Design menu component.
 *
 * @slot - Used to display the menu's items.
 * @csspart menu - The menu's root element.
 * @cssprop --container-color
 * @cssprop --container-elevation
 * @cssprop --container-shape
 * @cssprop --gap
 * @cssprop --group-padding
 * @cssprop --group-shape
 * @cssprop --section-label-text-color
 */
export declare class MenuElement extends baseClass {
    static styles: CSSResultOrNative[];
    color: MenuColor;
    get items(): HTMLElement[];
    private previouslyFocused?;
    private readonly itemsSet;
    constructor();
    connectedCallback(): void;
    protected render(): import("lit-html").TemplateResult<1>;
}
export {};
