import React from "react";

export type InputType = "default" | "disabled" | "readonly" | "password" | "error";

export interface InputProps {
  type?: InputType;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onClear?: () => void;
  errorText?: string;
  remainTime?: string;
  showPasswordToggle?: boolean;
  address?: boolean;
}

const Input: React.FC<InputProps> = ({
  type = "default",
  placeholder = "입력하세요",
  value,
  onChange,
  onClear,
  errorText,
  remainTime,
  address = false,
  // address는 주소찾기 버튼을 위한 prop입니다.
  showPasswordToggle = false,
}) => {
  const isDisabled = type === "disabled";
  const isReadonly = type === "readonly";
  const isError = type === "error";
  const isPassword = type === "password";

  return (
    <div className={`input-box textType-2 mt-20 ${isError ? "error" : ""} ${value ? "hasValue" : ""}`}>
      {address && (
        <div className={`inline-flex ${isDisabled ? "disabled" : ""} ${isReadonly ? "readonly" : ""}`}>
          <div className="flex flex-11">
            <input
              type={isPassword ? "password" : "text"}
              title={placeholder}
              placeholder={placeholder}
              aria-label={placeholder}
              value={value}
              onChange={onChange}
              disabled={isDisabled}
              readOnly={isReadonly}
            />
            <div className="input-etc">
              {remainTime && <span className="remain-time">{remainTime}</span>}
              {onClear && <button type="button" className="btn input-del" aria-label="입력항목 초기화" onClick={onClear}></button>}
              {isPassword && showPasswordToggle && <button type="button" className="btn show-toggle off" aria-label="비밀번호 보이기"></button>}
            </div>
            <button type="button" className="btn btn-search" aria-label="검색하기"></button>
          </div>
        </div>
      )}
      {!address && (
        <div className={`inline-flex ${isDisabled ? "disabled" : ""} ${isReadonly ? "readonly" : ""}`}>
          <input
            type={isPassword ? "password" : "text"}
            title={placeholder}
            placeholder={placeholder}
            aria-label={placeholder}
            value={value}
            onChange={onChange}
            disabled={isDisabled}
            readOnly={isReadonly}
          />
          <div className="input-etc">
            {remainTime && <span className="remain-time">{remainTime}</span>}
            {onClear && <button type="button" className="btn input-del" aria-label="입력항목 초기화" onClick={onClear}></button>}
            {isPassword && showPasswordToggle && <button type="button" className="btn show-toggle off" aria-label="비밀번호 보이기"></button>}
          </div>
        </div>
      )}
      {isError && errorText && <div className="error-txt">{errorText}</div>}
    </div>
  );
};

export default Input;
