import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateProductDto } from './dto/create-product.dto';
import { Product } from './entities/product.entity';

@Injectable()
export class ProductsService {
  constructor(
    @InjectModel(Product.name) private productModule: Model<Product>,
  ) {}

  async createMany(arrayCreateProductDto: Array<CreateProductDto>) {
    const products = await this.productModule.insertMany(arrayCreateProductDto);
    return products;
  }

  async findAll() {
    const products = await this.productModule.find();
    return products;
  }

  async findAllByName(name: string) {
    const filter = {
      $or: [
        { name: { $regex: name } },
        { slug: { $regex: name } },
        { 'category.name': { $regex: name } },
        { 'brand.name': { $regex: name } },
      ],
    };
    const product = await this.productModule.find(filter);
    return product;
  }
}
