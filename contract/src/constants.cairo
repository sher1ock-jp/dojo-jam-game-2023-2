// #[derive(Model, Copy, Drop, Serde, SchemaIntrospection)]
// enum EntityType {
//     Player,
//     Island,
// }

mod LandSize {
    const width: u8 = 50;
    const height: u8 = 50;
}

mod RoadColor {
    const r: u8 = 139;
    const g: u8 = 69;
    const b: u8 = 19;
    const a: u8 = 1;
}

mod InitialPosition {
    const player_land_position:u8 = 1;
    const player_pixel_position:u16 = 1255;
}

mod PixelNature {
    const Road: u8 = 1;
    const Object: u8 = 2;
}