import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class DemandEntity {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    description: string

    @Column()
    sku: string

    @Column()
    status: string
};