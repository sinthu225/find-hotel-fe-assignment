import React from "react";
import { shallow, ShallowWrapper } from "enzyme";
import { findByTestAttr, findElementByTestAttr } from "../../../test/testUtils";
import { act } from "react-dom/test-utils";
import { fireEvent, render } from "@testing-library/react";
import { Spinner } from "./spinner";

/**
 * Factory function to create a shallow Wrapper for the Spinner component.
 * @function setup
 * @param props
 * @returns {ShallowWrapper}
 */

const handleOpeartionSpy = jest.fn().mockImplementation(() => {});

const setup = (_props?: any): ShallowWrapper =>
  shallow(
    <Spinner
      maxValue={_props?.maxValue || 4}
      minValue={_props?.minValue || 4}
      currentValue={_props?.currentValue || 3}
      handleOperation={handleOpeartionSpy}
      index={_props?.index || 4}
    />
  );

describe("Spinner Component", () => {
  let wrapper: ShallowWrapper;
  beforeEach(() => {
    wrapper = setup();
  });

  test("expect to render Spinner component", () => {
    expect(wrapper.length).toEqual(1);
  });

  test("expect to have plus and minus button", () => {
    const plusBtn = findByTestAttr(wrapper, "plus-btn");
    const minusBtn = findByTestAttr(wrapper, "minus-btn");
    expect(plusBtn.length).toEqual(1);
    expect(minusBtn.length).toEqual(1);
  });

  test("expect to have correct value", () => {
    const spinnerValue = findByTestAttr(wrapper, "spinner-value");
    expect(spinnerValue.props()['value']).toEqual(3);
  });

  test("expect to call handleOpeartionSpy when clicked", () => {
    const plusBtn = findByTestAttr(wrapper, "plus-btn");
    plusBtn.simulate('click');
    expect(handleOpeartionSpy).toHaveBeenCalledWith("increment", 4);
  });

  test("expect to have the plus btn disabled", () => {
    const wrapper = setup({
      maxValue: 4,
      minValue: 1,
      currentValue: 4,
      index: 4,
    });
    const plusBtn = findByTestAttr(wrapper, "plus-btn");
    expect(plusBtn.props()['disabled']).toEqual(true);
  });

  test("expect to have the minus btn disabled", () => {
    const wrapper = setup({
      maxValue: 4,
      minValue: 1,
      currentValue: 1,
      index: 1,
    });
    const minusBtn = findByTestAttr(wrapper, "minus-btn");
    expect(minusBtn.props()['disabled']).toEqual(true);
  });
});
