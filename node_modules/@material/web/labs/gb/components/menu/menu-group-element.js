/**
 * @license
 * Copyright 2026 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
import { __decorate } from "tslib";
import { consume, provide } from '@lit/context';
import { css, html, LitElement } from 'lit';
import { property } from 'lit/decorators.js';
import { internals, mixinElementInternals, } from '../../../behaviors/element-internals.js';
import { menuContext, menuItemCheckable, } from './menu.js';
// Separate variable needed for closure.
const baseClass = mixinElementInternals(LitElement);
/**
 * A Material Design menu group component.
 *
 * @slot - Used to display the menu group's items.
 */
export class MenuGroupElement extends baseClass {
    // TODO: add optional section label
    get menu() {
        return this.menuContext?.menu || null;
    }
    get items() {
        return (this.menuContext?.getItems?.() || []).filter((item) => this.compareDocumentPosition(item) &
            Node.DOCUMENT_POSITION_CONTAINED_BY);
    }
    constructor() {
        super();
        this.checkable = null;
        this.menuContext = null;
        this[internals].role = 'none';
        // TODO: single-select items should not be allowed to uncheck themselves.
        // A single change event should be emitted from the group instead.
        this.addEventListener('change', (event) => {
            if (this.checkable === 'single') {
                const composedPath = event.composedPath();
                const items = this.items;
                for (const item of items) {
                    if (!composedPath.includes(item) && item.checked) {
                        item.checked = false;
                    }
                }
            }
        });
    }
    render() {
        return html `<slot></slot>`;
    }
}
MenuGroupElement.styles = [
    css `
      :host {
        display: contents;
      }
    `,
];
__decorate([
    provide({ context: menuItemCheckable }),
    property({ reflect: true })
], MenuGroupElement.prototype, "checkable", void 0);
__decorate([
    consume({ context: menuContext, subscribe: true })
], MenuGroupElement.prototype, "menuContext", void 0);
//# sourceMappingURL=menu-group-element.js.map