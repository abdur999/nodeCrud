module.exports = mongoose => {
  var schema = mongoose.Schema(
    {
      naame: String,
      email: String,
      phone: String,
      published: Boolean
    },
    { timestamps: true }
  );

  schema.method("toJSON", function() {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });

  const Tutorial = mongoose.model("user", schema);
  return Tutorial;
};
