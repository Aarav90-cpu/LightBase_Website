/**
 * @license
 * Copyright 2026 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
import { type ClassInfo } from 'lit/directives/class-map.js';
/** Focus ring type configuration types. */
export type FocusRingType = 'outer' | 'inner';
/** Focus ring type configurations. */
export declare const FOCUS_RING_TYPES: {
    readonly outer: "outer";
    readonly inner: "inner";
};
/** Focus ring classes. */
export declare const FOCUS_RING_CLASSES: {
    focusRingOuter: string;
    focusRingInner: string;
    focusRingTarget: string;
    focusRingHost: string;
    focusVisible: string;
};
/** The state provided to the `focusRingClasses()` function. */
export interface FocusRingClassesState {
    /** The type of focus ring. Defaults to outer. */
    type?: FocusRingType;
    /** Emulates `:focus-visible`. */
    focusVisible?: boolean;
}
/**
 * Returns the focus ring classes to apply to an element based on the given
 * state.
 *
 * @param state The state of the focus ring.
 * @return An object of class names and truthy values if they apply.
 */
export declare function focusRingClasses({ type, focusVisible, }?: FocusRingClassesState): ClassInfo;
