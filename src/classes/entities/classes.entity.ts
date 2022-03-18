import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ClassesDocument = IClass & Document;

@Schema()
export class IClass {
  @Prop({ required: true, unique: true, index: true })
  name: string;

  @Prop({ required: true, index: true })
  subject: string;

  @Prop({ ref: 'Student', index: true })
  students: string[];

  @Prop({ ref: 'Teacher', index: true })
  teacher: string;

  @Prop()
  createdAt: Date;

  @Prop()
  updatedAt: Date;
}

export const ClassesSchema = SchemaFactory.createForClass(IClass).set(
  'timestamps',
  true,
);
