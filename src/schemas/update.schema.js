export const update_required_schema = {
  type: "object",
  properties: {
    name: { type: "string" },
    job: { type: "string" },
    updatedAt: { type: "string" },
  },
};

export const Update_with_additional_data = {
  type: "object",
  properties: {
    id: { type: "number" },
    name: { type: "string" },
    job: { type: "string" },
    hobby: { type: "string" },
    updatedAt: { type: "string" },
  },
};
