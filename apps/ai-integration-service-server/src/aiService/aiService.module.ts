import { Module } from "@nestjs/common";
import { AiServiceModuleBase } from "./base/aiService.module.base";
import { AiServiceService } from "./aiService.service";
import { AiServiceController } from "./aiService.controller";
import { AiServiceResolver } from "./aiService.resolver";

@Module({
  imports: [AiServiceModuleBase],
  controllers: [AiServiceController],
  providers: [AiServiceService, AiServiceResolver],
  exports: [AiServiceService],
})
export class AiServiceModule {}
