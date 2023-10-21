use starknet::ContractAddress;

#[derive(Model, Copy, Drop, Serde)]
struct Condition {
    #[key]
    land_id: u8,
    #[key]
    pixel_id: u16,
    pixel_nature: u8,
    pixel_address: ContractAddress,
}

// #[generate_trait]
// impl ConditionImpl of ConditionTrait {
//     fn classify_pixel_nature(r: u8, g: u8, b: u8, a: u8) -> PixelNature {
//         if r == RoadColor::r && g == RoadColor::g && b == RoadColor::b && a == RoadColor::a {
//             PixelNature::Road
//         } else {
//             PixelNature::Object
//         }
//     }
// }