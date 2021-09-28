const getStudents = "SELECT * FROM users";
const getStudentByID = "SELECT * FROM users WHERE  user_id = $1"
const checkEmailExists = "SELECT s FROM users s WHERE s.email = $1";
const addStudent =
    "INSERT INTO users (user_id,username,password,email, created_on) VALUES ($1, $2, $3, $4, $5)";
const removeStudent = 
    "DELETE FROM users WHERE user_id = $1"
module.exports = {
    getStudents,
    getStudentByID,
    checkEmailExists,
    addStudent,
    removeStudent,
}