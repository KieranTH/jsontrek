use serde_json::Value;
use serde_json_path::JsonPath;
use wasm_bindgen::prelude::*;

#[wasm_bindgen]
pub fn parse(obj: &str, path: String) -> String {
    let json_value: Value = serde_json::from_str(obj).expect("Invalid JSON string");
    let path = JsonPath::parse(path.as_str()).unwrap();
    let search_result = path.query(&json_value);

    // Create Vector for the search result
    let mut array = Vec::new();
    for value in search_result {
        let c = value.clone();
        if c != Value::Null {
        array.push(value.clone());
        }
    }
    let result = serde_json::to_string(&array).unwrap();
    result
}