#[starknet::interface]
// with land_id, use uuid in contracts
trait LandInterface<TContractState>{
    fn register_land(
        self: @TContractState,
        land_name: felt252,
        chain_id: u8, 
        height: u8,
        width: u8,
    );
}