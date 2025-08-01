// bytesi

function scroll_left() {
    const wrapper = document.querySelector('.new-arrivals-items-wrapper');
    console.log(wrapper); // Check if this logs the correct element
    wrapper.scrollBy({
        left: -wrapper.clientWidth / 2,
        behavior: 'smooth'
    });
}

function scrollRight() {
    const wrapper = document.querySelector('.new-arrivals-items-wrapper');
    console.log(wrapper); // Check if this logs the correct element
    wrapper.scrollBy({
        left: wrapper.clientWidth / 2,
        behavior: 'smooth'
    });
}

/* Set the width of the side navigation to 250px */
function openNav() {
    let Width = 0;
    const mediaQuery = document.documentElement.clientWidth;
    if(mediaQuery <= 700){
        Width = 100;
        document.getElementById("mySidenav").style.width = Width + "%";
        document.getElementById("cart-items").style.marginLeft = "0";
        document.getElementById('cart-buttons').style.marginTop = "0";
        Width = 0;
    }
    else{
        Width = 450;
        document.getElementById("mySidenav").style.width = Width + "px";
        document.getElementById("cart-items").style.marginLeft = "0";
        document.getElementById('cart-buttons').style.marginTop = "0";
        Width = 0;
    }
    document.body.classList.add('no-scroll');
    document.getElementById("overlay").classList.add('active');
}

/* Set the width of the side navigation to 0 */
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.body.classList.remove('no-scroll');
    document.getElementById("overlay").classList.remove('active');
    document.getElementById('cart-items').style.marginLeft = '700px';
    document.getElementById('cart-buttons').style.marginTop = "600px";
}




function toggleBlockFilter(ID, blockName, downChevron) {
    let filterSBTT_downChevronIsOpen = document.getElementById(ID).getAttribute("data-isopen") === "true";
    
    if (filterSBTT_downChevronIsOpen) {
        closeBlockFilter(ID, blockName, downChevron);
    } else {
        openBlockFilter(ID, blockName, downChevron);
    }

    function openBlockFilter(id, blockName, downChevron) {
        document.getElementById(downChevron).style.transform = "rotate(180deg)";
        document.getElementById(id).style.height = "auto";
        document.getElementById(id).style.visibility = "visible";
        document.getElementById(id).style.padding = "10px 0";
        document.getElementById(blockName).style.borderBottom = "1px solid lightgray";
        document.getElementById(id).setAttribute("data-isopen", "true");
    }

    function closeBlockFilter(id, blockName, downChevron) {
        document.getElementById(downChevron).style.transform = "rotate(0deg)";
        document.getElementById(id).style.height = "0";
        document.getElementById(id).style.padding = "0";
        setTimeout(() => {
            document.getElementById(id).style.visibility = "hidden";
        }, 300); // Wait for the height transition to finish before hiding
        document.getElementById(blockName).style.borderBottom = "0";
        document.getElementById(id).setAttribute("data-isopen", "false");
    }
}


window.onload = function defaultOpenBlockFilter() {
    toggleBlockFilter('Category', 'categoryBlock', 'category-down-chevron');
    toggleBlockFilter('brand', 'brandBlock', 'brand-down-chevron');
    toggleBlockFilter('productType', 'productTypeBlock', 'productType-down-chevron');
};




//side dropdown

function openSideNav() {
    // closeNav();
    const sidenav = document.getElementById("myBarMenu");
    sidenav.classList.add("open"); // Add the 'open' class to apply transitions
    document.getElementById('ShopByBrandID').style.marginTop = "0";
    document.getElementById('ShopByBrandID').style.opacity = "1";
    document.getElementById('SalesAndSpecialsID').style.marginTop = "0";
    document.getElementById('SalesAndSpecialsID').style.opacity = "1";
    document.getElementById('ShopByToolsTypeID').style.marginTop = "0";
    document.getElementById('ShopByToolsTypeID').style.opacity = "1";
    document.getElementById('ShopByApplicationID').style.marginTop = "0";
    document.getElementById('ShopByApplicationID').style.opacity = "1";

}

function closeSideNav() {
    const sidenav = document.getElementById("myBarMenu");
    sidenav.classList.remove("open"); // Remove the 'open' class to reverse transitions
    setTimeout(function(){
        document.getElementById('ShopByBrandID').style.marginTop = "500px";
        document.getElementById('ShopByBrandID').style.opacity = "0";
        document.getElementById('SalesAndSpecialsID').style.marginTop = "500px";
        document.getElementById('SalesAndSpecialsID').style.opacity = "0";
        document.getElementById('ShopByToolsTypeID').style.marginTop = "500px";
        document.getElementById('ShopByToolsTypeID').style.opacity = "0";
        document.getElementById('ShopByApplicationID').style.marginTop = "500px";
        document.getElementById('ShopByApplicationID').style.opacity = "0";
    }, 200)
}
    



function toggleButtonDropDownBar(dropDownList, chevron, option){
    let isOpen = document.getElementById(dropDownList).getAttribute("data-isopen") === "true";

    if(isOpen){
        closeBlockFilter(dropDownList, chevron, option);
    }
    else{
        openBlockFilter(dropDownList, chevron, option);
    }

    function openBlockFilter(dropDownList, chevron, option) {
        document.getElementById(chevron).style.transform = "rotate(180deg)";
        document.getElementById(dropDownList).style.height = "auto";
        document.getElementById(dropDownList).style.visibility = "visible";
        document.getElementById(dropDownList).style.padding = "10px 20px";
        document.getElementById(option).style.borderBottom = "1px solid lightgray";
        document.getElementById(dropDownList).setAttribute("data-isopen", "true");
    }

    function closeBlockFilter(dropDownList, chevron, option) {
        document.getElementById(chevron).style.transform = "rotate(0deg)";
        document.getElementById(dropDownList).style.height = "0";
        document.getElementById(dropDownList).style.padding = "0";
        setTimeout(() => {
            document.getElementById(dropDownList).style.visibility = "hidden";
        }, 300); // Wait for the height transition to finish before hiding
        document.getElementById(option).style.borderBottom = "0";
        document.getElementById(dropDownList).setAttribute("data-isopen", "false");
    }
}





//******************************************************************** */




// Function to change the button text
function adjustTopButtons() {
  const myCart = document.getElementById("myCartButtonTop");
  const createAccount = document.getElementById("createAccountButton");
  if (window.innerWidth <= 700) {
    myCart.innerHTML = '<i class="fa-solid fa-cart-shopping fa-custom-size"></i>';
    createAccount.innerHTML = '<i class="fa-solid fa-user fa-custom-size"></i>';
  } else {
    myCart.innerHTML = 'My Cart &nbsp &nbsp <i class="fa-solid fa-cart-shopping"></i>';
    createAccount.innerHTML = 'My Account &nbsp &nbsp <i class="fa-solid fa-user"></i>';
  }

//   if(document.documentElement.clientWidth <= 500){
//     createAccount.innerHTML = '<i class="fa-solid fa-circle-user fa-user fa-custom-size"></i>';
//   }

  if (window.innerWidth <= 700) {
    myCart.classList.add("fa-custom-size");
    createAccount.classList.add("fa-custom-size");
  } else {
    myCart.classList.remove("fa-custom-size");
    createAccount.classList.remove("fa-custom-size");
  }
}

//adjust top logo
function adjustLogo() {
    const logo = document.getElementById("logo");

    if(window.innerWidth <= 500){
        logo.src = "images/GMK-Logo - 2.png";
    }
    else{
        logo.src = "images/GMK-Logo.png";
    }
}

function checkWidth() {
    const mediaQuery = window.matchMedia("(max-width: 500px)");
  
    // Initial check when the page loads
    adjustLogo();
  
    // Add a listener to check for screen resize
    mediaQuery.addListener((e) => {
      if (e.matches) {
        adjustLogo(); // Call the function when width is 700px or less
      } else {
        adjustLogo(); // Reset the button when width is more than 700px
      }
    });
  }

window.checkWidth();



// Detect when the screen width is 700px or less
function checkScreenWidth() {
  const mediaQuery = window.matchMedia("(max-width: 700px)");

  // Initial check when the page loads
  adjustTopButtons();

  // Add a listener to check for screen resize
  mediaQuery.addListener((e) => {
    if (e.matches) {
      adjustTopButtons(); // Call the function when width is 700px or less
    } else {
      adjustTopButtons(); // Reset the button when width is more than 700px
    }
  });
}

// Run the checkScreenWidth function when the window loads
window.onload = checkScreenWidth();




//footer item
function toggleButtonDropDown_Footer(dropDownList, chevron){
    let isOpen = document.getElementById(dropDownList).getAttribute("data-isopen") === "true";

    if(isOpen){
        closeBlockFilter(dropDownList, chevron);
    }
    else{
        openBlockFilter(dropDownList, chevron);
    }

    function openBlockFilter(dropDownList, chevron) {
        const dropDown = document.getElementById(dropDownList);
        document.getElementById(chevron).style.transform = "rotate(180deg)";
        dropDown.style.height = "auto";
        dropDown.style.visibility = "visible";
        dropDown.style.padding = "0 10px";
        dropDown.style.marginBottom = "15px";
        dropDown.setAttribute("data-isopen", "true");
    }

    function closeBlockFilter(dropDownList, chevron) {
        const dropDown = document.getElementById(dropDownList);
        document.getElementById(chevron).style.transform = "rotate(0deg)";
        dropDown.style.height = "0";
        dropDown.style.padding = "0";
        setTimeout(() => {
            dropDown.style.visibility = "hidden";
        }, 300); // Wait for the height transition to finish before hiding
        dropDown.style.marginBottom = "0";
        dropDown.setAttribute("data-isopen", "false");
    }
}
window.onload = toggleButtonDropDown_Footer('aboutUs', 'aboutUsChevron');




function adjustDivWidth() {
    const myDiv = document.getElementById('footerItem');
    const currentWidth = myDiv.offsetWidth; // Get the current width of the div
    myDiv.style.width = (currentWidth + 10) + 'px'; // Add 10px to the width
  }

window.onload = adjustDivWidth();










function addToCart(item, item_img, image, item_description, item_name, name, SKU_item, SKU, price_item, price, button_item, addToCart_button) {
    let totalPrice;
    
    let totalQty;

    let isEmpty = document.getElementById("emptyCart");
    isEmpty.style.display = "none";

    let itemsCart = document.getElementById("cart-items");
    itemsCart.style.borderBottom = "1px solid grey";

    let cartBottom = document.getElementById("cartBottomInfo");
    

    // Select the original item by its ID
    var originalItem = document.getElementById(item);

    // Get the image source of the item to be added
    var imgSrcToAdd = originalItem.querySelector(`#${item_img}`).querySelector('img').getAttribute('src');

    // Check if the item is already in the cart
    let itemAlreadyInCart = false;
    let existingItemInCart;
    let cartItems = document.getElementsByClassName('img-item-in-cart-border');

    for (let i = 0; i < cartItems.length; i++) {
        const cartImgElement = cartItems[i].querySelector('img');
        if (cartImgElement && cartImgElement.getAttribute('src') === imgSrcToAdd) {
            itemAlreadyInCart = true;
            existingItemInCart = cartItems[i];  // Store reference to the existing item in cart
            break;
        }
    }

    var nameProduct = originalItem.querySelector(`#${name}`);

    // If item is already in the cart, just update the quantity
    if (itemAlreadyInCart) {
        console.log("Item is already in the cart, updating quantity");

        // Find the item name and update the quantity in the cart
        let existingNameElement = existingItemInCart.closest('.item-in-cart-border').querySelector('.item-name-cart-container');
        let quantity = parseInt(existingNameElement.getAttribute('data-qty')) || 1;
        quantity++;

        // Update the name with the new quantity
        existingNameElement.innerHTML = quantity + '<span> × </span>' + existingNameElement.getAttribute('data-name');
        existingNameElement.setAttribute('data-qty', quantity);  // Store the quantity as a custom data attribute

        totalQty = updateTotalQuantity(1);

    } else {
        // If the item is not in the cart, clone and add it

        // Clone the original item
        var clonedItem = originalItem.cloneNode(true);

        // Select the cloned child elements within the cloned item
        var clonedImageItem = clonedItem.querySelector(`#${item_img}`);
        var clonedDescriptionItem = clonedItem.querySelector(`#${item_description}`);
        var clonedNameItem = clonedItem.querySelector(`#${item_name}`);
        var clonedSKU_ITEM = clonedItem.querySelector(`#${SKU_item}`);
        var clonedPriceItem = clonedItem.querySelector(`#${price_item}`);
        var clonedButtonItem = clonedItem.querySelector(`#${button_item}`);
        var clonedName = clonedItem.querySelector(`#${name}`);

        // Apply styles for cart-specific layout
        clonedItem.classList.remove('grid-product-container');
        clonedItem.classList.add('item-in-cart-border');

        clonedImageItem.classList.remove('product-image-holder');
        clonedImageItem.classList.add('img-item-in-cart-border');

        clonedDescriptionItem.classList.add('description-item-in-cart-border');
        clonedNameItem.classList.remove('product-title-container');
        clonedNameItem.classList.add('item-name-cart-container');
        clonedSKU_ITEM.classList.remove('sku-title-container');
        clonedSKU_ITEM.classList.add('SKU-cart');
        clonedPriceItem.classList.remove('price-title-container');
        clonedPriceItem.classList.add('price-item-cart');
        clonedButtonItem.classList.remove('addToCart-button-container');
        clonedButtonItem.classList.add('button-cart-container');

        // Remove the "Add to Cart" button from the cloned item
        var button = clonedItem.querySelector(`#${addToCart_button}`);
        if (button) {
            button.remove();
        }

        // Create "Remove" and "Edit" buttons
        var removeButton = document.createElement('button');
        removeButton.innerHTML = '<i class="fa-solid fa-trash"></i>';
        removeButton.classList.add('remove-button-item-cart');

        removeButton.onclick = function () {
            // Get the current quantity of the item
            let quantity = parseInt(clonedNameItem.getAttribute('data-qty')) || 1;

            if (quantity > 1) {
                // Decrease the quantity and update the displayed text
                quantity--;
                clonedNameItem.innerHTML = quantity + '<span> × </span>' + clonedName.innerHTML;
                clonedNameItem.setAttribute('data-qty', quantity);
            } else {
                // Remove the item from the cart when the quantity reaches 0
                clonedItem.remove();
                console.log("Item removed from the cart.");
            }
            totalQty = updateTotalQuantity(-1);
            totalPrice = updateTotalPrice(-priceToNumber(clonedPriceItem.innerText));
            if(totalQty == 0){
                isEmpty.style.display = "flex";
                cartBottom.style.display = "none";
                itemsCart.style.borderBottom = "none";
            }
            document.querySelector("#cartBottomInfo .subtotal-container p").innerText = "Subtotal: " + numberToPrice(totalPrice);
        };

        var editButton = document.createElement('button');
        editButton.innerHTML = '<i class="fa-solid fa-pen"></i>';
        editButton.classList.add('edit-button-item-cart');

        var ITEM = {
            id: item,
            name: originalItem.querySelector(`#${name}`).innerText.trim(),
            price: originalItem.querySelector(`#${price}`).innerText.trim(),
            SKU: originalItem.querySelector(`#${SKU}`).innerText.trim(),
            image: originalItem.querySelector(`#${image}`).src
        };

        console.log('Method: ' + ITEM.name); 
        console.log('Method: ' + ITEM.price);
        console.log('Method: ' + ITEM.SKU);
        console.log('Method: ' + ITEM.image);       


        editButton.onclick = function () {

            // Construct URL with query parameters
            // const url = `item.html?id=${ITEM.id}&name=${encodeURIComponent(ITEM.name)}&price=${ITEM.price}&SKU=${ITEM.SKU}&image=${encodeURIComponent(ITEM.image)}`;
            // window.location.href = url;

            const itemData = {
                id: ITEM.id,
                name: ITEM.name,
                price: ITEM.price,
                SKU: ITEM.SKU,
                image: ITEM.image
            };

            window.location.href='item.html';
            
            sessionStorage.setItem('selectedItem', JSON.stringify(itemData));

            // openItemPage(item, image, name, price, SKU);



            // alert("Edit functionality coming soon!");  // Placeholder for future functionality
        };
        document.body.appendChild(editButton);

        var targetDiv = clonedItem.querySelector('.button-cart-container');
        if (targetDiv) {
            targetDiv.appendChild(editButton);
            targetDiv.appendChild(removeButton);
        }

        // Append the cloned item to the cart
        var cart = document.getElementById('cart-items');
        cart.appendChild(clonedItem);

        // Initialize the name with quantity and set custom data attribute for tracking
        clonedNameItem.innerHTML = '1 <span> × </span>' + clonedName.innerHTML;
        clonedNameItem.setAttribute('data-qty', 1);  // Set initial quantity to 1
        clonedNameItem.setAttribute('data-name', clonedName.innerHTML);  // Store the item name for reuse

        console.log("Item added to the cart.");

        totalQty = updateTotalQuantity(1);
    }

    // popup item------------------------------------------------------------ //

    let modal = document.getElementById('myModal');
    let modalContent = document.getElementById('modalContent');
    modalContent.classList.remove('open');
    // // Display the modal
    // modal.style.display = "flex";
    // setTimeout(() => {
    //     modalContent.classList.add('open');
    // }, 50); 

//     // Get the original item element
//     var originalItem = document.getElementById(item);
//     console.log(originalItem);
// let productName1=document.getElementById("name-1");
// console.log(productName1);
//     // Get data from the original item
//     const imageSrc = originalItem.querySelector(`#${image}`).src;
//     console.log(imageSrc);
//     console.log(clonedNameItem);
    
//     const productName = clonedNameItem;
//     console.log(productName);
//     const productSKU = originalItem.querySelector(`#${SKU}`).innerText.trim();
//     const productPrice = originalItem.querySelector(`#${price}`).innerText.trim();
//     console.log(productPrice);  

    console.log("name: " , name);
    // Get the original item element
    var originalItem = document.getElementById(item);
    console.log(originalItem);

    // Get data from the original item
    const imageSrc = originalItem.querySelector(`#${image}`).src;
    console.log(imageSrc);
    console.log(originalItem.querySelector(`#${name}`));
    const productName = originalItem.querySelector(`#${name}`);
    if (!productName) {
        console.error(`Element with ID ${name} not found`);
    } else {
        const productName = productName.innerText.trim();
        console.log('Product Name:', productName);
    }
    console.log(productName);
    const productSKU = originalItem.querySelector(`#${SKU}`).innerText.trim();
    const productPrice = originalItem.querySelector(`#${price}`).innerText.trim();
    console.log(productPrice);  


    //calculate the total price in the cart
    totalPrice = updateTotalPrice(priceToNumber(productPrice));


    // Set the modal details
    document.querySelector("#myModal .image-holder img").src = imageSrc;
    // document.querySelector("#myModal .name-popup span").innerText = (nameProduct.innerText);
    document.querySelectorAll("#myModal .name-popup span").innerText = 'Festool Limited-Edition DOMINO XL DF 700, Accessories, and Tenon Kit 578508'; //temporarly instead of 'productName'
    document.querySelector("#myModal .SKU--").innerText = productSKU;
    document.querySelector("#myModal .item-price-popup span").innerText = productPrice;
    document.querySelector("#myModal .cart-price-total span").innerText = numberToPrice(totalPrice);
    document.querySelector("#myModal .cart-item-number span").innerText = `Cart subtotal (${totalQty} ${totalQty === 1 ? 'item' : 'items'})`;
    document.querySelector("#cartBottomInfo .subtotal-container p").innerText = "Subtotal: " + numberToPrice(totalPrice);


    // item page

    document.querySelectorAll("#itemPage .img-item-container img").src = imageSrc;
    document.querySelectorAll("#itemPage .item-name-container span").innerText = 'Festool Limited-Edition DOMINO XL DF 700, Accessories, and Tenon Kit 578508';
    document.querySelectorAll("#itemPage .price-container span").innerText = productPrice;
    document.querySelectorAll("#productSKU").innerText = "SKU: " + productSKU;
    // item page

    cartBottom.style.display = "flex";

    // Show the modal
    // modal.style.display = "block";
    // Display the modal
    modal.style.display = "flex";
    setTimeout(() => {
        modalContent.classList.add('open');
    }, 50); 

    // Close modal when clicking on "X"
    const closeBtn = document.querySelector("#myModal .close");
    closeBtn.onclick = function () {
        modal.style.display = "none";
    };

    const continueShoppingBtn = document.querySelector("#myModal .continue-shopping-button");
    continueShoppingBtn.onclick = function(){
        modal.style.display = "none";
    };

    const checkoutBtn = document.querySelector("#myModal .checkout-button");
    checkoutBtn.onclick = function(){
        alert("Checkout functionality coming soon!");
    }

    // Close modal when clicking outside the modal content
    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    };

}




    //item HTML script on load
    // document.addEventListener('DOMContentLoaded', function () {
    //   const params = new URLSearchParams(window.location.search);

    //   console.log('ID:', params.get('id'));
    //   console.log('Name:', params.get('name'));
    //   console.log('Price:', params.get('price'));
    //   console.log('SKU:', params.get('SKU'));
    //   console.log('Image:', params.get('image'));

    //   // Populate form fields with item data
    // //   document.getElementById('itemPage').innerText = params.get('id');
    //   document.getElementById('itemName').innerText = params.get('name');
    //   document.getElementById('topItemName').innerText = params.get('name');
    //   document.getElementById('itemPrice').innerText = params.get('price');
    //   document.getElementById('itemSKU').innerText = params.get('SKU');
    //   document.getElementById('img-item-page').src = params.get('image');
    // });




document.addEventListener('DOMContentLoaded', function () {
    const itemData = JSON.parse(sessionStorage.getItem('selectedItem'));
      
    if (itemData) {
        // Populate form fields with item data
    //   document.getElementById('itemPage').innerText = itemData.id;
        document.getElementById('topItemName').innerText = itemData.name;
        document.getElementById('itemPrice').innerText = itemData.price;
        document.getElementById('itemSKU').innerText = itemData.SKU;
        document.getElementById('img-item-page').src = itemData.image;
    } else {
        console.error('No item data found in sessionStorage.');
    }
});
      

    



  

function updateTotalPrice(amount) {
    // Select the cart element
    let cart = document.getElementById('cart-items');

    // Check if the total price data attribute exists, otherwise initialize it
    let currentTotal = parseFloat(cart.getAttribute('data-total-price')) || 0;

    // Update the total price
    currentTotal += amount;

    // Set the updated value in the data attribute
    cart.setAttribute('data-total-price', currentTotal);

    // Log the updated total price
    console.log("Updated total price:", currentTotal);

    return currentTotal;
}

function updateTotalQuantity(amount) {
    let cart = document.getElementById('cart-items');
    let currentTotalQty = parseInt(cart.getAttribute('data-total-qty')) || 0;
    currentTotalQty += amount;
    cart.setAttribute('data-total-qty', currentTotalQty);
    console.log("Updated total quantity:", currentTotalQty);
    return currentTotalQty;
}


function priceToNumber(price){
    const priceString = price.replace(/[$,]/g, '');
    const priceNumber = parseFloat(priceString);
    return priceNumber;
}

function numberToPrice(price){
    return (price.toLocaleString('en-US', { style: 'currency', currency: 'USD' }));
}



//Scroll Button Shop By Beand
function scrollButton(sectionID){
    const target = document.getElementById(sectionID);
    const offset = 300;
    window.scrollTo({
                top: target.offsetTop - offset,
                behavior: 'smooth'
            });
}

function changeQuantity(amount) {
    const quantityInput = document.getElementById('quantity');
    let currentValue = parseInt(quantityInput.value, 10);
    currentValue = isNaN(currentValue) ? 0 : currentValue;
    quantityInput.value = Math.max(1, currentValue + amount); // Minimum value is set to 1
  }



function changeIMG(img){

    let images = document.querySelectorAll('#all-img-product img');

    images.forEach(function(image) {
        image.style.border = 'none';
    });
    let IMG = document.getElementById(img);
    let IMGsource = IMG.src;
    document.querySelector("#main-page-product .img-item-container img").src = IMGsource;
    IMG.style.border = "1px solid #B8121A";
}

// function openItemPage(item, image, name, price, SKU){
//     let ITEMdescription = document.getElementById('itemPageDescription');
//     let ITEMimages = document.getElementById('itemPageImages');
//     var originalItem = document.getElementById(item);
//     console.log(item);
//     console.log(originalItem);
//     console.log(image);
//     console.log(price);
//     console.log(SKU);



//     const imageSrc = originalItem.querySelector(image).src;
//     console.log(imageSrc);
//     const productName = originalItem.querySelector(`#${name}`);
//     if (!productName) {
//         console.error(`Element with ID ${name} not found`);
//     } else {
//         const productName = productName.innerText.trim();
//         console.log('Product Name:', productName);
//     }
//     const productSKU = originalItem.querySelector(`#${SKU}`).innerText.trim();
//     const productPrice = originalItem.querySelector(`#${price}`).innerText.trim();
//     console.log(productPrice);  




//     document.querySelector("#itemPageImages .img-item-container img").src = imageSrc;
//     document.querySelector("#itemPageDescription .item-name-container span").innerText = productName;
//     document.querySelector("#itemPageDescription .price-container span").innerText = productPrice;
//     document.querySelector("#productSKU").innerText = "SKU: " + productSKU;

//     window.location.href='item.html';
// }

// function openItemPage(item, image, name, price, SKU) {
//     // Select the original item by its ID
//     const originalITEM = document.getElementById(item);
//     if (!originalITEM) {
//         console.error(`Item with ID ${item} not found.`);
//         return;
//     }
//     console.log(imageSrc);
//     imageSrc = "http://127.0.0.1:5500/images/ShopByToolsType/product-list/festool.jpeg";
//     // Extract product details
//     const productPrice = originalITEM.querySelector(`#${price}`).innerText.trim();
//     const productSKU = originalITEM.querySelector(`#${SKU}`).innerText.trim();

//     // Set default product name if not passed as parameter
//     const productName = name || "Festool Limited-Edition DOMINO DF 500, Accessories, and Tenon Kit 578509";

//     // Update the item page with extracted or passed values
//     document.querySelector("#img-item-page").src = imageSrc;
//     document.querySelector("#itemPageDescription .item-name-container span").innerText = productName;
//     document.querySelector("#itemPageDescription .price-container span").innerText = productPrice;
//     document.querySelector("#productSKU").innerText = `SKU: ${productSKU}`;

//     // Navigate to the item page
//     window.location.href = 'item.html';
// }






// Load the JSON file and populate the dropdown
fetch('lb.json')
  .then(response => response.json())
  .then(data => {
    const dropdown = document.getElementById('cities');

    data.forEach(cityInfo => {
      const option = document.createElement('option');
      option.value = cityInfo.city;
      option.textContent = `${cityInfo.city} (${cityInfo.admin_name})`;
      dropdown.appendChild(option);
    });
  })
  .catch(error => console.error('Error loading JSON:', error));


  function checkCheckBoxDelivery(){
    let delivery = document.getElementById('checkboxDelivery');
    let pickUp = document.getElementById('checkboxPickUp');

    if(delivery.checked){
        delivery.checked = false;
    }
  }

  function checkCheckBoxPickUp(){
    let delivery = document.getElementById('checkboxDelivery');
    let pickUp = document.getElementById('checkboxPickUp');

    if(pickUp.checked){
        pickUp.checked = false;
    }
  }







//   function openingOfShoppingCart() {
//     // Select all elements with class 'item-in-cart-border'
//     const items = document.getElementsByClassName('item-in-cart-border');
    
//     // Logging each item to console for debugging
//     for (let i = 0; i < items.length; i++) {
//         console.log(items[i]);
//     }

//     // Arrays to hold details
//     const itemsDetails = [];
//     const itemsNameArray = [];
//     const itemsPriceArray = [];
//     const itemsIMGArray = [];
//     let nameOfItem;

//     // Collect names from 'product-title-container'
//     const itemNameElements = document.querySelectorAll('.item-name-cart-container');
//     itemNameElements.forEach(item => {
//         const name = item.textContent.trim();
//         nameOfItem = name;
//         console.log(name);
//         itemsNameArray.push({ name });
//     });

//     // check the qty
//     let checkQTY = nameOfItem.split("×");
//     let QTY = checkQTY[0].trim();
//     console.log("Qty: " + QTY);
//     let finalQty = parseInt(QTY, 10);

//     // Collect prices from 'price-title-container'
//     const itemPriceElements = document.querySelectorAll('.price-item-cart');
//     itemPriceElements.forEach(item => {
//         const span = item.querySelector("span");
//         const price = span ? span.textContent : "";
//         console.log(price);
//         let PRICE = parseFloat(price.replace(/[^0-9.-]+/g, '')) || 0;
//         console.log(PRICE);
//         PRICE *= finalQty;
//         let finalPrice = "$" + PRICE.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
//         console.log(finalPrice);
//         itemsPriceArray.push({ finalPrice });
//     });

//     // Collect image sources from 'product-image-holder'
//     const itemIMGElements = document.querySelectorAll('.img-item-in-cart-border');
//     itemIMGElements.forEach(item => {
//         const img = item.querySelector("img");
//         const image = img ? img.src : "";
//         itemsIMGArray.push({ image });
//     });

//     // Combine details into itemsDetails array
//     for (let i = 0; i < items.length; i++) {
//         itemsDetails[i] = {
//             image: itemsIMGArray[i].image,
//             name: itemsNameArray[i].name,
//             price: itemsPriceArray[i].finalPrice
//         };

//         console.log(itemsDetails[i]);
//     }


    

//     // Save to sessionStorage
//     sessionStorage.setItem("cartItems", JSON.stringify(itemsDetails));
//     console.log("Items saved to sessionStorage:", itemsDetails);
// }




function openingOfShoppingCart() {
    // Select all elements with class 'item-in-cart-border'
    const items = document.getElementsByClassName('item-in-cart-border');
    
    // Arrays to hold details
    const itemsDetails = [];
    const itemsNameArray = [];
    const itemsPriceArray = [];
    const itemsIMGArray = [];

    // Collect names and calculate quantity per item
    const itemNameElements = document.querySelectorAll('.item-name-cart-container');
    itemNameElements.forEach(item => {
        const name = item.textContent.trim();
        console.log("Full name and quantity text:", name);
        
        // Extract quantity and item name from the text
        const [qtyPart, itemName] = name.split("×").map(part => part.trim());
        const quantity = parseInt(qtyPart, 10);
        console.log("Extracted Quantity:", quantity);
        console.log("Extracted Item Name:", itemName);

        itemsNameArray.push({ name: name, quantity });
    });

    // Collect prices and calculate total price per item
    const itemPriceElements = document.querySelectorAll('.price-item-cart');
    itemPriceElements.forEach((item, index) => {
        const span = item.querySelector("span");
        const priceText = span ? span.textContent : "";
        console.log("Price Text:", priceText);

        // Convert price to a number and multiply by quantity
        const priceNumber = parseFloat(priceText.replace(/[^0-9.-]+/g, '')) || 0;
        const totalItemPrice = priceNumber * itemsNameArray[index].quantity;
        
        // Format the final price
        const formattedPrice = "$" + totalItemPrice.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        console.log("Final Price with Quantity:", formattedPrice);

        itemsPriceArray.push({ price: formattedPrice });
    });

    // Collect image sources
    const itemIMGElements = document.querySelectorAll('.img-item-in-cart-border');
    itemIMGElements.forEach(item => {
        const img = item.querySelector("img");
        const image = img ? img.src : "";
        itemsIMGArray.push({ image });
    });

    // Combine details into itemsDetails array
    for (let i = 0; i < items.length; i++) {
        itemsDetails[i] = {
            image: itemsIMGArray[i].image,
            name: itemsNameArray[i].name,
            quantity: itemsNameArray[i].quantity,
            price: itemsPriceArray[i].price
        };

        console.log("Item Details:", itemsDetails[i]);
    }

    // Save to sessionStorage
    sessionStorage.setItem("cartItems", JSON.stringify(itemsDetails));
    console.log("Items saved to sessionStorage:", itemsDetails);
}






document.addEventListener("DOMContentLoaded", function() {
    // Retrieve the cart items from sessionStorage
    const storedItems = JSON.parse(sessionStorage.getItem("cartItems") || "[]");

    const cartItemsContainer = document.getElementById('cartItems-SC');

    // Loop through each item and dynamically create the cart item structure
    storedItems.forEach(item => {
        // Create the main container for the cart item
        const itemDiv = document.createElement("div");
        itemDiv.classList.add("cartItems-product-container"); // Matches your structure

        // Create and add the image
        const imgElement = document.createElement("img");
        imgElement.src = item.image;
        imgElement.alt = item.name;
        imgElement.classList.add("cartItems-IMG");
        itemDiv.appendChild(imgElement);

        // Create and add the product title
        const titleContainer = document.createElement("div");
        titleContainer.classList.add("cartItems-product-title-container");
        const titleSpan = document.createElement("span");
        titleSpan.textContent = item.name;
        titleContainer.appendChild(titleSpan);
        itemDiv.appendChild(titleContainer);

        // Create and add the price
        const priceContainer = document.createElement("div");
        priceContainer.classList.add("cartItems-price-container");
        const priceSpan = document.createElement("span");
        priceSpan.textContent = item.price;
        priceContainer.appendChild(priceSpan);
        itemDiv.appendChild(priceContainer);

        // Add the constructed cart item to the container
        cartItemsContainer.appendChild(itemDiv);
    });

    // Update the cart summary (Total price calculation)
    updateCartSummary(storedItems);
});

function updateCartSummary(items) {
    const summaryElement = document.getElementById('subtotalAmount').querySelector("span");
    const grandTotalEXCL = document.getElementById('grandTotalExclTAX').querySelector("span");
    const grandTotalINCl = document.getElementById('grandTotalInclTAX').querySelector("span");
    let total = 0;

    items.forEach(item => {
        let itemPrice = priceToNumber(item.price); 
        total += itemPrice; 
    });

    let subtotal = numberToPrice(total);

    summaryElement.textContent = subtotal;
    grandTotalEXCL.textContent = subtotal;
    let grandTotal = total + ( total * 0.05);
    grandTotalINCl.textContent = numberToPrice(grandTotal);
}


// function openingOfShoppingCart() {
//     const items = document.getElementsByClassName('item-in-cart-border');
//     const itemsDetails = [];
//     const itemsNameArray = [];
//     const itemsPriceArray = [];
//     const itemsIMGArray = [];
//     let nameOfItem;

//     // Collect names from 'item-name-cart-container'
//     const itemNameElements = document.querySelectorAll('.item-name-cart-container');
//     itemNameElements.forEach(item => {
//         const name = item.textContent.trim();
//         nameOfItem = name;
//         itemsNameArray.push({ name });
//     });

//     // Extract quantity from name text
//     let checkQTY = nameOfItem.split("×");
//     let QTY = checkQTY[0].trim();
//     let finalQty = parseInt(QTY, 10);

//     // Collect prices from 'price-item-cart'
//     const itemPriceElements = document.querySelectorAll('.price-item-cart');
//     itemPriceElements.forEach(item => {
//         const span = item.querySelector("span");
//         let price = span ? span.textContent : "";
//         let PRICE = parseFloat(price.replace(/[^0-9.-]+/g, '')) || 0;
//         PRICE *= finalQty; // Adjust price based on quantity
//         let finalPrice = "$" + PRICE.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
//         itemsPriceArray.push({ finalPrice });
//     });

//     // Collect image sources from 'product-image-holder'
//     const itemIMGElements = document.querySelectorAll('.img-item-in-cart-border');
//     itemIMGElements.forEach(item => {
//         const img = item.querySelector("img");
//         const image = img ? img.src : "";
//         itemsIMGArray.push({ image });
//     });

//     // Combine details into itemsDetails array
//     for (let i = 0; i < items.length; i++) {
//         itemsDetails[i] = {
//             image: itemsIMGArray[i].image,
//             name: itemsNameArray[i].name,
//             price: itemsPriceArray[i].finalPrice
//         };
//     }

//     // Save to sessionStorage
//     sessionStorage.setItem("cartItems", JSON.stringify(itemsDetails));
// }

// document.addEventListener("DOMContentLoaded", function() {
//     const storedItems = JSON.parse(sessionStorage.getItem("cartItems") || "[]");
//     const cartItemsContainer = document.getElementById('cartItems-SC');

//     storedItems.forEach(item => {
//         const itemDiv = document.createElement("div");
//         itemDiv.classList.add("cartItems-product-container");

//         const imgElement = document.createElement("img");
//         imgElement.src = item.image;
//         imgElement.alt = item.name;
//         imgElement.classList.add("cartItems-IMG");
//         itemDiv.appendChild(imgElement);

//         const titleContainer = document.createElement("div");
//         titleContainer.classList.add("cartItems-product-title-container");
//         const titleSpan = document.createElement("span");
//         titleSpan.textContent = item.name;
//         titleContainer.appendChild(titleSpan);
//         itemDiv.appendChild(titleContainer);

//         const priceContainer = document.createElement("div");
//         priceContainer.classList.add("cartItems-price-container");
//         const priceSpan = document.createElement("span");
//         priceSpan.textContent = item.price;
//         priceContainer.appendChild(priceSpan);
//         itemDiv.appendChild(priceContainer);

//         cartItemsContainer.appendChild(itemDiv);
//     });

//     updateCartSummary(storedItems);
// });

// function updateCartSummary(items) {
//     const summaryElement = document.getElementById('subtotalAmount').querySelector("span");
//     let total = 0;

//     items.forEach(item => {
//         let itemPrice = priceToNumber(item.price); 
//         total += itemPrice; 
//     });

//     let subtotal = numberToPrice(total);

//     summaryElement.textContent = subtotal;
// }
