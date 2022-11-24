import { IsNotEmpty, IsString, IsUrl, ValidateNested } from 'class-validator';
import { CreateBrandDto } from './create-brand.dto';
import { CreateCategoryDto } from './create-category.dto';

export class CreateProductDto {
  @IsNotEmpty()
  @IsString()
  readonly name: string;

  @IsNotEmpty()
  @ValidateNested()
  readonly category: CreateCategoryDto;

  @IsNotEmpty()
  @ValidateNested()
  readonly brand: CreateBrandDto;

  @IsNotEmpty()
  @IsUrl()
  readonly slug: string;

  @IsNotEmpty()
  @IsString()
  readonly status: string;
}
