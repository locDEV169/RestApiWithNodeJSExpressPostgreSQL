const getUsers = "SELECT * FROM users";
const getUserByID = "SELECT * FROM users WHERE  user_id = $1"
const checkEmailExists = "SELECT s FROM users s WHERE s.email = $1";
const addUser =
    "INSERT INTO users (user_id,username,password,email, created_on) VALUES ($1, $2, $3, $4, $5)";
const removeUser = 
    "DELETE FROM users WHERE user_id = $1"
module.exports = {
    getUsers,
    getUserByID,
    checkEmailExists,
    addUser,
    removeUser,
}