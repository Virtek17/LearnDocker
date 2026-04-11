import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity() // Этот декоратор говорит TypeORM: "Сделай из этого класса таблицу"
export class TodoItem {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  phone: string;
}