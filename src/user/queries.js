const getUsers = "SELECT * FROM users";
const getUserByID = "SELECT * FROM users WHERE  user_id = $1"
const checkEmailExists = "SELECT s FROM users s WHERE s.email = $1";
const addUser =
    "INSERT INTO users (user_id,username,password,email, created_on) VALUES ($1, $2, $3, $4, $5)";
const removeUser =
    "DELETE FROM users WHERE user_id = $1"

const migrateDb = 
    `
    Create table users (
        user_id INT not null PRIMARY KEY,
        username VARCHAR(50),
        password VARCHAR(50),
        email VARCHAR(255),
        created_on timestamp )

     INSERT INTO users (user_id,username,password,email, created_on) VALUES (10, 'locfuho', '123', 'locfuho@gmail.com', '2021-09-30T17:00:00.000Z')
        
    `;
module.exports = {
    getUsers,
    getUserByID,
    checkEmailExists,
    addUser,
    removeUser,
    migrateDb,
}