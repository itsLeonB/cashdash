import { RecordField } from "@/components/admin/record-field";
import { Show } from "@/components/admin/show";
import TimestampField from "../components/TimestampField";
import { ImageField } from "@/components/admin";

const ProfileShow = () => (
  <Show>
    <div className="flex flex-col gap-4">
      <ImageField source="avatar" />
      <RecordField source="name" />
      <RecordField source="email" />
      <TimestampField propertyName="createdAt" />
      <TimestampField propertyName="updatedAt" />
    </div>
  </Show>
);

export default ProfileShow;
