var addPs4 = document.getElementById("addps4");
var addXbob = document.getElementById("addxbox");
var addNintendo = document.getElementById("addnintendo");
var cle = document.getElementById("clear")
var lik = document.getElementById("like")
var prixUn = "";  
// var total ="";
//--------------item1----------------------
function item1() {

  prixUn = document.getElementById ("prix1").innerHTML
  
//   var image = document.getElementById("img1").src;
  //  var prix = document.getElementById("prix1").value;
  console.log(document.getElementById("img1").src);
  console.log(document.getElementById("prix1").innerHTML);

  document.getElementById("imgvide").src = document.getElementById("img1").src
  document.getElementById("total").innerHTML = document.getElementById("prix1").innerHTML
}
  function plus(){
    document.getElementById("count").innerHTML++;
    var total = prixUn * document.getElementById("count").innerHTML 
    document.getElementById("total").innerHTML = total
 
  }
 function moins() {
  document.getElementById("count").innerHTML--;
  var total = prixUn * document.getElementById("count").innerHTML
      document.getElementById("total").innerHTML =total
       }
       addPs4.addEventListener("click", ()=> item1());

      // ------------------------item 2---------------------------
       function item2() {

        prixUn = document.getElementById ("prix2").innerHTML
        
      //   var image = document.getElementById("img1").src;
        //  var prix = document.getElementById("prix1").value;
        console.log(document.getElementById("img2").src);
        console.log(document.getElementById("prix2").innerHTML);
      
        document.getElementById("imgvide").src = document.getElementById("img2").src
        document.getElementById("total").innerHTML = document.getElementById("prix2").innerHTML
      }
        function plus(){
          document.getElementById("count").innerHTML++;
          var total = prixUn * document.getElementById("count").innerHTML 
          document.getElementById("total").innerHTML = total
       
        }
       function moins() {
        document.getElementById("count").innerHTML--;
        var total = prixUn * document.getElementById("count").innerHTML
            document.getElementById("total").innerHTML =total
             }
             addxbox.addEventListener("click", ()=> item2());
       //      -------------------item 3------------------------------------
             function item3() {

              prixUn = document.getElementById ("prix3").innerHTML
              
            //   var image = document.getElementById("img1").src;
              //  var prix = document.getElementById("prix1").value;
              console.log(document.getElementById("img3").src);
              console.log(document.getElementById("prix3").innerHTML);
            
              document.getElementById("imgvide").src = document.getElementById("img3").src
              document.getElementById("total").innerHTML = document.getElementById("prix3").innerHTML
            }
              function plus(){
                document.getElementById("count").innerHTML++;
                var total = prixUn * document.getElementById("count").innerHTML 
                document.getElementById("total").innerHTML = total
             
              }
             function moins() {
              document.getElementById("count").innerHTML--;
              var total = prixUn * document.getElementById("count").innerHTML
                  document.getElementById("total").innerHTML =total
                   }
                   addnintendo.addEventListener("click", ()=> item3());
//------------------------------------Delete--------------------------------------------------------------

function clear(){

  document.getElementById("imgvide").src = ""
  document.getElementById("total").innerHTML = ""
  document.getElementById("count").innerHTML = ""

}
cle.addEventListener("click",()=>clear());

//--------------------------------------------------fa-regular fa-heart--------------
function myFunction(x) {
  x.classList.toggle("fa-thumbs-down").innerHTML="";
  
}
lik.addEventListener("click",()=>myFunction());














// function item4() {
//   const prixUn = document.getElementById("prixUn");
// const imgvide = document.getElementById("imgvide");
// prixUn.remove();
// imgvide.remove();
// document.getElementById("imgvide").src = document.getElementById("imgvide").src
//  document.getElementById("total").innerHTML = document.getElementById("prixUn").innerHTML
// }


    
    
//     //how to convert string to number?






