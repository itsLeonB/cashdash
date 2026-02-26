import {
  Edit,
  SimpleForm,
  ReferenceInput,
  DateTimeInput,
  TextInput,
} from "@/components/admin";

const SubscriptionEdit = () => (
  <Edit>
    <SimpleForm>
      <div className="flex flex-col gap-4">
        <ReferenceInput
          source="profileId"
          reference="profiles"
          label="Profile"
        />
        <ReferenceInput
          source="planVersionId"
          reference="plan-versions"
          label="Plan version"
        />
        <TextInput source="status" />
        <DateTimeInput source="currentPeriodStart" />
        <DateTimeInput source="currentPeriodEnd" />
      </div>
    </SimpleForm>
  </Edit>
);

export default SubscriptionEdit;
