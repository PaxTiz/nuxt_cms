import { collections } from "~/server/collections";

export default defineEventHandler(async (event) => {
  const collectionName = getRouterParam(event, "collection")!;

  const collection = collections[collectionName];
  if (!collection) {
    throw createError({ statusCode: 404 });
  }

  return collection;
});
