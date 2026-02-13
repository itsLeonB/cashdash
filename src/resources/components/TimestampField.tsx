import { RecordField } from "@/components/admin";

interface TimestampFieldProps {
  propertyName: string;
}

const TimestampField = ({ propertyName }: TimestampFieldProps) => {
  return (
    <RecordField
      source={propertyName}
      render={(record) =>
        record[propertyName]
          ? new Date(record[propertyName]).toLocaleString()
          : "-"
      }
    />
  );
};

export default TimestampField;
