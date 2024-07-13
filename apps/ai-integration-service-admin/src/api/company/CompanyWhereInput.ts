import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { UserListRelationFilter } from "../user/UserListRelationFilter";

export type CompanyWhereInput = {
  id?: StringFilter;
  name?: StringNullableFilter;
  admin?: StringNullableFilter;
  users?: UserListRelationFilter;
};
