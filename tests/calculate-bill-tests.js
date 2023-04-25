describe('Test my calculate bill function' , function(){
    it("should return a 2.75 when called with  a single call string" , function(){
        let calculateBill = calculateBtnClicked()

        assert.equal(2.75, calculateBill.getCall('call'));

    });

    it( "should return a 0.65 when called with a single sms string", function(){
        let calculateBill2 = calculateBtnClicked()

        assert.equal(calculateBill2.getSms('sms'), 0.75);

    });

    it("should return 0.00 when called with an empty input", function(){
        let calculateBill3 = calculateBtnClicked()

        assert.equal(calculateBill3.getSomethingElse(""), 0.00);
    });

    it("should return 10.20 when called with an input of three calls three sms's", function(){
        let calculateBill4= calculateBtnClicked()

        assert.equal(calculateBill4.getBoth("call, call, call, sms, sms,sms"), 10.50);
    });
});