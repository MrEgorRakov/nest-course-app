import { Column, DataType, Model, Table } from 'sequelize-typescript';

@Table({
  tableName: 'customer',
  timestamps: false,
})
export class customer extends Model {
  @Column({
    type: DataType.STRING(200),
    allowNull: false,
  })
  fullname: string;

  @Column({
    defaultValue: false,
  })
  isActive: boolean;
}
