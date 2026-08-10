/**
 * @license
 * Copyright 2026 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
import { CSSResultOrNative, LitElement } from 'lit';
import { type FabColor, type FabSize } from './fab.js';
/**
 * A Material Design fab component.
 *
 * @slot - Used to display an icon and optional label.
 * @csspart fab - The FAB's root element.
 * @cssprop --container-color
 * @cssprop --container-elevation
 * @cssprop --container-height
 * @cssprop --container-shape
 * @cssprop --icon-color
 * @cssprop --icon-label-space
 * @cssprop --icon-size
 * @cssprop --label-text
 * @cssprop --label-text-color
 * @cssprop --label-text-tracking
 * @cssprop --leading-space
 * @cssprop --trailing-space
 */
export declare class FabElement extends LitElement {
    static styles: CSSResultOrNative[];
    color: FabColor;
    size: FabSize;
    protected render(): import("lit-html").TemplateResult<1>;
}
