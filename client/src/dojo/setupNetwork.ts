import { defineContractComponents } from "./contractComponents";
import { world } from "./world";
import { RPCProvider, Query, getContractByName, getAllSystemNames } from "@dojoengine/core";
import { Account, AllowArray, Call, num } from 'starknet';
import { GraphQLClient } from 'graphql-request';
import { getSdk } from '../generated/graphql';
import manifest from '../../../contract/target/dev/manifest.json'

export type SetupNetworkResult = Awaited<ReturnType<typeof setupNetwork>>;

export async function setupNetwork() {
    // Extract environment variables for better readability.
    const { VITE_PUBLIC_WORLD_ADDRESS, VITE_PUBLIC_NODE_URL, VITE_PUBLIC_TORII } = import.meta.env;

    // Create a new RPCProvider instance.
    const provider = new RPCProvider(VITE_PUBLIC_WORLD_ADDRESS, manifest, VITE_PUBLIC_NODE_URL);
    console.log(provider);
    console.log(manifest);
    console.log("getContractByName",getContractByName(manifest,"land_systems"));

    // Return the setup object.
    return {
        provider,
        world,

        // Define contract components for the world.
        contractComponents: defineContractComponents(world),

        // Define the graph SDK instance.
        graphSdk: () => getSdk(new GraphQLClient(VITE_PUBLIC_TORII)),

        // Execute function.
        execute: async (signer: Account, contract: string, system: string, call_data: num.BigNumberish[]) => {
            return provider.execute(signer, contract, system, call_data);
        },

        // // Execute function.
        // execute: async (signer: Account, calls: AllowArray<Call>) => {
        //     const formattedCalls = Array.isArray(calls) ? calls : [calls];
        //     return provider.executeMulti(signer, formattedCalls);
        // },

        // Entity query function.
        entity: async (component: string, query: Query) => {
            return provider.entity(component, query);
        },

        // Entities query function.
        entities: async (component: string, partition: number) => {
            return provider.entities(component, partition);
        }
    };
}