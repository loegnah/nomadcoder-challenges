import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import "./styles.css";

import useKeyPress from "./useKeyPress";
import useOnline from "./useOnline";
import useMousePosition from "./useMousePosition";
import useLockScroll from "./useLockScroll";
import useLocalStorage from "./useLocalStorage";
import useGeolocation from "./useGeolocation";
import useFavicon from "./useFavicon";
import useDeviceOrientation from "./useDeviceOrientation";

function App() {
  const { alpha, beta, gamma } = useDeviceOrientation();
  const setFavicon = useFavicon("https://stackoverflow.com/favicon.ico");
  const {
    coords: { lat, long },
    error,
  } = useGeolocation();
  const kPressed = useKeyPress("k");
  const aPressed = useKeyPress("a");
  const bPressed = useKeyPress("b");
  const [currentLS, setLS] = useLocalStorage("mymy", "12345");
  const { x, y } = useMousePosition();
  const isOnline = useOnline();
  const [isLocked, { lockScroll, unLockScroll }] = useLockScroll();
  return (
    <div className="App">
      <h1>Loegnah hooks!</h1>
      <h2>useDeviceOrientation</h2>
      <ul>
        <li>Alpha: {alpha ? alpha : "null"}</li>
        <li>Beta: {beta ? beta : "null"}</li>
        <li>Gamma: {gamma ? gamma : "null"}</li>
      </ul>
      <h2>useFavicon</h2>
      <button onClick={() => setFavicon("https://reactjs.org/favicon.ico")}>
        Change Favicon
      </button>
      <h2>useGeolocation</h2>
      <ul>
        <li>Latitude: {lat}</li>
        <li>Longitude: {long}</li>
        <li>Geolocation Error: {error ? error : "Null"}</li>
      </ul>
      <h2>useKeyPress</h2>
      <ul>
        <li>Pressed 'k': {kPressed && <span>K</span>}</li>
        <li>Pressed 'a': {aPressed && <span>A</span>}</li>
        <li>Pressed 'b': {bPressed && <span>B</span>}</li>
      </ul>
      <h2>useLocalStorage</h2>
      <ul>
        <li>Current Value : {currentLS}</li>
      </ul>
      <button onClick={() => setLS("12345")}>set 12345</button>
      <button onClick={() => setLS(null)}>set null</button>
      <h2>useMousePosition</h2>
      <ul>
        <li>Mouse X: {x}</li>
        <li>Mouse Y: {y}</li>
      </ul>
      <h2>useOnline</h2>
      <p>Are we online? {isOnline ? "YES" : "NO"}</p>
      <h2>useLockScroll</h2>
      <div>Is locked ? {isLocked ? "YES" : "NO"}</div>
      <button onClick={() => lockScroll()}>Lock Scroll</button>
      <button onClick={() => unLockScroll()}>Unlock Scroll</button>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
