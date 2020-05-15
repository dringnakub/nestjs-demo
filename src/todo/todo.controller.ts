import { Controller, Get, Post, Body, Delete, Param } from '@nestjs/common';
import { TodoService } from './todo.service';

@Controller('todo')
export class TodoController {
  constructor(private todoService: TodoService) {}

  @Get()
  getTodos() {
    return this.todoService.getTodo();
  }

  @Post()
  postTodo(@Body('title') title: string, @Body('subtitle') subtitle: string) {
    const data = this.todoService.addTodo(title, subtitle);
    return data;
  }

  @Delete('/:id')
  deleteTodoById(@Param('id') id: string) {
    return this.todoService.removeTodo(id);
  }
}
