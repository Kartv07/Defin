import { Navbar, Welcome, Footer, Transactions } from './components';

const App = () => {
  return (
    <div className="min-h-screen">
      <div className="gradient-bg-welcome">
        <Navbar />
        <Welcome />
        <Transactions />
      </div>
      <Footer /> 
    </div>
  )
}

export default App
