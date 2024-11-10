export const create_required_schema = {
  type: "object",
  properties: {
    name: { type: "string" },
    job: { type: "string" },
    createdAt: { type: "string" },
  },
};

export const create_id_schema = {
  type: "object",
  properties: {
    id: { type: "number" },
    name: { type: "string" },
    job: { type: "string" },
    createdAt: { type: "string" },
  },
};
