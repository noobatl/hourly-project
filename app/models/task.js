module.exports = function(sequelize, DataTypes) {
    var Task = sequelize.define("Task", {
        taskID: {
            type: DataTypes.INT,
            primaryKey: true,
        },
        taskName: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        projectID: DataTypes.INT,
        assignedUserID:  DataTypes.INT
        
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