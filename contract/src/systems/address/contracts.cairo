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