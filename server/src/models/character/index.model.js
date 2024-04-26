import { DataTypes } from "sequelize";

export default (sequelize) => {
  sequelize.define(
    "Character",
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      status: {
        type: DataTypes.ENUM,
        allowNull: false,
        values: ["Alive", "Dead", "unknown"],
      },
      species: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      gender: {
        type: DataTypes.ENUM,
        allowNull: false,
        values: ["Male", "Female", "Genderless", "unknown"],
      },
      image: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          isUrl: true,
        },
      },
    },
    {
      timestamps: false,
    }
  );
};
