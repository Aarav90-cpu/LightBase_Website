/**
 * @license
 * Copyright 2026 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
import { type CSSResultOrNative } from 'lit';
/**
 * Owner types that can adopt stylesheets using `adoptStyles()`.
 */
export type AdoptStylesOwner = DocumentOrShadowRoot | Element;
/**
 * Adopts the given stylesheets to the provided document or shadow root owner.
 *
 * @example
 * ```ts
 * import globalStylesheet from './stylesheet.css' with {type: 'css'};
 *
 * adoptStyles(document, globalStylesheet);
 * ```
 *
 * If an element is provided, the styles are adopted to the element's owner
 * document. If the element is within a shadow root, the styles are also adopted
 * to the host shadow root.
 *
 * @example
 * ```ts
 * import hostClasses from './stylesheet.css' with {type: 'css'};
 *
 * class LightDomElement extends HTMLElement {
 *   connectedCallback() {
 *     adoptStyles(this, hostClasses);
 *     this.classList.add('host-class');
 *   }
 * }
 * ```
 *
 * @param owner The owner document, shadow root, or element to adopt the
 *     styles to.
 * @param styles The styles to adopt.
 */
export declare function adoptStyles(owner: AdoptStylesOwner | null | undefined, styles: CSSResultOrNative | CSSResultOrNative[]): void;
