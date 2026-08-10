/**
 * @license
 * Copyright 2026 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
import { __decorate } from "tslib";
import { css, html, LitElement } from 'lit';
import { property } from 'lit/decorators.js';
import dividerStyles from './divider.css' with { type: 'css' }; // github-only
// import {styles as dividerStyles} from './divider.cssresult.js'; // google3-only
import { divider } from './divider.js';
/**
 * A Material Design divider component.
 *
 * @csspart divider - The divider element.
 * @cssprop --color
 * @cssprop --thickness
 */
export class DividerElement extends LitElement {
    constructor() {
        super(...arguments);
        /**
         * Whether or not the divider is vertical.
         */
        this.vertical = false;
    }
    render() {
        return html `<div part="divider" class="${divider(this)}"></div>`;
    }
}
DividerElement.styles = [
    dividerStyles,
    css `
      :host {
        display: flex;
      }
      .divider {
        flex: 1;
      }
      :host(:not([vertical])) {
        width: 100%;
      }
      :host([vertical]) {
        min-height: 100%;
      }
    `,
];
__decorate([
    property({ type: Boolean, reflect: true })
], DividerElement.prototype, "vertical", void 0);
//# sourceMappingURL=divider-element.js.map