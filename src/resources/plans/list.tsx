import { DataTable, List } from "@/components/admin";
import TimestampCol from "../components/TimestampCol";
import { CheckSquare, Square } from "lucide-react";

const PlanList = () => (
  <List>
    <DataTable>
      <DataTable.Col source="name" />
      <DataTable.Col source="priority" />
      <DataTable.Col
        source="isActive"
        label="Is active?"
        render={(record) =>
          record.isActive ? (
            <CheckSquare className="w-4 h-4" />
          ) : (
            <Square className="w-4 h-4" />
          )
        }
      />
      <TimestampCol propertyName="createdAt" />
      <TimestampCol propertyName="updatedAt" />
    </DataTable>
  </List>
);

export default PlanList;
