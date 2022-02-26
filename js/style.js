var x = document.getElementById("id2");
var but = document.getElementById("id1");
var but3 = document.getElementById("id3");
var sub1 = document.getElementById("sub");


x.onclick = function(){award()};
but.onclick = function(){project()};
but3.onclick = function() {lang()};
sub1.onclick = function(){sub()};

function project(){
    let y = document.getElementById("award");
    let div = document.getElementById("proj");
    let div3 = document.getElementById("lang");
    

    if(y.style.display == "block"){
        y.style.display = "none";
    }else if(div3.style.display == "block"){
        div3.style.display = "none";
    }
    else{
        div.style.display = "block";

    }
    
}

function award(){
    let y = document.getElementById("award");
    let div = document.getElementById("proj");
    let div3 = document.getElementById("lang");

    

    if(y.style.display == "none"){
        y.style.display = "block";
    }else if(div3.style.display == "block"){
        div3.style.display = "none";
    }
    else{
        y.style.display = "block";
    }
}

function lang(){
    let y = document.getElementById("award");
    let div = document.getElementById("proj");
    let div3 = document.getElementById("lang");

    if(div3.style.display == "none"){
        div3.style.display = "block";
    }else{
        div3.style.display = "block"
    }

}
function sub(){
    alert("succussefully submitted")
}

    
