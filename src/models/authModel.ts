import mongoose, { Schema, Document } from 'mongoose';
import { IUser } from '../interfaces/authInterface';

interface IUserModel extends IUser, Document {}

const userSchema = new Schema({
  username: { type: String },
  password: { type: String },
});

const User = mongoose.model<IUserModel>('User', userSchema);
export default User;
