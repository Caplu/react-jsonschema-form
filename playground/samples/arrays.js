module.exports = {
  schema: {
    type: "array",
    items: {
      type: "string",
      default: "bazinga"
    }
  },
  uiSchema: {},
  formData: ["foo", "bar"]
};