import { AiServiceWhereInput } from "./AiServiceWhereInput";
import { AiServiceOrderByInput } from "./AiServiceOrderByInput";

export type AiServiceFindManyArgs = {
  where?: AiServiceWhereInput;
  orderBy?: Array<AiServiceOrderByInput>;
  skip?: number;
  take?: number;
};
