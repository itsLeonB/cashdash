import { DataTable, List } from "@/components/admin";
import TimestampCol from "../components/TimestampCol";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const ProfileList = () => (
  <List>
    <DataTable>
      <DataTable.Col
        source="name"
        render={(record) => (
          <div className="flex items-center gap-2 p-1">
            <Avatar className="h-8 w-8">
              <AvatarImage src={record?.avatar} role="presentation" />
              <AvatarFallback>{record?.name?.charAt(0)}</AvatarFallback>
            </Avatar>
            {" " + record?.name}
          </div>
        )}
      />
      <DataTable.Col source="email" />
      <TimestampCol propertyName="createdAt" />
      <TimestampCol propertyName="updatedAt" />
    </DataTable>
  </List>
);

export default ProfileList;
