import { isValidUsername } from "6pp";
 const usernameValidator=(username)=>{
    if(!isValidUsername(username)){
   return {isValid:false,errorMessage:"username is Invalid"};
}}
export default usernameValidator