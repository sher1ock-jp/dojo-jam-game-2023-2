mod constants;

mod models {
    mod authorization;
    mod color;
    mod connection;
    mod contract;
    // mod nature;
    mod condition;
    mod land;
    mod player;
}

mod systems {
    mod land;
    mod pixel;
    mod contract;
    mod player;
}

mod utils {
    mod neighbor;
    mod testing;
}

#[cfg(test)]
mod tests {
    mod test_set_contract;
}