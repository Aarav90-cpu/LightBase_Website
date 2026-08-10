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
import { mixinElementInternals } from '../../../behaviors/element-internals.js';
import { getFormState, getFormValue, mixinFormAssociated, } from '../../../behaviors/form-associated.js';
import { CheckboxValidator } from '../../../behaviors/validators/checkbox-validator.js';
import focusRingStyles from '../focus/focus-ring.css' with { type: 'css' }; // github-only
// import focusRingStyles from '../focus/focus-ring.cssresult.js'; // google3-only
import rippleStyles from '../ripple/ripple.css' with { type: 'css' }; // github-only
// import rippleStyles from '../ripple/ripple.cssresult.js'; // google3-only
import checkboxStyles from './checkbox.css' with { type: 'css' }; // github-only
// import checkboxStyles from './checkbox.cssresult.js'; // google3-only
import { checkbox } from './checkbox.js';
// Separate variable needed for closure.
const baseClass = mixinDelegatesAria(mixinConstraintValidation(mixinFormAssociated(mixinElementInternals(LitElement))));
/**
 * A Material Design checkbox component.
 *
 * @fires {InputEvent} input - Fired when the checkbox is checked or unchecked. --bubbles --composed
 * @fires {Event} change - Fired when the checkbox is checked or unchecked. --bubbles
 * @csspart checkbox - The checkbox's root element.
 * @cssprop --container-color
 * @cssprop --container-shape
 * @cssprop --container-size
 * @cssprop --icon-color
 * @cssprop --icon-size
 * @cssprop --outline-color
 * @cssprop --outline-width
 * @cssprop --state-layer-color
 * @cssprop --state-layer-shape
 * @cssprop --state-layer-size
 */
export class CheckboxElement extends baseClass {
    constructor() {
        super(...arguments);
        /**
         * Whether or not the checkbox is invalid.
         */
        this.error = false;
        /**
         * Whether or not the checkbox is selected.
         */
        this.checked = false;
        /**
         * Whether or not the checkbox is indeterminate.
         *
         * https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/checkbox#indeterminate_state_checkboxes
         */
        this.indeterminate = false;
        /**
         * When true, require the checkbox to be selected when participating in
         * form submission.
         *
         * https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/checkbox#validation
         */
        this.required = false;
        /**
         * The value of the checkbox that is submitted with a form when selected.
         *
         * https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/checkbox#value
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
     * The default checked state of the checkbox.
     */
    get defaultChecked() {
        return this.hasAttribute('checked');
    }
    set defaultChecked(value) {
        this.toggleAttribute('checked', value || false);
    }
    render() {
        // Needed for closure conformance
        const { ariaLabel, ariaInvalid } = this;
        return html `
      <input
        part="checkbox"
        class="${checkbox({ invalid: this.error })}"
        type="checkbox"
        aria-checked=${this.indeterminate ? 'mixed' : nothing}
        aria-label=${ariaLabel || nothing}
        aria-invalid=${ariaInvalid || this.error || nothing}
        ?disabled=${this.disabled}
        ?required=${this.required}
        .indeterminate=${this.indeterminate}
        .checked=${this.checked}
        @input=${this.handleInput}
        @change=${this.handleChange} />
    `;
    }
    handleInput(event) {
        this.dirtyCheckedness = true;
        const target = event.target;
        this.checked = target.checked;
        this.indeterminate = target.indeterminate;
        // <input> 'input' event bubbles and is composed, don't re-dispatch it.
    }
    handleChange(event) {
        this.dirtyCheckedness = true;
        // <input> 'change' event is not composed, re-dispatch it.
        redispatchEvent(this, event);
    }
    attributeChangedCallback(name, oldValue, newValue) {
        if (name === 'checked' && this.dirtyCheckedness) {
            // The 'checked' attribute does not update checkboxes that have been
            // interacted with.
            return;
        }
        super.attributeChangedCallback(name, oldValue, newValue);
    }
    [getFormValue]() {
        return this.checked ? this.value : null;
    }
    [getFormState]() {
        return String(this.checked);
    }
    formResetCallback() {
        this.dirtyCheckedness = false;
        this.checked = this.defaultChecked;
    }
    formStateRestoreCallback(state) {
        this.checked = state === 'true';
    }
    [createValidator]() {
        return new CheckboxValidator(() => this);
    }
    [getValidityAnchor]() {
        return this.input;
    }
}
/** @nocollapse */
CheckboxElement.shadowRootOptions = {
    mode: 'open',
    delegatesFocus: true,
};
CheckboxElement.styles = [
    focusRingStyles,
    rippleStyles,
    checkboxStyles,
    css `
      :host {
        display: inline-flex;
      }
      .checkbox {
        flex: 1;
      }
    `,
];
__decorate([
    property({ type: Boolean })
], CheckboxElement.prototype, "error", void 0);
__decorate([
    property({ type: Boolean })
], CheckboxElement.prototype, "checked", void 0);
__decorate([
    property({ type: Boolean })
], CheckboxElement.prototype, "indeterminate", void 0);
__decorate([
    property({ type: Boolean })
], CheckboxElement.prototype, "required", void 0);
__decorate([
    property()
], CheckboxElement.prototype, "value", void 0);
__decorate([
    query('input', true)
], CheckboxElement.prototype, "input", void 0);
//# sourceMappingURL=checkbox-element.js.map