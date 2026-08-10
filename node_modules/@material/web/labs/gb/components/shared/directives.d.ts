/**
 * @license
 * Copyright 2026 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
import { DirectiveResult } from 'lit/async-directive.js';
import { type ClassInfo } from 'lit/directives/class-map.js';
/**
 * A function that sets up logic for a directive's element.
 *
 * @param element The element attached to the directive.
 * @param opts Options for setting up the element, including an AbortSignal for
 *     cleanup.
 */
export type SetupElementFunction = (element: HTMLElement, opts: {
    signal: AbortSignal;
}) => void;
/**
 * All class map directives include AdditionalClasses to allow adding dynamic
 * classes to the element using `classMap()`.
 */
export interface AdditionalClasses {
    /**
     * Additional classes to apply to the element.
     */
    classes?: ClassInfo;
}
/**
 * Options for creating a class map directive.
 *
 * @param getClasses A function that returns the class names and truthy values
 *     if they apply.
 * @param setupElement An optional function to set up logic for the directive's
 *     element.
 */
export interface ClassMapDirectiveOptions<State> {
    getClasses: (state?: State) => ClassInfo;
    setupElement?: SetupElementFunction;
}
/**
 * Creates a Lit directive that behaves like `classMap()`, but also provides
 * element setup and cleanup logic.
 *
 * These directives bind to `class="${componentDirectiveName()}"`.
 *
 * @example
 * ```ts
 * const toggleButton = createClassMapDirective({
 *   getClasses: (state: ToggleButtonState) => ({
 *     'toggle-button': true,
 *     'toggle-button-selected': state.selected,
 *   }),
 *   setupElement: (element, opts) => {
 *     element.addEventListener('click', () => {
 *       state.selected = !state.selected;
 *     }, opts);
 *   },
 * });
 *
 * html`
 *   <button class="${toggleButton()}">Unselected</button>
 *   <button class="${toggleButton({selected: true})}">Selected</button>
 *   <button class="${toggleButton({classes: {'visible': isVisible}})}">
 *     With additional classes
 *   </button>
 * `;
 * ```
 *
 * @param options Options for creating the class map directive.
 * @return A Lit `directive()` that binds to the class attribute.
 */
export declare function createClassMapDirective<State = {}>(options: ClassMapDirectiveOptions<State>): (state?: State & AdditionalClasses) => DirectiveResult;
/**
 * Creates a Lit directive that can be used to add setup and cleanup logic to
 * an element.
 *
 * These directives bind as element parts.
 *
 * @example
 * ```ts
 * const logClick = createElementDirective((element, opts) => {
 *   element.addEventListener('click', (event) => {
 *     console.log('click', event);
 *   }, opts);
 * });
 *
 * html`<button ${logClick()}>Click me</button>`;
 * ```
 *
 * @param setupElement The function to set up logic for the directive's element.
 * @return A Lit `directive()` that binds as an element part.
 */
export declare function createElementDirective(setupElement: SetupElementFunction): () => DirectiveResult;
