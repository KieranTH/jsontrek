#![deny(clippy::all)]

#[macro_use]
extern crate napi_derive;
extern crate serde_json;
extern crate jsonpath_lib;

use napi::{bindgen_prelude::Array, Env, JsError};
use serde_json::Value;
use jsonpath_lib::select;

#[napi]
pub fn sum(a: i32, b: i32) -> i32 {
  a + b
}

// fn parse_value(value: &Value, i: u32, array: &mut Array) {
//   if value.is_null() {
//     array.set(i as u32, "null".to_string()).unwrap();
//   } else if value.is_boolean() {
//     array.set(i as u32,  value.as_bool()).unwrap();
//   } else if value.is_number() {
//     array.set(i as u32,  value.as_f64()).unwrap();
//   } else if value.is_string() {
//     array.set(i as u32,  value.as_str()).unwrap();
//   } else if value.is_array() {
//     array.set(i as u32, value.as_array().unwrap());
//     // let elements: Vec<String> = value.as_array().unwrap().iter().map(|v| parse_value_to_string(v)).collect();
//     // array.set(i as u32, format!("[{}]", elements.join(", "))).unwrap();
//   } else {
//     array.set(i as u32,  "unknown".to_string()).unwrap();
//   }
// }

#[napi]
pub fn parse(env: Env, obj: String, path: String) -> String {
  let json_value: Value = serde_json::from_str(&obj).expect("Invalid JSON string");
  let result = select(&json_value, &path).expect("Invalid JSON path");
  let stringified = serde_json::to_string(&result).expect("Invalid JSON string");
  // let mut array = env.create_array(result.len() as u32)?;

  // for (i, value) in result.iter().enumerate() {
  //   // array.set(i as u32, value).unwrap();
  //   parse_value(value, i as u32, &mut array);
  // }

  // Ok(array)
  stringified
}