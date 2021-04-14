import Head from "next/head";
import Header from "../components/Header";
import SearchResults from "../components/SearchResults";
import { useRouter } from "next/router";
import Response from "../Response";

function Search({ results }) {
	const router = useRouter();
	console.log(results);
	return (
		<div>
			<Head>
				<title>{router.query.q} - Google Search</title>
				<link
					rel="shortcut icon"
					href="/favicon.png"
					type="image/x-icon"
				/>
			</Head>
			<Header />
			<SearchResults results={results} />
		</div>
	);
}

export async function getServerSideProps(context) {
	const useDummyData = true;
	const startIndex = context.query.start || "0";

	const data = useDummyData
		? Response
		: await fetch(
				`https://www.googleapis.com/customsearch/v1?key=${process.env.API_KEY}&cx=${process.env.CONTEXT_KEY}&q=${context.query.q}&start=${startIndex}`
		  ).then((response) => response.json());

	return {
		props: {
			results: data,
		},
	};
}

export default Search;
