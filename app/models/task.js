module.exports = function (sequelize, DataTypes) {
    var Task = sequelize.define("Task", {
        taskId: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        taskName: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        }
    });

    Task.associate = function (models) {

        Task.belongsTo(models.Project, {
            foreignKey: {
                allowNull: false
            }
        });
        Task.belongsTo(models.User, {
            foreignKey: {
                allowNull: false
            }
        });

    
    }
    



    return Task;
};


