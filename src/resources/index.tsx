import plansResource from "./plans";
import planVersionsResource from "./planVersions";

const resources = () => {
  return [plansResource(), planVersionsResource()];
};

export default resources;
