import { Component, OnInit } from '@angular/core';
import { VoteService } from 'src/app/shared/vote.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-sav-satisfait',
  templateUrl: './sav-satisfait.component.html',
  styleUrls: ['./sav-satisfait.component.css']
})
export class SavSatisfaitComponent implements OnInit {
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
    this.voteService.UpdateSavS(this.id).subscribe((res) => {
      if (res.result) {
        console.log("mchet");
      }
    });
  }
}
