import { BudgetItem } from 'src/shared/models/budget-item.model';
import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
  selector: 'edit-item',
  templateUrl: './edit-item-model.component.html',
  styleUrls: ['./edit-item-model.component.scss']
})
export class EditItemModelComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<EditItemModelComponent>,
    @Inject(MAT_DIALOG_DATA) public item: BudgetItem) {}

  ngOnInit() {

  }

  onSubmitted(updatedItem: BudgetItem) {
    this.dialogRef.close(updatedItem);
  }

}
