import { useCallback, useMemo, useRef } from "react";
import { MARCAS, PLANES } from "../constants";
import useCotizador from "../hooks/useCotizador";

const Resultado = () => {
	const { resultado, datos } = useCotizador();

	const { marca, plan, year } = datos;

	const yearRef = useRef(year);

	const [nombreMarca] = useMemo(
		() => MARCAS.filter((m) => m.id === Number(marca)),
		[resultado]
	);

	const [nombrePlan] = useCallback(
		PLANES.filter((p) => p.id === Number(plan)),
		[resultado]
	);

	if (resultado === 0) return null;
	return (
		<div className="bg-green-100 text-center mt-5 p-5 shadow">
			<h2 className="text-gray-600 font-black text-3xl">Resumen</h2>
			<p className="my-2">
				<span className="font-bold">Marca:</span> {nombreMarca.nombre}
			</p>
			<p className="my-2">
				<span className="font-bold">Plan:</span> {nombrePlan.nombre}
			</p>
			<p className="my-2">
				<span className="font-bold">Año del Auto:</span> {yearRef.current}
			</p>
			<p className="my-2">
				<span className="font-bold">Total Cotizacion:</span> S/ {resultado}
			</p>
		</div>
	);
};

export default Resultado;
