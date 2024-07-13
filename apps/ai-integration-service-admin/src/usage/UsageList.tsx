import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { USER_TITLE_FIELD } from "../user/UserTitle";
import { AISERVICE_TITLE_FIELD } from "../aiService/AiServiceTitle";

export const UsageList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Usages"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="usageAmount" source="usageAmount" />
        <TextField label="usageDate" source="usageDate" />
        <ReferenceField label="user" source="user.id" reference="User">
          <TextField source={USER_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField
          label="aiService"
          source="aiservice.id"
          reference="AiService"
        >
          <TextField source={AISERVICE_TITLE_FIELD} />
        </ReferenceField>
      </Datagrid>
    </List>
  );
};
