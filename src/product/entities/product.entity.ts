import { Prop, raw, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Product extends Document {
  @Prop({ required: true })
  name: string;

  @Prop(
    raw({
      name: { type: String },
      slug: { type: String },
    }),
  )
  category: Record<string, any>;

  @Prop(
    raw({
      name: { type: String },
      slug: { type: String },
    }),
  )
  brand: Record<string, any>;

  @Prop({ required: true })
  slug: string;

  @Prop({ default: 'stock' })
  status: string;
}

export const productSchema = SchemaFactory.createForClass(Product);
