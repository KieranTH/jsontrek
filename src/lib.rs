use serde_json::Value;
use serde_json_path::JsonPath;
use wasm_bindgen::prelude::*;

// #[wasm_bindgen]
// extern "C" {
//     // Use `js_namespace` here to bind `console.log(..)` instead of just
//     // `log(..)`
//     #[wasm_bindgen(js_namespace = console)]
//     fn log(s: &str);

//     // The `console.log` is quite polymorphic, so we can bind it with multiple
//     // signatures. Note that we need to use `js_name` to ensure we always call
//     // `log` in JS.
//     #[wasm_bindgen(js_namespace = console, js_name = log)]
//     fn log_u32(a: u32);

//     // Multiple arguments too!
//     #[wasm_bindgen(js_namespace = console, js_name = log)]
//     fn log_many(a: &str, b: &str);
// }

// macro_rules! console_log {
//     // Note that this is using the `log` function imported above during
//     // `bare_bones`
//     ($($t:tt)*) => (log(&format_args!($($t)*).to_string()))
// }


#[wasm_bindgen]
pub fn parse(obj: JsValue, path: String) -> Vec<JsValue> {

    // Parsing JsValue JSON to Serde Value
    let parsed = serde_wasm_bindgen::from_value(obj).unwrap();
    // Parsing the path to JsonPath
    let path = JsonPath::parse(path.as_str()).unwrap();
    // Searching the path in the JSON
    let search_result = path.query(&parsed);

    // Create Vector for the search result
    let mut array = Vec::new();
    // Iterate over the search result and push the values to the vector
    for value in search_result {
        // Clone the value to avoid moving it
        let c = value.clone();
        // Check if the value is not null
        if c != Value::Null {
            // Serialize the value to JsValue
            let parsed = serde_wasm_bindgen::to_value(&c).unwrap();
            // Push the JsValue to the vector
            array.push(parsed);
        }
    }
    // Return array
    array
}