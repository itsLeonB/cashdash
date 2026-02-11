import { Edit, SimpleForm, BooleanInput, TextInput } from "@/components/admin";
import { required } from "ra-core";

const PlanEdit = () => (
  <Edit>
    <SimpleForm>
      <TextInput source="name" validate={required()} />
      <BooleanInput source="isActive" label="Is active?" />
    </SimpleForm>
  </Edit>
);

export default PlanEdit;
