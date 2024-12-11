import "./style.css";

function App() {
  return (
    <header>
      <div className="logo">
        <img
          src="logo.png"
          height="68"
          width="68"
          alt="Logo for What I Learned Today"
        />
        <h1>Today I Learned!!!!</h1>
      </div>
      <button className="btn post btn-lg">Share a Fact</button>
    </header>
  );
}
export default App;
