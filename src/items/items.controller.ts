import { Controller, Get, Post, Body, UsePipes, UseGuards } from '@nestjs/common';
import { ItemsService } from './items.service';
import { Items } from './items.interface';
import { ValidationPipe } from '../common/validation.pipe.pipe';
import { CreateItemDto } from './create-item.dto';
import { AdminGuard } from 'src/common/admin.guard';

@Controller('items')
export class ItemsController {
  constructor(private readonly itemService: ItemsService) {}

  @Get()
  async findAll(): Promise<Items[]> {
    return this.itemService.findAll();
  }

  @Post()
  @UseGuards(new AdminGuard())
  @UsePipes(new ValidationPipe())
  createItem(@Body() createItemDto: CreateItemDto) {
    this.itemService.create(createItemDto);
  }
}
