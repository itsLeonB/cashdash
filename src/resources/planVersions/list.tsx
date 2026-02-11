import { DataTable, List } from "@/components/admin";
import TimestampCol from "../components/TimestampCol";
import { formatCurrency } from "../configs/currency";
import { capitalize } from "lodash";

const PlanList = () => (
  <List>
    <DataTable>
      <DataTable.Col source="planName" label="Plan" />
      <DataTable.Col
        source="priceAmount"
        label="Price"
        render={(record) =>
          formatCurrency(record.priceAmount, record.priceCurrency)
        }
      />
      <DataTable.Col
        source="billingInterval"
        label="Billing interval"
        render={(record) => capitalize(record.billingInterval)}
      />
      <DataTable.Col
        source="billUploadsDaily"
        label="Bill uploads daily limit"
      />
      <DataTable.Col
        source="billUploadsMonthly"
        label="Bill uploads monthly limit"
      />
      <TimestampCol propertyName="effectiveFrom" />
      <TimestampCol propertyName="effectiveTo" />
      <TimestampCol propertyName="createdAt" />
      <TimestampCol propertyName="updatedAt" />
    </DataTable>
  </List>
);

export default PlanList;
