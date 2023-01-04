<script>
	import { responseStore } from '$lib/stores';
    import { isQiqi } from '$lib/stores';
	import { simulate } from '$lib/generate';

    let currentPity = 0;

	const clickHandler = () => {
		simulate(currentPity);
	};
</script>

<div class="h-screen w-screen flex justify-center items-center flex-col space-y-4">
	<p class="text-2xl">✨Genshin Wish Simulator✨</p>
	<div class="flex flex-row justify-center items-center space-x-4">
		<div class="flex flex-row space-x-2 justify-center items-center">
			<p>Current Pity</p>
			<input type="text" class="shadow-lg shadow-pink-400 rounded-xl px-4 py-2" bind:value={currentPity} />
		</div>

		<button
			class="px-4 py-2 bg-black text-white rounded-xl shadow-lg shadow-pink-400"
			on:click={clickHandler}>Wish</button
		>
	</div>

	<p>{$responseStore}</p>

    <img src="/favicon.png" class="w-1/12" alt="Qiqi Fallen Emote" hidden={!$isQiqi}/>
</div>
