/**
 * @license
 * Copyright 2026 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
import { CSSResultOrNative, LitElement } from 'lit';
import { type SplitButtonColor, type SplitButtonSize } from './split-button.js';
/**
 * A Material Design split button component.
 *
 * @slot leading - Requires a `<button>` for the main action.
 * @slot trailing - Requires a `<button>` for the menu action. Use `popovertarget` to display a menu.
 * @slot - Used to render the trailing button's popover menu.
 * @csspart split-btn - The split button's root element.
 * @csspart leading-btn - The split button's main action.
 * @csspart trailing-btn - The split button's menu action.
 * @cssprop --between-space
 * @cssprop --icon-size
 * @cssprop --inner-corner-size
 * @cssprop --outer-corner-size
 * @cssprop --leading-space
 * @cssprop --trailing-space
 */
export declare class SplitButtonElement extends LitElement {
    static styles: CSSResultOrNative[];
    color: SplitButtonColor;
    size: SplitButtonSize;
    selected: boolean;
    protected render(): import("lit-html").TemplateResult<1>;
    private updateSlotFocusVisible;
    private cleanupToggleListener?;
    private handleTrailingSlotchange;
}
