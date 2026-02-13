import { DataTable, List } from "@/components/admin";
import TimestampCol from "../components/TimestampCol";

const SubscriptionList = () => (
  <List>
    <DataTable>
      <DataTable.Col source="profileName" label="Profile" />
      <DataTable.Col source="planName" label="Plan" />
      <TimestampCol propertyName="endsAt" />
      <TimestampCol propertyName="canceledAt" />
      <TimestampCol propertyName="createdAt" />
      <TimestampCol propertyName="updatedAt" />
    </DataTable>
  </List>
);

export default SubscriptionList;
