export interface Props {
  register: (values: RegisterFields, setStatus: () => void) => Promise<boolean>;
}

export interface RegisterFields {
  username: string;
  password: string;
}

export interface RegisterFieldsError {
  username?: string;
  password?: string;
}

export interface RegisterFieldsTouched {
  username?: boolean;
  password?: boolean;
}
