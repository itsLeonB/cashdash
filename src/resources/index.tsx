import plansResource from "./plans";
import planVersionsResource from "./planVersions";
import profilesResource from "./profiles";
import subscriptionsResource from "./subscriptions";

const resources = () => {
  return [
    plansResource(),
    planVersionsResource(),
    subscriptionsResource(),
    profilesResource(),
  ];
};

export default resources;
