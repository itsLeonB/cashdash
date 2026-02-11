import { RecordField } from "@/components/admin";

interface TimestampFieldProps {
  propertyName: string;
}

const TimestampField = ({ propertyName }: TimestampFieldProps) => {
  return (
    <RecordField
      source={propertyName}
      render={(record) => new Date(record[propertyName]).toLocaleString()}
    />
  );
};

export default TimestampField;
