import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type StudentsDocument = Student & Document;

@Schema()
export class Student {
  @Prop({ required: true, unique: true, index: true })
  name: string;

  @Prop({ default: null, index: true })
  password: string;

  @Prop({ default: null, index: true })
  email: string;

  @Prop()
  createdAt: Date;

  @Prop()
  updatedAt: Date;
}

export const StudentsSchema = SchemaFactory.createForClass(Student).set(
  'timestamps',
  true,
);
