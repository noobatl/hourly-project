module.exports = function (sequelize, DataTypes) {
    const Project = sequelize.define("Project", {
        projectID: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
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
            type: DataTypes.STRING,
            allowNull: false,
        }
    });

    Project.associate = function (models) {
        Project.hasMany(models.Task, {
            onDelete: "cascade"
        });
    };

    return Project;
};