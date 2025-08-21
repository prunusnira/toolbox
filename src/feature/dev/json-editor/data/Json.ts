/**
 * JSON Element
 * - a key-value structure for element of a JSON object
 * - name: a string which represents object
 * - value: defined value for corresponding name
 *   - string
 *   - number
 *   - boolean
 *   - undefined or null
 *   - another json object
 *   - an array of any value, there can be multiple types in one array
 */
export type JSONElement = {
  name: string;
  value: string | number | boolean | JSONObject | any[] | undefined | null;
}

/**
 * JSON Object
 * - a package of multiple `name: value`s within a block `{}`
 */
export type JSONObject = JSONElement[];

/**
 * JSON Array
 * - an array composed of multiple JSON objects, primitive types
 */
export type JSONArray = JSONObject[];

/**
 * JSON Root
 * - start point of a JSON object or array
 * - can be a JSON object or array
 */
export type JSONRoot = JSONObject | JSONArray;