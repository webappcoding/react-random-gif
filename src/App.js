import React from "react";
import "./App.scss";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import RandomGif from "./components/RandomGif";
import RandomGifTag from "./components/RandomGifTag";

function App() {
  return (
    <div className="app">
      <header className="app__header">
        <h1 className="app__title">Random Gif App</h1>
      </header>
      <main className="app__main">
        <RandomGif />
        <RandomGifTag />
      </main>
    </div>
  );
}

export default App;
