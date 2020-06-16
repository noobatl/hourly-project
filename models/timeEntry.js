module.exports = function (sequelize, DataTypes) {
  var TimeEntry = sequelize.define("TimeEntry", {
    timeEntryId: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },

    date: {
      type: DataTypes.DATE,
    },
    timespent: {
      type: DataTypes.INTEGER,
    },
    notes: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  });

  TimeEntry.associate = function (models) {
    TimeEntry.belongsTo(models.Task, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return TimeEntry;
};
