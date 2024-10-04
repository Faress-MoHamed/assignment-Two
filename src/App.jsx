import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CarDetails from "./pages/CarDetails";
import AllCars from "./pages/AllCars";
import Home from "./pages/Home/Home";
import Layout from "./pages/Layout";
import { Toaster } from "react-hot-toast";
import ErrorPage from "./Components/ErrorPage";
import NotFound from "./Components/NotFound";

function App() {
	const routes = createBrowserRouter([
		{
			path: "/",
			element: <Layout />,
			errorElement: <ErrorPage />,
			children: [
				{
					path: "/",
					index: true,
					element: <Home />,
				},
				{
					path: "cars",
					element: <AllCars />,
				},
				{
					path: "cars/:id",
					element: <CarDetails />,
				},
			],
		},
		{
			path: "*",
			element: <NotFound />,
		},
	]);
	return (
		<>
			<Toaster position="top-right" />
			<RouterProvider router={routes} />
		</>
	);
}

export default App;
