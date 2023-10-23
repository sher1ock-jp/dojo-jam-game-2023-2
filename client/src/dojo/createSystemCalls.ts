import { SetupNetworkResult } from "./setupNetwork";
import { Account } from "starknet";
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

    const register_land = async (signer: Account, land_name: string, chain_id: number, land_id: number, height: number, width: number ) => {

        // const entityId = signer.address.toString() as EntityIndex;
        const entityId = signer.address.toString() as any;

        const landId = uuid();
        Land.addOverride(landId, {
            entity: entityId,
            value: { land_name: land_name, chain_id: chain_id, land_id: land_id, height: height, width: width },
        });

        try {
            const tx = await execute(signer, "land_systems", 'register_land', [land_name, chain_id, land_id, height, width]);
            setComponentsFromEvents(contractComponents,
                getEvents(
                    await signer.waitForTransaction(tx.transaction_hash,
                        { retryInterval: 100 }
                    )
                )
            );

        } catch (e) {
            console.log(e)
            Land.removeOverride(landId);
        } finally {
            Land.removeOverride(landId);
        }
    };

    // const move = async (signer: Account, direction: Direction) => {
    //     const entityId = signer.address.toString() as any;

    //     const positionId = uuid();
    //     Position.addOverride(positionId, {
    //         entity: entityId,
    //         value: updatePositionWithDirection(direction, getComponentValue(Position, entityId)),
    //     });

    //     const movesId = uuid();
    //     Moves.addOverride(movesId, {
    //         entity: entityId,
    //         value: { remaining: (getComponentValue(Moves, entityId)?.remaining || 0) - 1 },
    //     });

    //     try {
    //         const tx = await execute(signer, "actions", "move", [direction]);
    //         setComponentsFromEvents(contractComponents,
    //             getEvents(
    //                 await signer.waitForTransaction(tx.transaction_hash,
    //                     { retryInterval: 100 }
    //                 )
    //             )
    //         );

    //     } catch (e) {
    //         console.log(e)
    //         Position.removeOverride(positionId);
    //         Moves.removeOverride(movesId);
    //     } finally {
    //         Position.removeOverride(positionId);
    //         Moves.removeOverride(movesId);
    //     }

    // };

    return {
        register_land,
    };
}

// export enum Direction {
//     Left = 1,
//     Right = 2,
//     Up = 3,
//     Down = 4,
// }
