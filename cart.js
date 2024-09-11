document.addEventListener("DOMContentLoaded", display); // Pass the reference, don't call it immediately

function display() {
    let items = document.getElementById("cartitems");
    let totalprice = document.getElementById("totalprice");
    let getCart = JSON.parse(localStorage.getItem("cart")) || []; // Ensure it's an array if no items exist
    
    items.innerHTML = "";
    let count =0;
    let total = 0;

    if (getCart.length === 0) {
        items.innerHTML = `<p>Your Cart is Empty</p>`;
        totalprice.innerHTML = ""; // Clear total price if cart is empty
        return;
    }

    getCart.map((product, index) => {
        count++;
        total += product.price;
        let productDiv = document.createElement("div");
        productDiv.classList.add("product-info");
        productDiv.innerHTML = `
        <div id= "container">
        <div id="sub">
        <img src="${product.images[0]}" alt="${product.title}">
        <h1>${product.title}</h1>
        <h1>Rs.${product.price}</h1>
 
        <button onclick="removeCart(${index})">Remove</button>
        </div>
        </div>`;
        items.appendChild(productDiv);
    });
    
    localStorage.setItem("number", JSON.stringify(count));
    totalprice.innerHTML = `<h2>Total Price: Rs.${total.toFixed(2)}</h2>`;
}

function removeCart(index) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(cart));
    display();
}

