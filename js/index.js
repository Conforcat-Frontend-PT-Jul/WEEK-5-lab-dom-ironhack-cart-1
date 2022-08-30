// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  const price = product.querySelector('.price span').innerText;
  const quantity = product.querySelector('.quantity input').value;
  //... your code goes here
  const result = Number(price * quantity);

  let subtotal = (product.querySelector('.subtotal span').innerText = result);

  return subtotal;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  const singleProduct = document.querySelector('.product');
  updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  //... your code goes here
  const allProducts = document.getElementsByClassName('product');
  let finalPrice = document.querySelector('#total-value span');

  let totalPrice = 0;
  for (let i = 0; i < allProducts.length; i++) {
    let subtotalPrice = updateSubtotal(allProducts[i]);
    totalPrice += Number(subtotalPrice);
  }
  // ITERATION 3
  //... your code goes here
  return (finalPrice.innerText = totalPrice);
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //...... no time fot the bonus, maybe the next time.
}

// ITERATION 5

function createProduct() {
  //... your code goes here
  const productName = document.querySelector(
    '.create-product input[type=text]'
  ).value;
  const productUnitPrice = document.querySelector(
    '.create-product input[type=number]'
  ).value;
  const newProductText = `<td class="name">
                            <span>${productName}</span>
                          </td>
                          <td class="price">$<span>${productUnitPrice}</span></td>
                          <td class="quantity">
                            <input type="number" value="0" min="0" placeholder="Quantity">
                          </td>
                          <td class="subtotal">$<span>0</span></td>
                          <td class="action">
                          <button class="btn btn-remove">Remove</button>
                          </td>`;

  let newProductHtml = document.createElement('tr');
  newProductHtml.classList.add('product');
  newProductHtml.innerHTML = newProductText;

  document.querySelector('#cart tbody').append(newProductHtml);
  document.querySelector('.create-product input[type=text]').value = '';
  document.querySelector('.create-product input[type=number]').value = 0;

  createEventListener('btn-remove', 'click');
}

function createEventListener(className, eventType) {
  const elements = document.getElementsByClassName(className);
  [].forEach.call(elements, (element) => {
    element.addEventListener(eventType, removeProduct);
  });
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
  const removeBtn = cart.getElementsByClassName('btn-remove');
  [...removeBtn].forEach((button) =>
    button.addEventListener('click', removeProduct)
  );

  const createProductBtn = document.getElementById('create');
  if (createProductBtn) {
    createProductBtn.addEventListener('click', createProduct);
  }
});
//prueba de cambios que no se guardan 