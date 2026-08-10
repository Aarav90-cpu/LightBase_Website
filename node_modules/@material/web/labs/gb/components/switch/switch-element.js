/**
 * @license
 * Copyright 2026 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
import { __decorate } from "tslib";
import { css, html, LitElement, nothing } from 'lit';
import { property, query } from 'lit/decorators.js';
import { mixinDelegatesAria } from '../../../../internal/aria/delegate.js';
import { redispatchEvent } from '../../../../internal/events/redispatch-event.js';
import { createValidator, getValidityAnchor, mixinConstraintValidation, } from '../../../behaviors/constraint-validation.js';
import { hasState, mixinCustomStateSet, toggleState, } from '../../../behaviors/custom-state-set.js';
import { mixinElementInternals } from '../../../behaviors/element-internals.js';
import { getFormState, getFormValue, mixinFormAssociated, } from '../../../behaviors/form-associated.js';
import { CheckboxValidator } from '../../../behaviors/validators/checkbox-validator.js';
import { hasSlotted } from '../shared/has-slotted.js';
import focusRingStyles from '../focus/focus-ring.css' with { type: 'css' }; // github-only
// import focusRingStyles from '../focus/focus-ring.cssresult.js'; // google3-only
import rippleStyles from '../ripple/ripple.css' with { type: 'css' }; // github-only
// import rippleStyles from '../ripple/ripple.cssresult.js'; // google3-only
import switchStyles from './switch.css' with { type: 'css' }; // github-only
// import switchStyles from './switch.cssresult.js'; // google3-only
import { switchToggle } from './switch.js';
// Separate variable needed for closure.
const baseClass = mixinDelegatesAria(mixinConstraintValidation(mixinFormAssociated(mixinCustomStateSet(mixinElementInternals(LitElement)))));
/**
 * A Material Design switch component.
 *
 * @slot off-icon - Used to show an icon when the switch is unselected.
 * @slot on-icon - Used to show an icon when the switch is selected.
 * @fires {InputEvent} input - Fired when the switch is selected or unselected. --bubbles --composed
 * @fires {Event} change - Fired when the switch is selected or unselected. --bubbles
 * @csspart switch - The switch's root element.
 * @cssprop --handle-color
 * @cssprop --handle-size
 * @cssprop --with-icon-handle-size
 * @cssprop --icon-color
 * @cssprop --icon-size
 * @cssprop --state-layer-color
 * @cssprop --state-layer-size
 * @cssprop --track-color
 * @cssprop --track-height
 * @cssprop --track-outline-color
 * @cssprop --track-outline-width
 * @cssprop --track-width
 */
export class SwitchElement extends baseClass {
    constructor() {
        super(...arguments);
        /**
         * When true, require the switch to be selected when participating in
         * form submission.
         *
         * https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/checkbox#validation
         */
        this.required = false;
        /**
         * The value associated with this switch on form submission. `null` is
         * submitted when `selected` is `false`.
         */
        this.value = 'on';
        /**
         * Mimics the behavior of <input> dirty checkedness, where the `checked`
         * attribute only updates the checked state if the checkbox has not been
         * interacted with.
         *
         * @see https://html.spec.whatwg.org/multipage/input.html#concept-input-checked-dirty-flag
         */
        this.dirtyCheckedness = false;
    }
    /**
     * Puts the switch in the selected state and sets the form submission value to
     * the `value` property.
     */
    get selected() {
        return this[hasState]('selected');
    }
    set selected(value) {
        this[toggleState]('selected', value);
    }
    /**
     * The default selected state of the switch.
     */
    get defaultSelected() {
        return this.hasAttribute('selected');
    }
    set defaultSelected(value) {
        this.toggleAttribute('selected', value || false);
    }
    render() {
        const { ariaLabel } = this;
        return html `
      <button
        role="switch"
        part="switch"
        class="${switchToggle()}"
        aria-checked="${this.selected ? 'true' : 'false'}"
        aria-label=${ariaLabel || nothing}
        ?disabled=${this.disabled}
        @change=${this.handleChange}>
        <slot name="off-icon" class="switch-icon-off" ${hasSlotted()}></slot>
        <slot name="on-icon" class="switch-icon-on"></slot>
      </button>
    `;
    }
    handleChange(event) {
        this.dirtyCheckedness = true;
        this.selected = this.button?.ariaChecked === 'true';
        // Change event is not composed, re-dispatch it.
        redispatchEvent(this, event);
    }
    attributeChangedCallback(name, oldValue, newValue) {
        if (name === 'selected' && this.dirtyCheckedness) {
            // The 'selected' attribute does not update switches that have been
            // interacted with.
            return;
        }
        super.attributeChangedCallback(name, oldValue, newValue);
    }
    [getFormValue]() {
        return this.selected ? this.value : null;
    }
    [getFormState]() {
        return String(this.selected);
    }
    formResetCallback() {
        this.dirtyCheckedness = false;
        this.selected = this.defaultSelected;
    }
    formStateRestoreCallback(state) {
        this.selected = state === 'true';
    }
    [createValidator]() {
        return new CheckboxValidator(() => ({
            checked: this.selected,
            required: this.required,
        }));
    }
    [getValidityAnchor]() {
        return this.button;
    }
}
/** @nocollapse */
SwitchElement.shadowRootOptions = {
    mode: 'open',
    delegatesFocus: true,
};
SwitchElement.styles = [
    focusRingStyles,
    rippleStyles,
    switchStyles,
    css `
      :host {
        display: inline-flex;
      }
      .switch {
        flex: 1;
      }
      ::slotted(*) {
        grid-area: handle;
      }
    `,
];
__decorate([
    property({ type: Boolean })
], SwitchElement.prototype, "selected", null);
__decorate([
    property({ type: Boolean })
], SwitchElement.prototype, "required", void 0);
__decorate([
    property()
], SwitchElement.prototype, "value", void 0);
__decorate([
    query('button', true)
], SwitchElement.prototype, "button", void 0);
//# sourceMappingURL=switch-element.js.map