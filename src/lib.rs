#![deny(clippy::all)]

#[macro_use]
extern crate napi_derive;
extern crate serde_json;
extern crate serde_json_path;

use serde_json::Value;
use serde_json_path::{JsonPath};

#[napi]
pub fn sum(a: i32, b: i32) -> i32 {
  a + b
}

#[napi]
pub fn parse( obj: Value, path: String) -> Vec<Value> {
  // let data: Value = serde_json::from_str(&obj).unwrap();
  let path = JsonPath::parse(path.as_str()).unwrap();
  let search_result = path.query(&obj);

  // Create Vector for the search result
  let mut array = Vec::new();
  for value in search_result {
    let c = value.clone();
    if c != Value::Null {
      array.push(value.clone());
    }
  }
  array
}