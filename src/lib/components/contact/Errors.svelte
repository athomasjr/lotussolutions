<script>
	export let errors;
	export let showMessage;
	export let responseMessage;
	import * as S from './styles';
</script>

{#if showMessage}
	<div class={responseMessage.type === 'success' ? S.Message : S.MessageError}>
		<li>{responseMessage.text}</li>
	</div>
{/if}
{#if errors.email && errors.email.required}
	<div class={S.MessageError}><li>Email is required</li></div>
{/if}
{#if errors.name && errors.name.required}
	<div class={S.MessageError}><li>Name is required</li></div>
{/if}
{#if errors.subject && errors.subject.required}
	<div class={S.MessageError}><li>Subject is required</li></div>
{/if}
{#if errors.message && errors.message.required}
	<div class={S.MessageError}><li>Message is required</li></div>
{/if}
