import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import mongoose, { Model } from 'mongoose';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './entities/product.entity';

@Injectable()
export class ProductsService {
  constructor(
    @InjectModel(Product.name) private productModule: Model<Product>,
  ) {}

  async create(createProductDto: CreateProductDto) {
    const product = await this.productModule.create(createProductDto);
    return product;
  }

  async findAll() {
    const products = await this.productModule.find();
    return products;
  }

  async findOne(name: string) {
    const filter = {
      $or: [
        { name: { $regex: name } },
        { 'category.name': { $regex: name } },
        { 'brand.name': { $regex: name } },
      ],
    };
    const product = await this.productModule.findOne(filter);
    return product;
  }

  update(id: mongoose.Types.ObjectId, updateProductDto: UpdateProductDto) {
    return `This action updates a #${id} product`;
  }

  async remove(id: mongoose.Types.ObjectId) {
    const filter = { _id: id };
    const product = await this.productModule.deleteOne(filter);
    return product;
  }
}
