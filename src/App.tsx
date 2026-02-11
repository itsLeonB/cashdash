import {
  Admin,
  EditGuesser,
  ListGuesser,
  ShowGuesser,
} from "@/components/admin";
import dataProvider from "./providers/data";
import authProvider from "./providers/auth";
import { Resource } from "ra-core";
import PlanCreate from "./resources/plans/create";

const App = () => (
  <Admin dataProvider={dataProvider} authProvider={authProvider}>
    <Resource
      name="plans"
      list={ListGuesser}
      edit={EditGuesser}
      show={ShowGuesser}
      create={PlanCreate}
    />
  </Admin>
);

export default App;
