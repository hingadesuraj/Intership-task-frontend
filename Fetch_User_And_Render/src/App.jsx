import "./App.css";
import Card from "./components/Card";

function App() {
  return (
    <>
      <div className="container mx-auto py-8">
        <h1 className="text-2xl font-bold mb-4">Random User Card</h1>
        <Card />
      </div>
    </>
  );
}

export default App;
