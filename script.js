console.log("general kenobi");
var number = 5;
var string = 'hello there';
var israd = true;
var groceries = ['milk', 'eggs', 'cheese']


if(number == 10){
    console.log("yeah buddy");
} else {
    console.log("nope");
}

document.getElementById('box').innerHTML=number + 5;


function listGroceries(){
    for (var i = 0; i < groceries.length; i ++){
        console.log(groceries[i]);
    }
    
}

listGroceries();

document.getElementById('box').addEventListener('click', function(){
    alert('I got clicked');
})