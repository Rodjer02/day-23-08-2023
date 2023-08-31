import "./RadioBtn.css";
import { Button } from "@chakra-ui/react";
export default function RadioBtn({ courses, onClick, activeBtn }) {
  return (
    <div className="btns">
      {courses.map((currency, i, arr) => (
        <Button
          key={i}
          className={`${activeBtn === currency ? "active" : ""}`}
          style={{ padding: "20px 10px", border: "solid 1px black" }}
          onClick={() => onClick(currency)}
          colorScheme="gray"
        >
          {currency}
        </Button>
      ))}
    </div>
  );
}
