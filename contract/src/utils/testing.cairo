use dojogamejam2023::models::authorization::{authorization, Authorization};
use dojogamejam2023::models::color::{color,Color};
use dojogamejam2023::models::condition::{condition,Condition};
use dojogamejam2023::models::connection::{connection,Connection};
use dojogamejam2023::models::contract::{contract,Contract};
use dojogamejam2023::models::land::{land,Land};
use dojogamejam2023::models::player::{player,Player};

use dojo::world::{IWorldDispatcher, IWorldDispatcherTrait};
use dojo::test_utils::spawn_test_world;

use debug::PrintTrait;

use starknet::{
    syscalls::deploy_syscall,ClassHash, ContractAddress
};

fn spawn_dojogamejam() -> IWorldDispatcher {

    1.print();

    let mut models = array![
        authorization::TEST_CLASS_HASH,
        color::TEST_CLASS_HASH,
        condition::TEST_CLASS_HASH,
        connection::TEST_CLASS_HASH,
        contract::TEST_CLASS_HASH,
        land::TEST_CLASS_HASH,
        player::TEST_CLASS_HASH,
    ];

    spawn_test_world(models)

}

fn deploy_system(class_hash_felt: felt252) -> ContractAddress {
    let (system_contract_address, _) = deploy_syscall(
        class_hash_felt.try_into().unwrap(), 0, array![].span(), false
    ).unwrap();

    system_contract_address
}
