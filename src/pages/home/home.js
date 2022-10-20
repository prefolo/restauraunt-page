import './home.css';
import FoodImage from '../../img/home-food-small.jpeg';

function writeHome() {
	const container = document.querySelector('#content');

	const homeContainer = document.createElement('div');
	homeContainer.id = 'home-container';

	const img = new Image();
	img.src = FoodImage;
	img.setAttribute('alt', 'food');
	homeContainer.appendChild(img);

	const homeTitle = document.createElement('div');
	homeTitle.id = 'home-title';
	homeTitle.textContent = 'Welcome to our kitchen';
	homeContainer.appendChild(homeTitle);

	const homeParagraph = document.createElement('p');
	homeParagraph.textContent =
		'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt perferendis, est ipsam delectus, repellat quas, enim nobis aliquam error maiores cumque quia debitis quisquam amet. Culpa voluptatem labore ducimus eveniet?';
	homeContainer.appendChild(homeParagraph);

	container.innerHTML = '';
	container.appendChild(homeContainer);
}

export default writeHome;
