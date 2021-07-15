document.getElementById('submit').addEventListener("click",function(){
   /* if(document.getElementById('ac').value=="12345" && document.getElementById('password').value=="1234"){ */
        document.getElementById('login-area').style.display= "none";
        document.getElementById('main-area').style.display= "block";
    /*}
    else{
        document.getElementById('err').innerHTML="Enter correct Information"
    }*/
    
})

document.getElementById('Deposit-choose').addEventListener("click",function(){
    document.getElementById('withdraw-area').style.display= "none";
    document.getElementById('deposit-area').style.display= "block";
})


document.getElementById('addDeposit').addEventListener("click",function(){
    document.getElementById('depositini').innerHTML=parseInt(document.getElementById('depositAmount').value)+parseInt(document.getElementById('depositini').innerHTML)

    document.getElementById('totalAmount').innerHTML=parseInt(document.getElementById('depositAmount').value)+parseInt(document.getElementById('totalAmount').innerHTML)
})

document.getElementById('Withdraw-choose').addEventListener("click",function(){
    document.getElementById('deposit-area').style.display= "none";
    document.getElementById('withdraw-area').style.display= "block";
})


document.getElementById('addWithdraw').addEventListener("click",function(){
    if(parseInt(document.getElementById('totalAmount').innerHTML)!=0)
    {
        document.getElementById('withdrawini').innerHTML=parseInt(document.getElementById('withdrawAmount').value)+parseInt(document.getElementById('withdrawini').innerHTML)

        document.getElementById('totalAmount').innerHTML=parseInt(document.getElementById('totalAmount').innerHTML)-parseInt(document.getElementById('withdrawAmount').value)
    }
    else{
        alert("You have on money")
    }
        
})