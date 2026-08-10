/**
 * @license
 * Copyright 2026 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
import { noChange } from 'lit';
import { AsyncDirective, directive, } from 'lit/async-directive.js';
import { classMap } from 'lit/directives/class-map.js';
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
export function createClassMapDirective(options) {
    return directive(class ComponentClassMapDirective extends SetupElementDirective {
        constructor() {
            super(...arguments);
            this.setupElement = options.setupElement;
        }
        render(params) {
            return classMap({
                ...(params?.classes || {}),
                ...options.getClasses(params),
            });
        }
    });
}
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
export function createElementDirective(setupElement) {
    return directive(class ElementDirective extends SetupElementDirective {
        constructor() {
            super(...arguments);
            this.setupElement = setupElement;
        }
        render() {
            return noChange;
        }
    });
}
/**
 * A base class for Lit element and attribute directives that provides a setup
 * method for initializing logic when a directive's element is connected.
 */
class SetupElementDirective extends AsyncDirective {
    update({ element }, params) {
        if (element !== this.element) {
            this.element = element;
            this.disconnected();
            if (this.isConnected) {
                this.reconnected();
            }
        }
        return this.render(...params);
    }
    disconnected() {
        this.cleanup?.abort();
    }
    reconnected() {
        if (this.element && this.setupElement) {
            this.cleanup = new AbortController();
            this.setupElement(this.element, { signal: this.cleanup.signal });
        }
    }
}
//# sourceMappingURL=directives.js.map