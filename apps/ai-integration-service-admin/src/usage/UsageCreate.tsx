import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  DateTimeInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { UserTitle } from "../user/UserTitle";
import { AiServiceTitle } from "../aiService/AiServiceTitle";

export const UsageCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput label="usageAmount" source="usageAmount" />
        <DateTimeInput label="usageDate" source="usageDate" />
        <ReferenceInput source="user.id" reference="User" label="user">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="aiService.id"
          reference="AiService"
          label="aiService"
        >
          <SelectInput optionText={AiServiceTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
