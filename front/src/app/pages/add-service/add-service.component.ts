import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from "@angular/forms";
import { VoteService } from '../../shared/vote.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-service',
  templateUrl: './add-service.component.html',
  styleUrls: ['./add-service.component.css']
})
export class AddServiceComponent implements OnInit {

  addServiceForm: FormGroup;
  typeDeService: ['Sevice apres vente', 'sevice client', 'service marketing'];

  constructor(public fb: FormBuilder,
    public VoteService: VoteService,
    public router: Router) {
      this.addServiceForm = this.fb.group({
        typeDeService: [''], 
        Department: ['Carrefour']
      });
     }
  ngOnInit(): void {
  }


  addService() {
    this.VoteService.addSer(this.addServiceForm.value).subscribe((res) => {
      if (res.result) {
        
      }
      this.router.navigate(['dashboard']);
    });
  }

}
