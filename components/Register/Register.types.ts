import { RegisterFields } from "../../shared/types/register";

export interface Props {
  register: (values: RegisterFields, setStatus: (status: string) => void) => Promise<void>;
}

export interface RegisterFieldsError {
  username?: string;
  password?: string;
}

export interface RegisterFieldsTouched {
  username?: boolean;
  password?: boolean;
}
