import { RecordField } from "@/components/admin/record-field";
import { Show } from "@/components/admin/show";
import TimestampField from "../components/TimestampField";
import { LinkBase } from "ra-core";

const PaymentShow = () => (
  <Show>
    <div className="flex flex-col gap-4">
      <RecordField
        source="subscriptionId"
        label="Subscription"
        render={(record) => (
          <LinkBase to={`/subscriptions/${record.subscriptionId}/show`}>
            {record.subscriptionId}
          </LinkBase>
        )}
      />
      <RecordField source="status" />
      <RecordField source="currency" />
      <RecordField source="amount" />
      <RecordField source="gatewaySubscriptionId" label="Stripe Subscription ID" />
      <TimestampField propertyName="startsAt" />
      <TimestampField propertyName="endsAt" />
      <TimestampField propertyName="paidAt" />
      <TimestampField propertyName="expiredAt" />
      <TimestampField propertyName="createdAt" />
      <TimestampField propertyName="updatedAt" />
    </div>
  </Show>
);

export default PaymentShow;
