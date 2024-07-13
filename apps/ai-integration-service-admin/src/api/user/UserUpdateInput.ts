import { InputJsonValue } from "../../types";
import { UsageUpdateManyWithoutUsersInput } from "./UsageUpdateManyWithoutUsersInput";
import { CompanyWhereUniqueInput } from "../company/CompanyWhereUniqueInput";

export type UserUpdateInput = {
  firstName?: string | null;
  lastName?: string | null;
  username?: string;
  email?: string | null;
  password?: string;
  roles?: InputJsonValue;
  usages?: UsageUpdateManyWithoutUsersInput;
  company?: CompanyWhereUniqueInput | null;
};
