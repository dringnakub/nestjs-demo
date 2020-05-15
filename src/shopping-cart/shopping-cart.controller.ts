import { Controller, Get, Post } from '@nestjs/common';

@Controller('shopping-cart')
export class ShoppingCartController {
    @Post()
    createShopping(){
        return "Mock Shopping";
    }
}
