import { DateTime } from "luxon";

/**
 * @function isEvenMinute
 *
 * Check whether the current minute is an even value.
 *
 * @returns {boolean}
 */
const isEvenMinute = (): boolean => DateTime.local().minute % 2 === 0;

export { isEvenMinute };
