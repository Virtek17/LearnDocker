import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';


@Controller("api")
export class AppController {
  constructor(private readonly appService: AppService) {}

  // @Get('itemsS')
  // getItems() {
  //   return [
  //     { id: 1, title: 'Сделать крутой фронтенд', status: 'In Progress' },
  //     { id: 2, title: 'Настроить Docker', status: 'Planned' },
  //     { id: 3, title: 'Покормить кота', status: 'Done' },
  //   ]
  // }

  @Get("monkey") 
  getMonkey() {
     return [
      { id: 1, title: 'Обезьян 1', img: 'monkey' },
      { id: 2, title: 'Обезьян 2', img: 'monkey1' },
      { id: 3, title: 'Обезьян 3', img: 'monkey2' },
    ]
  }

  @Get('items')
  async getItems() {
    return await this.appService.getAllItems();
  }
}
