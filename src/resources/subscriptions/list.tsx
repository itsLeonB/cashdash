import { DataTable, List } from "@/components/admin";
import TimestampCol from "../components/TimestampCol";

const SubscriptionList = () => (
  <List>
    <DataTable>
      <DataTable.Col source="profileName" label="Profile" />
      <DataTable.Col source="planName" label="Plan" />
      <DataTable.Col source="status" />
      <DataTable.Col source="stripeCustomerId" label="Stripe Customer ID" />
      <TimestampCol propertyName="currentPeriodStart" />
      <TimestampCol propertyName="currentPeriodEnd" />
      <TimestampCol propertyName="createdAt" />
      <TimestampCol propertyName="updatedAt" />
    </DataTable>
  </List>
);

export default SubscriptionList;
