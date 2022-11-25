<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## API Reference

#### GET => read all the products 

```http
  GET /products
```

If everything is well processed, it will return an array which contains all the products that the database conected has. If there's not products, it will answer with an empty array. If something wrong happens, it will automatically response throwing an error in 500 Internal Server Error status 

#### GET => read a product

```http
  GET /product?name=${param}
```
If everything is well processed, it will return an object which contains  the products that mactches with the exact name. It will send an empty object if there is no a product with the name given. If something wrong happens, it will automatically response throwing an error in 500 Internal Server Error status 

| Param | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `name` | `string` | **Required**. Name of product  |


#### POST => create a product

```http
  POST /product
```

| Param | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `name` | `string` | **Required**. Name of product  |
| `category` | `object` | **Required**. Category of product  |
| `brand` | `object` | **Required**. Brand of product  |
| `slug` | `url` | **Required**. Slug/ image link of product  |
| `status` | `string` | **Required**. Status of product  |

Category Object
| Param | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `name` | `string` | **Required**. Name of category  |
| `status` | `url` | **Required**. Status of category  |

Brand Object
| Param | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `name` | `string` | **Required**. Name of brand  |
| `status` | `url` | **Required**. Status of brand  |

If everything is well processed, it will create the object and return it showing the values given and adding its _id. If something wrong happens, it will automatically response throwing an error in 500 Internal Server Error status 

#### PATCH => update a product

```http
  PATCH /product
```
| Param | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id` | `string` | **Required**. Id of product  |
| `name` | `string` | Name of product  |
| `category` | `object` | Category of product  |
| `brand` | `object` | Brand of product  |
| `slug` | `url` | Slug/Image link of product  |
| `status` | `string` | Status of product  |

Category Object
| Param | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `name` | `string` | Name of category  |
| `slug` | `url` | Slug/Image link of category  |

Brand Object
| Param | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `name` | `string` | Name of brand  |
| `slug` | `url` | Slug/Image link of brand  |

If everything is well processed, it will update the object and return a boolean value. True if it was updated successfully, or false if it couldn't be updated. If something wrong happens, it will automatically response throwing an error in 500 Internal Server Error status 

#### DELETE => delete a product

```http
  DELETE /product
```
| Param | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id` | `string` | **Required**. Id of product  |

If everything is well processed, it will delete the object and return a boolean value. True if it was updated successfully, or false if it couldn't be deleted from the database. If something wrong happens, it will automatically response throwing an error in 500 Internal Server Error status 


## License

Nest is [MIT licensed](LICENSE).
