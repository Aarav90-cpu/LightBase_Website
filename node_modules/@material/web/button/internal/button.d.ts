/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
import '../../focus/md-focus-ring.js';
import '../../ripple/ripple.js';
import { LitElement } from 'lit';
declare const buttonBaseClass: import("../../labs/behaviors/mixin.js").MixinReturn<import("../../labs/behaviors/mixin.js").MixinReturn<import("../../labs/behaviors/mixin.js").MixinReturn<(abstract new (...args: any[]) => import("../../labs/behaviors/element-internals.js").WithElementInternals) & typeof LitElement & import("../../labs/behaviors/form-associated.js").FormAssociatedConstructor, import("../../labs/behaviors/form-associated.js").FormAssociated>, import("../../labs/behaviors/form-submitter.js").FormSubmitter>>;
/**
 * A button component.
 */
export declare abstract class Button extends buttonBaseClass {
    /** @nocollapse */
    static shadowRootOptions: ShadowRootInit;
    /**
     * Whether or not the button is "soft-disabled" (disabled but still
     * focusable).
     *
     * Use this when a button needs increased visibility when disabled. See
     * https://www.w3.org/WAI/ARIA/apg/practices/keyboard-interface/#kbd_disabled_controls
     * for more guidance on when this is needed.
     */
    softDisabled: boolean;
    /**
     * The URL that the link button points to.
     */
    href: string;
    /**
     * The filename to use when downloading the linked resource.
     * If not specified, the browser will determine a filename.
     * This is only applicable when the button is used as a link (`href` is set).
     */
    download: string;
    /**
     * Where to display the linked `href` URL for a link button. Common options
     * include `_blank` to open in a new tab.
     */
    target: '_blank' | '_parent' | '_self' | '_top' | '';
    /**
     * Whether to render the icon at the inline end of the label rather than the
     * inline start.
     *
     * _Note:_ Link buttons cannot have trailing icons.
     */
    trailingIcon: boolean;
    /**
     * Whether to display the icon or not.
     */
    hasIcon: boolean;
    private readonly buttonElement;
    private readonly assignedIcons;
    constructor();
    focus(): void;
    blur(): void;
    protected render(): import("lit-html").TemplateResult<1>;
    protected renderElevationOrOutline?(): unknown;
    private renderButton;
    private renderLink;
    private renderContent;
    private handleClick;
    private handleSlotChange;
}
export {};
