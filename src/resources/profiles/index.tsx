import { Resource } from "ra-core";
import ProfileList from "./list";
import ProfileShow from "./show";
import { User } from "lucide-react";

const profilesResource = () => {
  return (
    <Resource
      name="profiles"
      list={ProfileList}
      show={ProfileShow}
      icon={User}
    />
  );
};

export default profilesResource;
