function Display(){
    if(document.getElementById('main-container').style.display == 'none'){
        document.getElementById('main-container').style.display = 'flex'
        document.getElementById('recount').style.display = 'inline'
        document.getElementById('unhide').style.display = 'none'
    }
    else{
        document.getElementById('main-container').style.display = 'none'
        document.getElementById('recount').style.display = 'none'
        document.getElementById('unhide').style.display = 'block'
    }
}
function Calculate(){
    let currency = document.getElementById('currency-list').value;
    let amount = document.getElementById('amount').value;
    let list = {
        USD:1,
        JPY:115,
        EUR:0.89,
        RUB:74.36,
        GBP:0.75,
    }
    document.getElementById('result').innerText = list[`${currency}`]*amount;
}