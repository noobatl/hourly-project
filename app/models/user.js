module.exports = function(sequelize, DataTypes){

    const User = sequelize.define("User",{
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
        role: {
            type:DataTypes.STRING,
             allowNull: false,
             unique: true
        },
        email: {
            type:DataTypes.STRING,
            allowNull: false,
            unique: true
        }
    });

    return User;
}

