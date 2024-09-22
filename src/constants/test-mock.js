const MOCK_PRODUCT_LIST = [
  {
    id:1,
    name:"Beef - Tongue, Fresh",
    price: 6.14,
    department:"Food",
    currency: '$'
 },
 {
    id:2,
    name:"IPhone X",
    price:900.13,
    department:"Electronics",
    currency: '$'
 },
 {
    id:3,
    name:"Gibson Les Paul",
    price:900.67,
    department:"Music",
    currency: '$'
 }
];

const MOCK_FILTER_INVALID_VALUES = [
  {
    priceFrom: 'abc',
    priceTo: '123',
    length: 0
  },
  {
    priceFrom: '123',
    priceTo: 'abc',
    length: 0
  },
  {
    priceFrom: 'abc',
    priceTo: 'abc',
    length: 0
  },
  {
    priceFrom: 'abc123',
    priceTo: 'abc123',
    length: 0
  }
];

const MOCK_COLUMNS = {
  id: true,
  name: true,
  department: true,
  price: true,
  currency: true,
};

const MOCK_COLUMNS_LIST = [
  {
    id: true,
    name: true,
    department: true,
    price: true,
    currency: true,
  },
  {
    id: false,
    name: true,
    department: false,
    price: true,
    currency: true,
  },
  {
    id: true,
    name: false,
    department: false,
    price: false,
    currency: true,
  },
  {
    id: false,
    name: false,
    department: false,
    price: false,
    currency: false,
  }
]

export {
  MOCK_PRODUCT_LIST,
  MOCK_FILTER_INVALID_VALUES,
  MOCK_COLUMNS,
  MOCK_COLUMNS_LIST
};
