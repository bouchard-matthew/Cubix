export interface Props {
  login: (e: any) => void;
}

export interface LoginFields {
  username: string;
  password: string;
}

export interface LoginFieldsError {
  username?: string;
  password?: string;
}

export interface LoginFieldsTouched {
  username?: boolean;
  password?: boolean;
}
