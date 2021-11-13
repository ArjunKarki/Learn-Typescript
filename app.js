var role;
(function (role) {
    role[role["ADMIN"] = 0] = "ADMIN";
    role[role["USER"] = 1] = "USER";
    role[role["SUPPORT"] = 2] = "SUPPORT";
})(role || (role = {}));
var person = {
    name: "Arjun Kari",
    age: 25,
    hobbies: ["Reading", "Running", "Watching Movies"],
    role: role.USER
};
var favouriteActivities;
favouriteActivities = ["Sports"];
console.log(person.hobbies);
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toUpperCase());
    // console.log(hobby.map())// error
}
if (person.role == role.ADMIN) {
    console.log("This person is admin");
}
else {
    console.log("This user is not admin");
}
