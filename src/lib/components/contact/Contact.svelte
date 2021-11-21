<script>
	import * as S from './styles';
	import { Title } from '$styles/utils/title';
	import SectionHeader from '../common/SectionHeader.svelte';
	let errors = {};
	let showMessage = false;
	let responseMessage = {};
	let email = '';
	let name = '';
	let subject = '';
	let message = '';

	function isFormValid(data) {
		return !Object.keys(errors).some((inputName) =>
			Object.keys(errors[inputName]).some((errorName) => errors[inputName][errorName])
		);
	}

	function validateForm(data) {
		if (!isRequiredFieldValid(data.email)) {
			errors['email'] = { ...errors['email'], required: true };
		} else {
			errors['email'] = { ...errors['email'], required: false };
		}

		if (!isRequiredFieldValid(data.name)) {
			errors['name'] = { ...errors['name'], required: true };
		} else {
			errors['name'] = { ...errors['name'], required: false };
		}

		if (!isRequiredFieldValid(data.subject)) {
			errors['subject'] = { ...errors['subject'], required: true };
		} else {
			errors['subject'] = { ...errors['subject'], required: false };
		}

		if (!isRequiredFieldValid(data.message)) {
			errors['message'] = { ...errors['message'], required: true };
		} else {
			errors['message'] = { ...errors['message'], required: false };
		}
	}
	function isRequiredFieldValid(value) {
		return value != null && value !== '';
	}

	async function handleSubmit(e) {
		const data = { name, email, subject, message };
		await validateForm(data);

		if (isFormValid(data)) {
			const submit = await fetch('/send-email.json', {
				method: 'POST',
				body: JSON.stringify(data)
			});
			const res = await submit.json();
			if (res.message === 'ok') {
				showMessage = true;
				responseMessage = { type: 'success', text: 'Message Sent!' };
				name = '';
				email = '';
				subject = '';
				message = '';
			}
		} else {
			showMessage = true;
			responseMessage = { type: 'error', text: 'Oops Something Went Wrong!' };
		}
	}
</script>

<div class={S.Container}>
	<SectionHeader blackText titleMain="Get" titleAccent="In Touch" extraText="With" bordered="Us" />
	<div class={S.Form}>
		<form on:submit|preventDefault={handleSubmit}>
			{#if showMessage}
				<div class={responseMessage.type === 'success' ? S.Message : S.MessageError}>
					{responseMessage.text}
				</div>
			{/if}
			<div class={S.Fields}>
				<div class={S.Name}>
					<input type="text" name="name" placeholder="Name" bind:value={name} />

					<input type="email" name="email" placeholder="Email" bind:value={email} />
				</div>
				{#if errors.email && errors.email.required}
					<p class={S.Error}>Email is required</p>
				{/if}
				{#if errors.name && errors.name.required}
					<p class={S.Error}>Name is required</p>
				{/if}
				<input type="text" name="subject" placeholder="Subject" bind:value={subject} />
				{#if errors.subject && errors.subject.required}
					<p class={S.Error}>Subject is required</p>
				{/if}
				<textarea name="message" placeholder="Message" bind:value={message} />
				{#if errors.message && errors.message.required}
					<p class={S.Error}>Message is required</p>
				{/if}
			</div>
			<button disabled={responseMessage.type === 'success'} class={S.Btn} type="submit"
				>{responseMessage.type === 'success' ? 'Sent !' : 'Submit'}</button
			>
		</form>
	</div>
</div>
