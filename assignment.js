
//Question No. One "Convert Feet To Mile"

function feetToMile(feet) {
    // Formula:
    // feet ÷ 5280 = miles

    //Check if the given value is not a number
    if(isNaN(feet)){
       return feet + " is not a number.";
     }
     else{
         //Check if the given value is less then 1
        if(feet > 0)
        {
            return feet / 5280;
        }
        else
        {
           return "Distance cannot be negative or 0!";
        }
     }
  }
  let mile = feetToMile(7000);
  //console.log(mile);


  //Question No. Two "Wood Calculator"
  function woodCalculator(chair,table,bed){
    let woodForChair = 0;
    let woodForTable = 0;
    let woodForBed = 0;
    let totalWood = 0;

    if(chair < 0 || table < 0 || bed < 0)
    {
        return "One or more entered value was less than 0";
    }
      else
      {
         woodForChair = chair * 1;
         woodForTable = table * 3;
         woodForBed = bed * 5;
         totalWood = woodForChair + woodForTable + woodForBed;
      }
      return totalWood;
  }

  let woodMeasurement = woodCalculator(6,5,3);
  //console.log(woodMeasurement);


//Question No. Three "Brick Calculator"
function brickCalculator(floor)
{
    // Formula
    // Slabs : 10 | 20 | ...
    // Feet :  15  |  12  |  10

   let slabs = [10, 20]
   let feetPerFloor = [15, 12, 10]
   const brickPerFeet = 1000;
   let feets=0;
   let totaltotalQuantity=0;

    //Check the given value is valid
    if (isNaN(floor) || floor < 1) {
        return "The entered value was invalid, or was less than 0.";     
    }

    if (floor > slabs[1]) {
         feets = slabs[0] * feetPerFloor[0] + (slabs[1] - slabs[0]) * feetPerFloor[1] + (floor - slabs[1]) * feetPerFloor[2];
         totalQuantity = feets * brickPerFeet;
    } 
    else if (floor > slabs[0]) {
        feets = slabs[0] * feetPerFloor[0] + (floor - slabs[0]) * feetPerFloor[1];
        totalQuantity = feets * brickPerFeet;
    } 
    else {
        feets = floor * feetPerFloor[0];
        totalQuantity = feets * brickPerFeet;
    }

   return totalQuantity;
}

let totalBricks = brickCalculator(30);
//console.log(totalBricks);

// //Question No. Four "Tiny Friend"
function tinyFriend(names){

    let lowestLength = names[0];
    for(var i=0; i < names.length; i++){
        let currentName = names[i];
        if(currentName.length < lowestLength.length){
            lowestLength = currentName;        
        }
    }
    return lowestLength;
}

let friendsList = ["Kaka","Keka","Kokoa","kok"];
//console.log(tinyFriend(friendsList));

  