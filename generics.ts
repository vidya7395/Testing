// A major part of software engineering iis building components tat not only have well-defined and consistent APIs.but are also reusable.
// In modern languages like TypeScript, developers will often make use of generics. Generics enable developers to write components 
// that can work over a variety of types rather than a single one.


function identity<Tapela>(arg: Tapela): Tapela {
    return arg;
}

let output: number = identity(5);
let output2: string = identity("Tring genercis");
let output3: Array<number> = identity([1, 2, 3, 4, 5]);
let output4: Array<string> = identity(["Tring genercis", "Tring genercis", "Tring genercis"]);
let output5: boolean = identity(true);

const score: Array<number> = [];
const names: Array<string> = [];


interface Bottle {
    name: string,
    price: number
}

function getBottle<Bottle>(bottle: Bottle): Bottle {
    return bottle;
}
//other way
identity<Bottle>({ name: "Bisleri", price: 20 });

function loggingIdentity<T>(arg: T): T {
    // console.log(arg.length);  // Error: T doesn't have .length
    return arg;
}
// function loggingIdentity1<T>(arg: Array<T>): T {
//     console.log(arg.length);  // Error: T doesn't have .length
//     const myIndex = 3;
//     return arg[myIndex];
// }

const loggingIdenetiy1 = <T,>(arg: Array<T>): T => {
    return arg[0];
}

// loggingIdentity1([1, 2, 3, 4, 5]);
// loggingIdentity1(["Tring genercis", "Tring genercis", "Tring genercis"]);
loggingIdenetiy1([1, 2, 3, 4, 5]);
loggingIdenetiy1(["Tring genercis", "Tring genercis", "Tring genercis"]);

interface Database{
    connection:string,
    userName:string,
    password:string
}
function anotherFunction<T,U extends Database>(arg1:T, arg2:U):object{
    return { arg1, arg2};
}

anotherFunction(1, {"connection":"localhost", "userName":"root", "password":"root"});
//Generic classes
class GenericNumber<T> {
    zeroValue: T;
    add: (x: T, y: T) => T;
}

interface Quiz{
    name:string,
    type:string
}

interface Course{
    name:string
    author:string
    subject:string
}

class Sellable<T>{
    public cart: Array<T> = [];

    addToCart(products:T):void{
        this.cart.push(products);
    }
}


const quiz = new Sellable<Quiz>();
quiz.addToCart({name:"Quiz", type:"MCQ"});

const course = new Sellable<Course>();
course.addToCart({name:"Course", author:"Hitesh", subject:"TypeScript"});



