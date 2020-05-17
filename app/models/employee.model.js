module.exports = (mongoose) => {
  const schema = mongoose.Schema(
    {
      firstname: {
        type: String,
        required: true,
      },
      middlename: {
        type: String,
        default: "",
      },
      familyname: {
        type: String,
        required: true,
      },
      gender: {
        type: String,
        default: "unknown",
      },
      contactinfo: {
        type: String,
        default: "no info",
      },
      birthday: {
        type: Date,
        default: Date.now,
      },
      salary: {
        type: Number,
        default: 0,
      },
      position: {
        type: String,
        required: true,
      },
    },
    { timestamps: true }
  );

  schema.method("toJSON", function () {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });

  const Employee = mongoose.model("Employee", schema);

  return Employee;
};
