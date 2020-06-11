module.exports = function (sequelize, DataTypes) {
    var Project = sequelize.define("Project", {

        projectId: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        title: {
            type: DataTypes.STRING,  
        },
        budget: {
            type: DataTypes.INTEGER,  
        },
        description: {
            type: DataTypes.TEXT,   
        },
        team : {
            type: DataTypes.STRING,
        },
        // status: {
        //     type: DataTypes.STRING,
        //     
        // }
    });

    Project.associate = function (models) {

        Project.hasMany(models.Task, {
            onDelete: "cascade"
        });

        Project.belongsToMany(models.User, {
            through: 'UserProject'
        });

    }



    Project.associate = function (models) {
        Project.hasMany(models.Task, {
            onDelete: "cascade"
        });
    };
    return Project;
}