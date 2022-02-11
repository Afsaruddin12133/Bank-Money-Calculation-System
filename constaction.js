// Section of selection.....
let depositeMoney = document.getElementById('deposit-money');
let withdrowMoney = document.getElementById('withdrow-money');
let balanceMoney = document.getElementById('balance-money');
let deopsitAmountFild = document.getElementById('deopsitAmount-fild');
let withdrowAmountFild = document.getElementById('withdrowAmount-fild');
let depositeButton = document.getElementById('deposite-button');
let withdrowButton = document.getElementById('withdrow-button');
// Section of functions.......
let depoditeAndbalanceMoney = function(){
   let depositeInput = parseFloat(deopsitAmountFild.value);
    if(depositeInput > 0){
        depositeMoney.innerText = depositeInput;
        let innerTextValue = parseFloat(balanceMoney.innerText);
        balanceMoney.innerText = innerTextValue + depositeInput;
    }
    deopsitAmountFild.value = "";
}
depositeButton.addEventListener('click',depoditeAndbalanceMoney);

// witedrow Money...
let widthdrowAndbalanceMoney = function(){
    let depositeInput = parseFloat(balanceMoney.innerText);
    console.log(depositeInput);
    let withdrowInput = parseFloat(withdrowAmountFild.value);
     if(withdrowInput > 0){
      let valus =  parseFloat(withdrowMoney.innerText);
      let sum = valus + withdrowInput;
      withdrowMoney.innerText = sum;
            let result = depositeInput  - withdrowInput;
            if(result >= 0){
                balanceMoney.innerText = result;
            }
            if(depositeInput == 0){
                withdrowButton.disabled = true;
                let sum = valus - depositeInput ;
                withdrowMoney.innerText = sum;
            }
     }
     withdrowAmountFild.value = "";
 }
 withdrowButton.addEventListener('click',widthdrowAndbalanceMoney);