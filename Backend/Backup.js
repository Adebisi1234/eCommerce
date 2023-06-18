userSchema.pre("save", async function (next) {
  // run this only when the password field has been modified
  if (!this.isModified("password")) return next();

  // hash the password with a cost of 12
  this.password = await bcrypt.hash(this.password, 12);

  next();
});

userSchema.methods.correctPassword = async function (
  userPassword,
  correctPassword
) {
  return await bcrypt.compare(userPassword, correctPassword);
};
