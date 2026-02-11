import { DataTable } from "@/components/admin";

interface TimestampColProps {
  propertyName: string;
}

const TimestampCol = ({ propertyName }: TimestampColProps) => {
  return (
    <DataTable.Col
      source={propertyName}
      render={(record) =>
        record[propertyName]
          ? new Date(record[propertyName]).toLocaleString()
          : "-"
      }
    />
  );
};

export default TimestampCol;
