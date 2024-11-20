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

#[napi]
pub fn parse(env: Env, obj: String, path: String) -> Result<Array, JsError> {
  let json_value: Value = serde_json::from_str(&obj).expect("Invalid JSON string");
  let result = select(&json_value, &path).expect("Invalid JSON path");

  let mut array = env.create_array(result.len() as u32)?;

  for (i, value) in result.iter().enumerate() {
    array.set(i as u32, value.as_str()).unwrap();
  }

  Ok(array)
}