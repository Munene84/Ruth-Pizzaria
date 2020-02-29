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

//toppings function
function toppingsCheckout(size,tp1,tp2,tp3,tp4,number){
    //switch statement for pizza topping //bbqchicken=90,110,130 bbqbeef=70,90,110 vegetarian=50,70,99 shrimp=100,120,140 
    if (size==="Small"){
        if(tp1==="BBQ Chicken"){
            toppingsTotal=toppingsTotal+90;
        }
        if(tp2==="BBQ Beef"){
            toppingsTotal=toppingsTotal+70;
        }
        if(tp3==="Vegetarian"){
            toppingsTotal=toppingsTotal+50;
        }
        if(tp4==="Shrimp"){
            toppingsTotal=toppingsTotal+100;
        }
    }
    else if (size==="Medium"){
        if(tp1==="BBQ Chicken"){
            toppingsTotal=toppingsTotal+110;
        }
        if(tp2==="BBQ Beef"){
            toppingsTotal=toppingsTotal+90;
        }
        if(tp3==="Vegetarian"){
            toppingsTotal=toppingsTotal+70;
        }
        if(tp4==="Shrimp"){
            toppingsTotal=toppingsTotal+120;
        }
    }
    else if(size==="Large"){
        if(tp1==="BBQ Chicken"){
            toppingsTotal=toppingsTotal+130;
        }
        if(tp2==="BBQ Beef"){
            toppingsTotal=toppingsTotal+110;
        }
        if(tp3==="Vegetarian"){
            toppingsTotal=toppingsTotal+90;
        }
        if(tp4==="Shrimp"){
            toppingsTotal=toppingsTotal+140;
        }
    }
    else{alert("please select all boxes")}

    toppingsTotal=toppingsTotal*number
}
