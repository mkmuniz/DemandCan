import { Column, CreateDateColumn, BeforeInsert, Entity, PrimaryGeneratedColumn } from "typeorm";
import moment from "moment";

@Entity()
export class DemandEntity {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    description: string

    @Column()
    sku: string

    @Column()
    totalPlan: string

    @Column({ default: 'OPEN' })
    status: string

    @CreateDateColumn()
    createdAt: Date
};