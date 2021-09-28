const getStudents = "SELECT * FROM users";
const getStudentByID = "SELECT * FROM users WHERE  user_id = $1"

module.exports = {
    getStudents,
    getStudentByID
}