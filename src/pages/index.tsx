import type {NextPage} from "next";
import Head from "next/head";
import {signIn, signOut, useSession} from "next-auth/react";

const Home: NextPage = () => {
	const {data: session} = useSession();

	if (session && session.user) {
		return <>
			<Head>
				<title>Create T3 App</title>
				<meta name="description" content="Generated by create-t3-app"/>
				<link rel="icon" href="/favicon.ico"/>
			</Head>

			<main className="container mx-auto flex flex-col items-center justify-center min-h-screen p-4">
				<img src={session.user.image} alt={session.user.name} className="rounded-full w-32 h-32"/>
				Signed in as {session.user.name} <br/>
				<button onClick={() => signOut()}>Sign out</button>
			</main>
		</>;
	}

	return <main className="container mx-auto flex flex-col items-center justify-center min-h-screen p-4">
		Not signed in <br/>
		<button onClick={() => signIn()}>Sign in</button>
	</main>
};

export default Home;
