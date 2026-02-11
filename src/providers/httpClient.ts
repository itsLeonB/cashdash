import { fetchUtils } from "ra-core";

const httpClient = async (url: string, options: fetchUtils.Options = {}) => {
  options.headers ??= new Headers({ Accept: "application/json" });
  const token = localStorage.getItem("token") || "";

  options.user = {
    authenticated: !!token,
    token: `Bearer ${token}`,
  };

  return fetchUtils
    .fetchJson(url, options)
    .then(({ status, headers, body, json }) => {
      return { status, headers, body, json: json?.data };
    });
};

export default httpClient;
