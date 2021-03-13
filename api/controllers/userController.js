const userModel= require('../model/userModel');

const searchUser =(key, value)=>{
    const match = userData.find(userData=>{
        return userData[key]=== value;
    })
    if(!match) throw new Error("No user found");
    return match;
}

const listUsers =(req, res)=>{
    userModel.find((err, data) => {
        if (!err) return res.send(JSON.stringify(data));
else return res.send("error");
    });
}

const updatedUser = (req, res) => {
    const email = req.params && req.params.email;
    if (!email) res.send("please enter a valid username as path param");
    const updated_name = req.body && req.body.username;
    if(!updated_name) res.send("please enter a valid new username");
    userModel.update({email:email},{username:updated_name},(error,item) => {
        if (!error) return  res.send("Update success");
        else return res.send("error");
    });
   
}

const getUserName = (req, res) => {
    const userName = (req.params && req.params.username) || (req.query && req.query.username);
    if (userName!=null) {
        userModel.findOne({username:userName},(err, data) => {
            if (!err) return res.send(data);
    else return res.send("error");
        });
    } else res.send('invalid input');
}



const addingUser = (req, res) => {
    const userName = req.body && req.body.username;
    const Uid = req.body && req.body.uuid;
    const userEmail = req.body && req.body.email;
    userModel.create({
        uuid: Uid,
        username: userName,
        email: userEmail
    },(error,item) => {
        console.log(error)
        if (!error) return  res.send("Add success");
        else return res.send("error");
    });
    
}

module.exports = {
    searchUser,
    updatedUser,
    getUserName,
    addingUser,
    listUsers
}