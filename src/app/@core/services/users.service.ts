import { IRegisterForm } from '@core/interfaces/register.interface';
import { Apollo } from 'apollo-angular';
import { ApiService } from '@graphql/services/api.service';
import { Injectable } from '@angular/core';
import { USER_LIST_QUERY } from '@graphql/operations/query/user';
import { map } from 'rxjs/internal/operators/map';
import { REGISTER_USER } from '@graphql/operations/mutation/user';

@Injectable({
  providedIn: 'root'
})
export class UsersService extends ApiService {

  constructor(apollo: Apollo) {
    super(apollo);
  }

  getUsers(page: number = 1, itemsPage: number = 20){
    return this.get(USER_LIST_QUERY, {
          include: true,
          itemsPage,
          page
        }).pipe(map((result: any) => {
      return result.users;
    }));
  }

  //añadir metodos para consumir la info de la API
  register(user: IRegisterForm) {
    return this.set(REGISTER_USER,
      {
        user,
        include: false
      }).pipe(
      map((result: any) => {
        return result.register;
      })
    );
  }
}
