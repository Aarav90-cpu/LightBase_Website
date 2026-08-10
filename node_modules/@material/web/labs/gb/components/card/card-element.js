/**
 * @license
 * Copyright 2026 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
import { __decorate } from "tslib";
import { css, html, LitElement, nothing, } from 'lit';
import { property, state } from 'lit/decorators.js';
import { mixinDelegatesAria } from '../../../../internal/aria/delegate.js';
import { ripple } from '../ripple/ripple.js';
import { hasSlotted } from '../shared/has-slotted.js';
import focusRingStyles from '../focus/focus-ring.css' with { type: 'css' }; // github-only
// import focusRingStyles from '../focus/focus-ring.cssresult.js'; // google3-only
import rippleStyles from '../ripple/ripple.css' with { type: 'css' }; // github-only
// import rippleStyles from '../ripple/ripple.cssresult.js'; // google3-only
import cardStyles from './card.css' with { type: 'css' }; // github-only
// import cardStyles from './card.cssresult.js'; // google3-only
import { card } from './card.js';
// Separate variable needed for closure.
const baseClass = mixinDelegatesAria(LitElement);
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
export class CardElement extends baseClass {
    constructor() {
        super(...arguments);
        this.hideOutline = false;
        /** The color of the card. */
        this.color = 'outlined';
        /** Whether the card is disabled. */
        this.disabled = false;
        /** Whether the card is interactive. */
        this.interactive = false;
        this.handleSetShowOutline = (event) => {
            const customEvent = event;
            this.hideOutline = !customEvent.detail.shown;
        };
    }
    connectedCallback() {
        super.connectedCallback();
        this.addEventListener('md-gb:set-show-outline', this.handleSetShowOutline);
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        this.removeEventListener('md-gb:set-show-outline', this.handleSetShowOutline);
    }
    updated(changedProperties) {
        super.updated(changedProperties);
        if (changedProperties.has('disabled')) {
            this.dispatchSetEnabledEvent();
        }
    }
    dispatchSetEnabledEvent() {
        const enabled = !this.disabled;
        if (this.lastFiredEnabledState === enabled)
            return;
        const slot = this.shadowRoot?.querySelector('slot[name="container"]');
        if (slot) {
            for (const element of slot.assignedElements({ flatten: true })) {
                element.dispatchEvent(new CustomEvent('md-gb:set-enabled', {
                    detail: { enabled },
                }));
            }
        }
        this.lastFiredEnabledState = enabled;
    }
    render() {
        const { ariaLabel } = this;
        return html `<div
      part="card"
      class="${card({
            color: this.color,
            disabled: this.disabled,
            interactive: this.interactive,
            classes: {
                'card-hide-outline': this.hideOutline,
            },
        })}">
      ${this.interactive
            ? html `<button
            part="card-btn"
            class="card-btn ripple focus-ring-target"
            ${ripple()}
            ?disabled="${this.disabled}"
            aria-label="${ariaLabel || nothing}"></button>`
            : nothing}
      <slot></slot>
      <slot
        name="container"
        ${hasSlotted()}
        @slotchange=${this.handleContainerSlotChange}></slot>
    </div>`;
    }
    handleContainerSlotChange(event) {
        const slot = event.target;
        const enabled = !this.disabled;
        for (const element of slot.assignedElements({ flatten: true })) {
            element.dispatchEvent(new CustomEvent('md-gb:change-container-slot'));
            element.dispatchEvent(new CustomEvent('md-gb:set-enabled', {
                detail: { enabled },
            }));
        }
    }
}
/** @nocollapse */
CardElement.shadowRootOptions = {
    mode: 'open',
    delegatesFocus: true,
};
CardElement.styles = [
    focusRingStyles,
    rippleStyles,
    cardStyles,
    css `
      :host {
        display: inline-flex;
        isolation: isolate;
      }
      .card {
        flex: 1;
        position: relative;
      }
      .card:has([name='container'].has-slotted) {
        background-color: transparent;
      }
      .card.card-hide-outline {
        --outline-color: transparent;
        --container-elevation: var(--md-sys-elevation-shadow-0);
      }
      slot[name='container'] {
        display: block;
        position: absolute;
        inset: 0;
        border-radius: inherit;
        pointer-events: none;
        --color: var(--container-color);
        z-index: -1;
        transition: inherit;
      }
      slot[name='container']::slotted(*) {
        width: 100%;
        height: 100%;
      }
    `,
];
__decorate([
    state()
], CardElement.prototype, "hideOutline", void 0);
__decorate([
    property()
], CardElement.prototype, "color", void 0);
__decorate([
    property({ type: Boolean })
], CardElement.prototype, "disabled", void 0);
__decorate([
    property({ type: Boolean })
], CardElement.prototype, "interactive", void 0);
//# sourceMappingURL=card-element.js.map