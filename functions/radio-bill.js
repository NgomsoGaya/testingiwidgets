var callsTotal = 0;
var smsTotal = 0;

function radioBill(){
var checkedRadioBtn = document.querySelector("input[name='billItemType']:checked");
if (checkedRadioBtn){
    var billItemType = checkedRadioBtn.value
    // billItemType will be 'call' or 'sms'
}
if (billItemType == "call"){
    callsTotal += 2.75
}
else if (billItemType == "sms"){
    smsTotal += 0.75
}
    callTotalTwo.innerHTML = callsTotal.toFixed(2);
    smsTotalTwo.innerHTML = smsTotal.toFixed(2);
    var totalCost = callsTotal + smsTotal;
    totalTwo.innerHTML = totalCost.toFixed(2)

    //color the total based on the criteria
    if (totalCost >= 50){
        // adding the danger class will make the text red
        totalTwo.classList.add("danger");
    }
    else if (totalCost >= 30){
        totalTwo.classList.add("warning");
    }
}