type RelationalValue = {
  collection: string;

  id: string;
};

export type BaseField<T> = {
  required?: boolean;

  defaultValue?: T;

  defaultValueFn?: () => T;

  views?: {
    list?: boolean;

    create?: boolean;

    update?: boolean;
  };

  sortable?: boolean;

  filterable?: boolean;

  label?: string;
};

type BaseRelationField = Omit<BaseField<RelationalValue>, "defaultValue"> & {
  collection: string;
};

type BaseFileField = BaseRelationField & {
  mimeTypes?: Array<string>;
};

export type RelationField = BaseRelationField & {
  type: "relation";
  collection: string;
};

export type StringField = BaseField<string> & {
  type: "string";

  minLength?: number;

  maxLength?: number;
};

export type NumberField = BaseField<number> & {
  type: "number";

  min?: number;

  max?: number;

  float?: boolean;
};

export type PasswordField = BaseField<string> & {
  type: "password";
};

export type BooleanField = BaseField<boolean> & {
  type: "boolean";
};

export type EnumField<T> = BaseField<T> & {
  type: "enum";

  values: Array<T>;
};

export type DateTimeField = BaseField<string | number | Date> & {
  type: "datetime";

  min?: string | number | Date;

  max?: string | number | Date;
};

export type FileField = BaseFileField & {
  type: "file";
};

export type ImageField = BaseFileField & {
  type: "image";
  variants?: Array<{
    width?: number;
    height?: number;
    format?: "png" | "jpeg" | "webp";
  }>;
};

export type Field =
  | StringField
  | PasswordField
  | NumberField
  | BooleanField
  | EnumField<unknown>
  | DateTimeField
  | RelationField
  | FileField
  | ImageField;

export type InferField<F extends Field> = F extends StringField
  ? string
  : F extends FileField
    ? string
    : F extends ImageField
      ? string
      : F extends RelationField
        ? string
        : F extends NumberField
          ? number
          : F extends DateTimeField
            ? Date | string | number
            : F extends BooleanField
              ? boolean
              : F extends EnumField<infer R>
                ? R
                : never;
