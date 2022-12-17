import React from "react";
import InputField from "./InputField";
import { Props } from "./InputField.types";

const InputFieldContainer = ({ fieldName, onChange, value, error, touched }: Props) => {
  return <InputField fieldName={fieldName} onChange={onChange} value={value} error={error} touched={touched} />;
};

export default InputFieldContainer;
