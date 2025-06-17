import mongoose from "mongoose";
import bcrypt from "bcrypt";

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true, //필수값을 받을 것인지
    unique: true, //중복되어진 값은 허용하지 않겠다
  },
  socialOnly: {
    type: Boolean,
    default: false,
  },
  avatarUrl: String,
  id: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
  },
  name: {
    type: String,
    required: true,
  },
  location: String, //값이 하나만 적용되면 되기 때문에 객체형태로 정의하지 않아도 된다!!
  videos: [{ type: mongoose.Schema.Types.ObjectId, ref: "Video" }],
});

userSchema.pre("save", async function () {
  if (this.isModified("password")) {
    this.password = await bcrypt.hash(this.password, 5); //this의 password 값을 찾아와서 5번 hashing한다
  }
});

const User = mongoose.model("User", userSchema); //user를 만듬으로 복수형의 원칙으로 인해 db에 users 생성됨
export default User;
