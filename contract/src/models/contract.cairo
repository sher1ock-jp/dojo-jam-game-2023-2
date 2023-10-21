use starknet::ContractAddress;

#[derive(Model, Copy, Drop, Serde)]
struct Contract {
    #[key]
    pixel_address: ContractAddress,
    pixel_explanation: felt252,
}