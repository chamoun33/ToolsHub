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
        Width = 0;
    }
    else{
        Width = 450;
        document.getElementById("mySidenav").style.width = Width + "px";
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

}



// function toggleBlockFilter(ID, blockName, downChevron) {
//     // Retrieve the current state from the element itself
//     let filterSBTT_downChevronIsOpen = document.getElementById(ID).getAttribute("data-isopen") === "true";
    
//     // Call the appropriate function based on the current state
//     if (filterSBTT_downChevronIsOpen) {
//         closeBlockFilter(ID, blockName, downChevron);
//     } else {
//         openBlockFilter(ID, blockName, downChevron);
//     }

//     // Function to open the block
//     function openBlockFilter(id, blockName, downChevron) {
//         document.getElementById(downChevron).style.transform = "rotate(180deg)";
//         document.getElementById(id).style.height = "auto";
//         document.getElementById(id).style.visibility = "visible";
//         document.getElementById(id).style.padding = "10px 0";
//         document.getElementById(blockName).style.borderBottom = "1px solid lightgray";
//         // Set the state to open
//         document.getElementById(id).setAttribute("data-isopen", "true");
//     }

//     // Function to close the block
//     function closeBlockFilter(id, blockName, downChevron) {
//         document.getElementById(downChevron).style.transform = "rotate(0deg)";
//         document.getElementById(id).style.height = "0";
//         document.getElementById(id).style.visibility = "hidden";
//         document.getElementById(id).style.padding = "0";
//         document.getElementById(blockName).style.borderBottom = "0";
//         // Set the state to closed
//         document.getElementById(id).setAttribute("data-isopen", "false");
//     }
// }


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
    const sidenav = document.getElementById("myBarMenu");
    sidenav.classList.add("open"); // Add the 'open' class to apply transitions
}

function closeSideNav() {
    const sidenav = document.getElementById("myBarMenu");
    sidenav.classList.remove("open"); // Remove the 'open' class to reverse transitions
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


// function adjustHeaderHeight(){
//     const topFixed = document.getElementById('topFixedHeader');
//     const topFixedHeight = topFixed.offsetHeight;
//     const header = document.getElementById('mainHeader');
//     header.style.marginTop = topFixedHeight + "px";
// }

// // function checkScreenHeight(){
// //     const mediaQuery = window.matchMedia("(max-height: 738px)");

// //     // Initial check when the page loads
// //     adjustTopButtons();
  
// //     // Add a listener to check for screen resize
// //     mediaQuery.addListener((e) => {
// //       if (e.matches) {
// //         adjustHeaderHeight(); // Call the function when width is 700px or less
// //       } else {
// //         adjustHeaderHeight(); // Reset the button when width is more than 700px
// //       }
// //     });
// // }
// window.onload = adjustHeaderHeight();






// function addToCart(item, item_img, img, item_name, name, SKU_item, SKU, price_item, price, button_item){
//     var originalItem = document.getElementById(item);
//     var imageItem = document.getElementById(item_img);
//     var nameItem = document.getElementById(item_name);
//     var SKU_ITEM = document.getElementById(SKU_item);
//     var priceItem = document.getElementById(price_item);
//     var buttonItem = document.getElementById(button_item);

//     //Clone the item
//     var clonedItem = originalItem.cloneNode(true);
//     var clonedImageItem = imageItem.cloneNode(true);
//     var clonedNameItem = nameItem.cloneNode(true);
//     var clonedSKU_ITEM = SKU_ITEM.cloneNode(true);
//     var clonedPriceItem = priceItem.cloneNode(true);
//     var clonedButtonItem = buttonItem.cloneNode(true);

//     //Apply the new style to the cloned item
//     clonedItem.classList.remove('grid-product-container');
//     clonedItem.classList.add('item-in-cart-border');
//     clonedImageItem.classList.remove('product-image-holder');
//     clonedImageItem.classList.add('img-item-in-cart-border');
//     clonedNameItem.classList.remove('product-title-container');
//     clonedNameItem.classList.add('item-name-cart-container');
//     clonedSKU_ITEM.classList.remove('sku-title-container');
//     clonedSKU_ITEM.classList.add('SKU-cart');
//     clonedPriceItem.classList.remove('price-title-container');
//     clonedPriceItem.classList.add('price-item-cart');
//     clonedButtonItem.classList.remove('addToCart-button-container');
//     clonedButtonItem.classList.add('button-cart-container');



//     // Append the cloned item to the cart
//     var cart = document.getElementById('cart');
//     cart.appendChild(clonedItem);
// }



// function isValidIndex(n) {
//     return Number.isInteger(n) && n >= 0 && n < 1000;
// }
// let itemsCheck = new Array(1000);
// let itemsQty = new Array(1000).fill(0);
// let isTrue = new Array(1000).fill(true);


/*function itemCounter(item){

    let counter=0;
    let arrayOfAddedItems=document.getElementsByClassName("item-in-cart-border");
    if(arrayOfAddedItems.length<=0){
        return 0;
    }
    const imgSrc = item.querySelector('img') ? item.querySelector('img').getAttribute('src') : '';

    const originalProduct = imgSrc ? document.querySelector(`.item-in-cart-border img[src="${imgSrc}"]`).closest('.item-in-cart-border') : null;
  for(let i=0;i<arrayOfAddedItems.length;i++){
if(imgSrc==arrayOfAddedItems[i].getAttribute('src')){
counter++;
}
  }
  return counter;//???
  //lek ymkn ma tmshe l2n msh ktr fehem l ossa 7ota gpt w s2alo eza btzbt hekeayre b gpt 3el2an ma3o ba2ash e7ki hl2 ana bradikn
}
*/
//hmmmmmmm

// function itemCounter(item) {
//     let counter = 0;
//     const arrayOfAddedItems = document.getElementsByClassName("img-item-in-cart-border");

// // If no items in cart, return 0
//     if (arrayOfAddedItems.length <= 0) {
//         return 0;
//     }

//     // Get the image source of the item being counted
//     const imgSrc = item.querySelector('img') ? item.querySelector('img').getAttribute('src') : '';

//     // Loop through the items in the cart and count matches
//     for (let i = 0; i < arrayOfAddedItems.length; i++) {
//         const imgElement = arrayOfAddedItems[i].querySelector('img');
//         if (imgElement && imgElement.getAttribute('src') === imgSrc) {
//             counter++;
//         }
//     }
// console.log("counter: "+counter);
//     return counter;  // Return the total count
// }

// function addToCart(item, item_img, image, item_description, item_name, name, SKU_item, SKU, price_item, price, button_item, addToCart_button) {

//     document.getElementById('addToCartButton').addEventListener('click', function() {
//         console.log("acti");
//         itemCounter(clonedImageItem);
//     });

//             // Select the original item by its id
//             var originalItem = document.getElementById(item);
//             // Clone the original item
//             var clonedItem = originalItem.cloneNode(true);

//             // Select the cloned child elements within the cloned item
//             var clonedImageItem = clonedItem.querySelector(`#${item_img}`);
//             var clonedDescriptionItem = clonedItem.querySelector(`#${item_description}`);
//             var clonedNameItem = clonedItem.querySelector(`#${item_name}`);
//             var clonedSKU_ITEM = clonedItem.querySelector(`#${SKU_item}`);
//             var clonedPriceItem = clonedItem.querySelector(`#${price_item}`);
//             var clonedButtonItem = clonedItem.querySelector(`#${button_item}`);
//             var clonedName = clonedItem.querySelector(`#${name}`);

//             // Apply the new style to the cloned item and its children
//             // console.log(clonedItem.classList);
//             clonedItem.classList.remove('grid-product-container');
//             clonedItem.classList.add('item-in-cart-border');
//             // console.log(clonedItem.classList);

//             // console.log(clonedImageItem.classList);
//             clonedImageItem.classList.remove('product-image-holder');
//             clonedImageItem.classList.add('img-item-in-cart-border');
//             // console.log(clonedImageItem.classList);

//             // console.log(clonedDescriptionItem.classList);
//             clonedDescriptionItem.classList.add('description-item-in-cart-border');
//             // console.log(clonedDescriptionItem.classList);

//             // console.log(clonedNameItem.classList);
//             clonedNameItem.classList.remove('product-title-container');
//             clonedNameItem.classList.add('item-name-cart-container');
//             // console.log(clonedNameItem.classList);

//             // console.log(clonedSKU_ITEM.classList);
//             clonedSKU_ITEM.classList.remove('sku-title-container');
//             clonedSKU_ITEM.classList.add('SKU-cart');
//             // console.log(clonedSKU_ITEM.classList);

//             // console.log(clonedPriceItem.classList);
//             clonedPriceItem.classList.remove('price-title-container');
//             clonedPriceItem.classList.add('price-item-cart');
//             // console.log(clonedPriceItem.classList);

//             // console.log(clonedButtonItem.classList);
//             clonedButtonItem.classList.remove('addToCart-button-container');
//             clonedButtonItem.classList.add('button-cart-container');
//             // console.log(clonedButtonItem.classList);

//             var button = clonedItem.querySelector(`#${addToCart_button}`);
//             if (button) {
//                 button.remove();
//             }

//             // Create a new button element
//             var removeButton = document.createElement('button');
//             removeButton.innerHTML = '<i class="fa-solid fa-trash"></i>';  // Set the button text
//             removeButton.classList.add('remove-button-item-cart');  // Add a class for styling
//             removeButton.onclick = function() {
//                 // Add functionality to remove the item from the cart
//                 clonedItem.remove();
//             };

//             var editButton = document.createElement('button');
//             editButton.innerHTML = '<i class="fa-solid fa-pen"></i>';  // Set the button text
//             editButton.classList.add('edit-button-item-cart');  // Add a class for styling
//             editButton.onclick = function() {
//                 // Add functionality to edit the item from the cart
//             };
            
//             var targetDiv = clonedItem.querySelector('.button-cart-container');  // Selects the div with the desired class

//             if (targetDiv) {
//                 console.log("Target div found:", targetDiv);
//                 targetDiv.appendChild(editButton);   // Only append if the div exists
//                 console.log("Delete Button");
//                 targetDiv.appendChild(removeButton);  // Only append if the div exists
//             } else {
//                 console.log("Target div with class 'button-cart-container' not found");
//             }
// console.log("here");
//             // Append the cloned item to the cart
//             var cart = document.getElementById('cart');
//             cart.appendChild(clonedItem);
// // 
//             clonedNameItem.innerHTML ='<span> × </span>' + clonedName.innerHTML;
//         // }
//         // else{
//             // clonedNameItem.innerHTML = counter + '<span> × </span>' + name;
//         // }
            
// //leh aa awal ta2se msh aam tbayen mb3rf basita btn7al maa tzbitett 7lwru2 khalik la ncuf
// }






















// function itemCounter(item) {
//     let counter = 0;
//     const arrayOfAddedItems = document.getElementsByClassName("img-item-in-cart-border");

//     // If no items in cart, return 0
//     if (arrayOfAddedItems.length <= 0) {
//         return 0;
//     }

//     // Get the image source of the item being counted
//     const imgSrc = item.querySelector('img') ? item.querySelector('img').getAttribute('src') : '';

//     // Loop through the items in the cart and count matches
//     for (let i = 0; i < arrayOfAddedItems.length; i++) {
//         const imgElement = arrayOfAddedItems[i].querySelector('img');
//         if (imgElement && imgElement.getAttribute('src') === imgSrc) {
//             counter++;
//         }
//     }

//     console.log("counter: " + counter);
//     return counter;  // Return the total count
// }

// function addToCart(item, item_img, image, item_description, item_name, name, SKU_item, SKU, price_item, price, button_item, addToCart_button) {
//     // Select the original item by its ID
//     var originalItem = document.getElementById(item);

//     // Clone the original item
//     var clonedItem = originalItem.cloneNode(true);

//     // Select the cloned child elements within the cloned item
//     var clonedImageItem = clonedItem.querySelector(`#${item_img}`);
//     var clonedDescriptionItem = clonedItem.querySelector(`#${item_description}`);
//     var clonedNameItem = clonedItem.querySelector(`#${item_name}`);
//     var clonedSKU_ITEM = clonedItem.querySelector(`#${SKU_item}`);
//     var clonedPriceItem = clonedItem.querySelector(`#${price_item}`);
//     var clonedButtonItem = clonedItem.querySelector(`#${button_item}`);
//     var clonedName = clonedItem.querySelector(`#${name}`);

//     // Calculate the counter outside the event listener to ensure accurate counting
//     let counter = itemCounter(clonedImageItem);

//     // Update the counter and append the number of items added to the cart next to the item's name
//     clonedNameItem.innerHTML = counter + '<span> × </span>' + clonedName.innerHTML;

//     // Apply the new style to the cloned item and its children
//     clonedItem.classList.remove('grid-product-container');
//     clonedItem.classList.add('item-in-cart-border');

//     clonedImageItem.classList.remove('product-image-holder');
//     clonedImageItem.classList.add('img-item-in-cart-border');

//     clonedDescriptionItem.classList.add('description-item-in-cart-border');

//     clonedNameItem.classList.remove('product-title-container');
//     clonedNameItem.classList.add('item-name-cart-container');

//     clonedSKU_ITEM.classList.remove('sku-title-container');
//     clonedSKU_ITEM.classList.add('SKU-cart');

//     clonedPriceItem.classList.remove('price-title-container');
//     clonedPriceItem.classList.add('price-item-cart');

//     clonedButtonItem.classList.remove('addToCart-button-container');
//     clonedButtonItem.classList.add('button-cart-container');

//     // Remove the original "Add to Cart" button from the cloned item
//     var button = clonedItem.querySelector(`#${addToCart_button}`);
//     if (button) {
//         button.remove();
//     }

//     // Create a "Remove" button
//     var removeButton = document.createElement('button');
//     removeButton.innerHTML = '<i class="fa-solid fa-trash"></i>';
//     removeButton.classList.add('remove-button-item-cart');
//     removeButton.onclick = function () {
//         // Remove the cloned item from the cart
//         clonedItem.remove();
//     };

//     // Create an "Edit" button
//     var editButton = document.createElement('button');
//     editButton.innerHTML = '<i class="fa-solid fa-pen"></i>';
//     editButton.classList.add('edit-button-item-cart');
//     editButton.onclick = function () {
//         // Placeholder for future editing functionality
//         alert("Edit functionality coming soon!");  // Temporary functionality
//     };

//     // Find the button container in the cloned item and append the buttons
//     var targetDiv = clonedItem.querySelector('.button-cart-container');
//     if (targetDiv) {
//         targetDiv.appendChild(editButton);
//         targetDiv.appendChild(removeButton);
//     } else {
//         console.log("Target div with class 'button-cart-container' not found");
//     }

//     // Append the cloned item to the cart
//     var cart = document.getElementById('cart');
//     cart.appendChild(clonedItem);

//     // Update the name with the quantity count (counter)
//     clonedNameItem.innerHTML = counter + '<span> × </span>' + clonedName.innerHTML;

//     // Keeping the unused parameters for potential future use
//     // image, SKU, price are placeholders for now
// }






















function addToCart(item, item_img, image, item_description, item_name, name, SKU_item, SKU, price_item, price, button_item, addToCart_button) {
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
        };

        var editButton = document.createElement('button');
        editButton.innerHTML = '<i class="fa-solid fa-pen"></i>';
        editButton.classList.add('edit-button-item-cart');
        editButton.onclick = function () {
            alert("Edit functionality coming soon!");  // Placeholder for future functionality
        };

        var targetDiv = clonedItem.querySelector('.button-cart-container');
        if (targetDiv) {
            targetDiv.appendChild(editButton);
            targetDiv.appendChild(removeButton);
        }

        // Append the cloned item to the cart
        var cart = document.getElementById('cart');
        cart.appendChild(clonedItem);

        // Initialize the name with quantity and set custom data attribute for tracking
        clonedNameItem.innerHTML = '1 <span> × </span>' + clonedName.innerHTML;
        clonedNameItem.setAttribute('data-qty', 1);  // Set initial quantity to 1
        clonedNameItem.setAttribute('data-name', clonedName.innerHTML);  // Store the item name for reuse

        console.log("Item added to the cart.");
    }
}


//scrollButton

function scrollButton(sectionID){
    const target = document.getElementById(sectionID);
    const offset = 70;
    window.scrollTo({
                top: target.offsetTop - offset,
                behavior: 'smooth'
            });
    //document.getElementById(sectionID).scrollIntoView({ behavior: 'smooth' });
}
