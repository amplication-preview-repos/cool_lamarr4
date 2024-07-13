import { User } from "../user/User";

export type Company = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  name: string | null;
  admin: string | null;
  users?: Array<User>;
};
