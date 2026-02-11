import { Resource } from "ra-core";
import SubscriptionCreate from "./create";
import SubscriptionList from "./list";
import SubscriptionShow from "./show";
import PlanEdit from "./edit";
import { DollarSign } from "lucide-react";

const subscriptionsResource = () => {
  return (
    <Resource
      name="subscriptions"
      list={SubscriptionList}
      edit={PlanEdit}
      show={SubscriptionShow}
      create={SubscriptionCreate}
      recordRepresentation={(record) =>
        `${record?.profileName}-${record?.planName}#${record?.id}`
      }
      icon={DollarSign}
    />
  );
};

export default subscriptionsResource;
