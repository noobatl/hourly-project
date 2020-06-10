module.exports = function(sequelize, DataTypes) {
    var Task = sequelize.define("Task", {
        taskID: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        taskName: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        projectID: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
        },
        assignedUserID: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
        },
    });

    Task.associate = function(models) {
        Task.belongsTo(models.Project, {
            foreignKey: {
                allowNull: false
            }
        });
    };


    return Task;
};