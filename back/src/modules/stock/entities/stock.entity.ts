import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class StockEntity {
    @PrimaryGeneratedColumn()
    id: number

    @CreateDateColumn()
    startDate: Date

    @CreateDateColumn()
    endDate: Date

    @Column()
    totalPlan: string

    @Column()
    totalProd: string
};