import { getQueryClient, trpc } from "@/trpc/server";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import { Suspense } from "react";
import { Client } from "./client";

const Home = async () => {
	const queryClient = getQueryClient();
	void queryClient.prefetchQuery(trpc.createAI.queryOptions({ text: "Antonio" }));

	return (
		<HydrationBoundary state={dehydrate(queryClient)}>
			<Suspense fallback={<div>Loading...</div>}>
				<Client />
			</Suspense>
		</HydrationBoundary>
	);
};

export default Home;
