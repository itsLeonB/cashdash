import { RecordField } from "@/components/admin/record-field";
import { Show } from "@/components/admin/show";
import TimestampField from "../components/TimestampField";
import { LinkBase } from "ra-core";
import { capitalize } from "lodash";

const PlanShow = () => (
  <Show>
    <div className="flex flex-col gap-4">
      <RecordField
        source="planName"
        label="Plan"
        render={(record) => (
          <LinkBase to={`/plans/${record.planId}/show`}>
            {record.planName}
          </LinkBase>
        )}
      />
      <div className="flex gap-8">
        <RecordField source="priceCurrency" label="Currency" />
        <RecordField source="priceAmount" label="Price" />
        <RecordField
          source="billingInterval"
          label="Billing interval"
          render={(record) => capitalize(record.billingInterval)}
        />
      </div>
      <div className="flex gap-8">
        <RecordField
          source="billUploadsDaily"
          label="Bill uploads daily limit"
        />
        <RecordField
          source="billUploadsMonthly"
          label="Bill uploads monthly limit"
        />
      </div>
      <div className="flex gap-8">
        <TimestampField propertyName="effectiveFrom" />
        <TimestampField propertyName="effectiveTo" />
      </div>
      <TimestampField propertyName="createdAt" />
      <TimestampField propertyName="updatedAt" />
    </div>
  </Show>
);

export default PlanShow;
