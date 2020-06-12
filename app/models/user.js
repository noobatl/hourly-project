module.exports = function(sequelize, DataTypes){

    const User = sequelize.define("User",{
        userId:{
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        }, 
        firstname: {
            type:DataTypes.STRING,
            allowNull: false
        },
        lastname: {
             type:DataTypes.STRING,
             allowNull: false
        }, 
        role: {
            type:DataTypes.STRING,
             allowNull: false,
             unique: true
        },
        email: {
            type:DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true
              }
        }
    });
    User.associate = function (models) {
        User.hasMany(models.Task, {
        });

        User.belongsToMany(models.Project, {
            through: 'UserProject',
        });
    }

    return User;
}

