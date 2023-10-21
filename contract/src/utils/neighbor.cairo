// use array::ArrayTrait;
// use dojogamejam2023::constants::{LandSize};

// const GRID_SIZE: u8 = 50;

// // land_id doesn't need because all LandSize are same
// fn get_neighbors(pixel_id: u8) -> Span<u8> {
//     let mut neighbor_ids = ArrayTrait::<u8>::new();

//     if pixel_id >= GRID_SIZE {
//         neighbor_ids.append(pixel_id - GRID_SIZE);
//     }

//     if pixel_id < GRID_SIZE * (GRID_SIZE - 1) {
//         neighbor_ids.append(pixel_id + GRID_SIZE);
//     }

//     if pixel_id % GRID_SIZE != 0 {
//         neighbor_ids.append(pixel_id - 1);
//     }

//     if (pixel_id + 1) % GRID_SIZE != 0 {
//         neighbor_ids.append(pixel_id + 1);
//     }
//     neighbor_ids.span()
// }