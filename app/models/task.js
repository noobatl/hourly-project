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
        },
        assignedUserID: {
            type: DataTypes.INTEGER,
        },
        taskDescription: {
            type: DataTypes.TEXT,
        }

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