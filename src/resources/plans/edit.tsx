import {
  Edit,
  SimpleForm,
  BooleanInput,
  TextInput,
  NumberInput,
} from "@/components/admin";
import { minValue, required } from "ra-core";

const PlanEdit = () => (
  <Edit>
    <SimpleForm>
      <TextInput source="name" validate={required()} />
      <NumberInput source="priority" validate={[required(), minValue(1)]} />
      <BooleanInput source="isActive" label="Is active?" />
    </SimpleForm>
  </Edit>
);

export default PlanEdit;
