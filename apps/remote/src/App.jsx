import Table from "@repo/ui/Table";
import "@repo/ui/Table.css";
import "./App.css";

function App() {
	return (
		<div className="App">
			<div className="remote-header">
				<h1>🚀 Remote Application</h1>
				<p>Running on port 5001</p>
				<small style={{ opacity: 0.9, fontSize: '0.9rem', display: 'block', marginTop: '0.5rem' }}>
					✨ HMR works! Edit packages/ui/src/Table.jsx to see instant updates here too
				</small>
			</div>
			
			<Table />
		</div>
	);
}

export default App;
