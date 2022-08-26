document.getElementById('deposit_btn').addEventListener('click', function () {

    const depAmmountField = document.getElementById('depAammount_field');
    const depAmmount = depAmmountField.value;
    const depammoutnum = parseFloat(depAmmount);
    depAmmountField.value = '';

    if (isNaN(depammoutnum)) {
        alert('Please Enter your Ammount');
        return;
    }

    const depTotalAmmount = document.getElementById('dep_totoal');
    const depTotal = depTotalAmmount.innerText;
    const deptotalnum = parseFloat(depTotal);
    const totaldeposit = deptotalnum + depammoutnum;
    depTotalAmmount.innerText = totaldeposit;



    const balanceTotalElement = document.getElementById('balance_total');
    const previousBalanceTotal = balanceTotalElement.innerText;
    const previousBalanceTotal1 = parseFloat(previousBalanceTotal);

    const currentbalanceTotal = previousBalanceTotal1 + depammoutnum;
    balanceTotalElement.innerText = currentbalanceTotal;

})