import { UsageUpdateManyWithoutAiServicesInput } from "./UsageUpdateManyWithoutAiServicesInput";

export type AiServiceUpdateInput = {
  name?: string | null;
  price?: number | null;
  usages?: UsageUpdateManyWithoutAiServicesInput;
};
