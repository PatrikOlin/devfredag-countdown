<script lang="ts">
	import {
		startOfMonth,
		addMonths,
		setDay,
		getDay,
		isAfter,
		setHours,
		differenceInHours,
		format,
	} from "date-fns";
	import svLocale from "date-fns/locale/sv";

	let nextDevFriday;

	function countdown(): number {
		const curr = new Date();
		const startOfM = startOfMonth(new Date());
		let firstFriday = getFirstFriday(startOfM);

		if (isAfter(curr, firstFriday)) {
			const nextMonth = addMonths(startOfM, 1);
			firstFriday = getFirstFriday(nextMonth);
		}

		nextDevFriday = format(firstFriday, "do MMMM yyyy", {
			locale: svLocale,
		});
		return getHours(firstFriday);
	}

	function getFirstFriday(month: Date): Date {
		const friday = 5;
		return setDay(month, friday, {
			weekStartsOn: getDay(month),
		});
	}

	function getHours(date: Date): number {
		const curr = new Date();
		date = setHours(date, 5);
		return differenceInHours(date, curr);
	}
</script>

<main>
	{#if countdown() === 72}
		<h2>Dawn of</h2>
		<h3>The Third Day:</h3>
		<h1>-{countdown()} Hours Remain-</h1>
		<h3>{nextDevFriday}</h3>
	{:else if countdown() === 48}
		<h2>Dawn of</h2>
		<h3>The Second Day:</h3>
		<h1>-{countdown()} Hours Remain-</h1>
		<h3>{nextDevFriday}</h3>
	{:else if countdown() === 24}
		<h2>Dawn of</h2>
		<h3>The Final Day:</h3>
		<h1>-{countdown()} Hours Remain-</h1>
		<h3>{nextDevFriday}</h3>
	{:else}
		<h3>Devfredag om:</h3>
		<h1>{countdown()} timmar</h1>
		<h3>{nextDevFriday}</h3>
	{/if}
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1,
	h2,
	h3 {
		color: #ff3e00;
		text-transform: uppercase;
	}

	h1 {
		font-size: 4em;
		font-weight: 100;
	}

	h2 {
		font-size: 1.5em;
		font-weight: 100;
		margin-bottom: 0px;
	}

	h3 {
		font-size: 2em;
		font-weight: 300;
		margin-top: 0px;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>
