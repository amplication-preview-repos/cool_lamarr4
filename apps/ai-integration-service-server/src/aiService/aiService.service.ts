import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { AiServiceServiceBase } from "./base/aiService.service.base";

@Injectable()
export class AiServiceService extends AiServiceServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
