function Display(){
    if(document.getElementById('main-container').style.display == 'none' || document.getElementById('main-container').style.display == ''){
        document.getElementById('main-container').style.display = 'flex';
        document.getElementById('recount').style.display = 'inline';
        document.getElementById('unhide').style.display = 'none';
        document.getElementById('result').innerText = '';
        document.querySelector('body').style.backgroundColor = 'rgb(35, 35, 35)';
        document.querySelector('body').style.color = 'whitesmoke';
    }
    else{
        document.getElementById('main-container').style.display = 'none'
        document.getElementById('recount').style.display = 'none'
        document.getElementById('unhide').style.display = 'block'
        document.getElementById('result').innerText = ''
        document.querySelector('body').style.backgroundColor = 'white'
        document.querySelector('body').style.color = 'black'
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
    let result = list[`${currency}`]*amount;
    document.getElementById('result').innerText = `${amount} USD equals ${result} ${document.getElementById('currency-list').value}`;
}