import { IsString, IsInt, IsNotEmpty } from 'class-validator';

export class CreateItemDto {
  id:string

  @IsString()
  @IsNotEmpty()
  name: string;

  @IsInt()
  @IsNotEmpty()
  price: number;
}
