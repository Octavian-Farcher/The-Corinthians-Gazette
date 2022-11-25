function submitMessage(){
   var send =  document.getElementById("submit");
   if ( confirm("Your message was submited, we will send you back to the contact page!") == true ) {
    window.location.href = "/index.html";
   } else console.log('not sent')
    
}
    // window.location.href = "/index.html" }
   
