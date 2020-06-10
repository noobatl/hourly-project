module.exports = function(sequelize, DataTypes) {
    var Task = sequelize.define("Task", {
        taskID: {
            type: DataTypes.INT,
            autoIncrement: true,
            primaryKey: true,
        },
        taskName: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        projectID: {
            type: DataTypes.INT,
            autoIncrement: true,
        },
        assignedUserID: {
            type: DataTypes.INT,
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