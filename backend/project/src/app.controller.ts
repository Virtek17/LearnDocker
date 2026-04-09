import { Controller, Get } from '@nestjs/common';


@Controller("api")
export class AppController {
  @Get('items')
  getItems() {
    return [
      { id: 1, title: 'Сделать крутой фронтенд', status: 'In Progress' },
      { id: 2, title: 'Настроить Docker', status: 'Planned' },
      { id: 3, title: 'Покормить кота', status: 'Done' },
    ]
  }
}
