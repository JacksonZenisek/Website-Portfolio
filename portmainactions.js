setInterval(maingreeting,1000);

function maingreeting(){

    const b = new Date().getHours();

    let a;

    if(b < 12){
        a = "Good Morning";
    }else if(b > 12, b < 18){
        a = "Good Afternoon";
    }else{
        a = "Good Evening";
    }

    document.getElementById("introheadingalt").innerHTML = a;
}

window.onscroll = function() {scrollFunction()};

function scrollFunction(){
     let bttbutton = document.getElementById("bttbuttonalt");

     if(document.body.scrollTop > 1400 || document.documentElement.scrollTop > 1400){
        bttbutton.style.display = "block";
     }else{
        bttbutton.style.display = "none";
     }
}

function backtotop(){
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

function highlightmobilebutton(){
    document.getElementById("spans1alt").style.backgroundColor = "rgb(165, 164, 164)";
    document.getElementById("spans2alt").style.backgroundColor = "rgb(165, 164, 164)";
    document.getElementById("spans3alt").style.backgroundColor = "rgb(165, 164, 164)";
}

function dullmobilebutton(){
    document.getElementById("spans1alt").style.backgroundColor = "grey"
    document.getElementById("spans2alt").style.backgroundColor = "grey";
    document.getElementById("spans3alt").style.backgroundColor = "grey";
}

function highlightmobileexitbutton(){
    document.getElementById("spans1exitalt").style.backgroundColor = "rgb(165, 164, 164)";
    document.getElementById("spans2exitalt").style.backgroundColor = "rgb(165, 164, 164)";
}

function dulmobileexitbutton(){
    document.getElementById("spans1exitalt").style.backgroundColor = "grey";
    document.getElementById("spans2exitalt").style.backgroundColor = "grey";
}


function showwebdsection(){
    let webbutton = document.getElementById("webdbuttonalt");
    let a = document.getElementById("webdsectionalt");
    let b = document.getElementById("introboxalt");
    let c = document.getElementById("softdsectionalt");
    let d = document.getElementById("softdunderlinealt");
    let e = document.getElementById("webdunderlinealt");
    let f = document.getElementById("homeiconicon");
    let g = document.getElementById("itsectionalt");
    let h = document.getElementById("itunderlinealt");


    if(a.style.display === "none"){
        a.style.display = "block";
        b.style.display = "none";
        c.style.display = "none";
        d.style.display = "none";
        e.style.display = "block";
        f.style.display = "block";
        g.style.display = "none";
        h.style.display = "none";
    }else{
        a.style.display = "block";
        b.style.display = "none";
        c.style.display = "none";
        d.style.display = "none";
        e.style.display = "block";
        f.style.display = "block";
        g.style.display = "none";
        h.style.display = "none";
    }
    
}

function showsoftdsection(){
    let softbutton = document.getElementById("softdbuttonalt");
    let a = document.getElementById("softdsectionalt");
    let b = document.getElementById("introboxalt");
    let c = document.getElementById("webdsectionalt");
    let d = document.getElementById("webdunderlinealt");
    let e = document.getElementById("softdunderlinealt");
    let f = document.getElementById("homeiconicon");
    let g = document.getElementById("itsectionalt");
    let h = document.getElementById("itunderlinealt");

    if(a.style.display === "none"){
        a.style.display = "block";
        b.style.display = "none";
        c.style.display = "none";
        d.style.display = "none";
        e.style.display = "block";
        f.style.display = "block";
        g.style.display = "none";
        h.style.display = "none";
    }else{
        a.style.display = "block";
        b.style.display = "none";
        c.style.display = "none";
        d.style.display = "none";
        e.style.display = "block";
        f.style.display = "block";
        g.style.display = "none";
        h.style.display = "none";
    }
}

function showitsection(){
    let itbutton = document.getElementById("itbuttonalt");
    let a = document.getElementById("itsectionalt");
    let b = document.getElementById("softdsectionalt");
    let c = document.getElementById("introboxalt");
    let d = document.getElementById("webdsectionalt");
    let e = document.getElementById("webdunderlinealt");
    let f = document.getElementById("softdunderlinealt");
    let g = document.getElementById("homeiconicon");
    let h = document.getElementById("itunderlinealt");

    if(a.style.display === "none"){
        a.style.display = "block";
        b.style.display = "none";
        c.style.display = "none";
        d.style.display = "none";
        e.style.display = "none";
        f.style.display = "none";
        g.style.display = "block";
        h.style.display = "block";
    }else{
        a.style.display = "block";
        b.style.display = "none";
        c.style.display = "none";
        d.style.display = "none";
        e.style.display = "none";
        f.style.display = "none";
        g.style.display = "block";
        h.style.display = "block";
    }

}

setInterval(webdjcs,1000);

function webdjcs(){

    const y = new Date().getSeconds();

    let a = document.getElementById("jcspicture1alt");
    let b = document.getElementById("jcspicture2alt");
    let c = document.getElementById("jcspicture3alt");
    let d = document.getElementById("jcspicture4alt");
   
    if(y < 15){
        a.style.display = "block";
        b.style.display = "none";
        c.style.display = "none";
        d.style.display = "none";
    }else if(y > 15, y < 30){
        b.style.display = "block";
        a.style.display = "none";
        c.style.display = "none";
        d.style.display = "none";
    }else if(y > 30, y < 45){
        c.style.display = "block";
        a.style.display = "none";
        b.style.display = "none";
        d.style.display = "none";
    }else{
        d.style.display = "block";
        a.style.display = "none";
        b.style.display = "none";
        c.style.display = "none";
    }

}

setInterval(webdsirzenigaming,1000);

function webdsirzenigaming(){

    const z = new Date().getSeconds();

    let a = document.getElementById("sirzenigamingpicture1alt");
    let b = document.getElementById("sirzenigamingpicture2alt");
    let c = document.getElementById("sirzenigamingpicture3alt");
    let d = document.getElementById("sirzenigamingpicture4alt");
   
    if(z < 15){
        a.style.display = "block";
        b.style.display = "none";
        c.style.display = "none";
        d.style.display = "none";
        a.style.transitionDuration = "1s"
    }else if(z > 15, z < 30){
        b.style.display = "block";
        a.style.display = "none";
        c.style.display = "none";
        d.style.display = "none";
    }else if(z > 30, z < 45){
        c.style.display = "block";
        a.style.display = "none";
        b.style.display = "none";
        d.style.display = "none";
    }else{
        d.style.display = "block";
        a.style.display = "none";
        b.style.display = "none";
        c.style.display = "none";
    }

}

function showhomepage(){
   let homebutton = document.getElementById("homebuttonalt");
   let a = document.getElementById("introboxalt");
   let b = document.getElementById("webdsectionalt");
   let c = document.getElementById("softdsectionalt");
   let d = document.getElementById("itsectionalt");


    if(a.style.display === "none"){
        a.style.display = "block";
        b.style.display = "none";
        c.style.display = "none";
        d.style.display = "none";
    }else{
        a.style.display = "block";
        b.style.display = "none";
        c.style.display = "none";
        d.style.display = "none";
    }
}


function hidehomebutton(){
    let hbutton = document.getElementById("homebuttonalt");
    let a = document.getElementById("homeiconicon");
    let b = document.getElementById("webdunderlinealt");
    let c = document.getElementById("softdunderlinealt");
    let d = document.getElementById("itunderlinealt");

    if(a.style.display === "block"){
        a.style.display = "none";
        b.style.display = "none";
        c.style.display = "none";
        d.style.display = "none";
    }
}

function showmobilesidemenu(){
    let a = document.getElementById("mobilesidemenualt");
    let b = document.getElementById("mobileexitmenubuttonalt");
    let c = document.getElementById("mobilemenubuttonalt");

    if(a.style.display === "none"){
        a.style.display = "block";
    }else{
        a.style.display = "block";
    }

    if(b.style.display === "none"){
        b.style.display = "block";
    }else{
        b.style.display = "block";
    }

    if(c.style.display === "block"){
        c.style.display = "none";
    }else{
        c.style.display = "none";
    }
}   

function transitionslide(){
    document.getElementById("mobilesidemenualt").style.left = 100;
}

function hidemobilesidemenu(){
    let a = document.getElementById("mobilesidemenualt");
    let b = document.getElementById("mobileexitmenubuttonalt");
    let c = document.getElementById("mobilemenubuttonalt");
    if(a.style.display === "block"){
        a.style.display = "none";
    }else{
        a.style.display = "none";
    }

    if(b.style.display === "block"){
        b.style.display = "none";
    }else{
        b.style.display = "none";
    }

    if(c.style.display === "none"){
        c.style.display = "block";
    }else{
        c.style.display = "block";
    }
}


function showsoftdsectionmobile(){
    let a = document.getElementById("softdsectionalt");
    let b = document.getElementById("introboxalt");
    let c = document.getElementById("mobilesidemenualt");
    let d = document.getElementById("mobilemenubuttonalt");
    let e = document.getElementById("mobileexitmenubuttonalt");
    let f = document.getElementById("webdsectionalt");
    let g = document.getElementById("itsectionalt");
    let h = document.getElementById("homemobilebuttonalt");


    if(a.style.display === "hidden"){
        a.style.display = "block";
        h.style.display = "block";
        b.style.display = "none";
        f.style.display = "none";
        g.style.display = "none";
    }else{
        a.style.display = "block";
        h.style.display = "block";
        b.style.display = "none";
        f.style.display = "none";
        g.style.display = "none";
    }

    if(c.style.display === "block"){
        c.style.display = "none";
    }

    if(d.style.display === "none"){
        d.style.display = "block";
        e.style.display = "none";
    }

}

function showwebdsectionmobile(){
    let a = document.getElementById("softdsectionalt");
    let b = document.getElementById("introboxalt");
    let c = document.getElementById("mobilesidemenualt");
    let d = document.getElementById("mobilemenubuttonalt");
    let e = document.getElementById("mobileexitmenubuttonalt");
    let f = document.getElementById("webdsectionalt");
    let g = document.getElementById("itsectionalt");
    let h = document.getElementById("homemobilebuttonalt");



    if(f.style.display === "none"){
        f.style.display = "block";
        h.style.display = "block";
        a.style.display = "none";
        b.style.display = "none";
        g.style.display = "none";
    }else{
        f.style.display = "block";
        h.style.display = "block";
        a.style.display = "none";
        b.style.display = "none";
        g.style.display = "none";
    }

    if(c.style.display === "block"){
        c.style.display = "none";
    }

    if(d.style.display === "none"){
        d.style.display = "block";
        e.style.display = "none";
    }

}

function showitsectionmobile(){
    let a = document.getElementById("softdsectionalt");
    let b = document.getElementById("introboxalt");
    let c = document.getElementById("mobilesidemenualt");
    let d = document.getElementById("mobilemenubuttonalt");
    let e = document.getElementById("mobileexitmenubuttonalt");
    let f = document.getElementById("webdsectionalt");
    let g = document.getElementById("itsectionalt");
    let h = document.getElementById("homemobilebuttonalt");



    if(g.style.display === "none"){
        g.style.display = "block";
        h.style.display = "block";
        a.style.display = "none";
        b.style.display = "none";
        f.style.display = "none";
    }else{
        g.style.display = "block";
        h.style.display = "block";
        a.style.display = "none";
        b.style.display = "none";
        f.style.display = "none";
    }

    if(c.style.display === "block"){
        c.style.display = "none";
    }

    if(d.style.display === "none"){
        d.style.display = "block";
        e.style.display = "none";
    }

}

function showmobilehomepage(){
    let a = document.getElementById("homemobilebuttonalt");
    let b = document.getElementById("introboxalt");
    let c = document.getElementById("softdsectionalt");
    let d = document.getElementById("webdsectionalt");
    let e = document.getElementById("itsectionalt");
    let f = document.getElementById("mobilesidemenualt");
    let g = document.getElementById("mobilemenubuttonalt");
    let h = document.getElementById("mobileexitmenubuttonalt");

    if(a.style.display === "block"){
        b.style.display = "block";
        g.style.display = "block";
        a.style.display = "none";
        c.style.display = "none";
        d.style.display = "none";
        e.style.display = "none";
        f.style.display = "none";
        h.style.display = "none";
}}