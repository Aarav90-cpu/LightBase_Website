/**
 * @license
 * Copyright 2026 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
import { CSSResultOrNative, LitElement, PropertyValues } from 'lit';
import { type CardColor } from './card.js';
declare const baseClass: import("@material/web/labs/behaviors/mixin.js").MixinReturn<typeof LitElement>;
/**
 * A Material Design card.
 *
 * @slot - Used to display the card's content. Note: add padding to content, not the host <md-gb-card> element.
 * @slot container - Used to set a custom background container for the card.
 * @csspart card - The card's root element.
 * @csspart card-btn - The card's main action button, when interactive.
 * @cssprop --container-color
 * @cssprop --container-elevation
 * @cssprop --container-shape
 * @cssprop --outline-color
 * @cssprop --outline-width
 * @cssprop --state-layer-color
 */
export declare class CardElement extends baseClass {
    /** @nocollapse */
    static shadowRootOptions: ShadowRootInit;
    static styles: CSSResultOrNative[];
    private hideOutline;
    private lastFiredEnabledState?;
    /** The color of the card. */
    color: CardColor;
    /** Whether the card is disabled. */
    disabled: boolean;
    /** Whether the card is interactive. */
    interactive: boolean;
    connectedCallback(): void;
    disconnectedCallback(): void;
    private readonly handleSetShowOutline;
    protected updated(changedProperties: PropertyValues): void;
    private dispatchSetEnabledEvent;
    protected render(): import("lit-html").TemplateResult<1>;
    private handleContainerSlotChange;
}
export {};
