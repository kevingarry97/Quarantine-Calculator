import { EditItemModelComponent } from './../edit-item-model/edit-item-model.component';
import { BudgetItem } from './../../shared/models/budget-item.model';
import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'budget-item-list',
  templateUrl: './budget-item-list.component.html',
  styleUrls: ['./budget-item-list.component.scss']
})


export class BudgetItemListComponent implements OnInit {

  @Input() budgetItems: BudgetItem[];
  @Output() delete: EventEmitter<BudgetItem> = new EventEmitter<BudgetItem>();
  @Output() update: EventEmitter<UpdateEvent> = new EventEmitter<UpdateEvent>()

  constructor(public dialog: MatDialog) { }


  ngOnInit() {

  }

  onDeleteButtonClicked(item: BudgetItem) {
    this.delete.emit(item)
  }


  onCardClicked(item: BudgetItem) {
    //show the edit model
    const dialogRef = this.dialog.open(EditItemModelComponent, {
      width: '500px',
      data: item
    });

    dialogRef.afterClosed().subscribe(result => {
      //Check if result has a value
      if(result) {
       this.update.emit({
        old: item,
        new: result
       });
      }
    })
  }
}

export interface UpdateEvent {
  old: BudgetItem;
  new: BudgetItem;
}
