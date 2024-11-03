import { randomUUID } from "node:crypto";

const _mockPages = [
  {
    __id: randomUUID(),
    __status: "draft",
    __createdAt: new Date(),
    __updatedAt: new Date(),
  },
  {
    __id: randomUUID(),
    __status: "draft",
    __createdAt: new Date(),
    __updatedAt: new Date(),
  },
  {
    __id: randomUUID(),
    __status: "draft",
    __createdAt: new Date(),
    __updatedAt: new Date(),
  },
  {
    __id: randomUUID(),
    __status: "draft",
    __createdAt: new Date(),
    __updatedAt: new Date(),
  },
  {
    __id: randomUUID(),
    __status: "draft",
    __createdAt: new Date(),
    __updatedAt: new Date(),
  },
];

export default defineEventHandler(() => {
  return {
    total: _mockPages.length,
    items: _mockPages,
  };
});
