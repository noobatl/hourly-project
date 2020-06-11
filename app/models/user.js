module.exports = function(sequelize, DataTypes){

    var User = sequelize.define("User", {
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
        username: {
            type:DataTypes.STRING,
             allowNull: false,
             unique: true
        },
        password: {
            type:DataTypes.STRING,
            allowNull: false
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
            through: 'UserProject'
        });
    }
    return User;
}

