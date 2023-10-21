use starknet::ContractAddress;

#[derive(Model, Copy, Drop, Serde)]
struct Authorization {
    #[key]
    land_id: u8,
    #[key]
    pixel_id: u16,
    creator_address: ContractAddress, // if user change name, creator_address is identical
}

// #[generate_trait]
// impl AuthorizationImpl of AuthorizationTrait {

//     fn check_authorization(land_id: u8, pixel_id: u8) -> bool {
//         let caller_address = get_caller_address(); 
//         let authorization = get!(world,(land_id,pixel_id),Authorization);
//         if caller_address == authorization.creator_address {
//             true; 
//         }
//         false 
//     }

//     if set authorization using surrounding pixels, enable this code
//         get_neighbors(pixel_id);
//         is_exist_neighbors(world,land_id, neighbors_ids);

//     fn get_neighbors(pixel_id: u8) -> Span<u8> {
//         let mut neighbor_ids = ArrayTrait::<u8>::new();

//         if pixel_id >= GRID_SIZE {
//             neighbor_ids.append(pixel_id - GRID_SIZE);
//         }

//         if pixel_id < GRID_SIZE * (GRID_SIZE - 1) {
//             neighbor_ids.append(pixel_id + GRID_SIZE);
//         }

//         if pixel_id % GRID_SIZE != 0 {
//             neighbor_ids.append(pixel_id - 1);
//         }

//         if (pixel_id + 1) % GRID_SIZE != 0 {
//             neighbor_ids.append(pixel_id + 1);
//         }
//         neighbor_ids.span()
//     }

//     fn is_exist_neighbors(world: IWorldDispatcher,land_id: u8, neighbors_ids: Span<u8>) -> bool {
//         let caller_address = get_caller_address(); 

//         let mut i: usize = 0;
//         loop {
//             if i >= neighbors_ids.len() {
//                 break; // If we've checked all neighbors
//             }

//             let neighbor_pixel_id = neighbors_ids.at(i);
//             let player_authorization =  get!(world,(land_id,neighbor_pixel_id),Authorization);
            
//             if caller_address == player_authorization.creator_address {
//                 true; 
//             }
//             i += 1;
//         };
//         false 
//     }
// }
//