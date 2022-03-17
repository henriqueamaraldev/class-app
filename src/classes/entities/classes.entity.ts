import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ClassesDocument = IClass & Document;

@Schema()
export class IClass {
  @Prop({ required: true, unique: true })
  name: string;

  @Prop({ required: true })
  subject: string;

  @Prop({ ref: 'Student' })
  students: string[];

  @Prop({ ref: 'Teacher' })
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
