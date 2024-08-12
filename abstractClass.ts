abstract class TakePhoto{
    constructor(public cameraMode: string, public filter: string){}
    abstract getsepiaFilter():void;
    getReelTime():number{
        return 30;
    }
}

// when we give a abstarct class we cannot create an object of it. abstract is like blueprint

class Instagram extends TakePhoto{
    constructor(public cameraMode: string, public filter: string){
    super(cameraMode, filter)
    }
    getsepiaFilter(){
        console.log("Sepia Filter Applied")
    }
    //We are modifying the method of the parent class
    getReelTime():number{
        return 5;
    }
}


const vidya = new Instagram("Portrait", "B&W");
vidya.getsepiaFilter();

vidya.getReelTime();
export {}

// we can create an object of the class which is inherited from the abstract class.
//