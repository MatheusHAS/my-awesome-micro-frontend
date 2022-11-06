import { Application, registerApplication, start } from "single-spa";

registerApplication({
  name: "@matheushas/navbar",
  app: () => System.import("@matheushas/navbar") as any,
  activeWhen: ["/"],
});

start({
  urlRerouteOnly: true,
});
