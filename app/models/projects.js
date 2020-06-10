module.exports = function (sequelize, DataTypes) {
    const Project = sequelize.define("Project", {
        name : DataTypes.STRING,
        budget : DataTypes.INTEGER,
        description : DataTypes.STRING,
        status : DataTypes.BOOLEAN,
    })

    Project.associate = function (models) {
        Project.hasMany(models.Task, {
            onDelete: "cascade"
        });
    };
    return Project;
}