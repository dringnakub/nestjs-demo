import { Injectable } from '@nestjs/common';
import { IItems } from './items.interface';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class ItemsService {
  private items: IItems[] = [];

  findAll(): IItems[] {
    return this.items;
  }

  findOne(id: string) {
    this.items = this.items.filter(item => item.id === id);
    return this.items;
  }

  deleteItem(id: string) {
    this.items = this.items.filter(item => item.id !== id);
  }

  updateItem(id: string, item: IItems) {
    const findData = this.items.find(item => item.id === id);
    findData.name = item.name;
    findData.price = item.price;

    return findData;
  }

  create(item: IItems) {
    console.log('service create ', item);
    item.id = uuidv4();
    this.items = this.items.concat(item);
    return item;
  }
}
