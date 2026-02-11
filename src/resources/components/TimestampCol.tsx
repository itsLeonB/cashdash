import { DataTable } from "@/components/admin";

interface TimestampColProps {
  propertyName: string;
}

const TimestampCol = ({ propertyName }: TimestampColProps) => {
  return (
    <DataTable.Col
      source={propertyName}
      render={(record) => new Date(record[propertyName]).toLocaleString()}
    />
  );
};

export default TimestampCol;
