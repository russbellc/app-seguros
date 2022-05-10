import React from "react";
import useCotizador from "../hooks/useCotizador";

const Error = () => {
	const { error } = useCotizador();
	return (
		<div className="border text-center border-red-500 bg-red-100 py-3 text-red-700 rounded-md">
			<p>{error}</p>
		</div>
	);
};

export default Error;
