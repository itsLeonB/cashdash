import { Admin } from "@/components/admin";
import dataProvider from "./providers/data";
import authProvider from "./providers/auth";
import resources from "./resources";

const App = () => (
  <Admin dataProvider={dataProvider} authProvider={authProvider}>
    {resources()}
  </Admin>
);

export default App;
