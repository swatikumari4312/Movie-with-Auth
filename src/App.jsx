import "./App.css";
import GenreMovieList from "./components/GenreMovieList";
import Header from "./components/Header";
import ProductionHouse from "./components/ProductionHouse";
import Slider from "./components/Slider";
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/clerk-react';

function App() {
  return (
    <header>
<SignedOut>
  <div
    className="flex flex-col items-center justify-center h-screen"
    style={{
      background: "linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)",
      minHeight: "100vh",
      width: "100vw",
    }}
  >
    <div className="mb-8 p-6 bg-white bg-opacity-80 rounded shadow-lg max-w-md w-full text-center">
      <h2 className="text-2xl font-bold mb-2 text-blue-700">Welcome to MovieMania!</h2>
      <p className="mb-4 text-gray-700">
        Sign in to explore trending movies, personalized recommendations, and exclusive content.
      </p>
      <div className="bg-yellow-300 text-yellow-900 font-semibold px-4 py-2 rounded mb-2">
        🎬 Special Offer: Get 1 month free premium access!
      </div>
    </div>
    <SignInButton mode="modal">
      <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded shadow-lg text-lg transition">
        Sign In
      </button>
    </SignInButton>
  </div>
</SignedOut>
      <SignedIn>
        <Header />
        <Slider />
        <GenreMovieList />
        <ProductionHouse />
      </SignedIn>
    </header>
  );
}

export default App;
