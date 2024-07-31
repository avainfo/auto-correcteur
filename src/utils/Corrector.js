export function correct(n, code) {

	let codeString = code;

	let passed = "false";
	let r;
	let parameters = ""
	switch (n) {
		case 0:
			parameters = "('Bonjour')";
			let finalCode = codeString + "\n solution" + parameters;
			r = eval(finalCode);
			if (r === "solution") {
				passed = "true"
			} else {
				passed = parameters
			}
			break;
	}
	return passed;
}