import { createClient } from "@sanity/client";
import { fetchQuery } from "./utils/supports";


const client = createClient({
  projectId: "hqiw07yb",
  dataset: "production",
  apiVersion: "2023-08-28",
  useCdn: true,
});

export const fetchFeeds = async () => {
  let data = await client.fetch(fetchQuery).then((feeds) => {
    return feeds;
  });
  return data;
};   