import { ReactWrapper, ShallowWrapper } from 'enzyme';

/**
 * Find element(s) based on data-test attr and value provided as a param
 * @param wrapper
 * @param val
 * @function findByTestAttr
 * @returns {ShallowWrapper}
 */
export const findByTestAttr = (
  wrapper: ShallowWrapper | ReactWrapper,
  val: string,
): ShallowWrapper | ReactWrapper => wrapper.find(`[data-test='${val}']`);

/**
 * Find element(s) based on data-test attr and value provided as a param
 * @param container
 * @param val
 * @function findElementByTestAttr
 * @returns {Element}
 */
export const findElementByTestAttr = (
  container: HTMLElement,
  val: string,
): Element => container.querySelector(`[data-test='${val}']`);
