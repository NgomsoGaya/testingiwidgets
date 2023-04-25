function calculateBtnClicked() {

    var theCallCost = 2.75
    var theSmsCost = 0.75

    var total = 0;
 
    function getSms(callsAndSms){
        var callSmsList = callsAndSms.split(",")
        for (var i = 0; i < callSmsList.length; i++) {
            var phoneBillList = callSmsList[i].trim();
        if (phoneBillList.toLowerCase() == "sms") {
            total += theSmsCost;
        }
    }
    return total.toFixed(2)
    }

    function getCall(callsAndSms){
        var callSmsList = callsAndSms.split(",")
        for (var i = 0; i < callSmsList.length; i++) {
            var phoneBillList = callSmsList[i].trim();
        if (phoneBillList.toLowerCase() == "call") {
            total += theCallCost;
        }
    }
    return total.toFixed(2)
    }

    function getBoth (callsAndSms){
        var callSmsList = callsAndSms.split(",")
        for (var i=0; i< callSmsList.length; i++){
            var phoneBillList = callSmsList[i].trim()
        if (phoneBillList.toLowerCase() == "call"){
            total += theCallCost
        }
        else if(phoneBillList.toLowerCase() == "sms"){
            total += theSmsCost
        }
    }
    return total.toFixed(2)
    }

    function getSomethingElse(){
    return total.toFixed(2)
    }
    
    return {
        getSms,
        getCall,
        getSomethingElse,
        getBoth

    }
}
