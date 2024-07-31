import './App.css';

function App() {
	const text = "function solution() {\n" +
		"    \n" +
		"}"
	return (
		<div className="app">
			<div className="rules">

			</div>
			<div className="editor">
				<textarea className="textArea" spellCheck="false">
					{text}
				</textarea>
			</div>
		</div>
	);
}

export default App;