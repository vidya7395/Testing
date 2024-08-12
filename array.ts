const superHeros:string[] =[];
// const heroPoer :number[] = [];
const superPower :Array<number> = []; // other way to define datatype number[]
superHeros.push("spiderMan");
superHeros.push("superMan");
superHeros.push("batMan");
superPower.push(1);

type User = {
    name:string,
    age: number;
}

const user:Array<User> = [];

user.push({name: "John", age: 30});

