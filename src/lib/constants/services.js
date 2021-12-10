import crossPlat from '$assets/crossplat.png';
import seo from '$assets/seo.png';
import webDesign from '$assets/web-design.png';

export default [
	{
		name: 'Web | Mobile',
		icon: webDesign,
		description: `Do you want to build lasting relationships with your customers? Of course! We'll help you create a seamless, comfortable experience that customers love and keep them coming back.`,
		background: true,
		modalDesc: `Your customers deserve the best. We use industry-leading technologies to deliver unique responsive experiences across any device, like your web or mobile website. Start winning over customers today.`,
		features: [
			'Industry-Leading Technology',
			'Complete Custom Design & Development',
			'Prioritize Security and Performance',
			'Optimized SEO',
			'Deployment & Future Maintenance'
		]
	},
	{
		name: 'Cross-Platform',
		icon: crossPlat,
		description: `Reach your customers on the platform they prefer. We'll develop your application using leading cross-platform technologies; You'll get your message across no matter the device.`,
		background: false,
		modalDesc: `Stay connected with you customers on any platform. We use advanced technologies to deliver your application on any device, start winning over customers one device at a time.`,
		features: [
			'Industry-leading Technology',
			'Complete Custom Design & Development',
			'Proven Methodologies',
			'Prioritize Security and Performance',
			'Optimized SEO',
			'Efficient Deployment & Maintenance'
		]
	},
	{
		name: 'SEO Optimization',
		icon: seo,
		description: `Grow your business with organic traffic. Less than 10 percent of people click on paid ads; we'll show them why they should!`,
		background: true,
		modalDesc:
			'Are you tired of losing business to your competitors? We use modern SEO techniques to help you increase your traffic.',
		features: [
			'On-site Audit',
			'Target Audience Identification',
			'Keyword Research',
			'On-page SEO',
			'Technical SEO'
		]
	}
];
