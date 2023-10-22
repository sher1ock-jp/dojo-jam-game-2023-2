#!/bin/bash
set -euo pipefail
pushd $(dirname "$0")/..

# export RPC_URL="http://localhost:5050";
export WORLD_ADDRESS="0x7bfc4dc34e5e8a3c7c29604134dbf6e0e9f133aa6431d1aa69d5f08164e67b6";
# export PLAYER_ADDRESS="0x051F533167D366AeE5AEbF95B85d8cd5a5A4Ef4A";
# export ADDRESS="0x051F533167D366AeE5AEbF95B85d8cd5a5A4Ef4A";

# Read the System to Components JSON file
models_json=$(cat ./scripts/system_models.json)
contract_address_json=$(cat ./scripts/contract_address.json)

models_json=$(cat ./scripts/system_models.json)
contract_address_json=$(cat ./scripts/contract_address.json)

# Loop through each system
for system in $(echo $models_json | jq -r 'keys[]'); do
    # Loop through each component that the system writes to
    for model in $(echo $models_json | jq -r ".$system[]"); do
        contract_address=$(echo "$contract_address_json" | jq -r ".$system[0]")
        # make the system a writer of the component
        commands+=("sozo auth writer --world "$WORLD_ADDRESS" $model $contract_address")
    done
done


echo "Default authorizations have been successfully set."