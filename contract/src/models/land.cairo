#[derive(Model, Copy, Drop, Serde)]
struct Land {
    #[key]
    land_name: felt252,
    #[key]
    chain_id: u8,
    land_id: u8, // to distinguish land of the same chain
    height: u8,
    width: u8,
}