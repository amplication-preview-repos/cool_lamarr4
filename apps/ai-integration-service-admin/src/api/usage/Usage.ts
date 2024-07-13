import { User } from "../user/User";
import { AiService } from "../aiService/AiService";

export type Usage = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  usageAmount: number | null;
  usageDate: Date | null;
  user?: User | null;
  aiService?: AiService | null;
};
