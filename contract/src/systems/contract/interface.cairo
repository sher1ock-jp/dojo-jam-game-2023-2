use dojo::world::IWorldDispatcher;
use starknet::ContractAddress;

#[starknet::interface]
trait ContractInterface<TContractState> {
    fn set_contract(
        self: @TContractState,
        world: IWorldDispatcher, 
        pixel_address: ContractAddress,
        pixel_explanation: felt252,
    );

    fn change_contract_explanation(
        self: @TContractState,
        world: IWorldDispatcher, 
        pixel_address: ContractAddress,
        pixel_explanation: felt252,
    );
}