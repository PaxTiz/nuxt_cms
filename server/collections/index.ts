import { medias } from "./system/medias";
import { pages } from "./system/pages";
import { users } from "./system/users";

export const collections = {
  users,
  pages,
  medias,
} as const;

export const isSystemCollection = (name: keyof typeof collections) => {
  return ["users", "pages", "medias"].includes(name);
};
