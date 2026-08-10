/**
 * @license
 * Copyright 2026 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
import { __decorate } from "tslib";
import { css, html, LitElement } from 'lit';
import { state } from 'lit/decorators.js';
import { badge } from './badge.js';
import { styles as badgeStyles } from './badge.cssresult.js';
/**
 * A Material Design badge component.
 */
export class BadgeElement extends LitElement {
    constructor() {
        super(...arguments);
        this.hasContent = false;
    }
    render() {
        return html `<span part="badge" class="${badge({ large: this.hasContent })}">
      <slot @slotchange=${this.handleSlotChange}></slot>
    </span>`;
    }
    handleSlotChange(e) {
        const slot = e.target;
        const nodes = slot.assignedNodes();
        this.hasContent = nodes.some((node) => {
            if (node.nodeType === Node.TEXT_NODE) {
                return (node.textContent ?? '').trim().length > 0;
            }
            return true;
        });
    }
}
BadgeElement.styles = [
    badgeStyles,
    css `
      :host {
        display: inline-flex;
      }
      .badge {
        flex: 1;
      }
    `,
];
__decorate([
    state()
], BadgeElement.prototype, "hasContent", void 0);
//# sourceMappingURL=badge-element.js.map