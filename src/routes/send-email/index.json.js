import * as sgMail from '@sendgrid/mail';

export async function post(req) {
	const { email, subject, name, message } = JSON.parse(req.body);

	try {
		sgMail.setApiKey(process.env['VITE_SENDGRID_API_KEY']);
		const msg = {
			to: 'ericb@linux.com', // Change to our email
			from: email,
			subject: subject,
			text: message,
			html: `<strong>${name}</strong>`
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
