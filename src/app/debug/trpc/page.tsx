import { trpc, HydrateClient } from "@/trpc/server";
import { ClientGreeting } from "./client-greeting";
export default async function Home() {
  void trpc.hello.prefetch({ text: "fish" });
  return (
    <HydrateClient>
      {/** ... */}
      <ClientGreeting />
    </HydrateClient>
  );
}
