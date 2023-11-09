import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Question } from "./question.entity";
import { Expose } from "class-transformer";

@Entity({ name: 'account' })
export class Account {
    @PrimaryGeneratedColumn('uuid')
    @Expose()
    id: string;

    @Column('varchar', { unique: true })
    @Expose()
    email: string;

    @Column('varchar')
    password: string;

    @Column('varchar')
    @Expose()
    username: string;

    @Column('varchar', { default: 'https://i.imgur.com/t9Y4WFN.jpg' })
    @Expose()
    avatar: string;

    @Column('bool', { default: false })
    @Expose()
    isAdmin: boolean

    @OneToMany(() => Question, (question) => question.account)
    questions: Question[];
}  