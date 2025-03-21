function showcreateaccount(){
    let a = document.getElementById("inputdivalt");
    let b = document.getElementById("newaccountdivalt");

    if(b.style.display === "none"){
        b.style.display = "block";
        a.style.display = "none";
    }else{
        b.style.display = "block";
        a.style.display = "none";
    }

}

function showsigninmessage(){
    let signinbutton = document.getElementById("createaccountbuttonalt");

    window.alert("no account was signed in, for front end development display only.");

}