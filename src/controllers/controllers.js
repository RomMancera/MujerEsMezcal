import { getConnection } from "./../database/database"

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

const addUser = async (req, res) =>{
    try{
    const { correo, usuario, contraseña , type } = req.body;

    if(correo == undefined || usuario == undefined || contraseña == undefined || type == undefined){
        res.status(400).json({message : "Bad request, please fill all the inputs"})
    }

    const connection = await getConnection(); 
    const result = await connection.query(`INSERT INTO usuarios (correo, usuario, contraseña, type)
    VALUES ("${correo}", "${usuario}", "${contraseña}", ${type});`);
    res.json({message: "User added"})
    }catch(error){
        res.status(500);
        res.send(error.message);
    }   
};

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

const UpdateUser = async (req, res) =>{
    try{
    const { id }=req.params;
    const { correo, usuario, contraseña , type } = req.body;
    
    if(id == undefined ||correo == undefined || usuario == undefined || contraseña == undefined || type == undefined){
        res.status(400).json({message : "Bad request, please fill all the inputs"})
    }

    const connection = await getConnection();
    const result = await connection.query(`UPDATE usuarios SET
    correo="${correo}", usuario="${usuario}", contraseña="${contraseña}", type="${type}" WHERE id= ${id};`);
    res.json(result);
    }catch(error){
        res.status(500);
        res.send(error.message);
    }   
};

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