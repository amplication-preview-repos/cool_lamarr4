import { UserCreateNestedManyWithoutCompaniesInput } from "./UserCreateNestedManyWithoutCompaniesInput";

export type CompanyCreateInput = {
  name?: string | null;
  admin?: string | null;
  users?: UserCreateNestedManyWithoutCompaniesInput;
};
