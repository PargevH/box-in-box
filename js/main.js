document.onkeydown = checkKey;
//addEventListener('onkeydown', chackkey);
var box;
box = document.getElementById("box");


function checkKey(e) {

console.log(e);
    if (e.keyCode == '38' && box.style.top != "0px") {
        console.log("up");
        box.style.top = (box.style.top.replace('px','')*1)-5
       console.log(box.style.top);
        // up 
    }
    else if (e.keyCode == '40' && box.style.top !="280px") {
        console.log("down");
        box.style.top = (box.style.top.replace('px','')*1)+5
        // down
        console.log(box.style.top);
    }
    else if (e.keyCode == '37' && box.style.left != "0px") {
       console.log("left");
       box.style.left = (box.style.left.replace('px','')*1)-5
       // left 
    }
    else if (e.keyCode == '39' && box.style.left !="280px") {
       console.log("right");
       box.style.left = (box.style.left.replace('px','')*1)+5
       // right 
    }

}