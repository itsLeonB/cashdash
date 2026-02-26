import { DataTable, List } from "@/components/admin";
import TimestampCol from "../components/TimestampCol";
import { formatCurrency } from "../configs/currency";

const PaymentList = () => (
  <List>
    <DataTable>
      <DataTable.Col source="subscriptionId" label="Subscription" />
      <DataTable.Col source="status" />
      <DataTable.Col
        source="amount"
        render={(record) => formatCurrency(record.amount, record.currency)}
      />
      <TimestampCol propertyName="startsAt" />
      <TimestampCol propertyName="endsAt" />
      <TimestampCol propertyName="paidAt" />
      <TimestampCol propertyName="expiredAt" />
      <TimestampCol propertyName="createdAt" />
      <TimestampCol propertyName="updatedAt" />
    </DataTable>
  </List>
);

export default PaymentList;
