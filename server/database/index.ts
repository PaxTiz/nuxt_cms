import { Kysely, MysqlDialect } from "kysely";
import { createPool } from "mysql2";
import { InferCollection } from "~/server/collections/system";
import { collections } from "../collections";

export type Database = {
  [K in keyof typeof collections]: InferCollection<
    (typeof collections)[K]["fields"],
    (typeof collections)[K]
  >;
};

let _database: Kysely<Database> | null = null;

export const useDatabase = () => {
  if (!_database) {
    const dialect = new MysqlDialect({
      pool: createPool({
        database: "nuxt_cms",
        host: "localhost",
        user: "root",
        password: "root",
      }),
    });

    _database = new Kysely<Database>({ dialect, log: ["query", "error"] });
  }

  return _database;
};
