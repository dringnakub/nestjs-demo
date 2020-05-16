import {
  Controller,
  Get,
  Post,
  Body,
  UsePipes,
  UseGuards,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { ItemsService } from './items.service';
import { IItems } from './items.interface';
import { ValidationPipe } from '../common/validation.pipe.pipe';
import { CreateItemDto } from './create-item.dto';
import { AdminGuard } from 'src/common/admin.guard';

@Controller('items')
export class ItemsController {
  constructor(private readonly itemService: ItemsService) {}

  @Get()
  async findAll(): Promise<IItems[]> {
    return this.itemService.findAll();
  }

  @Get(':id')
  find(@Param('id') id: string) {
    console.log('id id ', id);
    return this.itemService.findOne(id);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.itemService.deleteItem(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() createItemDto: CreateItemDto) {
    return this.itemService.updateItem(id, createItemDto);
  }

  @Post()
  // @UseGuards(new AdminGuard())
  @UsePipes(new ValidationPipe())
  createItem(@Body() createItemDto: CreateItemDto) {
    console.log('create ', createItemDto);
    return this.itemService.create(createItemDto);
  }
}
