var error1= document.getElementById("err1");
function display(){
    try {
        alart("Button Clicked");
    } catch (error) {                    // can be 'error' or 'e'
      //  console.log(error);
      document.write(error);
        error1.innerHTML= error.message;
        confirm("confirm");
        prompt("fill it");
    }
}