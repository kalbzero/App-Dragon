import { Component, OnInit } from '@angular/core';
import {MatDialogRef, MatDialog} from '@angular/material/dialog';
import { Router } from '@angular/router';

import { ApiDragonService } from 'src/app/shared/services/api-dragon.service';
import { IDragon } from '../../shared/interfaces/Idragon';
import { DeleteDialogComponent } from './delete-dialog/delete-dialog.component';

@Component({
  selector: 'app-dragon-list',
  templateUrl: './dragon-list.component.html',
  styleUrls: ['./dragon-list.component.scss']
})
export class DragonListComponent implements OnInit {

  /**
   * Display table columns
   */
  displayedColumns: string[] = ['name', 'type', 'createdAt', 'action'];

  dragonsData: IDragon[] = [];

  constructor(
    private dragonService: ApiDragonService,
    private router: Router,
    private dialog: MatDialog,
  ) { }

  ngOnInit() {
    this.getDragonList();
  }

  getDragonList() {
    this.dragonService.getDragonList().subscribe(
      (dragons: IDragon[]) => {this.dragonsData = dragons; console.log(dragons);}
    );
  }

  onCreate() {
    this.router.navigate(['add/']);
  }

  /**
   * Edit service
   * @param id Dragon ID
   */
  onEdit(id: number) {
    this.router.navigate(['edit/'+id]);
  }

  /**
   * Delete modal and service
   * @param id Dragon ID
   */
  onDelete(dragon: IDragon): void {
    const dialogRef: MatDialogRef<DeleteDialogComponent, any> = this.dialog.open(
      DeleteDialogComponent,
      {
        width: '400px',
        data: { name: dragon.name, type: dragon.type, id: dragon.id }
      }
    );

    dialogRef.afterClosed().subscribe(id => {
      
      if(id !== undefined) {
        console.log(id);
        this.dragonService.deleteDragon(id).subscribe(
          (response) => {
            console.log(response);
            this.getDragonList();
          }
        );
      }
    });
  }
}
