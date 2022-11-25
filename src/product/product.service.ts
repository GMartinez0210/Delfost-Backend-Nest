import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import mongoose, { Model } from 'mongoose';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './entities/product.entity';

@Injectable()
export class ProductService {
  constructor(
    @InjectModel(Product.name) private productModule: Model<Product>,
  ) {}

  async create(createProductDto: CreateProductDto) {
    const product = await this.productModule.create(createProductDto);
    return product;
  }

  async findOne(id: string) {
    const filter = { _id: id };
    const product = await this.productModule.findOne(filter);
    return product;
  }

  async update(id: string, updateProductDto: UpdateProductDto) {
    const filter = { _id: id };
    const options = updateProductDto;

    const product = await this.productModule.updateOne(filter, options);
    return product.acknowledged;
  }

  async remove(id: string) {
    const filter = { _id: id };
    const product = await this.productModule.deleteOne(filter);
    return product.acknowledged;
  }
}
