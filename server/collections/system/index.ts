import { Field } from "~/server/fields/system";

export type Collection = {
  name: string;

  fields: Record<string, Field>;

  display: {
    plural: string;

    singular: string;

    icon: string;
  };
};

export const defineCollection = (data: Collection): Collection => {
  data.fields["__id__"] = {
    type: "string",
    defaultValue: "RANDOM_ID",
    defaultValueFn: () => "",
    sortable: true,
    views: {
      list: false,
      create: false,
      update: false,
    },
    label: "#",
  };

  data.fields["__status__"] = {
    type: "enum",
    values: ["draft", "published"],
    sortable: true,
    filterable: true,
    views: {
      list: true,
      create: true,
      update: true,
    },
    label: "Status",
  };

  data.fields["__createdAt__"] = {
    type: "datetime",
    defaultValue: "NOW",
    defaultValueFn: () => new Date(),
    sortable: true,
    views: {
      list: true,
      create: false,
      update: false,
    },
    label: "Created at",
  };

  data.fields["__updatedAt__"] = {
    type: "datetime",
    defaultValue: "NOW",
    defaultValueFn: () => new Date(),
    sortable: true,
    views: {
      list: true,
      create: false,
      update: false,
    },
    label: "Updated at",
  };

  return data;
};
