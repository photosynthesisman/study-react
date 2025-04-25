import React, { useState } from "react";
import Input from "../components/common/input";
import Select from "../components/common/Select";

const Components: React.FC = () => {
  const [value1, setValue1] = useState("");
  const [value2, setValue2] = useState("");
  return (
    <div>
      <Input type="default" placeholder="입력하세요" value={value1} onChange={(e) => setValue1(e.target.value)} onClear={() => setValue1("")} />
      <Input type="disabled" value="disabled 형태" />
      <Input type="readonly" value="readonly 형태" />
      <Input type="password" placeholder="비밀번호 입력" remainTime="4:58" showPasswordToggle />
      <Input type="error" placeholder="입력하세요" errorText="Helper text" remainTime="4:58" />
      <Input type="default" address placeholder="입력하세요" value={value2} onChange={(e) => setValue2(e.target.value)} onClear={() => setValue2("")} />
      <Input type="readonly" address placeholder="주소" />
      <Select type="checkbox" label="체크박스" id="check1" className="checkbox size-lg" />
      <Select type="checkbox" label="체크박스" id="check2" className="checkbox size-lg" />
      <Select type="checkbox" label="체크박스" id="check3" className="checkbox size-lg" />
      <Select type="checkbox" label="체크박스" id="check4" className="checkbox size-lg" />

      <Select type="radio" label="라디오박스" name="rdo1" id="rdo1" className="radio" />
      <Select type="radio" label="라디오박스" name="rdo1" id="rdo2" className="radio" />
      <Select type="radio" label="라디오박스" name="rdo1" id="rdo3" className="radio" />
      <Select type="radio" label="라디오박스" name="rdo1" id="rdo4" className="radio" />
    </div>
  );
};

export default Components;
