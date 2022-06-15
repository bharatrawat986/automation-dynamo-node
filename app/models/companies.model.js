module.exports = (dynamoose) => {
  var schema = new dynamoose.Schema(
    {
      id: {
        type: String,
        required: [true, "required"],
      },
      title: {
        type: String,
        required: [true, "required"],
      },
      description: {
        type: String,
      },
      type: {
        type: String,
        enum: ["Individual", "Company"],
        required: [true, "required"],
      },
      position: {
        type: Number,
        required: [true, "required"],
      },
    },
    {
      timestamps: true,
    }
  );

  return dynamoose.model("companies", schema);
};
