const validaCpf = require('../../utils/cpfValidatorHelper.js');

'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Pessoa extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Pessoa.hasMany(models.Curso, { foreignKey: 'docente_id' });
      Pessoa.hasMany(models.Matricula, {
        foreignKey: 'estudante_id',
        scope: { status: 'matriculado' },
        as: 'aulasMatriculadas',
      });
      Pessoa.hasMany(models.Matricula, {
        foreignKey: 'estudante_id',
        as: 'todasAulasMatriculadas',
      });
    }
  }
  Pessoa.init(
    {
      nome: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: {
            args: [3, 30],
            msg: 'O nome deve ter entre 3 e 30 caracteres',
          },
        },
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          isEmail: {
            msg: 'O email deve ser válido',
          },
        },
      },
      cpf: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          isCpfValido: (cpf) => {
            if (!validaCpf(cpf)) {
              throw new Error('O CPF é inválido');
            }
          },
        },
      },
      ativo: DataTypes.BOOLEAN,
      role: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'Pessoa',
      tabelName: 'pessoas',
      paranoid: true,
      defaultScope: {
        where: {
          ativo: true,
        },
      },
      scopes: {
        listarTodos: {},
      },
    }
  );
  return Pessoa;
};
