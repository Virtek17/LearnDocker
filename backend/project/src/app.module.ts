import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TodoItem } from './items/entities/item.entity'; // проверь путь!
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      // Docker прокидывает DATABASE_URL, но можно прописать и так:
      host: 'db', 
      port: 5432,
      username: 'user',
      password: 'password',
      database: 'nest_db',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      autoLoadEntities: true,
      synchronize: true, // Включает авто-создание таблиц (только для разработки!)
    }),
    TypeOrmModule.forFeature([TodoItem]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
