













// section of all ..
let Name  = document.getElementById('name');
let Number = document.getElementById('number');
let resultShow = document.getElementById('put-result');
let button = document.getElementById('button');
// start function writing..........
let allFunction = function(event){
    event.preventDefault();
    let userName = Name.value;
    let numberValue = Number.value;
    if(numberValue <= 50){
       let value = userName +' '+ 'Got F';
       resultShow.innerHTML = value;
    }else if(numberValue > 50 && numberValue<=60){
        let value = userName +' '+'Got D';
        resultShow.innerHTML = value;
    }else if(numberValue > 60 && numberValue<=70){
        let value = userName +' '+'Got C';
        resultShow.innerHTML = value;
    }else if(numberValue > 70 && numberValue<=80){
        let value = userName +' '+'Got B';
        resultShow.innerHTML = value;
    }else if(numberValue > 80 && numberValue<=90){
        let value = userName +' '+'Got A';
        resultShow.innerHTML = value;
    }else if(numberValue > 90 && numberValue<=100){
        let value = userName +' '+'Got A+';
        resultShow.innerHTML = value;
    }else{
        let value = 'Put your hand on your 👨 ' ;
        resultShow.innerHTML = value;
    }
   
    names.value ='';
    number.value = '';
}
// add event lisener........
button.addEventListener('click',allFunction);