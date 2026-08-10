/**
 * @license
 * Copyright 2026 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
import { CSSResultOrNative, LitElement } from 'lit';
import { createValidator, getValidityAnchor } from '../../../behaviors/constraint-validation.js';
import { getFormState, getFormValue } from '../../../behaviors/form-associated.js';
import { CheckboxValidator } from '../../../behaviors/validators/checkbox-validator.js';
declare const baseClass: import("@material/web/labs/behaviors/mixin.js").MixinReturn<import("@material/web/labs/behaviors/mixin.js").MixinReturn<import("@material/web/labs/behaviors/mixin.js").MixinReturn<(abstract new (...args: any[]) => import("../../../behaviors/custom-state-set.js").WithCustomStateSet) & (abstract new (...args: any[]) => import("../../../behaviors/element-internals.js").WithElementInternals) & typeof LitElement & import("../../../behaviors/form-associated.js").FormAssociatedConstructor, import("../../../behaviors/form-associated.js").FormAssociated>, import("../../../behaviors/constraint-validation.js").ConstraintValidation>>;
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
export declare class SwitchElement extends baseClass {
    /** @nocollapse */
    static shadowRootOptions: ShadowRootInit;
    static styles: CSSResultOrNative[];
    /**
     * Puts the switch in the selected state and sets the form submission value to
     * the `value` property.
     */
    get selected(): boolean;
    set selected(value: boolean);
    /**
     * The default selected state of the switch.
     */
    get defaultSelected(): boolean;
    set defaultSelected(value: boolean);
    /**
     * When true, require the switch to be selected when participating in
     * form submission.
     *
     * https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/checkbox#validation
     */
    required: boolean;
    /**
     * The value associated with this switch on form submission. `null` is
     * submitted when `selected` is `false`.
     */
    value: string;
    private readonly button;
    /**
     * Mimics the behavior of <input> dirty checkedness, where the `checked`
     * attribute only updates the checked state if the checkbox has not been
     * interacted with.
     *
     * @see https://html.spec.whatwg.org/multipage/input.html#concept-input-checked-dirty-flag
     */
    private dirtyCheckedness;
    protected render(): import("lit-html").TemplateResult<1>;
    private handleChange;
    attributeChangedCallback(name: string, oldValue: string | null, newValue: string | null): void;
    [getFormValue](): string;
    [getFormState](): string;
    formResetCallback(): void;
    formStateRestoreCallback(state: string): void;
    [createValidator](): CheckboxValidator;
    [getValidityAnchor](): HTMLButtonElement;
}
export {};
