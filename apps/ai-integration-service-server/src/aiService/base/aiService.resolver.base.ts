/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { AiService } from "./AiService";
import { AiServiceCountArgs } from "./AiServiceCountArgs";
import { AiServiceFindManyArgs } from "./AiServiceFindManyArgs";
import { AiServiceFindUniqueArgs } from "./AiServiceFindUniqueArgs";
import { CreateAiServiceArgs } from "./CreateAiServiceArgs";
import { UpdateAiServiceArgs } from "./UpdateAiServiceArgs";
import { DeleteAiServiceArgs } from "./DeleteAiServiceArgs";
import { UsageFindManyArgs } from "../../usage/base/UsageFindManyArgs";
import { Usage } from "../../usage/base/Usage";
import { AiServiceService } from "../aiService.service";
@graphql.Resolver(() => AiService)
export class AiServiceResolverBase {
  constructor(protected readonly service: AiServiceService) {}

  async _aiServicesMeta(
    @graphql.Args() args: AiServiceCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [AiService])
  async aiServices(
    @graphql.Args() args: AiServiceFindManyArgs
  ): Promise<AiService[]> {
    return this.service.aiServices(args);
  }

  @graphql.Query(() => AiService, { nullable: true })
  async aiService(
    @graphql.Args() args: AiServiceFindUniqueArgs
  ): Promise<AiService | null> {
    const result = await this.service.aiService(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => AiService)
  async createAiService(
    @graphql.Args() args: CreateAiServiceArgs
  ): Promise<AiService> {
    return await this.service.createAiService({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => AiService)
  async updateAiService(
    @graphql.Args() args: UpdateAiServiceArgs
  ): Promise<AiService | null> {
    try {
      return await this.service.updateAiService({
        ...args,
        data: args.data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => AiService)
  async deleteAiService(
    @graphql.Args() args: DeleteAiServiceArgs
  ): Promise<AiService | null> {
    try {
      return await this.service.deleteAiService(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.ResolveField(() => [Usage], { name: "usages" })
  async findUsages(
    @graphql.Parent() parent: AiService,
    @graphql.Args() args: UsageFindManyArgs
  ): Promise<Usage[]> {
    const results = await this.service.findUsages(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }
}
