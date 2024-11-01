import { ObjectId } from 'mongodb';
import { Entity, ObjectIdColumn, Column } from 'typeorm';

@Entity()
export class LogEntity {
  @ObjectIdColumn()
  _id: ObjectId;

  @Column({
    type: 'varchar',
    nullable: false,
  })
  message: string;

  @Column({
    type: 'varchar',
    enum: ['info', 'warning', 'error'],
    nullable: false,
  })
  level: string;

  @Column({
    type: 'date',
  })
  timestamp: Date;

  @Column()
  metadata: any;
}
