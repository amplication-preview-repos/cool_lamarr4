import { Usage } from "../usage/Usage";

export type AiService = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  name: string | null;
  price: number | null;
  usages?: Array<Usage>;
};
