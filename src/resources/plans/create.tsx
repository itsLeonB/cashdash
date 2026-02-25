import { Create, NumberInput, SimpleForm, TextInput } from "@/components/admin";
import { minValue, required } from "ra-core";

const PlanCreate = () => (
  <Create>
    <SimpleForm>
      <TextInput source="name" label="Name" validate={required()} />
      <NumberInput source="priority" validate={[required(), minValue(1)]} />
    </SimpleForm>
  </Create>
);

export default PlanCreate;
