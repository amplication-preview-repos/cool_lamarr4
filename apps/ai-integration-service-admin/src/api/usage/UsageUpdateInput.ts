import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { AiServiceWhereUniqueInput } from "../aiService/AiServiceWhereUniqueInput";

export type UsageUpdateInput = {
  usageAmount?: number | null;
  usageDate?: Date | null;
  user?: UserWhereUniqueInput | null;
  aiService?: AiServiceWhereUniqueInput | null;
};
