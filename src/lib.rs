use serde_json::Value;
use serde_json_path::JsonPath;
use wasm_bindgen::prelude::*;

#[wasm_bindgen]
pub fn parse(obj: JsValue, path: String) -> JsValue {
    let parsed = serde_wasm_bindgen::from_value(obj).unwrap();
    // let json_value: Value = serde_json::from_str(obj).expect("Invalid JSON string");
    let path = JsonPath::parse(path.as_str()).unwrap();
    let search_result = path.query(&parsed);

    // Create Vector for the search result
    let mut array = Vec::new();
    for value in search_result {
        let c = value.clone();
        if c != Value::Null {
        array.push(value.clone());
        }
    }

    let wasm_result = serde_wasm_bindgen::to_value(&array).unwrap();
    wasm_result
}