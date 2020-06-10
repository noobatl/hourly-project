module.exports = function(sequelize, DataTypes){

    var TimeEntry = sequelize.define(TimeEntry,{
        date:{
            type: DataTypes.DATE
        }, 
        timespent: {
            type:DataTypes.INTEGER
        },
        notes: {
             type:DataTypes.STRING,
             allowNull: true
        },
        taskID:{
            type:DataTypes.STRING,
            allowNull: false
        }
    });

    TimeEntry.associate = function(models) {
        TimeEntry.belongsTo(models.Task, {
            foreignKey: {
                allowNull: false
            }
        });
    };
    
    return TimeEntry;
}

