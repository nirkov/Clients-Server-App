/**
 * Use for authentication to the users.
 * TODO: should to be replaced by database chackes 
 * @param {*} request 
 * @param {*} response 
 * @param {*} next 
 */
const auth = (request, response, next) => {
  let min = new Date().getMinutes();
  if(min % 2 === 0 ){
    console.log("Pass authentication. Minutes = " + min);
    next();
  }else{
    console.log("Not authorized. Minutes = " + min);
    response.statusCode = 403;
    response.end("Not authorized");
  }
}


const print = (msg)=>{
  console.log(msg);
}

module.exports.print = print;
module.exports.auth  = auth;

