import { Fragment } from "react";
import { MARCAS, YEARS, PLANES } from "../constants";
import useCotizador from "../hooks/useCotizador";
import Error from "./Error";

const Formulario = () => {
	const { handleChangeDatos, datos, error, setError, cotizarSeguro } =
		useCotizador();

	const handleSubmit = (e) => {
		e.preventDefault();

		//esta condicion verifica si el objeto de Datos tiene un campo vacio ''
		if (Object.values(datos).includes("")) {
			setError("Todos los campos son obligatorios");
			return;
		}
		setError("");

		cotizarSeguro();
	};

	return (
		<>
			{error && <Error />}
			<form onSubmit={handleSubmit}>
				<div className="my-5">
					<label
						htmlFor="marca"
						className="block mb-3 font-bold text-gray-400 uppercase"
					>
						Marca
					</label>
					<select
						name="marca"
						className="w-full p-3 bg-white border border-gray-200"
						id="marca"
						onChange={(e) => handleChangeDatos(e)}
					>
						<option value="">-- Selecciona Marca --</option>
						{MARCAS.map((marca) => (
							<option key={marca.id} value={marca.id}>
								{marca.nombre}
							</option>
						))}
					</select>
				</div>
				<div className="my-5">
					<label
						htmlFor="year"
						className="block mb-3 font-bold text-gray-400 uppercase"
					>
						Selecciona Año
					</label>
					<select
						name="year"
						className="w-full p-3 bg-white border border-gray-200"
						id="year"
						onChange={(e) => handleChangeDatos(e)}
					>
						<option value="">-- Selecciona Marca --</option>
						{YEARS.map((year) => (
							<option key={year} value={year}>
								{year}
							</option>
						))}
					</select>
				</div>
				<div className="my-5">
					<label
						htmlFor="plan"
						className="block mb-3 font-bold text-gray-400 uppercase"
					>
						Elige un plan
					</label>
					<div className="flex gap-3 items-center">
						{PLANES.map((plan) => (
							<Fragment key={plan.id}>
								<label>{plan.nombre}</label>
								<input
									type="radio"
									name="plan"
									value={plan.id}
									onChange={(e) => handleChangeDatos(e)}
								/>
							</Fragment>
						))}
					</div>
				</div>
				<input
					type="submit"
					className="w-full bg-indigo-500 hover:bg-indigo-600 transition-colors text-white cursor-pointer p-3 uppercase font-bold"
					value="Cotizar"
				/>
			</form>
		</>
	);
};

export default Formulario;
