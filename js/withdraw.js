document.getElementById('withdraw_btn').addEventListener('click', function () {

    const withdrawAmmounField = document.getElementById('withdraw_field');
    const previousWidthdrawAmmount = withdrawAmmounField.value;
    const newithdrawammount = parseFloat(previousWidthdrawAmmount);
    withdrawAmmounField.value = '';



    const withdrawTOtalAmmount = document.getElementById('withdraw_total');
    const withdrawTotal = withdrawTOtalAmmount.innerText;
    const newWithdrawTotal = parseFloat(withdrawTotal);




    const balanceTotalElement = document.getElementById('balance_total');
    const previousBalanceTotal = balanceTotalElement.innerText;
    const newBalanceTotal = parseFloat(previousBalanceTotal);


    if (newithdrawammount > newBalanceTotal) {

        alert('Your total balance more then less your withdraw ammount');
        return;
    }

    const totalWithdraw = newWithdrawTotal + newithdrawammount;
    withdrawTOtalAmmount.innerText = totalWithdraw;


    const currentbalanceTotal = newBalanceTotal - newithdrawammount;
    balanceTotalElement.innerText = currentbalanceTotal;


})