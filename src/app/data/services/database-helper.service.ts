import { Injectable } from '@angular/core';
import {Story} from "../model/Story";
import {User} from "../model/User";

@Injectable({
  providedIn: 'root'
})
export class DatabaseHelperService {
  listOfStory:Story[] = []
  listOfUser:User[] = []

  constructor() { }
}
