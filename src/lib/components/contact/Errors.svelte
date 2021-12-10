<script>
	export let errors;
	export let showMessage;
	export let responseMessage;
	import * as S from './styles';
</script>

{#if showMessage}
	<div class={responseMessage.type === 'success' ? S.Message : S.MessageError}>
		{responseMessage.text}
	</div>
{/if}
{#if errors.email && errors.email.required}
	<div class={S.MessageError}>Email is required</div>
{/if}
{#if errors.name && errors.name.required}
	<div class={S.MessageError}>Name is required</div>
{/if}
{#if errors.subject && errors.subject.required}
	<div class={S.MessageError}>Subject is required</div>
{/if}
{#if errors.message && errors.message.required}
	<div class={S.MessageError}>Message is required</div>
{/if}
