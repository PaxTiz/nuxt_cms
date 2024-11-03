import type { Collection } from "./system";
import { medias } from "./system/medias";
import { pages } from "./system/pages";
import { users } from "./system/users";

export const collections: Record<string, Collection> = {
  users,
  pages,
  medias,
};

export const isSystemCollection = (name: string) => {
  return ["users", "pages", "medias"].includes(name);
};
