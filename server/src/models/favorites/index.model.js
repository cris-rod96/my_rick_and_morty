import { DataTypes } from "sequelize";

export default (sequelize) => {
  sequelize.define(
    "Favorite",
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },

      UserId: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
          model: "Users",
          key: "id",
        },
      },
      CharacterId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "Characters",
          key: "id",
        },
      },
    },
    {
      timestamps: false,
    }
  );
};
