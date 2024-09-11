let products = [];

function fetchData() {
  fetch("https://dummyjson.com/products")
    .then((response) => response.json())
    .then((data) => {
      products = data.products;
      console.log(products);
      localStorage.setItem("products", JSON.stringify(products));
      fetchProduct(products);
    })
    .catch((error) => console.error("Error fetching data:", error));
}

function fetchProduct(products) {
  let productHTML = "";
  products.forEach((product) => {
    productHTML += `
      <div id="card">
        <div id="prodimg">
          <img src="${product.images[0]}" alt="${product.title}" />
        </div> 
        <h3>Rs.${product.price}</h3>
        <h3>${product.title}</h3>
        <h3>${product.category}</h3>
        <button onclick= "viewMore(${product.id})">View More</button>
      </div>
    `;
  });
  document.getElementById("container").innerHTML = productHTML;
}


  let search = document.getElementById("searchbar");
  search.addEventListener("input", searchProduct);

  function searchProduct(event) {
    let input = event.target.value.toLowerCase();
    let filterProdcuts = products.filter((val) => {
      return (
        val.title.toLowerCase().includes(input) ||
        val.category.toLowerCase().includes(input)
      );
    });
    fetchProduct(filterProdcuts);
  }


fetchData();


function viewMore(productID){
  console.log(productID);
  localStorage.setItem("selectedProductId", productID);
  window.location.href = "/viewMore.html";
}



let btn = document.getElementById("gotocart");

let num = JSON.parse(localStorage.getItem("number"));
document.getElementById("totalcart").innerText =num;


btn.addEventListener("click", () => {
  window.location.href = "./cart.html";
});




