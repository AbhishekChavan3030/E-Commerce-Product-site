document.addEventListener("DOMContentLoaded", () => {
  let getProduct = JSON.parse(localStorage.getItem("products"));
  // console.log(getProduct);

  let selectedProductId = localStorage.getItem("selectedProductId");
  // console.log(selectedProductId);

  let productDetails = document.getElementById("productDetails");

  if (getProduct && selectedProductId) {
    let selectedProduct = getProduct.find(
      (product) => product.id == selectedProductId
    );

    if (selectedProduct) {
      console.log(selectedProduct);
      productDetails.innerHTML = `
            <div id="card">
            <img src="${selectedProduct.images}" alt="Product Image">
            <div id= "contain"> 
            <h1>${selectedProduct.title}</h1>
            <h2>Rs.${selectedProduct.price}</h2>
            
            <h2>${selectedProduct.brand}</h2>
            <p>${selectedProduct.description}</p>
            <button id= "buy" >Buy Now</button> 
            <button id= "addtocart" >Add to Cart</button> 
            <button id="backtohome" >Back to Home</button> 
            <h2></h2>
            </div>
          
            </div>
            <div id="reviews">
            <h1>Name</h1>
            <h1>Review</h1>
            <h1>Date</h1>
            <h1>Rating</h1>
            </div>

            <div id="reviews">
            
            <h2>${selectedProduct.reviews[0].reviewerName}</h2>
            <h2>${selectedProduct.reviews[0].comment}</h2>
            <h2>${selectedProduct.reviews[0].date}</h2>
            <h2>${selectedProduct.reviews[0].rating}</h2>
            </div>
            <div id="reviews">
            <h2>${selectedProduct.reviews[1].reviewerName}</h2>
            <h2>${selectedProduct.reviews[1].comment}</h2>
            <h2>${selectedProduct.reviews[1].date}</h2>
            <h2>${selectedProduct.reviews[1].rating}</h2>
            </div>
            <div id="reviews">
            <h2>${selectedProduct.reviews[2].reviewerName}</h2>
            <h2>${selectedProduct.reviews[2].comment}</h2>
            <h2>${selectedProduct.reviews[2].date}</h2>
            <h2>${selectedProduct.reviews[2].rating}</h2>
            </div>
            
            `;
      document.getElementById("addtocart").addEventListener("click", () => {
        addToCart(selectedProduct);
      });

      document.getElementById("backtohome").addEventListener("click", () => {
        window.location.href = "./home.html";
      });
    }
  }
});

function addToCart(product) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.push(product);

  localStorage.setItem("cart", JSON.stringify(cart));
  alert("Product is added to cart");
}
