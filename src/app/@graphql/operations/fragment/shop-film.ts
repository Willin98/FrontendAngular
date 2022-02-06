import gql from "graphql-tag";

export const SHOP_FILM_FRAGMENTE = gql`
  fragment ShopFilmObject on ShopFilm {
    id
    price
    date
    stock
    film {
      name
      poster
      img
    }
  }
`;
