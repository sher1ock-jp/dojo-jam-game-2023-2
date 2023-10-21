#[derive(Model, Copy, Drop, Serde)]
struct Connection {
    #[key]
    land_id: u8,
    #[key]
    pixel_id: u16,
    pixel_connected_land_id: u8,
    pixel_connected_pixel_id: u16,
}

// #[generate_trait]
// impl ConditionImpl of ConnectionTrait {
//     fn change_connected(
//         land_id: u8,
//         pixel_id: u8,
//         connected_land_id: u8,
//         connected_pixel_id: u8,
//     ) -> Connection {
//         Connection {
//             land_id,
//             pixel_id,
//             connected_land_id,
//             connected_pixel_id,
//         }
//     }
// }

