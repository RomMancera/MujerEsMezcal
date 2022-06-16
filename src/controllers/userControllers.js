import { getConnection } from "../database/database"

//Ger all users
const getUsers = async (req, res) =>{
    try{
    const connection = await getConnection();
    const result = await connection.query("SELECT * FROM usuarios");
    res.json(result);
    }catch(error){
        res.status(500);
        res.send(error.message);
    }   
};

//Create a user
const addUser = async (req, res) =>{
    try{
    const { email, user, password , type } = req.body;

    if(email == undefined || user == undefined || password == undefined || type == undefined){
        res.status(400).json({message : "Bad request, please fill all the inputs"})
    }

    const connection = await getConnection(); 
    const result = await connection.query(`INSERT INTO usuarios (correo, usuario, contraseña, type)
    VALUES ("${email}", "${user}", "${password}", ${type});`);
    res.json({message: "User added"}, result);
    }catch(error){
        res.status(500);
        res.send(error.message);
    }   
};

//Get one user
const getOneUser = async (req, res) =>{
    try{
    const { id }=req.params;
    const connection = await getConnection();
    const result = await connection.query("SELECT * FROM usuarios WHERE id = ?", id);
    res.json(result);
    }catch(error){
        res.status(500);
        res.send(error.message);
    }   
};

// Update a user
const UpdateUser = async (req, res) =>{
    try{
    const { id }=req.params;
    const { email, user, password, type } = req.body;
    
    if(id == undefined ||email == undefined || user == undefined || password == undefined || type == undefined){
        res.status(400).json({message : "Bad request, please fill all the inputs"})
    }

    const connection = await getConnection();
    const result = await connection.query(`UPDATE usuarios SET
    correo="${email}", usuario="${user}", contraseña="${password}", type="${type}" WHERE id= ${id};`);
    res.json(result);
    }catch(error){
        res.status(500);
        res.send(error.message);
    }   
};

//Delete a user
const deleteUser = async (req, res) =>{
    try{
    const { id }=req.params;
    const connection = await getConnection();
    const result = await connection.query("DELETE FROM usuarios WHERE id = ?", id);
    res.json(result);
    }catch(error){
        res.status(500);
        res.send(error.message);
    }   
};

export const methods = {
    getUsers,
    addUser,
    getOneUser,
    deleteUser,
    UpdateUser
};