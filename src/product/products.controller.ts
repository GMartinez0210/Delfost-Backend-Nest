import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Post()
  create(@Body('products') arrayCreateProductDto: Array<CreateProductDto>) {
    return this.productsService.createMany(arrayCreateProductDto);
  }

  @Get()
  findAll(@Query('name') name: string) {
    if (!!name) {
      return this.productsService.findAllByName(name);
    }

    return this.productsService.findAll();
  }
}
