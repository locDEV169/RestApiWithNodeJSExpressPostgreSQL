const pool = require('../../db')
const queries = require('./queries')

const getUsers = (req, res) => {
    pool.query(queries.getUsers, (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
    })
};

const getUserByID = (req, res) => {
    const id = parseInt(req.params.id)
    pool.query(queries.getUserByID, [id], (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
    })
}

//add Users
const addUser = (req, res) => {
    const { user_id, username, password, email, created_on } = req.body;

    //check if email exists
    pool.query(queries.checkEmailExists, [email], (error, results) => {
        if (results.rows.length) {
            res.send("Email already exists.");
        }
    });

    //add User to Database
    pool.query(queries.addUser, [user_id, username, password, email, created_on], (error, results) => {
        //if (error) throw error;
        res.status(201).send("User Created Successfully");
    })
}

//remove User
const removeUser = (req, res) => {
    const id = parseInt(req.params.id)
    pool.query(queries.getUserByID, [id], (error, results) => {
        const noUserFound = !results.rows.length;
        if (noUserFound) {
            res.send("User does not exist in the database, could not remove.");
        }

        pool.query(queries.removeUser, [id], (error,results) => {
            //if(error) throw error
            res.status(200).send("User removed successfully.")
        })
    })
}

const migrateDb = (req, res) => {
    try {
        pool.query(queries.migrateDb)
    } catch (error) {
        console.log(error)
    }
   
}

module.exports = {
    getUsers,
    getUserByID,
    addUser,
    removeUser,
    migrateDb,
};