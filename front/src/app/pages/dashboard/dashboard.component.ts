import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router  } from '@angular/router';
import { ProductService } from '../../shared/product.service';
import { VoteService } from '../../shared/vote.service';
import * as CanvasJS from '../../../assets/canvasjs.min';


// core components
import {
  chartOptions,
  parseOptions,
  chartExample1,
  chartExample2
} from "../../variables/charts";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  products:any = [];
  service:any = [];
  public datasets: any;
  public data: any;
  public salesChart;
  public clicked: boolean = true;
  public clicked1: boolean = false;
  public id = "5ee754af07c52219b87312b5";
  public id2= "5ee75e888d0f810c780cd763";
  public id3= "5ee75fb28d0f810c780cd764";

  constructor(private httpClient: HttpClient,
    private route: ActivatedRoute,
    public productService: ProductService,
    public voteService: VoteService,
    public router: Router)
    { 
      this.allProduct();

    }

  ngOnInit() {
    


    this.voteService.getService(this.id).subscribe(res => {
      console.log(res);
      let satisfait = res.voteSatisfait;
      let NonSatisfait = res.voteNonSatisfait;
      let indiferent = res.voteIndiferent;
      let typeSer = res.typeDeService;
      //console.log(satisfait,NonSatisfait,indiferent)
      let chart = new CanvasJS.Chart("chartContainer", {
       theme: "light2",
       animationEnabled: true,
       exportEnabled: true,
       title:{
         text: typeSer ,
         fontSize: 50
       },
       legend :{ 
         verticalAlign: "center", 
         horizontalAlign: "right" 
       }, 
       data: [{
         type: "column",
         showInLegend: true,
         toolTipContent: "<b>{name}</b>: total {y} (#percent%)",
         indexLabel: "{name}",
         dataPoints: [
           { y: satisfait, name: "satisfait" },
           { y: NonSatisfait, name: "NonSatisfait" },
           { y: indiferent, name: "indiferent" }
         ]
       }]
     });
       
     chart.render();
     });

     this.voteService.getService(this.id2).subscribe(res => {
      console.log(res);
      let satisfait = res.voteSatisfait;
      let NonSatisfait = res.voteNonSatisfait;
      let indiferent = res.voteIndiferent;
      let typeSer = res.typeDeService;
      //console.log(satisfait,NonSatisfait,indiferent)
      let chart = new CanvasJS.Chart("chartContainer2", {
       theme: "light2",
       animationEnabled: true,
       exportEnabled: true,
       title:{
         text: typeSer ,
         fontSize: 50
       },
       legend :{ 
         verticalAlign: "center", 
         horizontalAlign: "right" 
       }, 
       data: [{
         type: "column",
         showInLegend: true,
         toolTipContent: "<b>{name}</b>: total {y} (#percent%)",
         indexLabel: "{name}",
         dataPoints: [
           { y: satisfait, name: "satisfait" },
           { y: NonSatisfait, name: "NonSatisfait" },
           { y: indiferent, name: "indiferent" }
         ]
       }]
     });
       
     chart.render();
     });

     this.voteService.getService(this.id3).subscribe(res => {
      console.log(res);
      let satisfait = res.voteSatisfait;
      let NonSatisfait = res.voteNonSatisfait;
      let indiferent = res.voteIndiferent;
      let typeSer = res.typeDeService;
      //console.log(satisfait,NonSatisfait,indiferent)
      let chart = new CanvasJS.Chart("chartContainer3", {
       theme: "light2",
       animationEnabled: true,
       exportEnabled: true,
       title:{
         text: typeSer ,
         fontSize: 50
       },
       legend :{ 
         verticalAlign: "center", 
         horizontalAlign: "right" 
       }, 
       data: [{
         type: "column",
         showInLegend: true,
         toolTipContent: "<b>{name}</b>: total {y} (#percent%)",
         indexLabel: "{name}",
         dataPoints: [
           { y: satisfait, name: "satisfait" },
           { y: NonSatisfait, name: "NonSatisfait" },
           { y: indiferent, name: "indiferent" }
         ]
       }]
     });
       
     chart.render();
     });
  }

  allProduct(){
    this.productService.getAllProduct().subscribe((data) => {
     this.products = data;
    })    
  }
  

  public updateOptions() {
    this.salesChart.data.datasets[0].data = this.data;
    this.salesChart.update();
  }

}
