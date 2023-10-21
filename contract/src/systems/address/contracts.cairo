#[dojo::contract]
mod pixel_address_systems{

    use starknet::ContractAddress;
    use dojogamejam2023::models::address::{PixelAddress};
    use dojogamejam2023::systems::address::interface::{PixelAddressInterface};

    #[external(v0)]
    impl PixelAddressImpl of PixelAddressInterface<ContractState>{
        fn set_pixel_address(
            self: @ContractState,
            pixel_address: ContractAddress,
            pixel_explanation: felt252,
        ){
            let world = self.world_dispatcher.read();
            set!(world,(
                    PixelAddress{
                        pixel_address: pixel_address,
                        pixel_explanation: pixel_explanation,
                    }
                )
            );
        }

        fn change_pixel_address_explanation(
            self: @ContractState,
            pixel_address: ContractAddress,
            pixel_explanation: felt252,
        ){
            let world = self.world_dispatcher.read();
            set!(world,(
                    PixelAddress{
                        pixel_address: pixel_address,
                        pixel_explanation: pixel_explanation,
                    }
                )
            );
        }
    }
}

#[cfg(test)]
mod tests {
    use starknet::class_hash::Felt252TryIntoClassHash;

    use dojo::world::{IWorldDispatcher, IWorldDispatcherTrait};

    use dojo::test_utils::{spawn_test_world, deploy_contract};

    use dojogamejam2023::models::address::{pixel_address,PixelAddress};
    use dojogamejam2023::systems::address::interface::{
        PixelAddressInterfaceDispatcher,
        PixelAddressInterfaceDispatcherTrait
    };
    use dojogamejam2023::systems::address::contracts::pixel_address_systems;
    use starknet::ContractAddress;
    use starknet::contract_address_const;

    #[test]
    #[available_gas(30000000)]
    fn test_move() {
        let contract = starknet::contract_address_const::<0x0>();

        // models
        let mut models = array![pixel_address::TEST_CLASS_HASH];
        // deploy world with models
        let world = spawn_test_world(models);

        // deploy systems contract
        let contract_address = world
            .deploy_contract('salt', pixel_address_systems::TEST_CLASS_HASH.try_into().unwrap());
        let address_system = PixelAddressInterfaceDispatcher { contract_address };

        let mut pixel_address_args: ContractAddress = contract;
        let mut pixel_explanation: felt252 = 12345;

        // System calls
        address_system.set_pixel_address(pixel_address_args,pixel_explanation);

        let address = get!(world, pixel_address_args, PixelAddress);

        assert(address.pixel_address == pixel_address_args, 'pixel_address is not set');
        assert(address.pixel_explanation == pixel_explanation, 'pixel_explanation is not set');
    }
}