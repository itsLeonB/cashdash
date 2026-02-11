import jsonServerProvider from "ra-data-json-server";
import config from "./config";
import httpClient from "./httpClient";

const dataProvider = jsonServerProvider(config.baseUrl, httpClient);

export default dataProvider;
