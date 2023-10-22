use dojo::world::IWorld;

#[dojo::contract]
mod pixel_systems{
    
    use starknet::ContractAddress;
    use dojo::world::IWorld;
    use traits::{Into, TryInto};
    use option::OptionTrait;
    use array::{ArrayTrait, SpanTrait};
    // use array::ArrayTrait;
    use dojogamejam2023::systems::pixel::interface::{PixelInterface};
    use dojogamejam2023::models::authorization::{Authorization};
    use dojogamejam2023::models::color::{Color};
    use dojogamejam2023::models::condition::{Condition};
    use dojogamejam2023::models::connection::{Connection};
    use dojogamejam2023::constants::{PixelNature,RoadColor};

    #[external(v0)]
    impl PixelImpl of PixelInterface<ContractState> {
        fn set_object_pixel(
            self: @ContractState,
            land_id: u8,
            pixel_id: u16,
            pixel_connected_land_id: u8,
            pixel_connected_pixel_id: u16,
            pixel_explanation: felt252,
            pixel_address: ContractAddress,
            r: u8,
            g: u8,
            b: u8,
            a: u8,
        ){
            let world = self.world_dispatcher.read();
            set!(world,(
                Authorization{
                    land_id: land_id,
                    pixel_id: pixel_id,
                    creator_address: starknet::get_caller_address(),
                },
                Color{
                    land_id: land_id,
                    pixel_id: pixel_id,
                    r: r,
                    g: g,
                    b: b,
                    a: a,
                },
                Condition{
                    land_id: land_id,
                    pixel_id: pixel_id,
                    pixel_nature: PixelNature::Object,
                    pixel_address: pixel_address,
                },
                Connection{
                    land_id: land_id,
                    pixel_id: pixel_id,
                    pixel_connected_land_id: pixel_connected_land_id,
                    pixel_connected_pixel_id: pixel_connected_pixel_id,
                },
            ));
        }

        fn set_road_pixel(
            self: @ContractState,
            land_id: u8,
            pixel_id: u16,
            pixel_address: ContractAddress,
        ){
            let world = self.world_dispatcher.read();
            set!(world,(
                Authorization{
                    land_id: land_id,
                    pixel_id: pixel_id,
                    creator_address: starknet::get_caller_address(),
                },
                Color{
                    land_id: land_id,
                    pixel_id: pixel_id,
                    r: RoadColor::r,
                    g: RoadColor::g,
                    b: RoadColor::b,
                    a: RoadColor::a,
                },
                Condition{
                    land_id: land_id,
                    pixel_id: pixel_id,
                    pixel_nature: PixelNature::Road,
                    pixel_address: pixel_address, // if defalt value isn't set automatically, set it manually
                },
            ));
        }
        
        // not check authorization only for change color
        fn change_pixel_color(
            self: @ContractState,
            land_id: u8,
            pixel_id: u16,
            r: u8,
            g: u8,
            b: u8,
            a: u8,
        ){
            let world = self.world_dispatcher.read();
            let mut pixel = get!(world,(land_id,pixel_id),Condition);
            assert(pixel.pixel_nature == PixelNature::Object, 'no');

            set!(world,(
                Color{
                    land_id: land_id,
                    pixel_id: pixel_id,
                    r: r,
                    g: g,
                    b: b,
                    a: a,
                },
            ));
        }

        // hide explanation and address in frontend side
        fn change_pixel_nature_to_road(
            self: @ContractState,
            land_id: u8,
            pixel_id: u16,
        ){
            let world = self.world_dispatcher.read();
            let mut authorization = get!(world,(land_id,pixel_id),Authorization);
            assert(authorization.creator_address == starknet::get_caller_address(), 'no');

            let mut delete_land_id: felt252 = land_id.into();
            let mut delete_pixel_id: felt252 = pixel_id.into();

            let args: Span<felt252> = array![
                delete_land_id,
                delete_pixel_id
            ].span();

            world.delete_entity('Authorization', args);
            world.delete_entity('Connection', args);

            // pixel_address in Condition can't be deleted

            let mut condition = get!(world,(land_id,pixel_id),Condition);

            set!(world,(
                Color{
                    land_id: land_id,
                    pixel_id: pixel_id,
                    r: RoadColor::r,
                    g: RoadColor::g,
                    b: RoadColor::b,
                    a: RoadColor::a,
                },
                Condition{
                    land_id: land_id,
                    pixel_id: pixel_id,
                    pixel_nature: PixelNature::Road,
                    pixel_address: condition.pixel_address,
                },
            ));
        }

        fn change_pixel_nature_to_object(
            self: @ContractState,
            land_id: u8,
            pixel_id: u16,
            pixel_explanation: felt252,
            pixel_address: ContractAddress,
            pixel_connected_land_id: u8,
            pixel_connected_pixel_id: u16,
            r: u8,
            g: u8,
            b: u8,
            a: u8,
        ){
            let world = self.world_dispatcher.read();
            set!(world,(
                Authorization{
                    land_id: land_id,
                    pixel_id: pixel_id,
                    creator_address: starknet::get_caller_address(),
                },
                Color{
                    land_id: land_id,
                    pixel_id: pixel_id,
                    r: r,
                    g: g,
                    b: b,
                    a: a,
                },
                Condition{
                    land_id: land_id,
                    pixel_id: pixel_id,
                    pixel_nature: PixelNature::Object,
                    pixel_address: pixel_address,
                },
                Connection{
                    land_id: land_id,
                    pixel_id: pixel_id,
                    pixel_connected_land_id: pixel_connected_land_id,
                    pixel_connected_pixel_id: pixel_connected_pixel_id,
                },
            ));
        }

        fn change_pixel_contract(
            self: @ContractState,
            land_id: u8,
            pixel_id: u16,
            pixel_address: ContractAddress,
        ){
            let world = self.world_dispatcher.read();
            let mut pixel_condition = get!(world,(land_id,pixel_id),Condition);
            assert(pixel_condition.pixel_nature == PixelNature::Object, 'no');

            set!(world,(
                Condition{
                    land_id: land_id,
                    pixel_id: pixel_id,
                    pixel_nature: pixel_condition.pixel_nature,
                    pixel_address: pixel_address,
                },
            ));
        }

        fn change_pixel_connection(
            self: @ContractState,
            land_id: u8,
            pixel_id: u16,
            pixel_connected_land_id: u8,
            pixel_connected_pixel_id: u16,
        ){
            let world = self.world_dispatcher.read();
            let mut pixel_condition = get!(world,(land_id,pixel_id),Condition);
            assert(pixel_condition.pixel_nature == PixelNature::Object, 'no');

            set!(world,(
                Connection{
                    land_id: land_id,
                    pixel_id: pixel_id,
                    pixel_connected_land_id: pixel_connected_land_id,
                    pixel_connected_pixel_id: pixel_connected_pixel_id,
                },
            ));
        }

    }
}

#[cfg(test)]
mod tests {
    use starknet::class_hash::Felt252TryIntoClassHash;

    use dojo::world::{IWorldDispatcher, IWorldDispatcherTrait};

    use dojo::test_utils::{spawn_test_world, deploy_contract};

    use dojogamejam2023::models::authorization::{authorization, Authorization};
    use dojogamejam2023::models::color::{color, Color};
    use dojogamejam2023::models::condition::{condition, Condition};
    use dojogamejam2023::models::connection::{connection, Connection};

    use dojogamejam2023::systems::pixel::interface::{
        PixelInterfaceDispatcher,
        PixelInterfaceDispatcherTrait
    };

    use debug::{PrintTrait,U8PrintImpl};

    use dojogamejam2023::systems::pixel::contracts::pixel_systems;

    use starknet::ContractAddress;
    use starknet::contract_address_const;

    #[test]
    #[available_gas(30000000)]
    fn test_move() {
        let contract = starknet::contract_address_const::<0x0>();

        // models
        let mut models = array![authorization::TEST_CLASS_HASH, color::TEST_CLASS_HASH, condition::TEST_CLASS_HASH, connection::TEST_CLASS_HASH];
        // deploy world with models
        let world = spawn_test_world(models);

        // deploy systems contract
        let contract_address = world
            .deploy_contract('salt', pixel_systems::TEST_CLASS_HASH.try_into().unwrap());
        let pixel_system = PixelInterfaceDispatcher { contract_address };

        let land_name: felt252 = 12345;
        let chain_id: u8 = 1;
        let height: u8 = 50;
        let width: u8 = 50;
        let land_id: u8 = 100;
        let pixel_id: u16 =1;
        let pixel_connected_land_id: u8 = 2;
        let pixel_connected_pixel_id: u16 = 1;
        let pixel_explanation: felt252 = 12345;
        let pixel_address: ContractAddress = contract;
        let r: u8 = 1;
        let g: u8 = 1;
        let b: u8 = 1;
        let a: u8 = 1;

        // System calls
        pixel_system.set_object_pixel(
            land_id,
            pixel_id,
            pixel_connected_land_id,
            pixel_connected_pixel_id,
            pixel_explanation,
            pixel_address,
            r,
            g,
            b,
            a,
        );

        let mut pixel = get!(world,(land_id, pixel_id), Authorization);

        assert(pixel.land_id == land_id, 'error');
        assert(pixel.pixel_id == pixel_id, 'error');

        pixel_system.change_pixel_nature_to_road(
            land_id,
            pixel_id,
        );

        let mut pixel2 = get!(world,(land_id, pixel_id), Authorization);
        U8PrintImpl::print(pixel2.land_id);
        assert(pixel2.land_id == land_id, 'error');

    }
}