import { StringFilter } from "../../util/StringFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { AiServiceWhereUniqueInput } from "../aiService/AiServiceWhereUniqueInput";

export type UsageWhereInput = {
  id?: StringFilter;
  usageAmount?: FloatNullableFilter;
  usageDate?: DateTimeNullableFilter;
  user?: UserWhereUniqueInput;
  aiService?: AiServiceWhereUniqueInput;
};
