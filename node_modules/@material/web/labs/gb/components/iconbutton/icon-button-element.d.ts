/**
 * @license
 * Copyright 2026 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
import { CSSResultOrNative, LitElement } from 'lit';
import type { IconButtonColor, IconButtonSize, IconButtonWidth } from './icon-button.js';
declare const baseClass: import("@material/web/labs/behaviors/mixin.js").MixinReturn<import("@material/web/labs/behaviors/mixin.js").MixinReturn<import("@material/web/labs/behaviors/mixin.js").MixinReturn<(abstract new (...args: any[]) => import("../../../behaviors/element-internals.js").WithElementInternals) & typeof LitElement & import("../../../behaviors/form-associated.js").FormAssociatedConstructor, import("../../../behaviors/form-associated.js").FormAssociated>, import("../../../behaviors/form-submitter.js").FormSubmitter>>;
/**
 * A Material Design icon button component.
 *
 * @slot - Used to display an icon.
 * @fires {InputEvent} input - Fired when a toggle icon button is selected or unselected. --bubbles --composed
 * @fires {Event} change - Fired when a toggle button is selected or unselected. --bubbles
 * @csspart icon-btn - The icon button's root element.
 * @cssprop --container-color
 * @cssprop --container-height
 * @cssprop --container-shape
 * @cssprop --icon-color
 * @cssprop --icon-size
 * @cssprop --outline-color
 * @cssprop --outline-width
 * @cssprop --leading-space
 * @cssprop --trailing-space
 */
export declare class IconButtonElement extends baseClass {
    /** @nocollapse */
    static shadowRootOptions: ShadowRootInit;
    static styles: CSSResultOrNative[];
    /**
     * The color of the button.
     */
    color: IconButtonColor;
    /**
     * The size of the button.
     */
    size: IconButtonSize;
    /**
     * Changes the shape of the button to be square.
     */
    square: boolean;
    /**
     * Changes the width of the button.
     */
    width: IconButtonWidth;
    /**
     * A string indicating the behavior of the button.
     *
     * - "submit" (default): A button that submits its associated form.
     * - "reset": A button that resets its associated form.
     * - "button": A normal button.
     * - "toggle": A toggle button using the `selected` property.
     * - "link": An anchor link (`<a>`). Type is always "link" when `href` is set.
     */
    get type(): string;
    set type(type: string);
    /**
     * Whether or not the button is "soft-disabled" (disabled but still
     * focusable).
     */
    softDisabled: boolean;
    /**
     * Whether or not the button is selected, when `type="toggle"`.
     */
    selected: boolean;
    /**
     * The URL that the link button points to.
     */
    href: string;
    /**
     * The filename to use when downloading the linked resource.
     */
    download: string;
    /**
     * Where to display the linked `href` URL for a link button.
     */
    target: '_blank' | '_parent' | '_self' | '_top' | '';
    protected render(): import("lit-html").TemplateResult<1>;
    private handleChange;
}
export {};
