import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  DateTimeInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { UserTitle } from "../user/UserTitle";
import { AiServiceTitle } from "../aiService/AiServiceTitle";

export const UsageEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
