module.exports = (mongoose) => {
  const schema = mongoose.Schema(
    {
      firstname: String,
      middlename: String,
      familyname: String,
      gender: String,
      contactinfo: String,
      birthday: Date,
      salary: Number,
      position: String,
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
