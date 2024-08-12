"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
// const vidya = new User("Vidya", 2 );
// console.log(vidya.startTrail());
var User = /** @class */ (function () {
    function User(name, userId) {
        this.name = name;
        this.userId = userId;
        this.city = "Valsad";
    }
    return User;
}());
var vidya = new User("Vidya", 2);
