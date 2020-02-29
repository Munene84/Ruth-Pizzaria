var total=0;
var sizeTotal=0;
var crustTotal=0;
var toppingsTotal=0;
var deliveryTotal=0;
var newTotal;
var tp1="",tp2="",tp3="",tp4="";
var delivery;
var orderLocation

//business logic

//pizza constructor
function Pizza(size,crust,number,delivery,orderLocation,tp1,tp2,tp3,tp4){
    this.size=size;
    this.crust=crust;
    this.number=number;
    this.delivery=delivery;
    this.orderLocation=orderLocation;
    this.tp1=tp1;
    this.tp2=tp2;
    this.tp3=tp3;
    this.tp4=tp4;
}

//prototype
Pizza.prototype.order=function(){
    return ("Pizza size is: "+this.size+"\n\nCrust type: "+this.crust+"\n\n"+"Toppings: "+this.tp1+" "+this.tp2+" "+
    this.tp3+" "+this.tp4
    +"\n\n"+"Number of pizzas: "+this.number);
}

// size function
function sizeCheckout(size,number){
    //switch statement for pizza size //small=200 medium=400 large=600
    switch (size){
        case ("Small"):
            sizeTotal=sizeTotal+200;
            break;
        case ("Medium"):
            sizeTotal=sizeTotal+400;
            break;
        case ("Large"):
            sizeTotal=sizeTotal+600;
            break;
    }
    
    sizeTotal=sizeTotal*number
    
    
}

//crust function
function crustCheckout(crust,number){
    //switch statement for pizza crust //crispy=50 stuffed=70 glutencrispy=90 gluttenstuffed=110 
    switch (crust){
        case ("Crispy"):
            crustTotal=crustTotal+50;
            break;
        case ("Stuffed"):
            crustTotal=crustTotal+70;
            break;
        case ("Gluten Free Crispy"):
            crustTotal=crustTotal+90;
            break;
        case ("Gluten Free Stuffed"):
            crustTotal=crustTotal+110;
            break;        
    }

    crustTotal=crustTotal*number
}