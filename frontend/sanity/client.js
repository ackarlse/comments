import { createClient } from "@sanity/client";

export const client = createClient({
  projectId: "e4jbkkar",
  dataset: "production",
  apiVersion: "v2025-03-24",
  useCdn: true,
});

/*

sette opp en for å skrive til klient
*/
export const writeClient = createClient({
  projectId: "e4jbkkar",
  dataset: "production",
  apiVersion: "v2025-03-24",
  useCdn: true,
  token:
    "skkQTr911k1lBVf8BQTjrFFixBRDfiTZRYEvueoVEj7ZeoeYsBgn0ThfiYvnYSmMoD9agIelAapYRA5oL2jRD8pDphKdeY4D56p5QEHoLawx0jiTu9tF60oR2x7XlEkOGV9a29sd0SvO7rJsdBFWKUfEGYy2kqlHMm5fevsXE9t7Yogct8u2",
});
