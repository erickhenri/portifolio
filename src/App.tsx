import { ApolloProvider } from "@apollo/client";
import { ApplyTheme } from "./components/ApplyTheme";
import { client } from "./lib/apollo";
import { Router } from "./Router";

export function App() {
	ApplyTheme()
	return (
		<ApolloProvider client={client}>
			<div className={`text-blue-900 dark:text-white`}>
				<Router/>
			</div>
		</ApolloProvider>
	)
}