import mongoose from "mongoose";
import bcrypt from "bcrypt";

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true, //필수값을 받을 것인지
    unique: true, //중복되어진 값은 허용하지 않겠다
  },
  id: {
    type: String,
    required: true, //필수값을 받을 것인지
    unique: true, //중복되어진 값은 허용하지 않겠다
  },
  password: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  location: String, //값이 하나만 적용되면 되기 때문에 객체형태로 정의하지 않아도 된다!!
});

userSchema.pre("save", async function () {
  // this는 save할 사용자의 데이터
  this.password = await bcrypt.hash(this.password, 5); //this의 password 값을 찾아와서 5번 hashing한다
});

const User = mongoose.model("User", userSchema);
export default User;
