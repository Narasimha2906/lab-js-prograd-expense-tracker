let button= document.querySelector("button");

button.addEventListener("click",locstorage);

class gggg{
    constructor(amount,text){
        this.amount = amount;
        //this.id = localStorage.getItem(key)
        this.text = text;

    }
  
}

function locstorage(){
    var gg = document.getElementById('amount').value;
    var tt = document.getElementById('text').value;
    localStorage.setItem(tt,gg)
    var om = new gggg(gg,tt)
    console.log(om)
  
    
}

