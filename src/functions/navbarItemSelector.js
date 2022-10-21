function selectNavbarItem(htmlElement) {
	// Get the Home navbar list item
	if (!htmlElement)
		htmlElement = document.querySelector('#nav-bar >li:nth-child(1)');

	document
		.querySelector('#nav-bar')
		.querySelectorAll('li')
		.forEach((listItem) => {
			listItem.classList.remove('selectedNavbarItem');
		});

	htmlElement.classList.add('selectedNavbarItem');
}

export default selectNavbarItem;
