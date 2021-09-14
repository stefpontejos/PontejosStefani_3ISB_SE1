class Rectangle{
    constructor(length,height){
        this.length=length;
        this.height=height;
    }
    get computeArea(){
        return this.computerArea();
    }
    computeArea(){
        return this.length * this.height; 
    }
}