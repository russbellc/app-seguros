import { createContext, useState } from "react";
import {
	calcularMarca,
	calcularPlan,
	formatearMoneda,
	obtenDiferenciaYear,
} from "../helpers";

const CotizadorContext = createContext();

const CotizadorProvider = ({ children }) => {
	const [datos, setDatos] = useState({
		marca: "",
		year: "",
		plan: "",
	});

	const [error, setError] = useState("");
	const [resultado, setResultado] = useState(0);
	const [cargando, setCargando] = useState(false);

	const handleChangeDatos = (e) => {
		setDatos({
			...datos,
			[e.target.name]: e.target.value,
		});
	};
	const cotizarSeguro = () => {
		//una base
		let resp = 2000;

		// obtener diferencia de años
		let diferencia = obtenDiferenciaYear(datos.year);

		// hay que restar el 3% por cada año
		resp -= (diferencia * 3 * resp) / 100;

		//americano 15%
		//Europeo 30%
		//Asiatico 5%
		resp *= calcularMarca(datos.marca);

		//basico 20 %
		//Completo 50%
		resp *= formatearMoneda(calcularPlan(datos.plan));

		setCargando(true);
		setTimeout(() => {
			setResultado(resp);
			setCargando(false);
		}, 3000);
	};
	return (
		<CotizadorContext.Provider
			value={{
				handleChangeDatos,
				datos,
				error,
				setError,
				cotizarSeguro,
				resultado,
				cargando,
			}}
		>
			{children}
		</CotizadorContext.Provider>
	);
};

export { CotizadorProvider };
export default CotizadorContext;
