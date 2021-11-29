import mailIcon from '$assets/mail-icon.svg';
// import markerIcon from '$assets/marker-icon.svg';
// import phoneIcon from '$assets/phone-icon.svg';

export default [
	{
		heading: 'Contact Info',
		links: [
			// { icon: markerIcon, alt: 'marker icon', text: 'Address' },
			// { icon: phoneIcon, alt: 'phone icon', text: 'Phone' },
			{ icon: mailIcon, alt: 'mail icon', text: 'info@lotussolutions.io' }
		]
	},
	{
		heading: 'Quick Links',
		links: [
			{ text: 'home', href: '/' },
			{ text: 'About', href: '/about' },
			{ text: 'Contact', href: '/#contact' }
		]
	}
	// {
	// 	heading: 'Resources',
	// 	links: [{ text: 'FAQ', href: '/faq' }]
	// }
];
