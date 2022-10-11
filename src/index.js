import { goods } from './goods.js';

const filterFunc = (key, value) => goods.filter(product => product[key] === value);

/**
 * @param {string} brand
 * @returns {*}
 */
const brandFilter = (brand) => filterFunc('brand', brand);

/**
 * @param {string} color
 * @returns {*}
 */
const colorFilter = (color) => filterFunc('color', color);

/**
 * @param {string} model
 * @returns {*}
 */
const modelFilter = (model) => filterFunc('model', model);

/**
 * @param {number} memory
 * @returns {*}
 */
const memoryFilter = (memory) => filterFunc('memory', memory);

/**
 * @param {number} price
 * @returns {*}
 */
const priceFilter = (price) => filterFunc('price', price);

/**
 * @param {string} country
 * @returns {*}
 */
const countryFilter = (country) => filterFunc('country', country);

/**
 * @param {string} os
 * @returns {*}
 */
const osFilter = (os) => filterFunc('os', os);

/**
 * @param {number} from
 * @param {number} to
 */
const rangeFilter = (from, to) => goods.filter(product => product.price >= from && product.price <= to);

const minPriceReducer = () => goods.reduce((minPrice, product) => product.price < minPrice ? product.price : minPrice, goods[0].price);

const maxPriceReducer = () => goods.reduce((minPrice, product) => product.price > minPrice ? product.price : minPrice, goods[0].price);

const toMaxSorter = () => goods.sort((a, b) => b.price - a.price);
const toMinSorter = () => goods.sort((a, b) => a.price - b.price);

export const filters = {
  brandFilter,
  countryFilter,
  priceFilter,
  osFilter,
  colorFilter,
  memoryFilter,
  modelFilter,
  rangeFilter,
};

export const reducers = {
  minPriceReducer,
  maxPriceReducer,
};

export const sorters = {
  toMaxSorter,
  toMinSorter,
};
