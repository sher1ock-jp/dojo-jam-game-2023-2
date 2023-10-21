#[starknet::interface]
trait PlayerInterface<TContractState> {
    fn set_player(
        self: @TContractState,
        player_name: felt252,
    );

    fn move_player(
        self: @TContractState,
        player_land_position: u8,
        player_pixel_position: u16,
    );
}