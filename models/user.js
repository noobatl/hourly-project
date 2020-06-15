// Creating our User model
module.exports = function (sequelize, DataTypes) {
    var User = sequelize.define("User", {
      userId: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      firstname: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      lastname: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      role: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          isEmail: true,
        },
      },
    });
    User.associate = function (models) {
      // Associating User with Projects
      User.hasMany(models.Project, {});
      // Associating User with Tasks
      User.hasMany(models.Task, {});
      User.belongsToMany(models.Project, {
        through: "userProject",
      });
    };
    return User;
  };