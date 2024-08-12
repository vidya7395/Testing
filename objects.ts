const User= {
    name: 'John',
    age: 30,
    email: 'example@gmail.com',
    address: {
        city: 'New York',
        street: 'Broadway'
    },
    isActive: true,

}
// type aliases

type User = {
    name: string;
    age: number;
    email: string;
    address: Address;
    isActive: boolean;
};

type Address ={
    city: string;
    street: string;
}

function createUser(user:User):User{
    return {name:"", age: 0, email: "", address: {city: "", street: ""}, isActive: false};
}

createUser({name:"He", age: 30, email: "gdhjgdhjd", address: {city: "New York", street: "Broadway"}, isActive: true})



export {}