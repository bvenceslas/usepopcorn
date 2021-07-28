/* eslint-disable */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type PersonDocument = Person & Document;

@Schema()
export class Person {
  @Prop()
  name: string;

  @Prop()
  year: number;
}

export const PersonSchema = SchemaFactory.createForClass(Person);