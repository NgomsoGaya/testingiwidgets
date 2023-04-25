describe('Test my text bill function' , function(){
    it("should return a 8.25 when called with  three calls" , function(){

        let calculateBill = textBillTotal()

        calculateBill.getCall2("call")
        calculateBill.getCall2("call")
        calculateBill.getCall2("call")

        assert.equal(8.25, calculateBill.getCallTotal());
    
    });

    it( "should return a 1.5 when called with two sms string", function(){
        let calculateBill2 = textBillTotal()

        calculateBill2.getSms2('sms')
        calculateBill2.getSms2('sms')

        assert.equal(calculateBill2.getSmsTotal(), 1.5);

    });

    it( "should return a 0.00 when called with an empty string", function(){
        let calculateBill3 = textBillTotal()

        assert.equal(calculateBill3.getSomethingElse2(''), 0.00);

    });

    it( "should return a 0.00 when called with anything not a call or sms string", function(){
        let calculateBill3 = textBillTotal()

        assert.equal(calculateBill3.getSomethingElse2('blackboy'), 0.00);

    });

    it( "should return a 1.5 when called with two sms string", function(){
        let calculateBill4 = textBillTotal()

        calculateBill4.getSms2('sms')
        calculateBill4.getSms2('sms')

        calculateBill4.getCall2("call")
        calculateBill4.getCall2("call")
        calculateBill4.getCall2("call")

        assert.equal(calculateBill4.getTotal(), 18.75);

    });
});