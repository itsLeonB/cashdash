import {
  Create,
  DateTimeInput,
  ReferenceInput,
  SimpleForm,
} from "@/components/admin";

const SubscriptionCreate = () => (
  <Create>
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
        <DateTimeInput source="endsAt" />
      </div>
    </SimpleForm>
  </Create>
);

export default SubscriptionCreate;
