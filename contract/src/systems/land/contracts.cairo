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
            land_name: felt252,
            chain_id: u8,
            height: u8,
            width: u8,
        ){
            let world = self.world_dispatcher.read();
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

#[cfg(test)]
mod tests {
    use starknet::class_hash::Felt252TryIntoClassHash;

    use dojo::world::{IWorldDispatcher, IWorldDispatcherTrait};

    use dojo::test_utils::{spawn_test_world, deploy_contract};

    use dojogamejam2023::models::land::{land,Land};
    use dojogamejam2023::systems::land::interface::{
        LandInterfaceDispatcher,
        LandInterfaceDispatcherTrait
    };
    use dojogamejam2023::systems::land::contracts::land_systems;
    use starknet::ContractAddress;
    use starknet::contract_address_const;

    #[test]
    #[available_gas(30000000)]
    fn test_move() {
        let contract = starknet::contract_address_const::<0x0>();

        // models
        let mut models = array![land::TEST_CLASS_HASH];
        // deploy world with models
        let world = spawn_test_world(models);

        // deploy systems contract
        let contract_address = world
            .deploy_contract('salt', land_systems::TEST_CLASS_HASH.try_into().unwrap());
        let land_system = LandInterfaceDispatcher { contract_address };

        let land_name: felt252 = 12345;
        let chain_id: u8 = 1;
        let height: u8 = 50;
        let width: u8 = 50;

        // System calls
        land_system.register_land(land_name, chain_id, height, width);

        let land = get!(world,(land_name,chain_id), Land);

        assert(land.land_name == land_name, 'land_name is not set');
        assert(land.chain_id == chain_id, 'chain_id is not set');
    }
}