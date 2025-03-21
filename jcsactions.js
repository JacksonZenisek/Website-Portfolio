//The JS file of John's Coffee Shop

//Home slide photos display///////////////////////////////////////////////////////////////////////////////////////////////////////

setInterval(slidestimer,1000);

function slidestimer(){
    const z = new Date().getSeconds();

    let a = document.getElementById("image1alt");
    let b = document.getElementById("image2alt");
    let c = document.getElementById("image3alt");
    let d = document.getElementById("image4alt");
    let e = document.getElementById("bannerheading1alt");
    let f = document.getElementById("bannerheading2alt");
    let g = document.getElementById("bannerheading3alt");
    let h = document.getElementById("bannerheading4alt");

    if(z < 15){
        a.style.display = "block";
        e.style.display = "block";
        b.style.display = "none";
        c.style.display = "none";
        d.style.display = "none";
        f.style.display = "none";
        g.style.display = "none";
        h.style.display = "none";

    }else if(z > 15, z <30){
        a.style.display = "none";
        c.style.display = "none";
        d.style.display = "none";
        e.style.display = "none";
        b.style.display = "block";
        f.style.display = "block";
        g.style.display = "none";
        h.style.display = "none";

    }else if(z > 30, z < 45){
        c.style.display = "block";
        g.style.display = "block";
        a.style.display = "none";
        b.style.display = "none";
        d.style.display = "none";
        e.style.display = "none";
        f.style.display = "none";
        h.style.display = "none";
    }else{
        d.style.display = "block";
        h.style.display = "block";
        b.style.display = "none";
        c.style.display = "none";
        a.style.display = "none";
        f.style.display = "none";
        g.style.display = "none";
        e.style.display = "none";
    }
}


//Selection Buttons Functions/////////////////////////////////////////////////////////////////////////////////////////////////////
function showmenusection(){
    let button = document.getElementById("menubuttonalt");
    let a = document.getElementById("homeboxalt");
    let b = document.getElementById("menuboxalt");
    let c = document.getElementById("locationsboxalt");
    let d = document.getElementById("auboxalt")

    if(b.style.display === "none"){
        b.style.display = "block";
        a.style.display = "none";
        c.style.display = "none";
        d.style.display = "none";
    }else{
        b.style.display = "block";
        a.style.display = "none";
        c.style.display = "none";
        d.style.display = "none";
    }
}

function showlocationssection(){
    let button = document.getElementById("locationsbuttonalt");
    let a = document.getElementById("homeboxalt");
    let b = document.getElementById("menuboxalt");
    let c = document.getElementById("locationsboxalt");
    let d = document.getElementById("auboxalt")

    if(c.style.display === "none"){
        c.style.display = "block";
        a.style.display = "none";
        b.style.display = "none";
        d.style.display = "none";
    }else{
        c.style.display = "block";
        a.style.display = "none";
        b.style.display = "none";
        d.style.display = "none";
    }
}

function showausection(){
    let button = document.getElementById("aubuttonalt");
    let a = document.getElementById("homeboxalt");
    let b = document.getElementById("menuboxalt");
    let c = document.getElementById("locationsboxalt");
    let d = document.getElementById("auboxalt")

    if(d.style.display === "none"){
        d.style.display = "block";
        a.style.display = "none";
        c.style.display = "none";
        b.style.display = "none";
    }else{
        d.style.display = "block";
        a.style.display = "none";
        c.style.display = "none";
        b.style.display = "none";
    }
}

function showhomesection(){
    let button = document.getElementById("homebuttonalt");
    let a = document.getElementById("homeboxalt");
    let b = document.getElementById("menuboxalt");
    let c = document.getElementById("locationsboxalt");
    let d = document.getElementById("auboxalt")

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


//Drinks Menu selection dots//////////////////////////////////////////////////////////////////////////////////////////////

function showclassics(){
        let button = document.getElementById("classicsalt");
        let a = document.getElementById("dot1alt");
        let b = document.getElementById("dot2alt");
        let c = document.getElementById("dot3alt");
        let d = document.getElementById("dot4alt");
        let e = document.getElementById("dot5alt");
        let f = document.getElementById("dot6alt");
    
        if(a.style.display === "none"){
            a.style.display = "block";
            b.style.display = "none";
            c.style.display = "none";
            d.style.display = "none";
            e.style.display = "none";
            f.style.display = "none";
        }else{
            a.style.display = "block";
            b.style.display = "none";
            c.style.display = "none";
            d.style.display = "none";
            e.style.display = "none";
            f.style.display = "none";
        }
}

function showjf(){
    let button = document.getElementById("favoritesalt");
    let a = document.getElementById("dot1alt");
    let b = document.getElementById("dot2alt");
    let c = document.getElementById("dot3alt");
    let d = document.getElementById("dot4alt");
    let e = document.getElementById("dot5alt");
    let f = document.getElementById("dot6alt");

    if(b.style.display === "none"){
        b.style.display = "block";
        a.style.display = "none";
        c.style.display = "none";
        d.style.display = "none";
        e.style.display = "none";
        f.style.display = "none";
    }else{
        b.style.display = "block";
        a.style.display = "none";
        c.style.display = "none";
        d.style.display = "none";
        e.style.display = "none";
        f.style.display = "none";
    }
}

function showlemons(){
    let button = document.getElementById("lemonadealt");
    let a = document.getElementById("dot1alt");
    let b = document.getElementById("dot2alt");
    let c = document.getElementById("dot3alt");
    let d = document.getElementById("dot4alt");
    let e = document.getElementById("dot5alt");
    let f = document.getElementById("dot6alt");

    if(c.style.display === "none"){
        c.style.display = "block";
        a.style.display = "none";
        b.style.display = "none";
        d.style.display = "none";
        e.style.display = "none";
        f.style.display = "none";
    }else{
        c.style.display = "block";
        a.style.display = "none";
        b.style.display = "none";
        d.style.display = "none";
        e.style.display = "none";
        f.style.display = "none";
    }
}

function showteas(){
    let button = document.getElementById("teaalt");
    let a = document.getElementById("dot1alt");
    let b = document.getElementById("dot2alt");
    let c = document.getElementById("dot3alt");
    let d = document.getElementById("dot4alt");
    let e = document.getElementById("dot5alt");
    let f = document.getElementById("dot6alt");

    if(d.style.display === "none"){
        d.style.display = "block";
        a.style.display = "none";
        b.style.display = "none";
        c.style.display = "none";
        e.style.display = "none";
        f.style.display = "none";
    }else{
        d.style.display = "block";
        a.style.display = "none";
        b.style.display = "none";
        c.style.display = "none";
        e.style.display = "none";
        f.style.display = "none";
    }
}

function showsmoothies(){
    let button = document.getElementById("smoothiealt");
    let a = document.getElementById("dot1alt");
    let b = document.getElementById("dot2alt");
    let c = document.getElementById("dot3alt");
    let d = document.getElementById("dot4alt");
    let e = document.getElementById("dot5alt");
    let f = document.getElementById("dot6alt");

    if(e.style.display === "none"){
        e.style.display = "block";
        a.style.display = "none";
        b.style.display = "none";
        c.style.display = "none";
        d.style.display = "none";
        f.style.display = "none";
    }else{
        e.style.display = "block";
        a.style.display = "none";
        b.style.display = "none";
        c.style.display = "none";
        d.style.display = "none";
        f.style.display = "none";
    }
}

function showcocoa(){
    let button = document.getElementById("cocoaalt");
    let a = document.getElementById("dot1alt");
    let b = document.getElementById("dot2alt");
    let c = document.getElementById("dot3alt");
    let d = document.getElementById("dot4alt");
    let e = document.getElementById("dot5alt");
    let f = document.getElementById("dot6alt");

    if(f.style.display === "none"){
        f.style.display = "block";
        a.style.display = "none";
        b.style.display = "none";
        c.style.display = "none";
        d.style.display = "none";
        e.style.display = "none";
    }else{
        f.style.display = "block";
        a.style.display = "none";
        b.style.display = "none";
        c.style.display = "none";
        d.style.display = "none";
        e.style.display = "none";
    }
}

//Drink Menu items showcases//////////////////////////////////////////////////////////////////////////////////////////////

function showclassicdrinks(){
    let button = document.getElementById("classicsalt");
    let a =  document.getElementById("classicdrinksboxalt");
    let b = document.getElementById("jfdrinksboxalt");
    let c = document.getElementById("lemonadedrinksboxalt");
    let d = document.getElementById("teadrinksboxalt");
    let e = document.getElementById("smoothiedrinksboxalt");
    let f = document.getElementById("cocoadrinksboxalt");

    if(a.style.display === "none"){
        a.style.display = "block";
        b.style.display = "none";
        c.style.display = "none";
        d.style.display = "none";
        e.style.display = "none";
        f.style.display = "none";
    }else{
        a.style.display = "block";
        b.style.display = "none";
        c.style.display = "none";
        d.style.display = "none";
        e.style.display = "none";
        f.style.display = "none";
    }
}


function showjfdrinks(){
    let button = document.getElementById("favoritesalt");
    let a =  document.getElementById("classicdrinksboxalt");
    let b = document.getElementById("jfdrinksboxalt");
    let c = document.getElementById("lemonadedrinksboxalt");
    let d = document.getElementById("teadrinksboxalt");
    let e = document.getElementById("smoothiedrinksboxalt");
    let f = document.getElementById("cocoadrinksboxalt");

    if(b.style.display === "none"){
        b.style.display = "block";
        a.style.display = "none";
        c.style.display = "none";
        d.style.display = "none";
        e.style.display = "none";
        f.style.display = "none";
    }else{
        b.style.display = "block";
        a.style.display = "none";
        c.style.display = "none";
        d.style.display = "none";
        e.style.display = "none";
        f.style.display = "none";
    }
}

function showlemonadedrinks(){
    let button = document.getElementById("lemonadealt");
    let a =  document.getElementById("classicdrinksboxalt");
    let b = document.getElementById("jfdrinksboxalt");
    let c = document.getElementById("lemonadedrinksboxalt");
    let d = document.getElementById("teadrinksboxalt");
    let e = document.getElementById("smoothiedrinksboxalt");
    let f = document.getElementById("cocoadrinksboxalt");

    if(c.style.display === "none"){
        c.style.display = "block";
        a.style.display = "none";
        b.style.display = "none";
        d.style.display = "none";
        e.style.display = "none";
        f.style.display = "none";
    }else{
        c.style.display = "block";
        a.style.display = "none";
        b.style.display = "none";
        d.style.display = "none";
        e.style.display = "none";
        f.style.display = "none";
    }
}

function showteadrinks(){
    let button = document.getElementById("teaalt");
    let a =  document.getElementById("classicdrinksboxalt");
    let b = document.getElementById("jfdrinksboxalt");
    let c = document.getElementById("lemonadedrinksboxalt");
    let d = document.getElementById("teadrinksboxalt");
    let e = document.getElementById("smoothiedrinksboxalt");
    let f = document.getElementById("cocoadrinksboxalt");

    if(d.style.display === "none"){
        d.style.display = "block";
        a.style.display = "none";
        b.style.display = "none";
        c.style.display = "none";
        e.style.display = "none";
        f.style.display = "none";
    }else{
        d.style.display = "block";
        a.style.display = "none";
        b.style.display = "none";
        c.style.display = "none";
        e.style.display = "none";
        f.style.display = "none";
    }
}

function showsmoothiesdrinks(){
    let button = document.getElementById("smoothiealt");
    let a =  document.getElementById("classicdrinksboxalt");
    let b = document.getElementById("jfdrinksboxalt");
    let c = document.getElementById("lemonadedrinksboxalt");
    let d = document.getElementById("teadrinksboxalt");
    let e = document.getElementById("smoothiedrinksboxalt");
    let f = document.getElementById("cocoadrinksboxalt");

    if(e.style.display === "none"){
        e.style.display = "block";
        a.style.display = "none";
        b.style.display = "none";
        c.style.display = "none";
        d.style.display = "none";
        f.style.display = "none";
    }else{
        e.style.display = "block";
        a.style.display = "none";
        b.style.display = "none";
        c.style.display = "none";
        d.style.display = "none";
        f.style.display = "none";
    }
}

function showhotcocoadrinks(){
    let button = document.getElementById("cocoaalt");
    let a =  document.getElementById("classicdrinksboxalt");
    let b = document.getElementById("jfdrinksboxalt");
    let c = document.getElementById("lemonadedrinksboxalt");
    let d = document.getElementById("teadrinksboxalt");
    let e = document.getElementById("smoothiedrinksboxalt");
    let f = document.getElementById("cocoadrinksboxalt");

    if(f.style.display === "none"){
        f.style.display = "block";
        a.style.display = "none";
        b.style.display = "none";
        c.style.display = "none";
        d.style.display = "none";
        e.style.display = "none";
    }else{
        f.style.display = "block";
        a.style.display = "none";
        b.style.display = "none";
        c.style.display = "none";
        d.style.display = "none";
        e.style.display = "none";
    }
}


//Show Hot or Iced Drinks///////////////////////////////////////////////////////////////////////

function showHotLatte(){
    let hotLbutton = document.getElementById("hotlattebuttonalt");
    let a = document.getElementById("hotlattedivalt");
    let b = document.getElementById("icedlattedivalt");
    let c = document.getElementById("hotlattealt");
    let d = document.getElementById("hotlatteheadingalt");
    if(a.style.display === "none"){
        a.style.display = "block";
        b.style.display = "none";
        c.style.display = "block";
        d.style.display = "block";
    }else{
        a.style.display = "block";
        b.style.display = "none";
        c.style.display = "block";
        d.style.display = "block";
    }
}

function showIcedLatte(){
    let icedLbutton = document.getElementById("icedlattebuttonalt");
    let a = document.getElementById("icedlattedivalt");
    let b = document.getElementById("hotlattealt");
    let c = document.getElementById("hotlatteheadingalt");

    if(a.style.display === "none"){
        a.style.display = "block";
        b.style.display = "none";
        c.style.display = "none";
    }else{
        a.style.display = "block";
        b.style.display = "none";
        c.style.display = "none";
    }
}

function switchtoblue2hotlatte(){
    let IcedButton = document.getElementById("icedlattebuttonalt");
    let HotButton = document.getElementById("hotlattebuttonalt");

    if(HotButton.style.backgroundColor === "rgb(29, 219, 219)"){
        HotButton.style.backgroundColor = "rgb(35, 168, 168)";
        IcedButton.style.backgroundColor = "rgb(29, 219, 219)";
    }else{
        HotButton.style.backgroundColor = "rgb(35, 168, 168)";
        IcedButton.style.backgroundColor = "rgb(29, 219, 219)";
    }
}

function switchtoblue2icedlatte(){
    let IcedButton = document.getElementById("icedlattebuttonalt");
    let HotButton = document.getElementById("hotlattebuttonalt");

    if(IcedButton.style.backgroundColor === "rgb(29, 219, 219)"){
        IcedButton.style.backgroundColor = "rgb(35, 168, 168)";
        HotButton.style.backgroundColor = "rgb(29, 219, 219)";
    }else{
        IcedButton.style.backgroundColor = "rgb(35, 168, 168)";
        HotButton.style.backgroundColor = "rgb(29, 219, 219)";
    }
}

function showIcedmocha(){
    let IcedMochabutton = document.getElementById("icedmochabuttonalt");
    let a = document.getElementById("icedmochadivalt");
    let b = document.getElementById("hotmochadivalt");

    if(a.style.display === "none"){
        a.style.display = "block";
        b.style.display = "none";
    }else{
        a.style.display = "block";
        b.style.display = "none";
    }
}

function showHotMocha(){
    let HotMochabutton = document.getElementById("hotmochabuttonalt");
    let a = document.getElementById("icedmochadivalt");
    let b = document.getElementById("hotmochadivalt");

    if(b.style.display === "none"){
        b.style.display = "block";
        a.style.display = "none";
    }
}


function switchtoblue2hotmocha(){
    let IcedButton = document.getElementById("icedmochabuttonalt");
    let HotButton = document.getElementById("hotmochabuttonalt");

    if(HotButton.style.backgroundColor === "rgb(29, 219, 219)"){
        HotButton.style.backgroundColor = "rgb(35, 168, 168)";
        IcedButton.style.backgroundColor = "rgb(29, 219, 219)";
    }else{
        HotButton.style.backgroundColor = "rgb(35, 168, 168)";
        IcedButton.style.backgroundColor = "rgb(29, 219, 219)";
    }
}

function switchtoblue2icedmocha(){
    let IcedButton = document.getElementById("icedmochabuttonalt");
    let HotButton = document.getElementById("hotmochabuttonalt");

    if(IcedButton.style.backgroundColor === "rgb(29, 219, 219)"){
        IcedButton.style.backgroundColor = "rgb(35, 168, 168)";
        HotButton.style.backgroundColor = "rgb(29, 219, 219)";
    }else{
        IcedButton.style.backgroundColor = "rgb(35, 168, 168)";
        HotButton.style.backgroundColor = "rgb(29, 219, 219)";
    }
}


function showHotAmericano(){
    let a = document.getElementById("hotamericanodivalt");
    let b = document.getElementById("icedamericanodivalt");

    if(a.style.display === "none"){
        a.style.display = "block";
        b.style.display = "none";
    }else{
        a.style.display = "block";
        b.style.display = "none";
    }
}

function showIcedAmericano(){
    let a = document.getElementById("hotamericanodivalt");
    let b = document.getElementById("icedamericanodivalt");

    if(b.style.display === "none"){
        b.style.display = "block";
        a.style.display = "none";
    }else{
        b.style.display = "block";
        a.style.display = "none";
    }
}

function showHotCaramelDelight(){
    let HotCaramelDelightButton = document.getElementById("hotcappuccinobuttonalt");
    let a = document.getElementById("hotcarameldelightcoffeedivalt");
    let b = document.getElementById("icedcarameldelightcoffeedivalt");

    if(a.style.display === "none"){
        a.style.display = "block";
        b.style.display = "none";
    }else{
        a.style.display = "block";
        b.style.display = "none";
    }
}


function showIcedCaramelDelight(){
    let IcedCaramelDelightButton = document.getElementById("icedcappuccinobuttonalt");
    let a = document.getElementById("hotcarameldelightcoffeedivalt");
    let b = document.getElementById("icedcarameldelightcoffeedivalt");

    if(b.style.display === "none"){
        b.style.display = "block";
        a.style.display = "none";
    }else{
        b.style.display = "block";
        a.style.display = "none";
    }
}

function switchtoblue2hotcarameldelight(){
    let IcedButton = document.getElementById("icedcarameldelightbuttonalt");
    let HotButton = document.getElementById("hotcarameldelightbuttonalt");

    if(HotButton.style.backgroundColor === "rgb(29, 219, 219)"){
        HotButton.style.backgroundColor = "rgb(35, 168, 168)";
        IcedButton.style.backgroundColor = "rgb(29, 219, 219)";
    }else{
        HotButton.style.backgroundColor = "rgb(35, 168, 168)";
        IcedButton.style.backgroundColor = "rgb(29, 219, 219)";
    }
}

function switchtoblue2icedcarameldelight(){
    let IcedButton = document.getElementById("icedcarameldelightbuttonalt");
    let HotButton = document.getElementById("hotcarameldelightbuttonalt");

    if(IcedButton.style.backgroundColor === "rgb(29, 219, 219)"){
        IcedButton.style.backgroundColor = "rgb(35, 168, 168)";
        HotButton.style.backgroundColor = "rgb(29, 219, 219)";
    }else{
        IcedButton.style.backgroundColor = "rgb(35, 168, 168)";
        HotButton.style.backgroundColor = "rgb(29, 219, 219)";
    }
}

function showHotCinnamonTwister(){
    let HotCinnamonTwisterButton = document.getElementById("hotcinnamontwisterbuttonalt");
    let a = document.getElementById("hotcinnamontwistercoffeeboxalt");
    let b = document.getElementById("icedcinnamontwistercoffeeboxalt");

    if(a.style.display === "none"){
        a.style.display = "block";
        b.style.display = "none";
    }else{
        a.style.display = "block";
        b.style.display = "none";
    }
}

function showIcedCinnamonTwister(){
    let IcedCinnamonTwisterButton = document.getElementById("icedcinnamontwisterbuttonalt");
    let a = document.getElementById("hotcinnamontwistercoffeeboxalt");
    let b = document.getElementById("icedcinnamontwistercoffeeboxalt");

    if(b.style.display === "none"){
        b.style.display = "block";
        a.style.display = "none";
    }else{
        b.style.display = "block";
        a.style.display = "none";
    }
}

function switchtoblue2hotcinnamontwister(){
    let IcedButton = document.getElementById("icedcinnamontwisterbuttonalt");
    let HotButton = document.getElementById("hotcinnamontwisterbuttonalt");

    if(HotButton.style.backgroundColor === "rgb(29, 219, 219)"){
        HotButton.style.backgroundColor = "rgb(35, 168, 168)";
        IcedButton.style.backgroundColor = "rgb(29, 219, 219)";
    }else{
        HotButton.style.backgroundColor = "rgb(35, 168, 168)";
        IcedButton.style.backgroundColor = "rgb(29, 219, 219)";
    }
}

function switchtoblue2icedcinnamontwister(){
    let IcedButton = document.getElementById("icedcinnamontwisterbuttonalt");
    let HotButton = document.getElementById("hotcinnamontwisterbuttonalt");

    if(IcedButton.style.backgroundColor === "rgb(29, 219, 219)"){
        IcedButton.style.backgroundColor = "rgb(35, 168, 168)";
        HotButton.style.backgroundColor = "rgb(29, 219, 219)";
    }else{
        IcedButton.style.backgroundColor = "rgb(35, 168, 168)";
        HotButton.style.backgroundColor = "rgb(29, 219, 219)";
    }
}

function showHotVanillaMagic(){
    let HotVanillaMagicButton = document.getElementById("hotvanillamagicbuttonalt");
    let a = document.getElementById("hotvanillamagiccoffeeboxalt");
    let b = document.getElementById("icedvanillamagicboxalt");

    if(a.style.display === "none"){
        a.style.display = "block";
        b.style.display = "none";
    }else{
        a.style.display = "block";
        b.style.display = "none";
    }
}

function showIcedVanillaMagic(){
    let IcedVanillaMagicButton = document.getElementById("icedvanillamagicbuttonalt");
    let a = document.getElementById("icedvanillamagicboxalt");
    let b = document.getElementById("hotvanillamagiccoffeeboxalt");

    if(a.style.display === "none"){
        a.style.display = "block";
        b.style.display = "none";
    }else{
        a.style.display = "block";
        b.style.display = "none";
    }
}

function switchtoblue2hotvanillamagic(){
    let IcedButton = document.getElementById("icedvanillamagicbuttonalt");
    let HotButton = document.getElementById("hotvanillamagicbuttonalt");

    if(HotButton.style.backgroundColor === "rgb(29, 219, 219)"){
        HotButton.style.backgroundColor = "rgb(35, 168, 168)";
        IcedButton.style.backgroundColor = "rgb(29, 219, 219)";
    }else{
        HotButton.style.backgroundColor = "rgb(35, 168, 168)";
        IcedButton.style.backgroundColor = "rgb(29, 219, 219)";
    }
}

function switchtoblue2icedvanillamagic(){
    let IcedButton = document.getElementById("icedvanillamagicbuttonalt");
    let HotButton = document.getElementById("hotvanillamagicbuttonalt");

    if(IcedButton.style.backgroundColor === "rgb(29, 219, 219)"){
        IcedButton.style.backgroundColor = "rgb(35, 168, 168)";
        HotButton.style.backgroundColor = "rgb(29, 219, 219)";
    }else{
        IcedButton.style.backgroundColor = "rgb(35, 168, 168)";
        HotButton.style.backgroundColor = "rgb(29, 219, 219)";
    }
}


function switchtoblue2hotamericano(){
    let IcedButton = document.getElementById("icedamericanobuttonalt");
    let HotButton = document.getElementById("hotamericanobuttonalt");

    if(HotButton.style.backgroundColor === "rgb(29, 219, 219)"){
        HotButton.style.backgroundColor = "rgb(35, 168, 168)";
        IcedButton.style.backgroundColor = "rgb(29, 219, 219)";
    }else{
        HotButton.style.backgroundColor = "rgb(35, 168, 168)";
        IcedButton.style.backgroundColor = "rgb(29, 219, 219)";
    }
}


function switchtoblue2icedamericano(){
    let IcedButton = document.getElementById("icedamericanobuttonalt");
    let HotButton = document.getElementById("hotamericanobuttonalt");

    if(IcedButton.style.backgroundColor === "rgb(29, 219, 219)"){
        IcedButton.style.backgroundColor = "rgb(35, 168, 168)";
        HotButton.style.backgroundColor = "rgb(29, 219, 219)";
    }else{
        IcedButton.style.backgroundColor = "rgb(35, 168, 168)";
        HotButton.style.backgroundColor = "rgb(29, 219, 219)";
    }
}

function showHotCappuccino(){
    let a = document.getElementById("hotcappuccinodivalt");
    let b = document.getElementById("icedcappuccinodivalt");

    if(a.style.display === "none"){
        a.style.display = "block";
        b.style.display = "none";
    }else{
        a.style.display = "block";
        b.style.display = "none";
    }
}

function showIcedCappuccino(){
    let a = document.getElementById("hotcappuccinodivalt");
    let b = document.getElementById("icedcappuccinodivalt");

    if(b.style.display === "none"){
        b.style.display = "block";
        a.style.display = "none";
    }else{
        b.style.display = "block";
        a.style.display = "none";
    }
}

function switchtoblue2hotcappuccino(){
    let IcedButton = document.getElementById("icedcappuccinobuttonalt");
    let HotButton = document.getElementById("hotcappuccinobuttonalt");

    if(HotButton.style.backgroundColor === "rgb(29, 219, 219)"){
        HotButton.style.backgroundColor = "rgb(35, 168, 168)";
        IcedButton.style.backgroundColor = "rgb(29, 219, 219)";
    }else{
        HotButton.style.backgroundColor = "rgb(35, 168, 168)";
        IcedButton.style.backgroundColor = "rgb(29, 219, 219)";
    }
}

function switchtoblue2icedcappuccino(){
    let IcedButton = document.getElementById("icedcappuccinobuttonalt");
    let HotButton = document.getElementById("hotcappuccinobuttonalt");

    if(IcedButton.style.backgroundColor === "rgb(29, 219, 219)"){
        IcedButton.style.backgroundColor = "rgb(35, 168, 168)";
        HotButton.style.backgroundColor = "rgb(29, 219, 219)";
    }else{
        IcedButton.style.backgroundColor = "rgb(35, 168, 168)";
        HotButton.style.backgroundColor = "rgb(29, 219, 219)";
    }
}

function showHotHazelnutSunsrise(){
    let a = document.getElementById("hothazelnutcoffeeboxalt");
    let b = document.getElementById("icedhazelnutcoffeeboxalt");
    if(a.style.display === "none"){
        a.style.display = "block";
        b.style.display = "none";
    }else{
        a.style.display = "block";
        b.style.display = "none";
    }
}

function showIcedHazelnutSunsrise(){
    let a = document.getElementById("hothazelnutcoffeeboxalt");
    let b = document.getElementById("icedhazelnutcoffeeboxalt");
    if(b.style.display === "none"){
        b.style.display = "block";
        a.style.display = "none";
    }else{
        b.style.display = "block";
        a.style.display = "none";
    }
}



function switchtoblue2hothazelnutsunrise(){
    let IcedButton = document.getElementById("icedhazelnutsunrisebuttonalt");
    let HotButton = document.getElementById("hothazelnutsunrisebuttonalt");

    if(HotButton.style.backgroundColor === "rgb(29, 219, 219)"){
        HotButton.style.backgroundColor = "rgb(35, 168, 168)";
        IcedButton.style.backgroundColor = "rgb(29, 219, 219)";
    }else{
        HotButton.style.backgroundColor = "rgb(35, 168, 168)";
        IcedButton.style.backgroundColor = "rgb(29, 219, 219)";
    }
}

function switchtoblue2icedhazelnutsunrise(){
    let IcedButton = document.getElementById("icedhazelnutsunrisebuttonalt");
    let HotButton = document.getElementById("hothazelnutsunrisebuttonalt");

    if(IcedButton.style.backgroundColor === "rgb(29, 219, 219)"){
        IcedButton.style.backgroundColor = "rgb(35, 168, 168)";
        HotButton.style.backgroundColor = "rgb(29, 219, 219)";
    }else{
        IcedButton.style.backgroundColor = "rgb(35, 168, 168)";
        HotButton.style.backgroundColor = "rgb(29, 219, 219)";
    }
}

function showHotBlackTea(){
    let a = document.getElementById("hotblackteaboxalt");
    let b = document.getElementById("icedblackteaboxalt");

    if(a.style.display === "none"){
        a.style.display = "block";
        b.style.display = "none";
    }else{
        a.style.display = "block";
        b.style.display = "none";
    }
}

function showIcedBlackTea(){
    let a = document.getElementById("hotblackteaboxalt");
    let b = document.getElementById("icedblackteaboxalt");

    if(b.style.display === "none"){
        b.style.display = "block";
        a.style.display = "none";
    }else{
        b.style.display = "block";
        a.style.display = "none";
    }
}

function switchtoblue2hotblacktea(){
    let IcedButton = document.getElementById("icedblackteabuttonalt");
    let HotButton = document.getElementById("hotblackteabuttonalt");

    if(HotButton.style.backgroundColor === "rgb(29, 219, 219)"){
        HotButton.style.backgroundColor = "rgb(35, 168, 168)";
        IcedButton.style.backgroundColor = "rgb(29, 219, 219)";
    }else{
        HotButton.style.backgroundColor = "rgb(35, 168, 168)";
        IcedButton.style.backgroundColor = "rgb(29, 219, 219)";
    }
}

function switchtoblue2icedblacktea(){
    let IcedButton = document.getElementById("icedblackteabuttonalt");
    let HotButton = document.getElementById("hotblackteabuttonalt");

    if(IcedButton.style.backgroundColor === "rgb(29, 219, 219)"){
        IcedButton.style.backgroundColor = "rgb(35, 168, 168)";
        HotButton.style.backgroundColor = "rgb(29, 219, 219)";
    }else{
        IcedButton.style.backgroundColor = "rgb(35, 168, 168)";
        HotButton.style.backgroundColor = "rgb(29, 219, 219)";
    }
}

function showHotGreenTea(){
    let a = document.getElementById("hotgreenteaboxalt");
    let b = document.getElementById("icedgreenteaboxalt");

    if(a.style.display === "none"){
        a.style.display = "block";
        b.style.display = "none";
    }else{
        a.style.display = "block";
        b.style.display = "none"
    }
}

function showIcedGreenTea(){
    let a = document.getElementById("hotgreenteaboxalt");
    let b = document.getElementById("icedgreenteaboxalt");

    if(b.style.display === "none"){
        b.style.display = "block";
        a.style.display = "none";
    }else{
        b.style.display = "block";
        a.style.display = "none"
    }
}

function switchtoblue2hotgreentea(){
    let IcedButton = document.getElementById("icedgreenteabuttonalt");
    let HotButton = document.getElementById("hotgreenteabuttonalt");

    if(HotButton.style.backgroundColor === "rgb(29, 219, 219)"){
        HotButton.style.backgroundColor = "rgb(35, 168, 168)";
        IcedButton.style.backgroundColor = "rgb(29, 219, 219)";
    }else{
        HotButton.style.backgroundColor = "rgb(35, 168, 168)";
        IcedButton.style.backgroundColor = "rgb(29, 219, 219)";
    }
}

function switchtoblue2icedgreentea(){
    let IcedButton = document.getElementById("icedgreenteabuttonalt");
    let HotButton = document.getElementById("hotgreenteabuttonalt");

    if(IcedButton.style.backgroundColor === "rgb(29, 219, 219)"){
        IcedButton.style.backgroundColor = "rgb(35, 168, 168)";
        HotButton.style.backgroundColor = "rgb(29, 219, 219)";
    }else{
        IcedButton.style.backgroundColor = "rgb(35, 168, 168)";
        HotButton.style.backgroundColor = "rgb(29, 219, 219)";
    }
}

function showHotRaspberryTea(){
    let a = document.getElementById("hotraspberryteaboxalt");
    let b = document.getElementById("icedraspberryteaboxalt");

    if(a.style.display === "none"){
        a.style.display = "block";
        b.style.display = "none";
    }else{
        a.style.display = "block";
        b.style.display = "none"
    }
}

function showIcedRaspberryTea(){
    let a = document.getElementById("hotraspberryteaboxalt");
    let b = document.getElementById("icedraspberryteaboxalt");

    if(b.style.display === "none"){
        b.style.display = "block";
        a.style.display = "none";
    }else{
        b.style.display = "block";
        a.style.display = "none"
    }
}

function switchtoblue2hotraspberrytea(){
    let IcedButton = document.getElementById("icedraspberryteabuttonalt");
    let HotButton = document.getElementById("hotraspberryteabuttonalt");

    if(HotButton.style.backgroundColor === "rgb(29, 219, 219)"){
        HotButton.style.backgroundColor = "rgb(35, 168, 168)";
        IcedButton.style.backgroundColor = "rgb(29, 219, 219)";
    }else{
        HotButton.style.backgroundColor = "rgb(35, 168, 168)";
        IcedButton.style.backgroundColor = "rgb(29, 219, 219)";
    }
}

function switchtoblue2icedraspberrytea(){
    let IcedButton = document.getElementById("icedraspberryteabuttonalt");
    let HotButton = document.getElementById("hotraspberryteabuttonalt");

    if(IcedButton.style.backgroundColor === "rgb(29, 219, 219)"){
        IcedButton.style.backgroundColor = "rgb(35, 168, 168)";
        HotButton.style.backgroundColor = "rgb(29, 219, 219)";
    }else{
        IcedButton.style.backgroundColor = "rgb(35, 168, 168)";
        HotButton.style.backgroundColor = "rgb(29, 219, 219)";
    }
}

function showHotStrawberryTea(){
    let a = document.getElementById("hotstrawberryteaboxalt");
    let b = document.getElementById("icedstrawberryteaboxalt");

    if(a.style.display === "none"){
        a.style.display = "block";
        b.style.display = "none";
    }else{
        a.style.display = "block";
        b.style.display = "none"
    }
}

function showIcedStrawberryTea(){
    let a = document.getElementById("hotstrawberryteaboxalt");
    let b = document.getElementById("icedstrawberryteaboxalt");

    if(b.style.display === "none"){
        b.style.display = "block";
        a.style.display = "none";
    }else{
        b.style.display = "block";
        a.style.display = "none"
    }
}


function switchtoblue2hotstrawberrytea(){
    let IcedButton = document.getElementById("icedstrawberryteabuttonalt");
    let HotButton = document.getElementById("hotstrawberryteabuttonalt");

    if(HotButton.style.backgroundColor === "rgb(29, 219, 219)"){
        HotButton.style.backgroundColor = "rgb(35, 168, 168)";
        IcedButton.style.backgroundColor = "rgb(29, 219, 219)";
    }else{
        HotButton.style.backgroundColor = "rgb(35, 168, 168)";
        IcedButton.style.backgroundColor = "rgb(29, 219, 219)";
    }
}

function switchtoblue2icedstrawberrytea(){
    let IcedButton = document.getElementById("icedstrawberryteabuttonalt");
    let HotButton = document.getElementById("hotstrawberryteabuttonalt");

    if(IcedButton.style.backgroundColor === "rgb(29, 219, 219)"){
        IcedButton.style.backgroundColor = "rgb(35, 168, 168)";
        HotButton.style.backgroundColor = "rgb(29, 219, 219)";
    }else{
        IcedButton.style.backgroundColor = "rgb(35, 168, 168)";
        HotButton.style.backgroundColor = "rgb(29, 219, 219)";
    }
}

function showfbalert(){
    let fbbutton = document.getElementById("fbbuttonalt");

    window.alert("This does not link to facebook.com, for display purposes only.");
}

function showinstaalert(){
    let instabutton = document.getElementById("instabuttonalt");

    window.alert("This does not link to instagram.com, for display purposes only.");
}

function showemailaalert(){
    let emailbutton = document.getElementById("emailbuttonalt");

    window.alert("This does not open email, for display purposes only.");
}

function showphoneaalert(){
    let phonebutton = document.getElementById("phonebuttonalt");

    window.alert("This does not call any number, for display purposes only.");
}

window.onload = function convertclassicdivs(){
    let b1 = document.getElementById("classicbox2alt");
    let c1 = document.getElementById("classicbox3alt");
    let d1 = document.getElementById("classicbox4alt");
    let b2 = document.getElementById("jfbox2alt");
    let c2 = document.getElementById("jfbox3alt");
    let d2 = document.getElementById("jfbox4alt");
    let b3 = document.getElementById("lemonbox2alt");
    let c3 = document.getElementById("lemonbox3alt");
    let d3 = document.getElementById("lemonbox4alt");
    let b4 = document.getElementById("teabox2alt");
    let c4 = document.getElementById("teabox3alt");
    let d4 = document.getElementById("teabox4alt");
    let b5 = document.getElementById("smoothiebox2alt");
    let c5 = document.getElementById("smoothiebox3alt");
    let d5 = document.getElementById("smoothiebox4alt");
    let b6 = document.getElementById("cocoabox2alt");
    let c6 = document.getElementById("cocoabox3alt");
    let d6 = document.getElementById("cocoabox4alt");

    if(window.innerWidth > 1075){
        b1.style.display = "block";
        c1.style.display = "block";
        d1.style.display = "block";
        b2.style.display = "block";
        c2.style.display = "block";
        d2.style.display = "block";
        b3.style.display = "block";
        c3.style.display = "block";
        d3.style.display = "block";
        b4.style.display = "block";
        c4.style.display = "block";
        d4.style.display = "block";
        b5.style.display = "block";
        c5.style.display = "block";
        d5.style.display = "block";
        b6.style.display = "block";
        c6.style.display = "block";
        d6.style.display = "block";
    }else{
        b1.style.display = "none";
        c1.style.display = "none";
        d1.style.display = "none";
        b2.style.display = "none";
        c2.style.display = "none";
        d2.style.display = "none";
        b3.style.display = "none";
        c3.style.display = "none";
        d3.style.display = "none";
        b4.style.display = "none";
        c4.style.display = "none";
        d4.style.display = "none";
        b5.style.display = "none";
        c5.style.display = "none";
        d5.style.display = "none";
        b6.style.display = "none";
        c6.style.display = "none";
        d6.style.display = "none";
    }
}


