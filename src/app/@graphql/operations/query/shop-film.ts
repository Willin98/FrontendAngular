import gql from 'graphql-tag';
import { SHOP_FILM_FRAGMENTE } from '@graphql/operations/fragment/shop-film';

export const SHOP_FILM_BY_PLATFORM = gql`
  query productosTiendaLista(
    $page: Int
    $itemsPage: Int
    $active: ActiveFilterEnum
  ) {
    shopFilms(
      page: $page
      itemsPage: $itemsPage
      active: $active
    ) {
      status
      message
      shopFilms {
        ...ShopFilmObject
      }
    }
  }
  ${SHOP_FILM_FRAGMENTE}
`;
