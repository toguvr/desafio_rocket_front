import { gql, useQuery } from "@apollo/client";

export const GET_PRODUCT_BY_ID = gql`
  query GetProductById($productId: ID!) {
    Product(id: $productId) {
      name
      description
      image_url
      category
      id
      price
    }
  }
`;

export function useGetProductById(id: string) {
  return useQuery(GET_PRODUCT_BY_ID, { variables: { productId: id } });
}

export const GET_ALL_PRODUCTS_BY_PAGE = gql`
  query GetAllProducts(
    $allProductsPage: Int
    $allProductsPerPage: Int
    $allProductsSortField: String
    $allProductsSortOrder: String
  ) {
    allProducts(
      page: $allProductsPage
      perPage: $allProductsPerPage
      sortField: $allProductsSortField
      sortOrder: $allProductsSortOrder
    ) {
      name
      image_url
      id
      price
    }
    _allProductsMeta(page: $allProductsPage, perPage: $allProductsPerPage) {
      count
    }
  }
`;

export const GET_ALL_PRODUCTS_BY_PAGE_BY_CATEGORY = gql`
  query GetProductsByCategory(
    $allProductsPage: Int
    $allProductsPerPage: Int
    $allProductsFilter: ProductFilter
    $allProductsSortField: String
    $allProductsSortOrder: String
  ) {
    allProducts(
      page: $allProductsPage
      perPage: $allProductsPerPage
      filter: $allProductsFilter
      sortField: $allProductsSortField
      sortOrder: $allProductsSortOrder
    ) {
      name
      image_url
      id
      price
    }
    _allProductsMeta(
      page: $allProductsPage
      perPage: $allProductsPerPage
      filter: $allProductsFilter
    ) {
      count
    }
  }
`;

export function useGetAllProductsByPage(
  allProductsPage: number,
  allProductsPerPage: number,
  filter: string,
  sort: string,
  sortOrder: string
) {
  if (filter === "all") {
    return useQuery(GET_ALL_PRODUCTS_BY_PAGE, {
      variables: {
        allProductsPage,
        allProductsPerPage,
        allProductsSortField: sort,
        allProductsSortOrder: sortOrder,
      },
    });
  }

  return useQuery(GET_ALL_PRODUCTS_BY_PAGE_BY_CATEGORY, {
    variables: {
      allProductsPage,
      allProductsPerPage,
      allProductsSortField: sort,
      allProductsSortOrder: sortOrder,
      allProductsFilter: {
        category: filter,
      },
    },
  });
}

export const GET_ALL_PRODUCTS_BY_NAME = gql`
  query GetProductsByName($allProductsFilter: ProductFilter) {
    allProducts(filter: $allProductsFilter) {
      id
      name
      category
      description
      image_url
      price
    }
  }
`;

export function useGetAllProductsByName(filter: string) {
  return useQuery(GET_ALL_PRODUCTS_BY_NAME, {
    variables: {
      allProductsFilter: {
        name: filter,
      },
    },
  });
}
