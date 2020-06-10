module.exports = function(sequelize, DataTypes){

    var User = sequelize.define(User,{
        userID:{
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        }, 
        firstname: {
            type:DataTypes.STRING,
            allowNull: false,
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
            unique: true
        }
    });

    return User;
}

