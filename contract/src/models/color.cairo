#[derive(Model, Copy, Drop, Serde)]
struct Color {
    #[key]
    land_id: u8,
    #[key]
    pixel_id: u16,
    r: u8,
    g: u8,
    b: u8,
    a: u8,
}