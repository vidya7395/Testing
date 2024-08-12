interface User{
    name: string,
    userId:number,
    googleId?:string,
    // startTrail :()=>string
    startTrail(): string

}
const hitesh:User = {
    name: "Hitesh",
    userId: 1,
    startTrail:()=>{
        return "Trail Started"
    }
}

export {}