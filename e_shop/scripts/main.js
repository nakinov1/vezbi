var products = document.getElementById('products');
var allProducts = [];

function getAllProducts() {
  fetch('https://raw.githubusercontent.com/nakinov1/e_shop/master/json/allProducts.json')
  .then((response) => {
    return response.json();
  })
  .then(function(result) {
    allProducts = result;
    fillProductsTable();
  })
  .catch(function(err) {
    products.innerHTML = 'No products';
  });
}

function fillProductsTable() {
  var productRows = '';
  for(var i = 0; i < allProducts.length; i++) {
    productRows += `<tr>
        <td>${allProducts[i].name}</td>
        <td>${allProducts[i].price}</td>
        <td>
	   <select>
	      <option value="1">1</option>
	      <option value="2">2</option>
	      <option value="3">3</option>
	      <option value="4">4</option>
	      <option value="5">5</option>
	   </select> 
        </td>
        <td><button type="button" class="add-button" onclick="addToMyCart(allProducts[i])">Add to my cart</button></td>
    </tr>`;
  }
  products.innerHTML = productRows;
}

function addToMyCart(product) {
  var url = ''; /* url for post request for adding product to my cart */

  fetch(url, {
    method: 'POST',
    body: JSON.stringify(product),
    headers: { 'Content-Type': 'application/json' }
  }).then(res => res.json())
  .then(response => console.log('Success:', JSON.stringify(response)))
  .catch(error => console.error('Error:', error));
}

getAllProducts();
