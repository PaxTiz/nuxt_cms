import { Collection } from "~/server/collections/system";
import { medias } from "~/server/collections/system/medias";
import { pages } from "~/server/collections/system/pages";
import { users } from "~/server/collections/system/users";

export default defineEventHandler((): Record<string, Collection> => {
  return {
    pages,
    medias,
    users,
  };
});
