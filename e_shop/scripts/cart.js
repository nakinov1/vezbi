var myProductsTable = document.getElementById('products');
var myProducts = [];
var cartTotalList = document.getElementById('cartTotalList');
var cartTotal = document.getElementById('cartTotal');

function getMyProducts() {
  fetch('https://raw.githubusercontent.com/nakinov1/e_shop/master/json/myCartProducts.json')
  .then(function(response) {
    return response.json();
  })
  .then(function(result) {
    myProducts = result;
    fillMyProductsTable();
  })
  .catch(function(err) {
    products.innerHTML = 'My cart is empty';
  });
}

function fillMyProductsTable() {
  var productRows = '';
  for(var i = 0; i < myProducts.length; i++) {
    productRows += `<tr>
        <td>${myProducts[i].name}</td>
        <td>${myProducts[i].price}</td>
        <td>${myProducts[i].quantity}</td>
        <td><button type="button" class="add-button" onclick="removeFromMyCart(allProducts[i])">Delete from my cart</button></td>
    </tr>`;
  }
  myProductsTable.innerHTML = productRows;
  countTotal();
}

function countTotal() {
  var productRows = '';
  var total = 0;
  for(var i = 0; i < myProducts.length; i++) {
    var productTotalPrice = 0;
    total += productTotalPrice + myProducts[i].price;
    productRows += `<li>
      ${myProducts[i].quantity} piece${myProducts[i].quantity > 1 ? 's' : ''} of ${myProducts[i].name} = ${productTotalPrice + myProducts[i].price}
    </li>`;
  }
  cartTotalList.innerHTML = productRows;
  cartTotal = `<hr /><div class="cart-total">Total: ${total}</div>`;
  cartTotalList.innerHTML += cartTotal;;
}

function removeFromMyCart(product) {
  var url = ''; /* url for delete request for removing product from my cart */

  fetch(url, {
    method: 'DELETE',
    body: JSON.stringify(product),
    headers: { 'Content-Type': 'application/json' }
  }).then(res => res.json())
  .then(response => console.log('Success:', JSON.stringify(response)))
  .catch(error => console.error('Error:', error));
}

getMyProducts();
