import { overridableComponent } from "@latticexyz/recs";
import { SetupNetworkResult } from "./setupNetwork";


export type ClientComponents = ReturnType<typeof createClientComponents>;

export function createClientComponents({ contractComponents }: SetupNetworkResult) {
    return {
        ...contractComponents,
        PixelAddress: overridableComponent(contractComponents.PixelAddress),
        Color: overridableComponent(contractComponents.Color),
        Connection: overridableComponent(contractComponents.Connection),
        Condition: overridableComponent(contractComponents.Condition),
        Land: overridableComponent(contractComponents.Land),
        Player: overridableComponent(contractComponents.Player),
    };
}