import * as graphql from "@nestjs/graphql";
import { AiServiceResolverBase } from "./base/aiService.resolver.base";
import { AiService } from "./base/AiService";
import { AiServiceService } from "./aiService.service";

@graphql.Resolver(() => AiService)
export class AiServiceResolver extends AiServiceResolverBase {
  constructor(protected readonly service: AiServiceService) {
    super(service);
  }
}
