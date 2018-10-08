const inputLabel = document.getElementById('inputLabel');
     
function pushBtn(obj) {
     
    let pushed = obj.innerHTML;
     
    if (pushed == '=') {
        inputLabel.innerHTML = eval(inputLabel.innerHTML);
         
    } else if (pushed == 'CE') {
        inputLabel.innerHTML = '0';
         
    } else {
        if (inputLabel.innerHTML == '0') {
            inputLabel.innerHTML = pushed;
             
        } else {
            inputLabel.innerHTML += pushed;
             
        }
    }
}