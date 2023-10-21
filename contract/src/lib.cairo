mod constants;

mod models {
    mod authorization;
    mod color;
    mod connection;
    mod address;
    // mod nature;
    mod condition;
    mod land;
    mod player;
}

mod systems {
    mod land;
    mod pixel;
    mod address;
    mod player;
}

#[cfg(test)]
mod tests {
    mod test_set_contract;
}