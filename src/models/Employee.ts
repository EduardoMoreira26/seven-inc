import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn } from 'typeorm';

@Entity('employees')
export default class Employee {

  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  name: string;

  @Column()
  bornDate: string;

  @Column()
  salary: number;

  @Column()
  position: string;
}