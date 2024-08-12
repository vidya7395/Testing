type User ={
    readonly _id: string,
    name: string,
    email: string,
    isActive: string,
    creditCard?: number // optional
}

function createUser(user:User):User{
    // user._id = "2"; // Cannot assign to '_id' because it is a read-only property.
    return user;
}

createUser({_id: "1", name: "John", email: "", isActive: "true"});

export {}