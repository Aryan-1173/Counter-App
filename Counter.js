document.getElementById("info").addEventListener("click", function() {
    document.getElementById("countings").classList.add("aalu");
    document.getElementById("information").classList.add("aalu");
});

document.getElementById("close").addEventListener("click", function() {
    document.getElementById("information").classList.remove("aalu");
    document.getElementById("countings").classList.remove("aalu");
})

document.getElementById("settings").addEventListener("click", function() {
    document.getElementById("Setting").classList.add("aalu");
    document.getElementById("countings").classList.add("aalu");
})

document.getElementById("bnd").addEventListener("click", function() {
    document.getElementById("Setting").classList.remove("aalu");
    document.getElementById("countings").classList.remove("aalu");

})


let add = document.getElementById("add");
let counting = document.getElementById("count");
let score = 1;





// this for code here for the working of max value and adding the counting
let input = document.getElementById("in");
let set = document.getElementById("lim");
let max = null;
let se = document.getElementById("on")

set.addEventListener("click", function() {
    let enteredNumber = Number(input.value);

    if(enteredNumber && enteredNumber > 0) {
        max = enteredNumber;
        se.innerText = `Max value is ${max}`;
    } else {
        se.innerText = "Wrong Number!"
    }
});



add.addEventListener("click", function() {
   if(max === null || score <= max) {
    counting.innerText = score++;
   } else {
    alert("Limit reached")
   }

})

let minus = document.getElementById("minus");

minus.addEventListener("click", function() {
    if (score === 0) {
        counting.innerText = 0;
    } else {
        counting.innerText = --score;
    }
})

// the counting one ends here!




// this down here is the code for restarting the counting
let replay = document.getElementById("repeat");

replay.addEventListener("click", function() {
    score = 0;
    max = null;
    counting.innerText = score;
})

// ends here 

document.getElementById("black").addEventListener("click", function() {
    document.body.style.backgroundColor = "black";
    counting.style.color = "white";
    document.getElementById("info").style.color = "white";
    document.getElementById("repeat").style.color = "white";
    document.getElementById("settings").style.color = "white";
    document.getElementById("made").style.color = "white";
})

document.getElementById("white").addEventListener("click", function() {
    document.body.style.backgroundColor = "white";
    counting.style.color = "black";
    document.getElementById("info").style.color = "black";
    document.getElementById("repeat").style.color = "black";
    document.getElementById("settings").style.color = "black";
    document.getElementById("made").style.color = "black";
})

document.getElementById("blue").addEventListener("click", function() {
    document.body.style.backgroundColor = "rgb(0, 66, 145)";
    counting.style.color = "white";
    document.getElementById("info").style.color = "white";
    document.getElementById("repeat").style.color = "white";
    document.getElementById("settings").style.color = "white";
    document.getElementById("made").style.color = "white";
   
    
})

