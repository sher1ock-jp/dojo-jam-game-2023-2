use dojogamejam2023::models::contract::Contract;
use dojogamejam2023::systems::contract::interface::{
    ContractInterfaceDispatcher,
    ContractInterfaceDispatcherTrait
};
use dojogamejam2023::systems::contract::contracts::contract_systems;
use dojogamejam2023::utils::testing::{spawn_dojogamejam, deploy_system};

use dojo::world::{ IWorldDispatcher, IWorldDispatcherTrait};
use starknet::contract_address_const;
use starknet::ContractAddress;

use traits::{Into, TryInto};
use option::OptionTrait;
use array::{ArrayTrait, SpanTrait};

use debug::PrintTrait;

#[test]
#[available_gas(3000000000000)]
fn test_set_contract() {
    1.print();
    let world = spawn_dojogamejam();

    let contract_systems_address 
        = deploy_system(contract_systems::TEST_CLASS_HASH);

    let contract_systems_dispatcher = ContractInterfaceDispatcher {
        contract_address: contract_systems_address
    };

    starknet::testing::set_contract_address(world.executor());

    let mut pixel_address: ContractAddress = contract_address_const::<'condition'>();
    let mut pixel_explanation: felt252 = 12345;

    contract_systems_dispatcher.set_contract(
        world,
        pixel_address: pixel_address,
        pixel_explanation: pixel_explanation,
    );

    let contract = get!(world, pixel_address, Contract);

    assert(contract.pixel_address == pixel_address, 'pixel_address is not set');
    assert(contract.pixel_explanation == pixel_explanation, 'pixel_explanation is not set');
}