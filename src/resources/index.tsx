import paymentsResource from "./payments";
import plansResource from "./plans";
import planVersionsResource from "./planVersions";
import profilesResource from "./profiles";
import subscriptionsResource from "./subscriptions";

const resources = () => {
  return [
    plansResource(),
    planVersionsResource(),
    subscriptionsResource(),
    paymentsResource(),
    profilesResource(),
  ];
};

export default resources;
