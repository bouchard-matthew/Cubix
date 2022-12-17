import React from "react";
import { Box, Button, FormControl, Typography } from "@mui/material";
import { Formik } from "formik";
import RegisterValidate from "../../ValidationSchemas/RegisterValidate";
import Link from "next/link";
import { RegistrationFields } from "../Objects";
import { Props } from "./Register.types";
import { getError } from "../../utils/functions";
import { InputField } from "../InputField";
import { useRouter } from "next/router";

const Register = ({ register }: Props) => {
  const router = useRouter();
  return (
    <>
      <Typography variant={"h5"} textAlign={"center"}>
        Registration
      </Typography>
      <Box display="flex" sx={{ margin: "auto", width: "65%", "& form": { width: "100%" }, "& form div": { marginTop: "15px" } }}>
        <Formik
          initialValues={RegistrationFields}
          validationSchema={RegisterValidate}
          onSubmit={async (values, { setStatus }) => {
            if (await register(values, setStatus)) {
              router.push("/");
            }
          }}
        >
          {({ values, errors, touched, handleSubmit, handleChange, status }) => (
            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column" }}>
              <Typography color="red">{status}</Typography>
              {Object.entries(values).map((item, idx) => {
                return (
                  <FormControl key={idx}>
                    <InputField error={getError(errors, item[0])} value={item[1]} fieldName={item[0]} onChange={handleChange} touched={touched} />
                  </FormControl>
                );
              })}
              <Button type="submit">Register</Button>
            </form>
          )}
        </Formik>
      </Box>
    </>
  );
};

export default Register;
