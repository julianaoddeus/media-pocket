export interface IUser {
  id: string;
  email: string;
  password: string;
  createdAt: string;
  user_metadata: {
    name: string;
  };
}
