use serde::Serialize;
use serde_json::Value;
use serde_json_path::JsonPath;
use wasm_bindgen::prelude::*;


pub fn to_value<T: Serialize + ?Sized>(value: &T, serializer: &serde_wasm_bindgen::Serializer) -> Result<JsValue, serde_wasm_bindgen::Error> {
    value.serialize(serializer)
}


#[wasm_bindgen]
pub fn parse(obj: JsValue, path: String) -> Vec<JsValue> {

    // Parsing JsValue JSON to Serde Value
    let parsed = serde_wasm_bindgen::from_value(obj).unwrap();
    // Parsing the path to JsonPath
    let path = JsonPath::parse(path.as_str()).unwrap();
    // Searching the path in the JSON
    let search_result = path.query(&parsed);

    let serializer: serde_wasm_bindgen::Serializer = serde_wasm_bindgen::Serializer::json_compatible();

    // Create Vector for the search result
    let mut array = Vec::new();
    // Iterate over the search result and push the values to the vector
    for value in search_result {
        // Clone the value to avoid moving it
        let c = value.clone();
        // Check if the value is not null
        if c != Value::Null {
            // Serialize the value to JsValue - Using custom JSON Compatible serializer
            let parsed = to_value(&c, &serializer).unwrap();
            // Push the JsValue to the vector
            array.push(parsed);
        }
    }
    // Return array
    array
}