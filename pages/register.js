import { useState , useEffect} from "react";

//import Index from '../components/Navbars/IndexNavbar.js';
import Cookie from 'js-cookie' ;
import { parse } from "path";
import Index from ".";

export default function Register({initialRememberValue}) {
  console.log('value : ',initialRememberValue )
 const [rememberMe, setRememberMe] = useState(false) ;

 useEffect (()=>{
  Cookie.set('rememberMe', rememberMe)
 },[rememberMe])

  return (
   <div> 
      remember me 
      <input
      type = 'checkBox'
      value = {rememberMe}
      checked = {rememberMe}
      onChange = {(e)=> setRememberMe (e.target.checked)}>
      </input>
   </div>
  );

}

Index.getInitialProps =  ({req}) =>{
  const cookies = parseCookies(req);
  console.log(cookies)
  return {
    initialRememberValue : cookies.rememberMe 
  } ;
}