import './App.css';
import {correct} from "./utils/Corrector";
import {useEffect, useState} from "react";

function App() {
	const text = "function solution() {\n" +
		"    return 'solution'\n" +
		"}"
	const [title, setTitle] = useState("");
	const level = parseInt(localStorage.getItem("level"));
	useEffect(() => {
		fetch("assets/level.json")
			.then((data) => data.json())
			.then((json) => setTitle(json[level]["title"]))
			.catch(e => console.log(e));
		// .then((json) => {
		// 	console.log(json)
		// 	setTitle(json[0]["title"])
		// })
	}, []);
	return (
		<div className="app">
			<div className="rules">
				<h1>{title}</h1>
			</div>
			<div className="editor">
				<textarea className="textArea" spellCheck="false" defaultValue={text}>
				</textarea>
				<button onClick={correctCode}>Corriger</button>
			</div>
			<div className="endscreen">
				<h1>Réussi !</h1>
				<h2 className="failedTest"></h2>
				<button className="action" onClick={() => {
					window.location.href = "/"
				}}>Suivant
				</button>
			</div>
		</div>
	);

	function correctCode() {
		let correction = correct(0, document.querySelector("textarea").value);
		if (correction === "true") {
			document.querySelectorAll("h1")[1].textContent = "Réussi !";
			document.querySelector("h2").remove();
			document.querySelector(".endscreen").style.display = "flex";
			document.querySelector(".endscreen").style.opacity = "1";
			document.querySelector(".action").textContent = "Level " + (level + 1);
			localStorage.setItem("level", "" + (level + 1))
		} else {
			document.querySelector("h1").textContent = "Raté !";
			document.querySelector("h2").textContent = "Raté avec les paramètres : " + correction;
			document.querySelector(".endscreen").style.display = "flex";
			document.querySelector(".endscreen").style.opacity = "1";
			document.querySelector(".action").textContent = "Rééssayer";
		}
	}
}

export default App;