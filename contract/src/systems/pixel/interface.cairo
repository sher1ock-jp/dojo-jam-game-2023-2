use dojo::world::IWorldDispatcher;
use starknet::ContractAddress;

#[starknet::interface]
trait PixelInterface<TContractState> {
    fn set_object_pixel(
        self: @TContractState,
        world: IWorldDispatcher, 
        land_id: u8,
        pixel_id: u16,
        pixel_connected_land_id: u8,
        pixel_connected_pixel_id: u16,
        pixel_explanation: felt252,
        pixel_address: ContractAddress,
        r: u8,
        g: u8,
        b: u8,
        a: u8,
    );

    fn set_road_pixel(
        self: @TContractState,
        world: IWorldDispatcher, 
        land_id: u8,
        pixel_id: u16,
        pixel_address: ContractAddress,
    );

    fn change_pixel_color(
        self: @TContractState,
        world: IWorldDispatcher, 
        land_id: u8,
        pixel_id: u16,
        r: u8,
        g: u8,
        b: u8,
        a: u8,
    );

    fn change_pixel_nature_to_road(
        self: @TContractState,
        world: IWorldDispatcher, 
        land_id: u8,
        pixel_id: u16,
    );

    fn change_pixel_nature_to_object(
        self: @TContractState,
        world: IWorldDispatcher, 
        land_id: u8,
        pixel_id: u16,
        pixel_explanation: felt252,
        pixel_address: ContractAddress,
        pixel_connected_land_id: u8,
        pixel_connected_pixel_id: u16,
        r: u8,
        g: u8,
        b: u8,
        a: u8,
    );

    fn change_pixel_contract(
            self: @TContractState,
            world: IWorldDispatcher, 
            land_id: u8,
            pixel_id: u16,
            pixel_address: ContractAddress,
    );

    fn change_pixel_connection(
        self: @TContractState,
        world: IWorldDispatcher, 
        land_id: u8,
        pixel_id: u16,
        pixel_connected_land_id: u8,
        pixel_connected_pixel_id: u16,
    );
}