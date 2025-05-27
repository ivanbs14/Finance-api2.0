import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserRole = 'shepherd' | 'tesoureiro' | 'admin';
export type UserDocument = User & Document;

@Schema({ timestamps: true })
export class User {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true, unique: true })
  email: string;

  @Prop({ required: true })
  password: string;

  @Prop({ required: true })
  role: UserRole;

  @Prop({ required: true })
  churchName: string;

  @Prop()
  churchId?: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
