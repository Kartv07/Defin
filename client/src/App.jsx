import { Navbar, Welcome, Footer, Transactions, Hash } from './components';

const App = () => {
  return (
    <div className="min-h-screen">
      <div className="gradient-bg-welcome">
        <Navbar />
        <Welcome />
        <Hash></Hash>
        <Transactions />
      </div>
      <Footer /> 
    </div>
  )
}

export default App
