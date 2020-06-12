module.exports = function (sequelize, DataTypes) {
    var Task = sequelize.define("Task", {

        taskID:{
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        }, 
        taskName: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
<<<<<<< HEAD
=======

        projectID: {
            type: DataTypes.INTEGER,
        },
>>>>>>> f9ea209d5b9f5d51485905e9c6337fd846bc2f3c
        assignedUserID: {
            type: DataTypes.INTEGER,
        },
        taskDescription: {
            type: DataTypes.TEXT
        }
<<<<<<< HEAD
=======

>>>>>>> f9ea209d5b9f5d51485905e9c6337fd846bc2f3c
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

        Task.hasMany(models.TimeEntry, {
            onDelete: "cascade"
        });
    };

    // Task.associate = function(models) {
    //     Task.belongsTo(models.User, {
    //         foreignKey: {
    //             allowNull: false
    //         }
    //     });
    //     Task.hasMany(models.TimeEntry, {
    //         onDelete: "cascade"
    //     });
    // }

    return Task;
};


