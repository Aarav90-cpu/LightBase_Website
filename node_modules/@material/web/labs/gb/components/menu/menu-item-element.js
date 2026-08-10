/**
 * @license
 * Copyright 2026 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
import { __decorate } from "tslib";
import { consume } from '@lit/context';
import { css, html, LitElement, nothing } from 'lit';
import { property, state } from 'lit/decorators.js';
import { afterDispatch, setupDispatchHooks, } from '../../../../internal/events/dispatch-hooks.js';
import { internals, mixinElementInternals, } from '../../../behaviors/element-internals.js';
import { isFocusable, mixinFocusable } from '../../../behaviors/focusable.js';
import { hasSlotted } from '../shared/has-slotted.js';
import focusRingStyles from '../focus/focus-ring.css' with { type: 'css' }; // github-only
// import focusRingStyles from '../focus/focus-ring.cssresult.js'; // google3-only
import rippleStyles from '../ripple/ripple.css' with { type: 'css' }; // github-only
// import rippleStyles from '../ripple/ripple.cssresult.js'; // google3-only
import menuStyles from './menu.css' with { type: 'css' }; // github-only
// import {styles as menuStyles} from './menu.cssresult.js'; // google3-only
import { menuContext, menuItem, menuItemCheckable, } from './menu.js';
// Separate variable needed for closure.
const baseClass = mixinElementInternals(mixinFocusable(LitElement));
/**
 * A Material Design menu item component.
 *
 * @slot - Used to display the item's primary label.
 * @slot leading - Used to display icons and content before the item's main content.
 * @slot supporting-text - Used to display supporting text below the main label.
 * @slot trailing-text - Used to display metadata or text after the item's main content.
 * @slot trailing - Used to display icons and content after the item's main content.
 * @fires {Event} change - Fired when a checkbox or menu item is checked or unchecked. --bubbles
 * @fires {InputEvent} input - Fired when a checkbox or menu item is checked or unchecked. --bubbles --composed
 * @csspart menu-item - The menu item's root element.
 * @cssprop --between-space
 * @cssprop --bottom-space
 * @cssprop --container-color
 * @cssprop --height
 * @cssprop --inner-corner-corner-size
 * @cssprop --label-text-color
 * @cssprop --label-text
 * @cssprop --label-text-tracking
 * @cssprop --leading-icon-color
 * @cssprop --leading-icon-size
 * @cssprop --leading-space
 * @cssprop --shape
 * @cssprop --supporting-text-color
 * @cssprop --supporting-text
 * @cssprop --supporting-text-tracking
 * @cssprop --top-space
 * @cssprop --trailing-icon-color
 * @cssprop --trailing-icon-size
 * @cssprop --trailing-space
 * @cssprop --trailing-supporting-text-color
 * @cssprop --trailing-supporting-text
 * @cssprop --trailing-supporting-text-tracking
 */
export class MenuItemElement extends baseClass {
    get menu() {
        return this.menuContext?.menu || null;
    }
    constructor() {
        super();
        this.checked = false;
        this.disabled = false;
        this[internals].role = 'menuitem';
        setupDispatchHooks(this, 'click');
        this.addEventListener('click', (e) => {
            if (this.disabled) {
                e.stopImmediatePropagation();
                return;
            }
            const wasChecked = this.checked;
            afterDispatch(e, () => {
                if (e.defaultPrevented)
                    return;
                if (this.checkable) {
                    // TODO: radio menu items should not be allowed to uncheck themselves.
                    this.checked = !wasChecked;
                    this.dispatchEvent(new Event('change', { bubbles: true }));
                    this.dispatchEvent(new InputEvent('input', { bubbles: true, composed: true }));
                }
                if (this.checkable !== 'multiple') {
                    this.menu?.hidePopover();
                }
            });
        });
        this.addEventListener('keydown', (e) => {
            if (this.disabled)
                return;
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                this.click();
            }
        });
    }
    connectedCallback() {
        super.connectedCallback();
        this.menuContext?.itemConnected(this);
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        this.menuContext?.itemDisconnected(this);
    }
    render() {
        return html `<div
      part="menu-item"
      class="${menuItem({
            checked: this.checked,
            disabled: this.disabled,
        })} ripple-host focus-ring-host">
      ${this.renderContent()}
    </div>`;
    }
    renderContent() {
        return html `
      <span class="menu-item-leading">
        <slot name="leading" ${hasSlotted()}>
          ${this.checked ? html `<span class="checkmark">check</span>` : nothing}
        </slot>
      </span>
      <span class="menu-item-content">
        <slot></slot>
        <slot name="supporting-text" class="menu-item-supporting-text"></slot>
      </span>
      <span class="menu-item-trailing">
        <slot
          name="trailing-text"
          class="menu-item-trailing-text"
          ${hasSlotted()}></slot>
        <slot name="trailing" ${hasSlotted()}></slot>
      </span>
    `;
    }
    updated() {
        if (this.checkable === 'single') {
            this[internals].role = 'menuitemradio';
        }
        else if (this.checkable === 'multiple') {
            this[internals].role = 'menuitemcheckbox';
        }
        else {
            this[internals].role = 'menuitem';
        }
        if (this.checkable) {
            this[internals].ariaChecked = String(this.checked);
        }
        else {
            this[internals].ariaChecked = null;
        }
        this[internals].ariaDisabled = String(this.disabled);
        this[isFocusable] = !this.disabled;
    }
}
MenuItemElement.styles = [
    focusRingStyles,
    rippleStyles,
    menuStyles,
    css `
      :host {
        display: flex;
        outline: none;
      }
      .menu-item {
        flex: 1;
      }
      :is(.menu-item-leading, .menu-item-trailing):not(
        :has(.has-slotted, .checkmark)
      ) {
        display: none;
      }
      slot:not(.has-slotted) {
        display: contents;
      }
      .checkmark {
        display: flex;
        font: var(--md-icon-size) var(--md-icon-font);
      }
    `,
];
__decorate([
    property({ type: Boolean, reflect: true })
], MenuItemElement.prototype, "checked", void 0);
__decorate([
    property({ type: Boolean, reflect: true })
], MenuItemElement.prototype, "disabled", void 0);
__decorate([
    consume({ context: menuContext, subscribe: true })
], MenuItemElement.prototype, "menuContext", void 0);
__decorate([
    state(),
    consume({ context: menuItemCheckable, subscribe: true })
], MenuItemElement.prototype, "checkable", void 0);
//# sourceMappingURL=menu-item-element.js.map