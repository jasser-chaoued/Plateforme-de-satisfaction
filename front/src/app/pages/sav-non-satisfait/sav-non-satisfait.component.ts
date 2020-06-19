import { Component, OnInit } from '@angular/core';
import { VoteService } from 'src/app/shared/vote.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-sav-non-satisfait',
  templateUrl: './sav-non-satisfait.component.html',
  styleUrls: ['./sav-non-satisfait.component.css']
})
export class SavNonSatisfaitComponent implements OnInit {
  id:"5ee754af07c52219b87312b5";
  data:any;

  constructor(
    public voteService: VoteService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.updateOneNon();
  }

  updateOneNon(){
    this.voteService.UpdateSavInSatisfiait(this.id).subscribe((res) => {
      if (res.result) {
        console.log("mchet");
      }
    });
  }
  

}
