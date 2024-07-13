import { JsonValue } from "type-fest";
import { Usage } from "../usage/Usage";
import { Company } from "../company/Company";

export type User = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  firstName: string | null;
  lastName: string | null;
  username: string;
  email: string | null;
  roles: JsonValue;
  usages?: Array<Usage>;
  company?: Company | null;
};
