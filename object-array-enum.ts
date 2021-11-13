
enum role{
    ADMIN,
    USER,
    SUPPORT
}
const person={
    name:"Arjun Kari",
    age:25,
    hobbies:["Reading","Running","Watching Movies"],
    role:role.USER,
}

let favouriteActivities: string[]
favouriteActivities=["Sports"]

console.log(person.hobbies)

for(const hobby of person.hobbies){
    console.log(hobby.toUpperCase())
    // console.log(hobby.map())// error
}

if(person.role==role.ADMIN){
    console.log("This person is admin")
}else{
    console.log("This user is not admin")
}