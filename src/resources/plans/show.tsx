import { RecordField } from "@/components/admin/record-field";
import { Show } from "@/components/admin/show";
import TimestampField from "../components/TimestampField";

const PlanShow = () => (
  <Show>
    <div className="flex flex-col gap-4">
      <RecordField source="name" />
      <RecordField source="priority" />
      <RecordField
        source="isActive"
        render={(record) => (record.isActive ? "Yes" : "No")}
      />
      <TimestampField propertyName="createdAt" />
      <TimestampField propertyName="updatedAt" />
    </div>
  </Show>
);

export default PlanShow;
