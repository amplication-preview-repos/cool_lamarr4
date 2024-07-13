import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { AiServiceService } from "./aiService.service";
import { AiServiceControllerBase } from "./base/aiService.controller.base";

@swagger.ApiTags("aiServices")
@common.Controller("aiServices")
export class AiServiceController extends AiServiceControllerBase {
  constructor(protected readonly service: AiServiceService) {
    super(service);
  }
}
