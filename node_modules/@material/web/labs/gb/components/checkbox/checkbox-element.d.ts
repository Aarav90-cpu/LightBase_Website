/**
 * @license
 * Copyright 2026 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
import { CSSResultOrNative, LitElement } from 'lit';
import { createValidator, getValidityAnchor } from '../../../behaviors/constraint-validation.js';
import { getFormState, getFormValue } from '../../../behaviors/form-associated.js';
import { CheckboxValidator } from '../../../behaviors/validators/checkbox-validator.js';
declare const baseClass: import("@material/web/labs/behaviors/mixin.js").MixinReturn<import("@material/web/labs/behaviors/mixin.js").MixinReturn<import("@material/web/labs/behaviors/mixin.js").MixinReturn<(abstract new (...args: any[]) => import("../../../behaviors/element-internals.js").WithElementInternals) & typeof LitElement & import("../../../behaviors/form-associated.js").FormAssociatedConstructor, import("../../../behaviors/form-associated.js").FormAssociated>, import("../../../behaviors/constraint-validation.js").ConstraintValidation>>;
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
export declare class CheckboxElement extends baseClass {
    /** @nocollapse */
    static shadowRootOptions: ShadowRootInit;
    static styles: CSSResultOrNative[];
    /**
     * Whether or not the checkbox is invalid.
     */
    error: boolean;
    /**
     * Whether or not the checkbox is selected.
     */
    checked: boolean;
    /**
     * The default checked state of the checkbox.
     */
    get defaultChecked(): boolean;
    set defaultChecked(value: boolean);
    /**
     * Whether or not the checkbox is indeterminate.
     *
     * https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/checkbox#indeterminate_state_checkboxes
     */
    indeterminate: boolean;
    /**
     * When true, require the checkbox to be selected when participating in
     * form submission.
     *
     * https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/checkbox#validation
     */
    required: boolean;
    /**
     * The value of the checkbox that is submitted with a form when selected.
     *
     * https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/checkbox#value
     */
    value: string;
    private readonly input;
    /**
     * Mimics the behavior of <input> dirty checkedness, where the `checked`
     * attribute only updates the checked state if the checkbox has not been
     * interacted with.
     *
     * @see https://html.spec.whatwg.org/multipage/input.html#concept-input-checked-dirty-flag
     */
    private dirtyCheckedness;
    protected render(): import("lit-html").TemplateResult<1>;
    private handleInput;
    private handleChange;
    attributeChangedCallback(name: string, oldValue: string | null, newValue: string | null): void;
    [getFormValue](): string;
    [getFormState](): string;
    formResetCallback(): void;
    formStateRestoreCallback(state: string): void;
    [createValidator](): CheckboxValidator;
    [getValidityAnchor](): HTMLInputElement;
}
export {};
