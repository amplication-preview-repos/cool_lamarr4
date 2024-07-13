import { InputJsonValue } from "../../types";
import { UsageCreateNestedManyWithoutUsersInput } from "./UsageCreateNestedManyWithoutUsersInput";
import { CompanyWhereUniqueInput } from "../company/CompanyWhereUniqueInput";

export type UserCreateInput = {
  firstName?: string | null;
  lastName?: string | null;
  username: string;
  email?: string | null;
  password: string;
  roles: InputJsonValue;
  usages?: UsageCreateNestedManyWithoutUsersInput;
  company?: CompanyWhereUniqueInput | null;
};
