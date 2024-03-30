 export const siyaram = ( email, pass)=> {
   const isValidEmail =  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    const isValidPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(pass);
    
    if(!isValidEmail ) return " EMAIL NOT VALID" ;
    if(!isValidPassword) return " PASSWORD NOT VALID ";
    


    else return null ;

 }