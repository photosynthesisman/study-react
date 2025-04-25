import React, { useState } from "react";

export type checkType = "checked" | "disabled" | "default" | "disabled checked";

export interface CheckProps {
  type?: checkType;
  label?: string;
  id?: string;
}

const CheckBox: React.FC<CheckProps> = ({ type = "default", label, id }) => {
  const [isChecked, setIsChecked] = useState(type === "checked" || type === "disabled checked");
  const isDisabled = type === "disabled" || type === "disabled checked";
  const handleChange = () => {
    if (!isDisabled) {
      setIsChecked((prev) => !prev);
    }
  };
  return (
    <label htmlFor={id} className="checkbox size-lg">
      <input type="checkbox" id={id} name={id} checked={isChecked} disabled={isDisabled} onChange={handleChange} />
      <i aria-hidden="true" className="lbl"></i>
      <span>{label}</span>
    </label>
  );
};

export default CheckBox;
