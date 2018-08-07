import { Component, OnInit } from '@angular/core';
import {Bugs} from './models/Bugs';
import {BugOperationsService} from './services/bug-operations.service';

@Component({
  selector: 'app-bug-tracker',
  templateUrl: './bug-tracker.component.html',
  styleUrls: ['./bug-tracker.component.css']
})
export class BugTrackerComponent  {

bugs : Bugs[]=[];
totalBugs : number =0;
sortBugAttr :string = 'bugName';
sortDescending : boolean = false;
newBugName : string = '';

	constructor(private bugOperations : BugOperationsService){
		this.bugs.push(this.bugOperations.createNew('Server communication failure'));
		this.bugs.push(this.bugOperations.createNew('Application not responding'));
		this.bugs.push(this.bugOperations.createNew('User actions not recognized'));
		this.bugs.push(this.bugOperations.createNew('Data integrity checks failed'));
	}

onAddNewClick(newBugName:string){
  let bug = this.bugOperations.createNew(this.newBugName);
  //this.bugs.push(bug);
  this.bugs = [...this.bugs, bug];
  this.newBugName='';
  this.totalBugs += 1;
}

onBugNameClick(bug : Bugs){
this.bugOperations.toggle(bug);
}  

onBugNameRemove(){
  this.bugs = this.bugs.filter( bug => !bug.isClosed);
  
  this.totalBugs = this.bugs.length;
}

getClosedCount(){
  return this.bugs.reduce((result , bug) => bug.isClosed ? ++result : result,0);
}

}