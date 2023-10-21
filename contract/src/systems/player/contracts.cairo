#[dojo::contract]
mod player_systems{

    use dojogamejam2023::models::player::{Player};
    use dojogamejam2023::systems::player::interface::{PlayerInterface};
    use dojogamejam2023::constants::{InitialPosition};

    #[external(v0)]
    impl PlayerImpl of PlayerInterface<ContractState> {
        fn set_player(
            self: @ContractState,
            world: IWorldDispatcher, 
            player_name: felt252,
        ){
            set!(world,(
                Player{
                    player_address: starknet::get_caller_address(),
                    player_name: player_name,
                    player_land_position: InitialPosition::player_land_position,
                    player_pixel_position: InitialPosition::player_pixel_position,
                }
            ));
        }

        fn move_player(
            self: @ContractState,
            world: IWorldDispatcher, 
            player_land_position: u8,
            player_pixel_position: u16,
        ){

            let mut player = get!(world, starknet::get_caller_address(), Player);

            set!(world,(
                Player{
                    player_address: starknet::get_caller_address(),
                    player_name: player.player_name,
                    player_land_position: player_land_position,
                    player_pixel_position: player_pixel_position,
                }
            ));
        }
    }
}