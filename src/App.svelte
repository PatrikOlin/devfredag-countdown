<script lang="ts">
	import {
		startOfMonth,
		addMonths,
		setDay,
		getDay,
		isAfter,
		setHours,
		differenceInHours,
	} from "date-fns";

	function countdown(): number {
		const curr = new Date();
		const startOfM = startOfMonth(new Date());
		let firstFriday = getFirstFriday(startOfM);

		if (isAfter(curr, firstFriday)) {
			const nextMonth = addMonths(startOfM, 1);
			firstFriday = getFirstFriday(nextMonth);
		}

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
	<h3>Devfredag om:</h3>
	<h1>{countdown()} timmar</h1>
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1,
	h3 {
		color: #ff3e00;
		text-transform: uppercase;
	}

	h1 {
		font-size: 4em;
		font-weight: 100;
	}

	h3 {
		font-size: 2em;
		font-weight: 300;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>
