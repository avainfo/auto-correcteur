function SetupDone() {
	function setupNames() {
		const myURL = new URL(document.URL);
		let name = myURL.searchParams.get("names");
		console.log(name);
		localStorage.setItem("name", name)
		localStorage.setItem("level", "0")
		window.location.href = "/";
	}

	return (
		<img src={"#"} onError={setupNames} alt={""}/>
	)
}

export default SetupDone;