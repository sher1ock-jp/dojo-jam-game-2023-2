use starknet::ContractAddress;

#[starknet::interface]
trait PixelAddressInterface<TContractState> {
    fn set_pixel_address(
        self: @TContractState,
        pixel_address: ContractAddress,
        pixel_explanation: felt252,
    );

    fn change_pixel_address_explanation(
        self: @TContractState,
        pixel_address: ContractAddress,
        pixel_explanation: felt252,
    );
}