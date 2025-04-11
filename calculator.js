let currentdisplay = '';
document.querySelector('#display').value= currentdisplay;

function num(n){
    currentdisplay= currentdisplay + n;
    return document.querySelector('#display').value= currentdisplay;
}

function myresult(result){
    currentdisplay=result;
    return document.querySelector('#display').value= currentdisplay;
}
