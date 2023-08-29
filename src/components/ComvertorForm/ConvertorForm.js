import Input from "../Input/Input";
import RadioBtn from "../RadioBtn/RadioBtn";
import "./ConvertorForm.css";

export default function ConvertorForm({
  courses,
  onClick,
  activeBtn,
  inputValue,
  onChange,
}) {
  return (
    <div className="form">
      <RadioBtn
        className="buttons"
        courses={courses}
        onClick={onClick}
        activeBtn={activeBtn}
      />
      <Input inputValue={inputValue} onChange={onChange} />
    </div>
  );
}
