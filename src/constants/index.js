export const MARCAS = [
	{
		id: 1,
		nombre: "Europeo",
	},
	{
		id: 2,
		nombre: "Americano",
	},
	{
		id: 3,
		nombre: "Asiatico",
	},
];

export const PLANES = [
	{
		id: 1,
		nombre: "Básico",
	},
	{
		id: 2,
		nombre: "Completo",
	},
];

export const YEARMAX = new Date().getFullYear();

export const YEARS = Array.from(
	new Array(20),
	(valor, index) => YEARMAX - index
);
