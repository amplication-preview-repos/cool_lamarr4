import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { UsageListRelationFilter } from "../usage/UsageListRelationFilter";
import { CompanyWhereUniqueInput } from "../company/CompanyWhereUniqueInput";

export type UserWhereInput = {
  id?: StringFilter;
  firstName?: StringNullableFilter;
  lastName?: StringNullableFilter;
  username?: StringFilter;
  email?: StringNullableFilter;
  usages?: UsageListRelationFilter;
  company?: CompanyWhereUniqueInput;
};
