import React from "react";
import { SpinnerContainer } from "./spinner.styles";

interface ISpinnerProps {
  maxValue: number;
  minValue: number;
  currentValue: number;
  handleOperation: (operation: string, index: number) => void;
  index: number;
}

const Spinner: React.FC<ISpinnerProps> = ({
  maxValue,
  minValue,
  currentValue,
  handleOperation,
  index,
}) => {
  return (
    <SpinnerContainer>
      <div className="d-flex">
        <button
          data-test='minus-btn'
          className="btn btn-outline-primary btn-spinner d-flex align-items-center"
          onClick={() => {
            handleOperation("decrement", index);
          }}
          disabled={currentValue <= minValue}
        >
          <img src="img/minus.svg" alt="" />
        </button>
        <input
          data-test='spinner-value'
          className="spinner-txt"
          type="text"
          value={currentValue}
          readOnly
        />
        <button
          data-test='plus-btn'
          className="btn btn-outline-primary btn-spinner d-flex align-items-center"
          onClick={() => {
            handleOperation("increment", index);
          }}
          disabled={currentValue >= maxValue}
        >
          <img src="img/plus.svg" alt="" />
        </button>
      </div>
    </SpinnerContainer>
  );
};

export { Spinner };
