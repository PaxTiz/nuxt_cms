import { randomUUID } from "node:crypto";

const _mockPages = [
  {
    __id__: randomUUID(),
    __status__: "draft",
    __createdAt__: new Date(),
    __updatedAt__: new Date(),
  },
  {
    __id__: randomUUID(),
    __status__: "draft",
    __createdAt__: new Date(),
    __updatedAt__: new Date(),
  },
  {
    __id__: randomUUID(),
    __status__: "draft",
    __createdAt__: new Date(),
    __updatedAt__: new Date(),
  },
  {
    __id__: randomUUID(),
    __status__: "draft",
    __createdAt__: new Date(),
    __updatedAt__: new Date(),
  },
  {
    __id__: randomUUID(),
    __status__: "draft",
    __createdAt__: new Date(),
    __updatedAt__: new Date(),
  },
];

export default defineEventHandler(() => {
  return {
    total: _mockPages.length,
    items: _mockPages,
  };
});
