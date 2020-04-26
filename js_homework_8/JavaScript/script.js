let priceInput = document.querySelector('input');
let priceSpan = document.createElement('span');
let wrongPriceSpan = document.createElement('span');
let priceRemoveButton = document.createElement("button");
let priceIsWrong = false;


priceInput.addEventListener("focus", priceFocusEvent);

function priceFocusEvent() {
    priceInput.classList.add('input-in-focus');
    priceInput.classList.remove('price-in-input');

    priceInput.addEventListener("blur", priceBlurEvent);
    priceInput.removeEventListener("focus", priceFocusEvent);
}


function priceBlurEvent() {

    priceInput.classList.remove('input-in-focus');

    if(priceInput.value >= 0) {
        priceInput.classList.add('price-in-input');
        priceSpan.textContent = `Текущая цена: ${priceInput.value}`;
        priceSpan.id = 'span-is-added';
        priceRemoveButton.textContent = 'X';
        if(document.getElementById('span-is-added') !== true) {
            document.body.prepend(priceRemoveButton);
            document.body.prepend(priceSpan);
            priceRemoveButton.addEventListener("click", priceRemove);
        }
        if(priceIsWrong) {
            // wrongPriceSpan.parentNode.removeChild(wrongPriceSpan);
            wrongPriceSpan.remove();
        }


    }
    else {
        priceRemove();
        wrongPriceSpan.textContent = 'Please enter correct price';
        priceIsWrong = true;
        document.body.append(wrongPriceSpan);
    }

    priceInput.addEventListener("focus", priceFocusEvent);
    priceInput.removeEventListener("blur", priceBlurEvent);
}

function priceRemove() {
    priceSpan.remove();
    priceRemoveButton.remove();
    priceInput.value = '';
    priceRemoveButton.removeEventListener("click", priceRemove);
}
