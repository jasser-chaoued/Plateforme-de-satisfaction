import { Component, OnInit } from '@angular/core';
import { VoteService } from 'src/app/shared/vote.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-sav-indiferent',
  templateUrl: './sav-indiferent.component.html',
  styleUrls: ['./sav-indiferent.component.css']
})
export class SavIndiferentComponent implements OnInit {
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
    this.voteService.UpdateSavI(this.id).subscribe((res) => {
      if (res.result) {
        console.log("mchet");
      }
    });
  }
}
