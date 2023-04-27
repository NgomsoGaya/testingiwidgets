describe('Test my Radio bill function' , function(){
    it("should return a 8.25 when three calls are made" , function(){

        let calculateBill = radioBill()

        calculateBill.sumRadioCall("call")
        calculateBill.sumRadioCall("call")
        calculateBill.sumRadioCall("call")

        assert.equal(8.25, calculateBill.getRadioCallTotal());
    
    });

    it( "should return a 1.5 when two sms are sent", function(){
        let calculateBill2 = radioBill()

        calculateBill2.sumRadioSms('sms')
        calculateBill2.sumRadioSms('sms')

        assert.equal(calculateBill2.getRadioSmsTotal(), 1.5);

    });

    it( "should return a 18.75 when two sms are sent and three calls are made", function(){
        let calculateBill4 = radioBill()

        calculateBill4.sumRadioSms('sms')
        calculateBill4.sumRadioSms('sms')

        calculateBill4.sumRadioCall("call")
        calculateBill4.sumRadioCall("call")
        calculateBill4.sumRadioCall("call")

        assert.equal(calculateBill4.getRadioTotal(), 18.75);

    });
});