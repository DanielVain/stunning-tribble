import Expenses from "./components/Expenses";

const App = () => {
	const expenses = [
		{
			title: "Toilet Paper",
			price: "29.90",
			date: new Date(2020, 3, 29),
		},
		{
			title: "Car Insurance",
			price: "500",
			date: new Date(2022, 1, 13),
		},
		{
			title: "Bamba",
			price: "2.90",
			date: new Date(2022, 1, 31),
		},
	];

	return <Expenses items={expenses} />;
};

export default App;
