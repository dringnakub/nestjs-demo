import { Module, MiddlewareConsumer, RequestMethod } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ItemsModule } from './items/items.module';
import { ShoppingCartController } from './shopping-cart/shopping-cart.controller';
import { ItemsService } from './items/items.service';
import { ItemsController } from './items/items.controller';
import { AuthenticationMiddleware } from './common/authentication.middleware';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forRoot(), ItemsModule, UsersModule],
  controllers: [AppController, ItemsController, ShoppingCartController],
  providers: [AppService, ItemsService],
})
export class AppModule {
  public configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(AuthenticationMiddleware)
      .forRoutes(
        { path: '/items', method: RequestMethod.POST },
        { path: '/shopping-cart', method: RequestMethod.POST },
      );
  }
}
