/**
 * @license
 * Copyright 2026 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
import { CSSResultOrNative, LitElement } from 'lit';
declare const baseClass: import("@material/web/labs/behaviors/mixin.js").MixinReturn<typeof LitElement, import("../../../behaviors/element-internals.js").WithElementInternals>;
/**
 * A Material Design list component.
 *
 * @slot - Used to display list items.
 * @csspart list - The list's root element.
 * @cssprop --container-shape
 * @cssprop --gap
 */
export declare class ListElement extends baseClass {
    static styles: CSSResultOrNative[];
    constructor();
    /**
     * Whether to render the list with segmented items.
     */
    segmented: boolean;
    protected render(): import("lit-html").TemplateResult<1>;
}
export {};
