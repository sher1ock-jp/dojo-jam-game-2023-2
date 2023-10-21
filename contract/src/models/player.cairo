use starknet::ContractAddress;

#[derive(Model, Copy, Drop, Serde)]
struct Player {
    #[key]
    player_address: ContractAddress,
    player_name: felt252,
    player_land_position: u8,
    player_pixel_position: u16,
}