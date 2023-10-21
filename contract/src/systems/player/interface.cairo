use dojo::world::IWorldDispatcher;

#[starknet::interface]
trait PlayerInterface<TContractState> {
    fn set_player(
        self: @TContractState,
        world: IWorldDispatcher,
        player_name: felt252,
    );

    fn move_player(
        self: @TContractState,
        world: IWorldDispatcher,
        player_land_position: u8,
        player_pixel_position: u16,
    );
}