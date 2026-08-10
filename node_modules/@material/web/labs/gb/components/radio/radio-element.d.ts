/**
 * @license
 * Copyright 2026 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
import { CSSResultOrNative, LitElement } from 'lit';
import { createValidator, getValidityAnchor } from '../../../behaviors/constraint-validation.js';
import { getFormState, getFormValue } from '../../../behaviors/form-associated.js';
import { RadioValidator } from '../../../behaviors/validators/radio-validator.js';
declare const radioBaseClass: import("@material/web/labs/behaviors/mixin.js").MixinReturn<import("@material/web/labs/behaviors/mixin.js").MixinReturn<(abstract new (...args: any[]) => import("../../../behaviors/element-internals.js").WithElementInternals) & (abstract new (...args: any[]) => import("../../../behaviors/focusable.js").Focusable) & typeof LitElement & import("../../../behaviors/form-associated.js").FormAssociatedConstructor, import("../../../behaviors/form-associated.js").FormAssociated>, import("../../../behaviors/constraint-validation.js").ConstraintValidation>;
/**
 * A Material Design radio component.
 *
 * @fires {InputEvent} input - Fired when the radio is checked (but not unchecked). --bubbles --composed
 * @fires {Event} change - Fired when the radio is checked (but not unchecked). --bubbles
 * @csspart radio - The radio's root element.
 * @cssprop --icon-color
 * @cssprop --icon-size
 * @cssprop --state-layer-color
 * @cssprop --state-layer-shape
 * @cssprop --state-layer-size
 */
export declare class RadioElement extends radioBaseClass {
    static styles: CSSResultOrNative[];
    /**
     * Whether or not the radio is selected.
     */
    get checked(): boolean;
    set checked(checked: boolean);
    /**
     * The default checked state of the radio.
     */
    get defaultChecked(): boolean;
    set defaultChecked(value: boolean);
    /**
     * Whether or not the radio is required. If any radio is required in a group,
     * all radios are implicitly required.
     */
    required: boolean;
    /**
     * The element value to use in form submission when checked.
     */
    value: string;
    private readonly radio;
    private readonly selectionController;
    /**
     * Mimics the behavior of <input> dirty checkedness, where the `checked`
     * attribute only updates the checked state if the radio has not been
     * interacted with.
     *
     * @see https://html.spec.whatwg.org/multipage/input.html#concept-input-checked-dirty-flag
     */
    private dirtyCheckedness;
    private isFocused;
    constructor();
    protected render(): import("lit-html").TemplateResult<1>;
    attributeChangedCallback(name: string, oldValue: string | null, newValue: string | null): void;
    [getFormValue](): string;
    [getFormState](): string;
    formResetCallback(): void;
    formStateRestoreCallback(state: string): void;
    [createValidator](): RadioValidator;
    [getValidityAnchor](): HTMLElement;
}
export {};
