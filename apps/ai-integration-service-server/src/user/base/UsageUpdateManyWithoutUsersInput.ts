/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { UsageWhereUniqueInput } from "../../usage/base/UsageWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class UsageUpdateManyWithoutUsersInput {
  @Field(() => [UsageWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [UsageWhereUniqueInput],
  })
  connect?: Array<UsageWhereUniqueInput>;

  @Field(() => [UsageWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [UsageWhereUniqueInput],
  })
  disconnect?: Array<UsageWhereUniqueInput>;

  @Field(() => [UsageWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [UsageWhereUniqueInput],
  })
  set?: Array<UsageWhereUniqueInput>;
}

export { UsageUpdateManyWithoutUsersInput as UsageUpdateManyWithoutUsersInput };
