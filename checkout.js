const productCount=document.querySelectorAll(".product-quantity"); 
const productPrice=document.querySelectorAll(".price"); 
const productTotal=document.querySelectorAll(".product-line-price"); 
const quantityController=document.querySelectorAll(".quantity-controller");
const subtotal=document.querySelector("#subtotal");
const tax=document.querySelector("#tax");
const ship=document.querySelector("#ship");
const total=document.querySelector("#total");
const products=document.querySelector("#product-painel");
const product=document.querySelectorAll(".product");
const info=document.querySelectorAll(".product-info");
let counter=productCount.length;

//Calculator gets each product's total amount, calculates total order amount. 
const calculate = () => {
    subtotal.innerHTML = (parseFloat(productTotal[0].innerHTML)+parseFloat(productTotal[1].innerHTML)+parseFloat(productTotal[2].innerHTML)).toFixed(2)
    tax.innerHTML = (parseFloat(subtotal.innerHTML)*0.18).toFixed(2)
    total.innerHTML=(parseFloat(subtotal.innerHTML)+parseFloat(tax.innerHTML)+parseFloat(ship.innerHTML)).toFixed(2)
    if(subtotal.innerHTML ==0){  //if your product box empty, shipping = 0 
        ship.innerHTML="0"
    }else{
    ship.innerHTML="15.00"
    }
};
//add event for remove button
products.addEventListener("click", e=>{
    e.preventDefault(); 
    if(e.target.classList.contains("remove-product")){
        if(counter>1){ //if counter bigger then 1 delete the product
        e.target.parentElement.parentElement.parentElement.remove();
        e.target.parentElement.nextElementSibling.innerHTML="0";  //to prevent return deleted products price undefined  
        counter=counter-1;    
        }
    }
    calculate ();
});
// event listener for loop
    for (let i = 0; i <productCount.length; i ++) { // loop for each product
    product[i].addEventListener("click", e=>{
        e.preventDefault(); 
    if(e.target.classList.contains("fa-minus")){
        if(productCount[i].innerHTML!=="0"){
        productCount[i].innerHTML=parseFloat(productCount[i].innerHTML)-1
        productTotal[i].innerHTML=(parseFloat(productCount[i].innerHTML)*parseFloat(productPrice[i].innerHTML)).toFixed(2)
        calculate ();
    }
    }
    if(e.target.classList.contains("fa-plus")){
        productCount[i].innerHTML=parseFloat(productCount[i].innerHTML)+1
        productTotal[i].innerHTML=(parseFloat(productCount[i].innerHTML)*parseFloat(productPrice[i].innerHTML)).toFixed(2)
        calculate ();
    }
    console.log(i);
})
}

