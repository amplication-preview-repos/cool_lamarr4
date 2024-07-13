import { UserUpdateManyWithoutCompaniesInput } from "./UserUpdateManyWithoutCompaniesInput";

export type CompanyUpdateInput = {
  name?: string | null;
  admin?: string | null;
  users?: UserUpdateManyWithoutCompaniesInput;
};
