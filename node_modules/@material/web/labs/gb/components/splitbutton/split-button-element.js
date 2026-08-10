/**
 * @license
 * Copyright 2026 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
import { __decorate } from "tslib";
import { css, html, LitElement } from 'lit';
import { property } from 'lit/decorators.js';
import { button } from '../button/button.js';
import focusRingStyles from '../focus/focus-ring.css' with { type: 'css' }; // github-only
// import focusRingStyles from '../focus/focus-ring.cssresult.js'; // google3-only
import rippleStyles from '../ripple/ripple.css' with { type: 'css' }; // github-only
// import rippleStyles from '../ripple/ripple.cssresult.js'; // google3-only
import buttonStyles from '../button/button.css' with { type: 'css' }; // github-only
// import buttonStyles from '../button/button.cssresult.js'; // google3-only
import splitButtonStyles from './split-button.css' with { type: 'css' }; // github-only
// import {styles as splitButtonStyles} from './split-button.cssresult.js'; // google3-only
import { splitButton, } from './split-button.js';
/**
 * A Material Design split button component.
 *
 * @slot leading - Requires a `<button>` for the main action.
 * @slot trailing - Requires a `<button>` for the menu action. Use `popovertarget` to display a menu.
 * @slot - Used to render the trailing button's popover menu.
 * @csspart split-btn - The split button's root element.
 * @csspart leading-btn - The split button's main action.
 * @csspart trailing-btn - The split button's menu action.
 * @cssprop --between-space
 * @cssprop --icon-size
 * @cssprop --inner-corner-size
 * @cssprop --outer-corner-size
 * @cssprop --leading-space
 * @cssprop --trailing-space
 */
export class SplitButtonElement extends LitElement {
    constructor() {
        super(...arguments);
        this.color = 'filled';
        this.size = 'sm';
        this.selected = false;
    }
    render() {
        const buttonConfig = {
            color: this.color,
            size: this.size,
        };
        return html `<div part="split-btn" class="${splitButton(this)}">
      <slot
        name="leading"
        part="leading-btn"
        class="${button(buttonConfig)}"
        @focusin=${this.updateSlotFocusVisible}
        @focusout=${this.updateSlotFocusVisible}>
      </slot>
      <slot
        name="trailing"
        part="trailing-btn"
        class="${button(buttonConfig)}"
        @focusin=${this.updateSlotFocusVisible}
        @focusout=${this.updateSlotFocusVisible}
        @slotchange=${this.handleTrailingSlotchange}>
      </slot>
      <slot></slot>
    </div>`;
    }
    updateSlotFocusVisible(event) {
        const slot = event.currentTarget;
        const hasFocusVisible = slot
            .assignedElements()
            .some((el) => el.matches(':focus-visible,:has(:focus-visible)'));
        slot.classList.toggle('focus-visible', hasFocusVisible);
    }
    handleTrailingSlotchange(event) {
        this.cleanupToggleListener?.abort();
        this.cleanupToggleListener = new AbortController();
        const slot = event.target;
        const trailingButton = slot
            .assignedElements()
            .find((el) => el.matches('button'));
        if (!trailingButton?.popoverTargetElement)
            return;
        trailingButton.popoverTargetElement.addEventListener('toggle', (event) => {
            this.selected = event.newState === 'open';
        }, { signal: this.cleanupToggleListener.signal });
    }
}
SplitButtonElement.styles = [
    focusRingStyles,
    rippleStyles,
    buttonStyles,
    splitButtonStyles,
    css `
      :host {
        display: inline-flex;
      }
      .split-btn {
        flex: 1;
      }
      [name='leading'] {
        display: contents;
        &::slotted(button) {
          all: inherit;
          display: flex;
        }
      }
      [name='trailing'] {
        position: relative;
        &::slotted(button) {
          position: absolute;
          inset: 0;
          appearance: none;
          background: none;
          border: none;
          outline: none;
        }
      }
    `,
];
__decorate([
    property()
], SplitButtonElement.prototype, "color", void 0);
__decorate([
    property()
], SplitButtonElement.prototype, "size", void 0);
__decorate([
    property({ type: Boolean })
], SplitButtonElement.prototype, "selected", void 0);
//# sourceMappingURL=split-button-element.js.map