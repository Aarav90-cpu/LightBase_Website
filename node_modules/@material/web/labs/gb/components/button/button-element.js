/**
 * @license
 * Copyright 2026 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
import { __decorate } from "tslib";
import { css, html, LitElement, nothing, } from 'lit';
import { property, state } from 'lit/decorators.js';
import { mixinDelegatesAria } from '../../../../internal/aria/delegate.js';
import { redispatchEvent } from '../../../../internal/events/redispatch-event.js';
import { mixinElementInternals } from '../../../behaviors/element-internals.js';
import { mixinFormAssociated } from '../../../behaviors/form-associated.js';
import { mixinFormSubmitter } from '../../../behaviors/form-submitter.js';
import focusRingStyles from '../focus/focus-ring.css' with { type: 'css' }; // github-only
// import focusRingStyles from '../focus/focus-ring.cssresult.js'; // google3-only
import rippleStyles from '../ripple/ripple.css' with { type: 'css' }; // github-only
// import rippleStyles from '../ripple/ripple.cssresult.js'; // google3-only
import { hasSlotted } from '../shared/has-slotted.js';
import buttonStyles from './button.css' with { type: 'css' }; // github-only
// import buttonStyles from './button.cssresult.js'; // google3-only
import { button } from './button.js';
// Separate variable needed for closure.
const baseClass = mixinDelegatesAria(mixinFormSubmitter(mixinFormAssociated(mixinElementInternals(LitElement))));
/**
 * A Material Design button.
 *
 * @slot - Used to display a label and optional icon.
 * @slot container - Used to set a custom background container for the button.
 * @fires {InputEvent} input - Fired when a toggle button is selected or unselected. --bubbles --composed
 * @fires {Event} change - Fired when a toggle button is selected or unselected. --bubbles
 * @csspart btn - The button's root element.
 * @cssprop --container-color
 * @cssprop --container-height
 * @cssprop --container-elevation
 * @cssprop --container-shape
 * @cssprop --outline-width
 * @cssprop --outline-color
 * @cssprop --icon-label-space
 * @cssprop --icon-color
 * @cssprop --icon-size
 * @cssprop --label-text
 * @cssprop --label-text-tracking
 * @cssprop --label-text-color
 * @cssprop --leading-space
 * @cssprop --state-layer-color
 * @cssprop --trailing-space
 */
export class ButtonElement extends baseClass {
    constructor() {
        super(...arguments);
        this.hideOutline = false;
        /**
         * The color of the button.
         */
        this.color = 'text';
        /**
         * The size of the button.
         */
        this.size = 'sm';
        /**
         * Changes the shape of the button to be square.
         */
        this.square = false;
        /**
         * Whether or not the button is "soft-disabled" (disabled but still
         * focusable).
         *
         * Use this when a button needs increased visibility when disabled. See
         * https://www.w3.org/WAI/ARIA/apg/practices/keyboard-interface/#kbd_disabled_controls
         * for more guidance on when this is needed.
         */
        this.softDisabled = false;
        /**
         * Whether or not the button is selected, when `type="toggle"`.
         */
        this.selected = false;
        /**
         * The URL that the link button points to.
         */
        this.href = '';
        /**
         * The filename to use when downloading the linked resource.
         * If not specified, the browser will determine a filename.
         * This is only applicable when the button is used as a link (`href` is set).
         */
        this.download = '';
        /**
         * Where to display the linked `href` URL for a link button. Common options
         * include `_blank` to open in a new tab.
         */
        this.target = '';
        this.handleSetShowOutline = (event) => {
            const customEvent = event;
            this.hideOutline = !customEvent.detail.shown;
        };
    }
    /**
     * A string indicating the behavior of the button.
     *
     * - "submit" (default): A button that submits its associated form.
     * - "reset": A button that resets its associated form.
     * - "button": A normal button.
     * - "toggle": A toggle button using the `selected` property.
     * - "link": An anchor link (`<a>`). Type is always "link" when `href` is set.
     */
    get type() {
        return this.href ? 'link' : super.type;
    }
    set type(type) {
        if (this.href && type !== 'link') {
            return;
        }
        super.type = type;
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
        if (changedProperties.has('disabled') ||
            changedProperties.has('softDisabled')) {
            this.dispatchSetEnabledEvent();
        }
    }
    dispatchSetEnabledEvent() {
        const enabled = !(this.disabled || this.softDisabled);
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
        const classes = button({
            color: this.color,
            size: this.size,
            square: this.square,
            // Emulate `:disabled` when soft-disabled
            disabled: this.softDisabled,
            classes: {
                'btn-hide-outline': this.hideOutline,
            },
        });
        // Needed for closure conformance
        const { ariaLabel, ariaHasPopup, ariaExpanded } = this;
        if (this.type === 'link') {
            return html `<a
        part="btn"
        class=${classes}
        href=${this.href}
        download=${this.download || nothing}
        target=${this.target || nothing}
        aria-label=${ariaLabel || nothing}
        aria-haspopup=${ariaHasPopup || nothing}
        aria-expanded=${ariaExpanded || nothing}
        aria-disabled=${this.disabled || this.softDisabled || nothing}
        tabindex=${this.disabled && !this.softDisabled ? -1 : nothing}>
        <slot></slot>
        <slot
          name="container"
          ${hasSlotted()}
          @slotchange=${this.handleContainerSlotChange}></slot>
      </a>`;
        }
        return html `<button
      part="btn"
      class=${classes}
      ?disabled=${this.disabled}
      aria-disabled=${this.softDisabled || nothing}
      aria-label=${ariaLabel || nothing}
      aria-pressed=${this.type === 'toggle' ? this.selected : nothing}
      aria-haspopup=${ariaHasPopup || nothing}
      aria-expanded=${ariaExpanded || nothing}
      @change=${this.handleChange}>
      <slot></slot>
      <slot
        name="container"
        ${hasSlotted()}
        @slotchange=${this.handleContainerSlotChange}></slot>
    </button>`;
    }
    handleContainerSlotChange(event) {
        const slot = event.target;
        const enabled = !(this.disabled || this.softDisabled);
        for (const element of slot.assignedElements({ flatten: true })) {
            element.dispatchEvent(new CustomEvent('md-gb:change-container-slot'));
            element.dispatchEvent(new CustomEvent('md-gb:set-enabled', {
                detail: { enabled },
            }));
        }
    }
    handleChange(event) {
        this.selected = event.target.ariaPressed === 'true';
        redispatchEvent(this, event);
    }
}
/** @nocollapse */
ButtonElement.shadowRootOptions = {
    mode: 'open',
    delegatesFocus: true,
};
ButtonElement.styles = [
    focusRingStyles,
    rippleStyles,
    buttonStyles,
    css `
      :host {
        display: inline-flex;
        isolation: isolate;
      }
      .btn {
        flex: 1;
        position: relative;
      }
      .btn:has([name='container'].has-slotted) {
        background-color: transparent;
      }
      .btn.btn-hide-outline {
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
], ButtonElement.prototype, "hideOutline", void 0);
__decorate([
    property()
], ButtonElement.prototype, "color", void 0);
__decorate([
    property()
], ButtonElement.prototype, "size", void 0);
__decorate([
    property({ type: Boolean })
], ButtonElement.prototype, "square", void 0);
__decorate([
    property({ noAccessor: true })
], ButtonElement.prototype, "type", null);
__decorate([
    property({ type: Boolean, attribute: 'soft-disabled', reflect: true })
], ButtonElement.prototype, "softDisabled", void 0);
__decorate([
    property({ type: Boolean })
], ButtonElement.prototype, "selected", void 0);
__decorate([
    property()
], ButtonElement.prototype, "href", void 0);
__decorate([
    property()
], ButtonElement.prototype, "download", void 0);
__decorate([
    property()
], ButtonElement.prototype, "target", void 0);
//# sourceMappingURL=button-element.js.map