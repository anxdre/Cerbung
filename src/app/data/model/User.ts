export type User = {
  success?: boolean;
  user?:    UserClass;
  token?:   string;
}

export type UserClass = {
  id?:              number;
  name?:            string;
  email?:           string;
  photoURL?:        null;
  emailVerifiedAt?: null;
  createdAt?:       Date;
  updatedAt?:       Date;
}
