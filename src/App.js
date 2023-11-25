import ListPage from "./components/listpage";

const App = () => (
  <>
    <header className="flex bg-green-700 text-white text-3xl font-semibold justify-center items-center py-6">
      MyReads
    </header>
    <main>
      <ListPage />
    </main>
  </>
);

export default App;
