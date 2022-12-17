import { LoginFieldsTouched } from "../Auth/Auth.types";

export interface Props {
  fieldName: string;
  onChange: (e: React.ChangeEvent<any>) => void;
  value: string;
  error: string;
  touched: LoginFieldsTouched;
}
