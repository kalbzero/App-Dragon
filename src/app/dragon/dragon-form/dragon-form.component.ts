import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

import { ApiDragonService } from 'src/app/shared/services/api-dragon.service';
import { IDragon } from '../../shared/interfaces/Idragon';
import { RouteEnum } from '../../shared/enum/route-enum';

@Component({
  selector: 'app-dragon-form',
  templateUrl: './dragon-form.component.html',
})
export class DragonFormComponent implements OnInit {

  /**
   * Form fields
   */
  dragonForm: FormGroup;

  /**
   * Current action like edit or create
   */
  currentAction: string = '';
  
  /**
   * Title page: Create Dragon or Edit Dragon
   */
  pageTitle: string = '';

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private apiDragonService: ApiDragonService,
  ) { }

  ngOnInit() {
    this.setCurrentAction();

    this.dragonForm = this.formBuilder.group({
      id: [null],
      name: [null, Validators.required],
      type: [null, Validators.required],
      createdAt: [{value: new Date(), disabled: true}, Validators.required]
    });
  }

  /**
   * Set 'create' or 'edit' mode page
   */
  private setCurrentAction() {
    if(this.route.snapshot.url[0].path == 'add') {
      this.currentAction = 'add';
      this.pageTitle = 'Create Dragon';
    } else {
      this.currentAction = 'edit';
      this.pageTitle = 'Edit Dragon';
    }
    this.loadPage();      
  }

  /**
   * Call getDragonId() if action is 'add'
   */
  private loadPage() {
    if(this.currentAction == 'edit') {
      this.apiDragonService.getDragonId(parseInt(this.route.snapshot.url[1].path)).subscribe(
        (dragon: IDragon) => {this.updateForm(dragon); console.log(dragon);}
      );
    }
  }

  /**
   * Update the form fields
   * @param dragon - dragon infos
   */
  private updateForm(dragon: IDragon) {
    this.dragonForm.patchValue({
      id: dragon.id,
      name: dragon.name,
      type: dragon.type,
      createdAt: dragon.createdAt
    });
  }

  /**
   * Valid dragon infos and submit the create or edit service
   */
  onSubmit() {
    if(this.dragonForm.valid){
      if(this.currentAction == 'add') {
        this.apiDragonService.addDragon(this.dragonForm.value).subscribe(
          (response) => { console.log(response); this.router.navigate(['']);},
          (error) => {console.log(error);}
        );
      } else {
        this.apiDragonService.editDragon(this.dragonForm.value).subscribe(
          (response) => {console.log(response); this.router.navigate(['']);},
          (error) => {console.log(error);}
        );
      }
    }
  }
}
