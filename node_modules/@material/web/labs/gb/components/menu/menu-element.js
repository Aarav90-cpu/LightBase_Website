/**
 * @license
 * Copyright 2026 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
import { __decorate } from "tslib";
import { ContextProvider } from '@lit/context';
import { css, html, LitElement } from 'lit';
import { property } from 'lit/decorators.js';
import { internals, mixinElementInternals, } from '../../../behaviors/element-internals.js';
import { mixinFocusable } from '../../../behaviors/focusable.js';
import menuStyles from './menu.css' with { type: 'css' }; // github-only
// import {styles as menuStyles} from './menu.cssresult.js'; // google3-only
import { menu, MENU_COLORS, menuContext } from './menu.js';
// Separate variable needed for closure.
const baseClass = mixinElementInternals(mixinFocusable(LitElement));
/**
 * A Material Design menu component.
 *
 * @slot - Used to display the menu's items.
 * @csspart menu - The menu's root element.
 * @cssprop --container-color
 * @cssprop --container-elevation
 * @cssprop --container-shape
 * @cssprop --gap
 * @cssprop --group-padding
 * @cssprop --group-shape
 * @cssprop --section-label-text-color
 */
export class MenuElement extends baseClass {
    get items() {
        return Array.from(this.itemsSet).sort((a, b) => {
            return a.compareDocumentPosition(b) & Node.DOCUMENT_POSITION_PRECEDING
                ? 1
                : -1;
        });
    }
    constructor() {
        super();
        this.color = MENU_COLORS.standard;
        this.itemsSet = new Set();
        this[internals].role = 'menu';
        this.addController(new ContextProvider(this, {
            context: menuContext,
            initialValue: {
                menu: this,
                getItems: () => this.items,
                itemConnected: (item) => {
                    this.itemsSet.add(item);
                },
                itemDisconnected: (item) => {
                    this.itemsSet.delete(item);
                },
            },
        }));
        // TODO: move event listeners to setupMenu()
        // Handle keyboard navigation
        this.addEventListener('keydown', (event) => {
            if (event.key === 'Tab') {
                event.preventDefault();
                this.hidePopover();
                return;
            }
            const items = this.items.filter((item) => !item.matches(':disabled,[disabled]'));
            const index = items.findIndex((item) => item.matches(':focus-within'));
            if (index === -1 && items.length > 0) {
                // If no item is focused, focus the first one on arrow key
                if ([
                    'ArrowDown',
                    'ArrowRight',
                    'ArrowUp',
                    'ArrowLeft',
                    'Home',
                    'End',
                ].includes(event.key)) {
                    event.preventDefault();
                    items[0].focus();
                }
                return;
            }
            switch (event.key) {
                case 'ArrowDown':
                case 'ArrowRight':
                    event.preventDefault();
                    if (index < items.length - 1) {
                        items[index + 1].focus();
                    }
                    else {
                        items[0].focus();
                    }
                    break;
                case 'ArrowUp':
                case 'ArrowLeft':
                    event.preventDefault();
                    if (index > 0) {
                        items[index - 1].focus();
                    }
                    else {
                        items[items.length - 1].focus();
                    }
                    break;
                case 'Home':
                    event.preventDefault();
                    items[0].focus();
                    break;
                case 'End':
                    event.preventDefault();
                    items[items.length - 1].focus();
                    break;
                default:
                    break;
            }
        });
        // Handle focus on open
        this.addEventListener('toggle', (event) => {
            if (event.newState === 'open') {
                this.previouslyFocused = event.source;
                // Focus the first non-disabled item
                setTimeout(() => {
                    this.items
                        .find((item) => !item.matches(':disabled,.disabled,[disabled]'))
                        ?.focus();
                });
            }
            else {
                this.previouslyFocused?.focus();
                this.previouslyFocused = undefined;
            }
        });
    }
    connectedCallback() {
        super.connectedCallback();
        // Set popover behavior in connectedCallback since constructor may not
        // sprout attributes.
        this.popover = 'auto';
    }
    render() {
        return html `<div part="menu" class="${menu({ color: this.color })} menu-host">
      <slot></slot>
    </div>`;
    }
}
MenuElement.styles = [menuStyles, css ``];
__decorate([
    property()
], MenuElement.prototype, "color", void 0);
//# sourceMappingURL=menu-element.js.map