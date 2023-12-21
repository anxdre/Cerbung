import {Injectable} from '@angular/core';
import {Story} from "../model/Story";
import {User} from "../model/User";

@Injectable({
  providedIn: 'root'
})
export class DatabaseHelperService {
  static userEmailKey = 'app_user_email'
  static userNameKey = 'app_user_name'
  static userid = 'app_user_id'
  private _isAuth: boolean = false
  private _emailUser: string = ''
  private _nameUser: string = ''

  constructor() {
    this._emailUser = localStorage.getItem(DatabaseHelperService.userEmailKey) ?? ''
    this._nameUser = localStorage.getItem(DatabaseHelperService.userNameKey) ?? ''
    this._nameUser = localStorage.getItem(DatabaseHelperService.userid) ?? ''

    console.log(`${this._emailUser} - ${this._nameUser}`)

    if (this._emailUser.length > 0 && this._nameUser.length > 0 && DatabaseHelperService.userid != null) {
      this.isAuth = true;
    }
  }


  get isAuth(): boolean {
    return this._isAuth;
  }

  set isAuth(value: boolean) {
    this._isAuth = value;
  }
}
