import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TodoItem } from './items/entities/item.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AppService {
  constructor(
    @InjectRepository(TodoItem)
    private itemRepository: Repository<TodoItem>, // Внедряем репозиторий
  ) {}

  async getAllItems(): Promise<TodoItem[]> {
    return await this.itemRepository.find();
  }

  getHello(): string {
    return 'Hello World!';
  }
}
