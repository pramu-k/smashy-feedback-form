function validate(){
    let output = true;
    const email=document.getElementById("email").value.trim();

    const fieldsToValidate = [
        { id: "firstName", spanId: "spnFirstName" },
        { id: "lastName", spanId: "spnLastName" },
        { id: "email", spanId: "spnEmail" },
        { id: "address", spanId: "spnAddress" }
    ];

    fieldsToValidate.forEach(field => {
        const input = document.getElementById(field.id);
        const span = document.getElementById(field.spanId);
        const value = input.value.trim();

        if (checkEmpty(value)) {
            span.style.color = "red";
            output = false;
        } else {
            span.style.color = "black";
        }
    });

    if (checkWrongEmail(email)){
        document.getElementById("email").style.color="red";
        document.getElementById("lblEmail").style.visibility="visible";
        output=false;
    }else {
        document.getElementById("email").style.color="black";
        document.getElementById("lblEmail").style.visibility="hidden";
    }
    return output;
}
function checkEmpty(string){
    if(string===""){
        return true;
    }
    return false;
}
function checkWrongEmail(string){
    let regx=/[\w\.-]+@[\w\.-]+\.\w+$/;
    if(regx.test(string)){
        return false;
    }
    return true;
}