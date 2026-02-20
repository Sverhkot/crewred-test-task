function App() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-8 font-sans text-center">
      <h1 className="text-4xl font-bold text-slate-800 mb-4">
        Welcome to my front-end test assessment! This project is built as an isolated component library.
      </h1>

      <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 max-w-md w-full">
        <p className="text-slate-700 font-medium mb-4">
          To view and interact with the components, please run the Storybook environment:
        </p>
        <code className="bg-slate-800 text-green-400 px-4 py-3 rounded-lg block text-left font-mono text-sm shadow-inner">
          npm run storybook
        </code>
      </div>
    </div>
  );
}

export default App;
