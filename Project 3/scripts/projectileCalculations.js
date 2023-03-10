function initialize(){
    var angleInput=document.getElementById("angle");
    angleInput.addEventListener("blur", validateAngle);

    var velocityInput=document.getElementById("velocity");
    velocityInput.addEventListener("blur", validateVelocity);
}

function validateAngle(){
    var angleInput=document.getElementById("angle");
    if(angleInput.value < 1|| angleInput > 90){
        alert("Angle value must be between 1 and 90")
        angleInput.value="".
    }
}

function validateVelocity(){

}