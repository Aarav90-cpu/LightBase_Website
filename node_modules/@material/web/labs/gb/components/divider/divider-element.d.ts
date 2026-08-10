/**
 * @license
 * Copyright 2026 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
import { CSSResultOrNative, LitElement } from 'lit';
/**
 * A Material Design divider component.
 *
 * @csspart divider - The divider element.
 * @cssprop --color
 * @cssprop --thickness
 */
export declare class DividerElement extends LitElement {
    static styles: CSSResultOrNative[];
    /**
     * Whether or not the divider is vertical.
     */
    vertical: boolean;
    protected render(): import("lit-html").TemplateResult<1>;
}
