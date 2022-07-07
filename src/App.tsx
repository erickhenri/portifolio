import { ApolloProvider } from "@apollo/client";
import { useState } from "react";
import { client } from "./lib/apollo";
import { Router } from "./Router";

export function App() {
	const [themeDarkOn, setThemeDarkOn] = useState(false);

	function changeTheme() {
		setThemeDarkOn(() => !themeDarkOn)
	}

	return (
		<ApolloProvider client={client}>
			<div className={`${themeDarkOn?"dark":""} text-blue-900`}>
				<Router changeTheme={changeTheme} themeDarkOn={themeDarkOn}/>
			</div>
		</ApolloProvider>
	)
}