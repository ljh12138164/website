interface BaseUser {
  email: string;
  name: string;
  password: string;
}

export interface SignInParams extends BaseUser {}
export interface SignUpParams extends BaseUser {
  salt: string;
}

export enum Role {
  User = 'user',
  Admin = 'admin',
}
export interface UserInfo {
  userId: string;
  role: Role;
  avatar: string;
  name: string;
  email: string;
}
