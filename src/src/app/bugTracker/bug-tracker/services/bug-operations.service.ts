import {Bugs} from '../models/Bugs';

export class BugOperationsService {
createNew(bugName :string):Bugs {
  let newBug :Bugs = {
    bugName : bugName,
   isClosed : false
  };
  return newBug;
}

toggle(bugToToggle : Bugs) :void{
  bugToToggle.isClosed = ! bugToToggle.isClosed;
}

}
