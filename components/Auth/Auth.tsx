import { Box, Button, FormControl, Typography } from "@mui/material";
import { Formik } from "formik";
import LoginValidate from "../../ValidationSchemas/LoginValidate";
import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { InputField } from "../InputField";
import { Props } from "./Auth.types";
import { LoginFields } from "../Objects";
import { getError } from "../../utils/functions";

const Auth = ({ login }: Props) => {
  const router = useRouter();

  return (
    <>
      <Typography variant={"h5"} textAlign={"center"}>
        Login
      </Typography>
      <Box display="flex" sx={{ margin: "auto", width: "65%", "& form": { width: "100%" }, "& form div": { marginTop: "15px" } }}>
        <Formik
          initialValues={LoginFields}
          validationSchema={LoginValidate}
          onSubmit={async (values) => {
            if ((await login(values)) !== undefined) {
              router.push("/");
            }
          }}
        >
          {({ values, errors, touched, handleSubmit, handleChange }) => (
            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column" }}>
              {Object.entries(values).map((item, idx) => {
                return (
                  <FormControl key={idx}>
                    <InputField error={getError(errors, item[0])} value={item[1]} fieldName={item[0]} onChange={handleChange} touched={touched} />
                  </FormControl>
                );
              })}
              <Button type="submit">Submit</Button>
              <Typography>
                Do not have an account?{" "}
                <Link href="/register" style={{ textDecoration: "none" }}>
                  Register
                </Link>
              </Typography>
            </form>
          )}
        </Formik>
      </Box>
    </>
  );
};

export default Auth;
