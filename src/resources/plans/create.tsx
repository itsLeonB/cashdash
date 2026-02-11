import { Create, SimpleForm, TextInput } from "@/components/admin";
import { required } from "ra-core";

const PlanCreate = () => (
  <Create>
    <SimpleForm>
      <TextInput source="name" label="Name" validate={required()} />
    </SimpleForm>
  </Create>
);

export default PlanCreate;
