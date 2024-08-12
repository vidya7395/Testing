function detectType(val: number | string): (number | string) {
    if (typeof val === 'string') {
        return val.toLowerCase();
    }
   else if(typeof val === 'number'){
        return val + 3;
    }
    return val;
}

function provide(id:string | null){
    if(!id){
        return "No id provided";
    }
    id.toLowerCase();
}

interface User{
    name:string,
    age:number
}

interface Admin{
    name:string,
    age:number,
    isAdmin:boolean
}
// in operator is used to check if a property exists in an object
const isAdmin = (user:User | Admin):boolean =>{
   if("isAdmin" in user){
       return user.isAdmin;
   }
   return false;
}

//Instnace of type and predicate
//instanceof is used to check if an object is an instance of a class

function logValue(x: Date | string){
    if(x instanceof Date){
        console.log(x.toUTCString());
    }
    else{
        console.log(x.toUpperCase());
    }

}

interface Fish{
    swim:()=> void
    //what is above code
}

interface Bird{
    fly:()=>void
}

function isFish(pet: Fish | Bird): pet is Fish{
    return (pet as Fish).swim !== undefined;
}