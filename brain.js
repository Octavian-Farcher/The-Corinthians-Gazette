
function home()
{
window.location.href = "/index.html"
}
var closeMenu = "";
var isNavbar = false;
 function toggleNavbar()  
 {
    isNavbar = !isNavbar ;
    if(isNavbar == true){
      var open = document.getElementById("hamburger")
      open.addEventListener("click",() =>{
    document.getElementById("nav-bar").classList.add("navbar-shown");
    document.getElementById("line-dissapear").classList.add("close-dissapear");
    document.getElementById("line1").classList.add("close1")
    document.getElementById("line2").classList.add("close2")


    
   })
    }
   else if(isNavbar == false)
   {
      
      var close = document.getElementById("hamburger");
        close.addEventListener("click", () => {
      document.getElementById("nav-bar").classList.remove("navbar-shown");
      document.getElementById("line-dissapear").classList.remove("close-dissapear")
      document.getElementById("line2").classList.remove("close2")
      document.getElementById("line1").classList.remove("close1")
  
      
        })    
      
   } 
    
   }  



