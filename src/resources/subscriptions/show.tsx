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
      <TimestampField propertyName="endsAt" />
      <TimestampField propertyName="canceledAt" />
    </div>
  </Show>
);

export default SubscriptionShow;
