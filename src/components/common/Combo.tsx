import React from "react";

export interface ComboProps {
  label?: string;
  id?: string;
  type?: string;
  className?: string;
  name?: string;
  value?: string;
  checked?: boolean;
  disabled?: boolean;
  toggle?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Combo: React.FC<ComboProps> = ({ label, id, type, className, name, checked, disabled, onChange, value, toggle }) => {
  return (
    <label htmlFor={id} className={className}>
      <input type={type} id={id} name={name} checked={checked} value={value} disabled={disabled} onChange={onChange} />
      <i aria-hidden="true" className="lbl"></i>
      <span className={toggle}>{label}</span>
    </label>
  );
};
export default Combo;
