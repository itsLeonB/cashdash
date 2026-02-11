import { Resource } from "ra-core";
import PlanVersionCreate from "./create";
import PlanList from "./list";
import PlanShow from "./show";
import PlanEdit from "./edit";

const planVersionsResource = () => {
  return (
    <Resource
      name="plan-versions"
      list={PlanList}
      edit={PlanEdit}
      show={PlanShow}
      create={PlanVersionCreate}
      options={{ label: "Plan Versions" }}
      recordRepresentation={(record) => `${record?.planName}#${record?.id}`}
    />
  );
};

export default planVersionsResource;
