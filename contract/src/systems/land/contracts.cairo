#[dojo::contract]
mod land_systems{

    use dojogamejam2023::models::land::{Land};
    use dojogamejam2023::systems::land::interface::{LandInterface};
    use dojogamejam2023::constants::{LandSize};
    use traits::{Into, TryInto};

    #[external(v0)]
    impl LandImpl of LandInterface<ContractState>{
        fn register_land(
            self: @ContractState,
            world: IWorldDispatcher,
            land_name: felt252,
            chain_id: u8,
            height: u8,
            width: u8,
        ){
            let land_id = world.uuid().try_into().unwrap();
            set!(world,(
                Land{
                    land_name: land_name,
                    chain_id: chain_id,
                    land_id: land_id,
                    width: LandSize::width,
                    height: LandSize::height,
                }
            ));
        }
    }
}