export const get_single_schema = {
  type: "object",
  properties: {
    data: {
      id: { type: "number" },
      email: { type: "string" },
      first_name: { type: "string" },
      last_name: { type: "string" },
      avatar: { type: "string" },
    },
    support: {
      url: { type: "string" },
      text: { type: "string" },
    },
  },
};

export const get_all_schema = {
  type: "object",
  properties: {
    page: { type: "number" },
    per_page: { type: "number" },
    total: { type: "number" },
    total_pages: { type: "number" },
    items: get_single_schema,
    data: {
      id: { type: "number" },
      email: { type: "string" },
      first_name: { type: "string" },
      last_name: { type: "string" },
      avatar: { type: "string" },
    },
    support: {
      url: { type: "string" },
      text: { type: "string" },
    },
  },
};
