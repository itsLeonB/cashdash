import { Analytics } from "@vercel/analytics/react";
import { Admin } from "@/components/admin";
import dataProvider from "./providers/data";
import authProvider from "./providers/auth";
import resources from "./resources";

const App = () => (
  <>
    <Admin dataProvider={dataProvider} authProvider={authProvider}>
      {resources()}
    </Admin>
    <Analytics />
  </>
);

export default App;
