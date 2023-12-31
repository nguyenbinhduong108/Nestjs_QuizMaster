import { BaseIdentity } from './../shared/interface/baseIdentity.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Question } from "./question.entity";
import { Expose } from "class-transformer";

@Entity({ name: 'category' })
export class Category extends BaseIdentity{
    @PrimaryGeneratedColumn('uuid')
    @Expose()
    id: string;

    @Column('varchar')
    @Expose()
    name: string;

    @Column('varchar')
    @Expose()
    image: string;

    @OneToMany(() => Question, (question) => question.category)
    questions: Question[];
}