/**
 * @license
 * Copyright 2026 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
import { CSSResultOrNative, LitElement } from 'lit';
declare const baseClass: import("@material/web/labs/behaviors/mixin.js").MixinReturn<import("@material/web/labs/behaviors/mixin.js").MixinReturn<typeof LitElement, import("../../../behaviors/element-internals.js").WithElementInternals>>;
/**
 * A Material Design list item component.
 *
 * @slot - Used to display the item's primary label.
 * @slot avatar - Used to display a circular avatar before the item's content.
 * @slot leading - Used to display icons and content before the item's main content.
 * @slot overline - Used to display overline text above the main label.
 * @slot supporting-text - Used to display supporting text below the main label.
 * @slot trailing-text - Used to display metadata or text after the item's main content.
 * @slot trailing - Used to display icons and content after the item's main content.
 * @csspart list-item - The list item's root element.
 * @cssprop --container-height
 * @cssprop --container-color
 * @cssprop --container-shape
 * @cssprop --label-text-color
 * @cssprop --label-text
 * @cssprop --label-text-tracking
 * @cssprop --leading-space
 * @cssprop --trailing-space
 * @cssprop --between-space
 * @cssprop --top-space
 * @cssprop --bottom-space
 * @cssprop --avatar-size
 * @cssprop --avatar-shape
 * @cssprop --avatar-color
 * @cssprop --avatar-label
 * @cssprop --avatar-label-tracking
 * @cssprop --avatar-label-color
 * @cssprop --leading-icon-color
 * @cssprop --leading-icon-size
 * @cssprop --trailing-icon-color
 * @cssprop --trailing-icon-size
 * @cssprop --overline
 * @cssprop --overline-tracking
 * @cssprop --overline-color
 * @cssprop --supporting-text
 * @cssprop --supporting-text-tracking
 * @cssprop --supporting-text-color
 * @cssprop --trailing-supporting-text
 * @cssprop --trailing-supporting-text-tracking
 * @cssprop --trailing-supporting-text-color
 */
export declare class ListItemElement extends baseClass {
    /** @nocollapse */
    static shadowRootOptions: {
        delegatesFocus: boolean;
        clonable?: boolean;
        customElementRegistry?: CustomElementRegistry;
        mode: ShadowRootMode;
        serializable?: boolean;
        slotAssignment?: SlotAssignmentMode;
    };
    static styles: CSSResultOrNative[];
    constructor();
    /**
     * Whether the list item is selected.
     */
    checked: boolean;
    /**
     * Whether the list item is disabled.
     */
    disabled: boolean;
    /**
     * Whether the list item is non-interactive.
     */
    nonInteractive: boolean;
    protected render(): import("lit-html").TemplateResult<1>;
    private renderContent;
}
export {};
