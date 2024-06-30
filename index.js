function distanceFromHqInBlocks(pickUpLocation) {
  //returns the number of blocks given a value
  var res ;
if(pickUpLocation<42){
    res = 42 - pickUpLocation;
 
}else {
  res = pickUpLocation - 42
}
 
return res ;

}


function distanceFromHqInFeet(pickUpLocation) {
  var distanceInBlocks = distanceFromHqInBlocks(pickUpLocation);
  // call the distanceFromHqInBlocks function from inside the distanceFromHqInFeet function,
  return distanceInBlocks * 264
  
  
}


function distanceTravelledInFeet(pickUpLocation, destination) {
  var res;
  if(destination > pickUpLocation){
    res = (destination - pickUpLocation) * 264
  }else{
  res = (pickUpLocation - destination) * 264
  }
  return res;
    

}


function calculatesFarePrice(pickUpLocation, destination) {
    

  var feet =  distanceTravelledInFeet(pickUpLocation,destination)

  if(feet<=400){
    return 0;
  }
  else if(feet>400&& feet<=2000){
    
    var r = feet - 400;
    return r * 0.02;
  }
  else if(feet>2000&& feet<=2500){
    return 25.0;
  }
else if(feet>2500){
  return 'cannot travel that far';

  }
}