use starknet::ContractAddress;

#[derive(Model, Copy, Drop, Serde)]
struct PixelAddress {
    #[key]
    pixel_address: ContractAddress,
    pixel_explanation: felt252,
}