// JS SECTION


// 1
document.getElementsByClassName("btn")[0].addEventListener("click", function (){
    changetext(0)
})

// 2
document.getElementsByClassName("btn")[1].addEventListener("click", function (){
    changetext(1)
})

// 3
document.getElementsByClassName("btn")[2].addEventListener("click", function (){
    changetext(2)
})

// 4
document.getElementsByClassName("btn")[3].addEventListener("click", function (){
    changetext(3)
})

// 5
document.getElementsByClassName("btn")[4].addEventListener("click", function (){
    changetext(4)
})

// 6
document.getElementsByClassName("btn")[5].addEventListener("click", function (){
    changetext(5)
})

// 7
document.getElementsByClassName("btn")[6].addEventListener("click", function (){
    changetext(6)
})

// 8
document.getElementsByClassName("btn")[7].addEventListener("click", function (){
    changetext(7)
})

// 9
document.getElementsByClassName("btn")[8].addEventListener("click", function (){
    changetext(8)
})

// 0
document.getElementsByClassName("btn")[9].addEventListener("click", function (){
    changetext(9)
})

// .
document.getElementsByClassName("btn")[10].addEventListener("click", function (){
    changetext(10)
})


//Operators


//+
document.getElementsByClassName("opt")[0].addEventListener("click",function(){

operator(0)

})


//-
document.getElementsByClassName("opt")[1].addEventListener("click",function(){

operator(1)

})


//*

document.getElementsByClassName("opt")[2].addEventListener("click",function(){

operator(2)

})


///
document.getElementsByClassName("opt")[3].addEventListener("click",function(){

operator(3)

})


//equal button
document.getElementById("equal").addEventListener("click",function(){


calculate()
})



//clear
 
document.getElementsByClassName("clear")[0].addEventListener("click",function(){

clear()

})


function changetext(index){

    var text =  document.getElementsByClassName("btn")[index].innerText
    document.getElementById("display").value += text

}


function operator(index){

    var text =  document.getElementsByClassName("opt")[index].innerText
    document.getElementById("display").value += text

}

function calculate(){

   var expression =  document.getElementById("display").value
   var result = eval(expression)

   document.getElementById("display").value = result

}

function clear(){

    document.getElementById("display").value = ""

}



