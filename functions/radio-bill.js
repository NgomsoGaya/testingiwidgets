var callsTotal = 0;
var smsTotal = 0;

function radioBill(){
    var theCallCost = 2.75
    var theSmsCost = 0.75

    var callTotal = 0
    var smsTotal = 0
    var total = 0;

    function sumRadioSms(calls){
        if (calls.toLowerCase() == "sms") {
            smsTotal += theSmsCost;
            total += smsTotal
        }
    return total.toFixed(2)
    }

    function sumRadioCall(Sms){
        if (Sms.toLowerCase() == "call") {
            callTotal += theCallCost;
            total += callTotal
        }
    return total.toFixed(2)
    }
    function getRadioSmsTotal(){
        return smsTotal
    }

    function getRadioCallTotal(){
        return callTotal
    }

    function getRadioTotal(){
        return total
    }

    return {
        sumRadioSms,
        sumRadioCall,
        getRadioSmsTotal,
        getRadioCallTotal,
        getRadioTotal
    }
}