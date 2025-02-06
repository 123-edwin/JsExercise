function candygame(X,Y) {
  while (X !== Y && X !== 0 && Y !== 0){
      if (Y > X){
          Y -= X
      } else if (X > Y){
          X -= Y
      }
  } return X + Y;
}


// INPUT [uncomment & modify if required]
var temp = gets().trim().split(' ');
var X = parseInt(temp[0]);
var Y = parseInt(temp[1]);


// OUTPUT [uncomment & modify if required]
console.log(candygame(X,Y));
