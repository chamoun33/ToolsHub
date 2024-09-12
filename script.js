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
    document.getElementById("mySidenav").style.width = "450px";
}

/* Set the width of the side navigation to 0 */
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
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
    createAccount.innerHTML = 'My Profile &nbsp &nbsp <i class="fa-solid fa-user"></i>';
  }

  if (window.innerWidth <= 700) {
    myCart.classList.add("fa-custom-size");
    createAccount.classList.add("fa-custom-size");
  } else {
    myCart.classList.remove("fa-custom-size");
    createAccount.classList.remove("fa-custom-size");
  }
}

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
