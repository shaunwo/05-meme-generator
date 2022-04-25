const form = document.querySelector('#new-meme-form');
const memeShowcase = document.querySelector('#meme-showcase');

// create new DOM block on page
const addDOMBlock = (eleType, className, text) => {
    const element = document.createElement(eleType);
    if (className) element.className = className;
	if (text && eleType !== 'img') element.innerText = text;
	if (text && eleType === 'img') {
        element.src = text;
        element.width = 300;
    }
    return element;
}

// addine new meme
form.addEventListener('submit', function(event) {
    event.preventDefault();
    
    const imageUrl = document.querySelector('input[name="imageUrl"]');
    const memeHeaderText = document.querySelector('input[name="memeHeader"]');
    const memeFooterText = document.querySelector('input[name="memeFooter"]');

    const memeContainer = addDOMBlock('div','meme','');
    const memeImg = addDOMBlock('img','',imageUrl.value);
    const memeHeaderContainer = addDOMBlock('h3','meme-header',memeHeaderText.value);
    const memeFooterContainer = addDOMBlock('h3','meme-footer',memeFooterText.value);
    const removeButtonContainer = addDOMBlock('div','remove-button','');
    const removeButton = addDOMBlock('button','','X');
    removeButtonContainer.appendChild(removeButton);
    
	memeContainer.appendChild(memeHeaderContainer);
    memeContainer.appendChild(memeImg);
	memeContainer.appendChild(removeButtonContainer);
	memeContainer.appendChild(memeFooterContainer);
    
    memeShowcase.appendChild(memeContainer);

    // clear form values
    form.reset();
});

memeShowcase.addEventListener('click', function(e2) {
    if (e2.target.tagName === 'BUTTON') {
        console.log('Clicked');
        e2.target.parentElement.parentElement.remove();
    }
});