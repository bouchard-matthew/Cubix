import { LoginFields } from "../../shared/types/login";

export interface Props {
  login: (values: LoginFields, setStatus: (status: string) => void) => Promise<void>;
}

export interface LoginFieldsError {
  username?: string;
  password?: string;
}

export interface LoginFieldsTouched {
  username?: boolean;
  password?: boolean;
}
