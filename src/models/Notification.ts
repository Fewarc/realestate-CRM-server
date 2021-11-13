import { Field, ID, Int, ObjectType } from "type-graphql";
import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { NotificationType } from "../enums/NotificationType";

@Entity()
@ObjectType()
export class Notification extends BaseEntity {

  @Field(() => ID, { nullable: true })
  @PrimaryGeneratedColumn({ type: 'int' })
  id!: number

  @Field(() => Int, { nullable: true })
  @Column({ type: 'int', nullable: true })
  userId: number

  @Field(() => String, { nullable: true })
  @Column('varchar', { length: 100, nullable: true })
  content: string

  @Field(() => NotificationType, { nullable: true })
  @Column({ type: 'enum', enum: NotificationType, default: NotificationType.NOTIFICATION })
  type: NotificationType
}