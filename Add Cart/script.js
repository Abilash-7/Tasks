var product_amount = document.getElementById("product_amount");
var shipping = document.getElementById("shipping");
var total_amount=document.getElementById("total_cart");
var coupon=document.getElementById("discount_code");

const decrease = (incdec,itemprice) => 
{
    var itemquantity = document.getElementById(incdec);
    var cost = document.getElementById(itemprice);
    // console.log(cost.innerHTML);

    if(itemquantity.value <= 0){
        itemquantity = 0;
        alert("minimum select 1 piece");
    }
    else{
        itemquantity.value = parseInt(itemquantity.value) - 1;
        cost.innerHTML = parseInt(cost.value) - 499;

        product_amount.innerHTML = parseInt(product_amount.innerHTML) - 499;
        total_amount.innerHTML = parseInt(product_amount.innerHTML) + parseInt(shipping.innerHTML);
    }
}

const increase = (incdec,itemprice) =>
{
    var itemquantity = document.getElementById(incdec);
    var cost = document.getElementById(itemprice);

    if(itemquantity.value >= 5){
        itemquantity.value = 5;
        alert("max 5 allowed");
    }
    else{
        itemquantity.value = parseInt(itemquantity.value) + 1;
        cost.innerHTML = parseInt(cost.innerHTML) + 499;
        product_amount.innerHTML = parseInt(product_amount.innerHTML) + 499;
        total_amount.innerHTML = parseInt(product_amount.innerHTML) + parseInt(shipping.innerHTML);
    }
}

const discount = () =>
{
    let totalcurrent = parseInt(total_amount.innerHTML);
    let Error = document.getElementById("error");
    if(coupon.value === 'sigmen%15')
    {
        let minus = totalcurrent * 15 /100;
        let newTotalAmount = totalcurrent - minus;
        total_amount.innerHTML =  newTotalAmount;
        Error.innerHTML = `code is valid & 15% discount.`;
    }
    else{
        Error.innerHTML = "code not valid !!! "
    }
}

function checkout(){
    let amount = parseInt(total_amount.innerHTML);
    if(amount <= 0 ){
        alert("select the item & buy.")
    }
    else{
        alert(`Your Order is Confirmed !!!\nTotal amount : ₹ ${total_amount.innerHTML} `);
    }
}