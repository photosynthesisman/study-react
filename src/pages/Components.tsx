import React, { useState } from "react";
import Input from "../components/common/input";
import Select from "../components/common/Select";

const Components: React.FC = () => {
  const [value1, setValue1] = useState("");
  const [value2, setValue2] = useState("");
  const [checked1, setChecked1] = useState(true);
  const handleChange1 = (e: React.ChangeEvent<HTMLInputElement>) => {
    setChecked1(e.target.checked);
  };
  const [checked2, setChecked2] = useState(true);
  const handleChange2 = (e: React.ChangeEvent<HTMLInputElement>) => {
    setChecked2(e.target.checked);
  };
  const [selected1, setSelected1] = useState("rdo2");
  const [selected2, setSelected2] = useState("rdo3");
  return (
    <div>
      <div>
        <Input type="default" placeholder="입력하세요" value={value1} onChange={(e) => setValue1(e.target.value)} onClear={() => setValue1("")} />
        <Input type="disabled" value="disabled 형태" />
        <Input type="readonly" value="readonly 형태" />
        <Input type="password" placeholder="비밀번호 입력" remainTime="4:58" showPasswordToggle />
        <Input type="error" placeholder="입력하세요" errorText="Helper text" remainTime="4:58" />
        <Input type="default" address placeholder="입력하세요" value={value2} onChange={(e) => setValue2(e.target.value)} onClear={() => setValue2("")} />
        <Input type="readonly" address placeholder="주소" />
      </div>
      <div className="mt-20">
        <Select checked={checked1} type="checkbox" label="체크박스" id="check1" className="checkbox size-lg" onChange={handleChange1} />
        <Select disabled type="checkbox" label="체크박스" id="check2" className="checkbox size-lg" />
        <Select checked disabled type="checkbox" label="체크박스" id="check3" className="checkbox size-lg" />
        <Select type="checkbox" label="체크박스" id="check4" className="checkbox size-lg" />
      </div>
      <div className="mt-20">
        <Select
          disabled
          checked={selected1 === "rdo1"}
          type="radio"
          label="라디오박스"
          name="rdo1"
          id="rdo1"
          className="radio"
          onChange={() => setSelected1("rdo1")}
        />
        <Select
          disabled
          checked={selected1 === "rdo2"}
          type="radio"
          label="라디오박스"
          name="rdo1"
          id="rdo2"
          className="radio"
          onChange={() => setSelected1("rdo2")}
        />
        <Select checked={selected2 === "rdo3"} type="radio" label="라디오박스" name="rdo2" id="rdo3" className="radio" onChange={() => setSelected2("rdo3")} />
        <Select checked={selected2 === "rdo4"} type="radio" label="라디오박스" name="rdo2" id="rdo4" className="radio" onChange={() => setSelected2("rdo4")} />
      </div>
      <div className="mt-20">
        <Select
          checked={checked2}
          type="checkbox"
          label="체크박스"
          id="check5"
          className="checkbox toggle-type-1"
          onChange={handleChange2}
          toggle="status-info"
        />
        <Select disabled type="checkbox" label="체크박스" id="check6" className="checkbox toggle-type-1" toggle="status-info" />
        <Select checked disabled type="checkbox" label="체크박스" id="check7" className="checkbox toggle-type-1" toggle="status-info" />
      </div>
    </div>
  );
};

export default Components;
