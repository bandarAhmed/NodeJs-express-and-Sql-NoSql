const { Sequelize, QueryTypes } = require('sequelize');

// Option 1: Passing a connection URI
const sequelize = new Sequelize('postgres://postgres:bndr@localhost:5432/nodejs') // Example for postgres
// add user
function createUser(name, email)
{
    return sequelize.query(
        `INSERT INTO users (name, email) VALUES ('${name}', '${email}')`,
        {type: QueryTypes.INSERT});
}
// take all users
function getUsers()
{
    return sequelize.query(
        `SELECT FROM users`,
        {type: QueryTypes.SELECT});
}
// delete for users
function deleteUser(id)
{
    return sequelize.query(
        `DELETE FROM users WHERE id=${id}`,
        {type: QueryTypes.DELETE});
}

async function main()
{
    // await createUser();
    // await deleteUser()
    const users = await getUsers();
    console.log(users)
}
main();
