import ConvertorForm from "../ComvertorForm/ConvertorForm";

export default function FromThisCurrency({
  courses,
  activeBtn,
  setActiveBtn,
  courseInputOut,
}) {
  const onClick = (active, e) => {
    setActiveBtn(active);
  };
  return (
    <ConvertorForm
      courses={courses}
      activeBtn={activeBtn}
      onClick={onClick}
      nameRadioBtn={"inThisCurrency"}
      inputValue={courseInputOut}
      onChange={() => {}}
    />
  );
}
