import { Resource } from "ra-core";
import PlanCreate from "./create";
import PlanList from "./list";
import PlanShow from "./show";
import PlanEdit from "./edit";

const plansResource = () => {
  return (
    <Resource
      name="plans"
      list={PlanList}
      edit={PlanEdit}
      show={PlanShow}
      create={PlanCreate}
    />
  );
};

export default plansResource;
