import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type TeachersDocument = Teacher & Document;

@Schema()
export class Teacher {
  @Prop({ required: true, unique: true, index: true })
  name: string;

  @Prop({ default: null, index: true })
  subject?: string[];

  @Prop()
  createdAt: Date;

  @Prop()
  updatedAt: Date;
}

export const TeachersSchema = SchemaFactory.createForClass(Teacher).set(
  'timestamps',
  true,
);
