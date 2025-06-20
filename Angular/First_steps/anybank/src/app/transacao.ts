import { nanoid } from 'nanoid';

export class TransacaoClass {
  readonly id = nanoid();
  readonly data = new Date();
  constructor(
    public readonly tipo: TipoTransacao,
    public readonly valor: number
  ) {}
}

export enum TipoTransacao {
  DEPOSITO = 'Deposito',
  SAQUE = 'Saque',
}
