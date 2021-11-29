import * as sgMail from '@sendgrid/mail';

export async function post(req) {
	const { email, subject, name, message } = JSON.parse(req.body);

	const htmlLayout = `Email From <strong>${name}</strong> @ ${email}
		<div>${subject}</div>
		<p>${message}</p>`;

	try {
		sgMail.setApiKey(process.env['VITE_SENDGRID_API_KEY']);
		const msg = {
			to: 'info@lotussolutions.io', // Change to our email
			from: 'contact@lotussolutions.io',
			subject: subject,
			text: `Contact Form | From: ${name}, Email: ${email}, Message: ${message}`,
			html: htmlLayout
		};
		sgMail.send(msg);
	} catch (error) {
		return {
			status: 500,
			body: JSON.stringify({
				message: 'something went wrong with the email submit!'
			})
		};
	}
	return {
		status: 200,
		body: JSON.stringify({
			message: 'ok'
		})
	};
}
