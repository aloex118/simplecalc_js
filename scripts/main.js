function insert(num) {
    document.getElementById('input-field').value = document.getElementById('input-field').value + num;
}

function clean() {
    document.getElementById('input-field').value = '';
}

function back() {
    let exp = document.getElementById('input-field').value;
    document.getElementById('input-field').value = exp.substring(0, exp.lenght-1);
}

function equal() {
    let exp = document.getElementById('input-field').value;
    if(exp) {
        document.getElementById('input-field').value = eval(exp);
    }
}