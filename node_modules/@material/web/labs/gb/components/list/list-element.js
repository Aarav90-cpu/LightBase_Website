/**
 * @license
 * Copyright 2026 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
import { __decorate } from "tslib";
import { css, html, LitElement } from 'lit';
import { property } from 'lit/decorators.js';
import { internals, mixinElementInternals, } from '../../../behaviors/element-internals.js';
import listStyles from './list.css' with { type: 'css' }; // github-only
// import {styles as listStyles} from './list.cssresult.js'; // google3-only
import { list } from './list.js';
// Separate variable needed for closure.
const baseClass = mixinElementInternals(LitElement);
/**
 * A Material Design list component.
 *
 * @slot - Used to display list items.
 * @csspart list - The list's root element.
 * @cssprop --container-shape
 * @cssprop --gap
 */
export class ListElement extends baseClass {
    constructor() {
        super();
        /**
         * Whether to render the list with segmented items.
         */
        this.segmented = false;
        this[internals].role = 'list';
    }
    render() {
        return html `<div part="list" class="${list(this)}">
      <slot></slot>
    </div>`;
    }
}
ListElement.styles = [
    listStyles,
    css `
      :host {
        display: flex;
      }
      .list {
        flex: 1;
      }
    `,
];
__decorate([
    property({ type: Boolean })
], ListElement.prototype, "segmented", void 0);
//# sourceMappingURL=list-element.js.map