import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type StudentsDocument = Student & Document;

@Schema()
export class Student {
  @Prop({ required: true, unique: true })
  name: string;

  @Prop({ default: null })
  password: string;

  @Prop({ default: null })
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
