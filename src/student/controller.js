const pool = require('../../db')
const queries = require('./queries')

const getStudents = (req, res) => {
    pool.query(queries.getStudents, (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
    })
};

const getStudentByID = (req, res) => {
    const id = parseInt(req.params.id)
    pool.query(queries.getStudentByID, [id], (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
    })
}

//add Students
const addStudent = (req, res) => {
    const { user_id, username, password, email, created_on } = req.body;

    //check if email exists
    pool.query(queries.checkEmailExists, [email], (error, results) => {
        if (results.rows.length) {
            res.send("Email already exists.");
        }
    });

    //add student to Database
    pool.query(queries.addStudent, [user_id, username, password, email, created_on], (error, results) => {
        //if (error) throw error;
        res.status(201).send("Student Created Successfully");
    })
}

//remove Student
const removeStudent = (req, res) => {
    const id = parseInt(req.params.id)
    pool.query(queries.getStudentByID, [id], (error, results) => {
        const noStudentFound = !results.rows.length;
        if (noStudentFound) {
            res.send("Student does not exist in the database, could not remove.");
        }

        pool.query(queries.removeStudent, [id], (error,results) => {
            //if(error) throw error
            res.status(200).send("Student removed successfully.")
        })
    })
}

module.exports = {
    getStudents,
    getStudentByID,
    addStudent,
    removeStudent,
};