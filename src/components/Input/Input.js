import "./Input.css";
import { Input } from "@chakra-ui/react";

export default function costomInput({ inputValue, onChange }) {
  return (
    <Input
      placeholder="large size"
      size="lg"
      value={inputValue}
      onChange={onChange}
    />
  );
}
