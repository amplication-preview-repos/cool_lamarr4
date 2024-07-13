import { UsageCreateNestedManyWithoutAiServicesInput } from "./UsageCreateNestedManyWithoutAiServicesInput";

export type AiServiceCreateInput = {
  name?: string | null;
  price?: number | null;
  usages?: UsageCreateNestedManyWithoutAiServicesInput;
};
