

#[dojo::contract]
mod contract_systems{

    use starknet::ContractAddress;
    use dojogamejam2023::models::contract::{Contract};
    use dojogamejam2023::systems::contract::interface::{ContractInterface};

    #[external(v0)]
    impl ContractImpl of ContractInterface<ContractState>{
        fn set_contract(
            self: @ContractState,
            world: IWorldDispatcher,
            pixel_address: ContractAddress,
            pixel_explanation: felt252,
        ){
            set!(world,(
                    Contract{
                        pixel_address: pixel_address,
                        pixel_explanation: pixel_explanation,
                    }
                )
            );
        }

        fn change_contract_explanation(
            self: @ContractState,
            world: IWorldDispatcher, 
            pixel_address: ContractAddress,
            pixel_explanation: felt252,
        ){
            set!(world,(
                    Contract{
                        pixel_address: pixel_address,
                        pixel_explanation: pixel_explanation,
                    }
                )
            );
        }
    }
}