var state = false;
var basic = ["$199.99","$19.99"];
var pro = ["$249.99","$24.99"];
var master = ["$399.99","$39.99"];

function ChangePrice(){
    if(state){
        document.getElementById("priceBasic").innerHTML = basic[1];
        document.getElementById("pricePro").innerHTML = pro[1];
        document.getElementById("priceMaster").innerHTML = master[1];
        state = false;
        
    }
    else{
        document.getElementById("priceBasic").innerHTML = basic[0];
        document.getElementById("pricePro").innerHTML = pro[0];
        document.getElementById("priceMaster").innerHTML = master[0];
        state = true;
    }
}
ChangePrice()