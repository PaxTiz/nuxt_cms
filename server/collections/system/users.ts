import { defineCollection } from ".";

export const users = defineCollection({
  display: {
    plural: "Users",
    singular: "User",
    icon: "lucide:users",
  },

  name: "users",

  fields: {
    firstname: {
      type: "string",
    },

    lastname: {
      type: "string",
    },

    email: {
      type: "string",
    },

    password: {
      type: "string",
    },

    isEnabled: {
      type: "boolean",
      defaultValue: false,
    },

    avatar: {
      type: "image",
      collection: "medias",
      variants: [
        {
          width: 30,
          height: 30,
          format: "webp",
        },
      ],
    },
  },
});
