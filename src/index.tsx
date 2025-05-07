/* @refresh reload */
import { render } from "solid-js/web";
import "./index.css";
import App from "./App.tsx";
import "./styles/theme.css";
import "virtual:uno.css";
import "@unocss/reset/normalize.css";

const root = document.getElementById("root");

render(() => <App />, root!);
