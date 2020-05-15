import { Injectable } from '@nestjs/common';
import { Items } from './items.interface';

@Injectable()
export class ItemsService {
  private readonly items: Items[] = [];

  findAll(): Items[] {
    return this.items;
  }

  create(item: Items) {
    this.items.push(item);
  }
}
