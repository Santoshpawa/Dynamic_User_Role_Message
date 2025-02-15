message = {
    name :"Gagan",
    role : "admin",
    status : false
};

if(message.status == true && (message.role=="user" ||message.role == "admin"))
    console.log(`${message.role.toUpperCase()} Access Granted!`)
else if(message.status == false && (message.role=="user" ||message.role == "admin"))
    console.log(`${message.role.toUpperCase()} Access Revoked!`)
else
    console.log("Access Denined")

