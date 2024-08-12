// class User {
//     name: string;
//     userId: number;
//     googleId?: string;
//     startTrail(): string {
//         return "Trail Started";
//     }
//     constructor(name: string, userId: number) {
//         this.name = name;
//         this.userId = userId;
//     }
// }

// const vidya = new User("Vidya", 2 );
// console.log(vidya.startTrail());


class User {
    protected _courseCount = 1;
    readonly city: string = "Valsad";
    constructor(public email, public name: string, private userId: number) {
    }
    private deleteToken() {
        console.log("Deleting token");
    }
    get getAppleEmail(): string {
        return `apple${this.email}`
    }
    get courseCount(): number {
        
        return this._courseCount;
    }
    set courseCount(count: number) {
        if (count <= 1) {
            throw new Error('Invalid course count');
        }
        this._courseCount = count;
    }
}

class PremiumUser extends User {
    //it cannot have private or protected properties
    isFamilyUser: boolean = true
    constructor(email: string, name: string, userId: number) {
        // super is used to call the constructor of the parent class
        super(email, name, userId);
    }
    changeCourseCount() {
        this._courseCount = 4;
    }




}


//getter and setter



const vidya = new User("v@v.com", "Vidya", 2);


export { }