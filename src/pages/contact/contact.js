import selectNavbarItem from '../../functions/navbarItemSelector';
import MapImage from '../../img/contact-map.jpg';
import './contact.css';

function writeContact() {
	const container = document.querySelector('#content');

	const contactContainer = document.createElement('div');
	contactContainer.id = 'contact-container';

	const svgPhoneCode =
		'<svg style="width:24px;height:24px" viewBox="0 0 24 24"><path fill="currentColor" d="M6.62,10.79C8.06,13.62 10.38,15.94 13.21,17.38L15.41,15.18C15.69,14.9 16.08,14.82 16.43,14.93C17.55,15.3 18.75,15.5 20,15.5A1,1 0 0,1 21,16.5V20A1,1 0 0,1 20,21A17,17 0 0,1 3,4A1,1 0 0,1 4,3H7.5A1,1 0 0,1 8.5,4C8.5,5.25 8.7,6.45 9.07,7.57C9.18,7.92 9.1,8.31 8.82,8.59L6.62,10.79Z" /></svg>';
	const phone = getContactFieldHTMLElement(
		'phone',
		svgPhoneCode,
		'123 45 67 89'
	);
	contactContainer.appendChild(phone);

	const svgAddressCode =
		'<svg style="width:24px;height:24px" viewBox="0 0 24 24"><path fill="currentColor" d="M12,11.5A2.5,2.5 0 0,1 9.5,9A2.5,2.5 0 0,1 12,6.5A2.5,2.5 0 0,1 14.5,9A2.5,2.5 0 0,1 12,11.5M12,2A7,7 0 0,0 5,9C5,14.25 12,22 12,22C12,22 19,14.25 19,9A7,7 0 0,0 12,2Z" /></svg>';
	const address = getContactFieldHTMLElement(
		'address',
		svgAddressCode,
		'Fabolous Street 82, Roma, ITALIA'
	);
	contactContainer.appendChild(address);

	const img = new Image();
	img.src = MapImage;
	img.setAttribute('alt', 'map');
	contactContainer.appendChild(img);

	container.innerHTML = '';
	container.appendChild(contactContainer);

	selectNavbarItem(this);
}

function getContactFieldHTMLElement(id, svgCode, text) {
	const div = document.createElement('div');
	div.id = id;
	div.innerHTML = `${svgCode} ${text}`;

	return div;
}

export default writeContact;
