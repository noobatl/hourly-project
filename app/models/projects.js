module.exports = function (sequelize, DataTypes) {
    var Project = sequelize.define("Project", {

        projectId: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        budget: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: false,
        },

        status: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
        }
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