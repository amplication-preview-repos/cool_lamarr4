/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { UsageService } from "../usage.service";
import { UsageCreateInput } from "./UsageCreateInput";
import { Usage } from "./Usage";
import { UsageFindManyArgs } from "./UsageFindManyArgs";
import { UsageWhereUniqueInput } from "./UsageWhereUniqueInput";
import { UsageUpdateInput } from "./UsageUpdateInput";

export class UsageControllerBase {
  constructor(protected readonly service: UsageService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Usage })
  async createUsage(@common.Body() data: UsageCreateInput): Promise<Usage> {
    return await this.service.createUsage({
      data: {
        ...data,

        user: data.user
          ? {
              connect: data.user,
            }
          : undefined,

        aiService: data.aiService
          ? {
              connect: data.aiService,
            }
          : undefined,
      },
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        usageAmount: true,
        usageDate: true,

        user: {
          select: {
            id: true,
          },
        },

        aiService: {
          select: {
            id: true,
          },
        },
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Usage] })
  @ApiNestedQuery(UsageFindManyArgs)
  async usages(@common.Req() request: Request): Promise<Usage[]> {
    const args = plainToClass(UsageFindManyArgs, request.query);
    return this.service.usages({
      ...args,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        usageAmount: true,
        usageDate: true,

        user: {
          select: {
            id: true,
          },
        },

        aiService: {
          select: {
            id: true,
          },
        },
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Usage })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async usage(
    @common.Param() params: UsageWhereUniqueInput
  ): Promise<Usage | null> {
    const result = await this.service.usage({
      where: params,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        usageAmount: true,
        usageDate: true,

        user: {
          select: {
            id: true,
          },
        },

        aiService: {
          select: {
            id: true,
          },
        },
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Usage })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateUsage(
    @common.Param() params: UsageWhereUniqueInput,
    @common.Body() data: UsageUpdateInput
  ): Promise<Usage | null> {
    try {
      return await this.service.updateUsage({
        where: params,
        data: {
          ...data,

          user: data.user
            ? {
                connect: data.user,
              }
            : undefined,

          aiService: data.aiService
            ? {
                connect: data.aiService,
              }
            : undefined,
        },
        select: {
          id: true,
          createdAt: true,
          updatedAt: true,
          usageAmount: true,
          usageDate: true,

          user: {
            select: {
              id: true,
            },
          },

          aiService: {
            select: {
              id: true,
            },
          },
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Usage })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteUsage(
    @common.Param() params: UsageWhereUniqueInput
  ): Promise<Usage | null> {
    try {
      return await this.service.deleteUsage({
        where: params,
        select: {
          id: true,
          createdAt: true,
          updatedAt: true,
          usageAmount: true,
          usageDate: true,

          user: {
            select: {
              id: true,
            },
          },

          aiService: {
            select: {
              id: true,
            },
          },
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}
