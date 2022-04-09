const form = document.querySelector('#new-meme-form');
const memeShowcase = document.querySelector('#meme-showcase');

// addine new meme
form.addEventListener('submit', function(event) {
    event.preventDefault();
    const memeHeaderText = document.querySelector('input[name="memeHeader"]');
    const memeFooterText = document.querySelector('input[name="memeFooter"]');
    const imageUrl = document.querySelector('input[name="imageUrl"]');

    const memeContainer = document.createElement('div');
    //memeContainer.setAttribute('id',1);
    memeContainer.classList.add('meme');

    const memeImg = document.createElement('img');
    memeImg.src = imageUrl.value;
    memeImg.width = 300;

    const memeHeaderContainer = document.createElement('h3');
    memeHeaderContainer.classList.add('meme-header');
	memeHeaderContainer.innerText = memeHeaderText.value;
    
    const memeFooterContainer = document.createElement('h3');
    memeFooterContainer.classList.add('meme-footer');
	memeFooterContainer.innerText = memeFooterText.value;

    const removeButtonContainer = document.createElement('div');
    removeButtonContainer.classList.add('remove-button');

    const removeButton = document.createElement('button');
    removeButton.innerText = 'REMOVE';
    removeButtonContainer.appendChild(removeButton);
    
	memeContainer.appendChild(memeHeaderContainer);
    memeContainer.appendChild(memeImg);
	memeContainer.appendChild(removeButtonContainer);
	memeContainer.appendChild(memeFooterContainer);
    
    memeShowcase.appendChild(memeContainer);

    // TODO - clear form values
    memeHeaderText.value = '';
    memeFooterText.value = '';
    imageUrl.value = '';
});

memeShowcase.addEventListener('click', function(e2) {
    if (e2.target.tagName === 'BUTTON') {
        console.log('Clicked');
        e2.target.parentElement.parentElement.remove();
    }
});