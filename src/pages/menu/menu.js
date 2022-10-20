import './menu.css';
import SushiImage from '../../img/menu-sushi.jpg';
import HamburgerImage from '../../img/menu-hamburger.jpg';
import LasagnaImage from '../../img/menu-lasagna.jpg';
import PizzaImage from '../../img/menu-pizza.jpg';
import DessertImage from '../../img/menu-dessert.jpg';

function writeMenu() {
	const container = document.querySelector('#content');
	container.innerHTML = '';

	const menuContainer = document.createElement('div');
	menuContainer.id = 'menu-container';

	const sushiDish = getDishHTMLElement('Sushi', SushiImage, 'sushi');
	menuContainer.appendChild(sushiDish);

	const lasagnaDish = getDishHTMLElement('Lasagna', LasagnaImage, 'lasagna');
	menuContainer.appendChild(lasagnaDish);

	const pizzaDish = getDishHTMLElement('Pizza', PizzaImage, 'pizza');
	menuContainer.appendChild(pizzaDish);

	const hamburgerDish = getDishHTMLElement(
		'Hamburger',
		HamburgerImage,
		'hamburger'
	);
	menuContainer.appendChild(hamburgerDish);

	const dessertDish = getDishHTMLElement('Dessert', DessertImage, 'dessert');
	menuContainer.appendChild(dessertDish);

	container.innerHTML = '';
	container.appendChild(menuContainer);

	document
		.querySelector('#nav-bar')
		.querySelectorAll('li')
		.forEach((listItem) => listItem.classList.remove('currentPage'));

	this.classList.add('currentPage');
}

function getDishHTMLElement(title, imgPath, imgAlt) {
	const dishContainer = document.createElement('div');

	const img = new Image();
	img.src = imgPath;
	img.setAttribute('alt', imgAlt);
	dishContainer.appendChild(img);

	const dishTitle = document.createElement('h1');
	dishTitle.id = `${title.toLowerCase()}-title`;
	dishTitle.textContent = title;
	dishContainer.appendChild(dishTitle);

	const menuParagraph = document.createElement('p');
	menuParagraph.textContent =
		'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt perferendis, est ipsam delectus, repellat quas, enim nobis aliquam error maiores cumque quia debitis quisquam amet. Culpa voluptatem labore ducimus eveniet?';
	dishContainer.appendChild(menuParagraph);

	return dishContainer;
}

export default writeMenu;
