var callsTotal1 = 0;
var smsTotal1 = 0;

function textBillTotal(){
    var theCallCost = 2.75
    var theSmsCost = 0.75

    var callTotal = 0
    var smsTotal = 0
    var total = 0;
 
    function getSms2(callsAndSms){
        if (callsAndSms.toLowerCase() == "sms") {
            smsTotal += theSmsCost;
            total += smsTotal
        }
    return total.toFixed(2)
    }

    function getCall2(callsAndSms){
        if (callsAndSms.toLowerCase() == "call") {
            callTotal += theCallCost;
            total += callTotal
        }
    return total.toFixed(2)
    }

    function getSomethingElse2(callsAndSms){
        if(callsAndSms.toLowerCase() !== "call" || callsAndSms.toLowerCase() !== "sms"){
            return total
        }
    }

    function getSmsTotal(){
        return smsTotal
    }

    function getCallTotal(){
        return callTotal
    }

    function getTotal(){
        return total
    }
     return {
        getSms2,
        getCall2,
        getSomethingElse2,
        getSmsTotal,
        getCallTotal,
        getTotal
     }
    }