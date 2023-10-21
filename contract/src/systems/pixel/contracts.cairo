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
            world: IWorldDispatcher, 
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

            return();

        }

        fn set_road_pixel(
            self: @ContractState,
            world: IWorldDispatcher, 
            land_id: u8,
            pixel_id: u16,
            pixel_address: ContractAddress,
        ){

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

            return();

        }
        
        // not check authorization only for change color
        fn change_pixel_color(
            self: @ContractState,
            world: IWorldDispatcher, 
            land_id: u8,
            pixel_id: u16,
            r: u8,
            g: u8,
            b: u8,
            a: u8,
        ){

            let mut pixel = get!(world,(land_id,pixel_id),Condition);
            assert(pixel.pixel_nature == PixelNature::Object, "you can't change road color");

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

            return();

        }

        // hide explanation and address in frontend side
        fn change_pixel_nature_to_road(
            self: @ContractState,
            world: IWorldDispatcher, 
            land_id: u8,
            pixel_id: u16,
        ){

            let mut authorization = get!(world,(land_id,pixel_id),Authorization);
            assert(authorization.creator_address == starknet::get_caller_address(), "you can't change pixel nature to road");

            let mut delete_land_id: felt252 = land_id.into();
            let mut delete_pixel_id: felt252 = pixel_id.into();

            let args: Span<felt252> = array![
                delete_land_id,
                delete_pixel_id
            ].span();

            world.delete_entity("Authorization", args);
            world.delete_entity("Connection", args);
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

            return();

        }

        fn change_pixel_nature_to_object(
            self: @ContractState,
            world: IWorldDispatcher, 
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

            return();
        }

        fn change_pixel_contract(
            self: @ContractState,
            world: IWorldDispatcher,
            land_id: u8,
            pixel_id: u16,
            pixel_address: ContractAddress,
        ){

            let mut pixel_condition = get!(world,(land_id,pixel_id),Condition);
            assert(pixel_condition.pixel_nature == PixelNature::Object, "you can't change contract of road");

            set!(world,(
                Condition{
                    land_id: land_id,
                    pixel_id: pixel_id,
                    pixel_nature: pixel_condition.pixel_nature,
                    pixel_address: pixel_address,
                },
            ));
            return();
        }

        fn change_pixel_connection(
            self: @ContractState,
            world: IWorldDispatcher,
            land_id: u8,
            pixel_id: u16,
            pixel_connected_land_id: u8,
            pixel_connected_pixel_id: u16,
        ){

            let mut pixel_condition = get!(world,(land_id,pixel_id),Condition);
            assert(pixel_condition.pixel_nature == PixelNature::Object, "you can't change connection of road");

            set!(world,(
                Connection{
                    land_id: land_id,
                    pixel_id: pixel_id,
                    pixel_connected_land_id: pixel_connected_land_id,
                    pixel_connected_pixel_id: pixel_connected_pixel_id,
                },
            ));
            return();
        }

    }
}