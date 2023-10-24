import { SetupNetworkResult } from "./setupNetwork";
import { Account,Call, Event, InvokeTransactionReceiptResponse, shortString } from 'starknet'
// import { EntityIndex, getComponentValue } from "@latticexyz/recs";
// @ts-ignore
import { getComponentValue } from "@latticexyz/recs";
// @ts-ignore
import { uuid } from "@latticexyz/utils";
import { ClientComponents } from "./createClientComponents";
// import { updatePositionWithDirection } from "../utils";
import { getEvents, setComponentsFromEvents } from "@dojoengine/utils";

export type SystemCalls = ReturnType<typeof createSystemCalls>;

export function createSystemCalls(
    { execute, contractComponents }: SetupNetworkResult,
    { Land }: ClientComponents
) {

    const register_land = async (signer: Account, land_name: string, chain_id: number) => {
        try {

            //   const calls: Call[] = [
            //     {
            //       contractAddress: import.meta.env.VITE_PUBLIC_LANDSYSTEMS_ADDRESS,
            //       entrypoint: 'register_land',
            //       calldata: [import.meta.env.VITE_PUBLIC_WORLD_ADDRESS, land_name, chain_id, height, width],
            //     },
            //   ];
            // const tx = await execute(signer, "land_systems", "register_land",[import.meta.env.VITE_PUBLIC_WORLD_ADDRESS,land_name, chain_id] );
            const tx = await execute(signer, "land_systems", "register_land",[land_name, chain_id] );
            console.log('waiting for tx');

            const receipt = (await signer.waitForTransaction(tx.transaction_hash, {
            retryInterval: 100,
            })) as InvokeTransactionReceiptResponse;

            const events = receipt.events;
    
        //   if (events) {
        //     const eventsTransformed = await setComponentsFromEvents(contractComponents, events);
        //     await executeEvents(eventsTransformed);
        //   }
        } catch (e) {
          console.log(e);
        } finally {
          console.log('');
        }
      };

    return {
        register_land,
    };
}
