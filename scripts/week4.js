let parkedcars = []; 
const maxcars = 7;

function enoughspace(){
  console.log( 'in enoughspace' );

 if( maxcars >= parkedcars.length ){
  return true;
 }
 else {
  return false;
 }
}
function parkcar( nameofcar ){
console.log( 'parkcar', nameofcar );
parkedcars.push( nameofcar );
return parkedcars;
}

console.log( enoughspace() );
parkcar( 'ct cruiser' );
