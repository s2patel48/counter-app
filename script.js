
let countEl = document.getElementById("count");
let count = 0;
let prevCountString="";
function increament() {
    count += 1;
    countEl.innerText = count;
    console.log(countEl.innerText);
    console.log(count);
}

function decreament() {
    if (count > 0) {
        count -= 1;
        countEl.innerText = count;
    }
    else{
        alert('you are currently at 0 count');
    }

}

let prevCount = document.getElementById("previous-count");
function save(){
    if (prevCountString === ""){
        prevCountString = prevCountString + count;
        prevCount.innerText = prevCountString;
        count = 0;
        document.getElementById("count").innerText = count;
    }
    else{
        prevCountString = prevCountString +" - " + count;
       prevCount.innerText = prevCountString;
       count = 0;
       document.getElementById("count").innerText = count;
    }
}