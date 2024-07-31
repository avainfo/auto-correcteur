import "../styles/setup.css"

function Setup() {
	return (
		<div className="setup">
			<form action="/setup-done">
				<label htmlFor="names">Choisissez un nom :</label>
				<select id="names" name="names">
					<option value="alexis">Alexis</option>
					<option value="amine">Amine</option>
					<option value="hugo_r_♥">Hugo R ♥</option>
					<option value="hugo_c">Hugo C</option>
					<option value="omar">Omar</option>
					<option value="maeva">Maëva</option>
					<option value="christophe">Christophe</option>
					<option value="chahine">Chahine</option>
					<option value="steven">Steven</option>
					<option value="cedric">Cédric</option>
					<option value="axel">Axel</option>
				</select>
				<button type="submit">Envoyer</button>
			</form>
		</div>
	);
}

export default Setup;