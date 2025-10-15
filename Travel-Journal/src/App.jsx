import Header from "./components/Header";
import Entry from "./components/Entry";
import data from "./data";

function App() {
  const travelData = data.map((entry) => (
    <Entry key={entry.id} entry={entry} />
  ));

  return (
    <>
      <Header />
      {travelData}
    </>
  );
}

export default App;
