import {
  DateTimeField,
  EnumField,
  Field,
  InferField,
  StringField,
} from "~/server/fields/system";

type FieldsBaseType = Record<string, Field>;

export type CollectionDefinition<F extends FieldsBaseType> = {
  name: string;

  fields: F;

  display: {
    plural: string;

    singular: string;

    icon: string;
  };
};

export type Collection<F extends FieldsBaseType> = CollectionDefinition<F> & {
  fields: F & {
    __id: StringField;
    __status: EnumField<"draft" | "published">;
    __createdAt: DateTimeField;
    __updatedAt: DateTimeField;
  };
};

export const defineCollection = <F extends FieldsBaseType>(
  data: CollectionDefinition<F>
): Collection<F> => {
  const newData = data as Collection<F>;

  newData.fields["__id"] = {
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

  newData.fields["__status"] = {
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

  newData.fields["__createdAt"] = {
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

  newData.fields["__updatedAt"] = {
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

  return newData;
};

export type InferCollection<
  F extends FieldsBaseType,
  C extends Collection<F>,
> = {
  [K in keyof C["fields"]]: InferField<C["fields"][K]>;
};
