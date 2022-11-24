import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import mongoose from 'mongoose';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Post()
  create(@Body() createProductDto: CreateProductDto) {
    return this.productsService.create(createProductDto);
  }

  @Get()
  findAll() {
    return this.productsService.findAll();
  }

  @Get(':name')
  findOne(@Param('name') name: string) {
    return this.productsService.findOne(name);
  }

  @Patch()
  update(
    @Body('id') id: mongoose.Types.ObjectId,
    @Body() updateProductDto: UpdateProductDto,
  ) {
    return this.productsService.update(id, updateProductDto);
  }

  @Delete()
  remove(@Body('id') id: mongoose.Types.ObjectId) {
    return this.productsService.remove(id);
  }
}

@Controller('product')
export class ProductController {
  constructor(private readonly productsService: ProductsService) {}

  @Get(':name')
  findOne(@Param('name') name: string) {
    return this.productsService.findOne(name);
  }
}
