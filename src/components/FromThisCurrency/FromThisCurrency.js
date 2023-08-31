import ConvertorForm from "../ComvertorForm/ConvertorForm";
import { useEffect } from "react";

export default function FromThisCurrency({
  courses,
  activeBtnOut,
  setActiveBtnOut,
  currencies,
  activeBtnIn,
  courseInputIn,
  setCourseInputIn,
  setCourseInputOut,
}) {
  useEffect(() => {
    if (Object.keys(currencies).length > 0) {
      const result = (
        (currencies[activeBtnOut] * courseInputIn) /
        currencies[activeBtnIn]
      ).toFixed(2);
      setCourseInputOut(result);
    }
  }, [courseInputIn, activeBtnOut, activeBtnIn]);

  const onClick = (active, e) => {
    setActiveBtnOut(active);
  };
  const onChange = (e) => {
    if (!isNaN(e.target.value) && e.target.value.length < 19) {
      if (e.target.value.length === 0) {
        setCourseInputIn(1);
        return;
      }
      setCourseInputIn(e.target.value);
    }
  };
  return (
    <ConvertorForm
      courses={courses}
      activeBtn={activeBtnOut}
      onClick={onClick}
      inputValue={courseInputIn}
      onChange={onChange}
    />
  );
}
