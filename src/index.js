import ReactDOM from "react-dom/client"
import { 
	BrowserRouter,
	Routes,
	Route
} from "react-router-dom"

import Navbar from "./components/Navbar"

import Home from "./pages/home"
import Search from "./pages/search"

import "./index.css"

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(
	<BrowserRouter>
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/search" element={<Search />} />
		</Routes>
	</BrowserRouter>
)