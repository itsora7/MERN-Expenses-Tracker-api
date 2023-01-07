import UserSchema from "./UserSchema.js";

//create user
export const insertUser = (obj) => {
  UserSchema(obj).save();
};
//login user
export const loginUser = () => {
    UserSchema(obj).save();
  };

//delete user
export const deleteUser = (obj) => {
    UserSchema(obj).save();
  };