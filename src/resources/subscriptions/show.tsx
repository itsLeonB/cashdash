import { RecordField } from "@/components/admin/record-field";
import { Show } from "@/components/admin/show";
import TimestampField from "../components/TimestampField";
import { LinkBase } from "ra-core";

const SubscriptionShow = () => (
  <Show>
    <div className="flex flex-col gap-4">
      <RecordField
        source="profileName"
        label="Profile"
        render={(record) => (
          <LinkBase to={`/profiles/${record.profileId}/show`}>
            {record.profileName}
          </LinkBase>
        )}
      />
      <RecordField
        source="planName"
        label="Plan"
        render={(record) => (
          <LinkBase to={`/plan-versions/${record.planVersionId}/show`}>
            {record.planName}
          </LinkBase>
        )}
      />
      <RecordField source="status" />
      <TimestampField propertyName="currentPeriodStart" />
      <TimestampField propertyName="currentPeriodEnd" />
      <TimestampField propertyName="createdAt" />
      <TimestampField propertyName="updatedAt" />
    </div>
  </Show>
);

export default SubscriptionShow;
