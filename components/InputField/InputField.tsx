import React from "react";
import { Input, InputLabel, Typography } from "@mui/material";
import { Props } from "./InputField.types";
import { capitalizeFieldName } from "../../utils/functions";

const InputField = ({ fieldName, onChange, touched, error, value }: Props) => {
  return (
    <>
      <InputLabel htmlFor={fieldName}>{capitalizeFieldName(fieldName)}</InputLabel>
      <Input type={fieldName === "password" || fieldName == "confirmPassword" ? "password" : fieldName} name={fieldName} onChange={onChange} value={value} />
      <Typography color="red">{error && touched && error}</Typography>
    </>
  );
};

export default InputField;
