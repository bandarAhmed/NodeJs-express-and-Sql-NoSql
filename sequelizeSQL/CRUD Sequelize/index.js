const { Sequelize, QueryTypes, DataTypes } = require('sequelize');

// Option 1: Passing a connection URI
const sequelize = new Sequelize('postgres://postgres:bndr@localhost:5432/nodejs') // Example for postgres
// define means creat objcet
const User = sequelize.define(
    // name of objact
    'User',
    {
        name: { type: DataTypes.STRING},
        email: { 
            type: DataTypes.STRING
        }
    },
    {
            tableName: 'users',
            timestamps: false
    }

);

async function main()
{
    // finde all usres 
    // const users = await User.findAll();

    // find on person
    // const users = await User.findByPk(3);

    // create new record
    // const user = new User({name: 'bandar', email: 'talel@afafll'});
    // await user.save();

    // update record
    // User.update({name: 'kaled'}, {where: {id: 1}})

    // delete users
    // await User.destroy({ 
    //     where: {id: 3}}
    //     );


// console.log(users)
}
main();
