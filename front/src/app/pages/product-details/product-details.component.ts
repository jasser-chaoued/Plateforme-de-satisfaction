import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router  } from '@angular/router';
import { ProductService } from '../../shared/product.service';
import * as CanvasJS from '../../../assets/canvasjs.min';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})

export class ProductDetailsComponent implements OnInit {

  title = 'Details for the product';
  datas:any;
  id:any;
  Satisfait = [];
  NonSatisfait = [];
  chart = [];

  constructor(private httpClient: HttpClient,
    private route: ActivatedRoute,
    public productService: ProductService,
    public router: Router
    ) { }

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');
    this.productService.getProduct(id).subscribe(res => {
     console.log(res);
     let satisfait = res.voteSatisfait;
     let NonSatisfait = res.voteNonSatisfait;
     let indiferent = res.voteIndiferent;
     let name = res.product_name;
     //console.log(satisfait,NonSatisfait,indiferent)
     let chart = new CanvasJS.Chart("chartContainer", {
      theme: "light2",
      animationEnabled: true,
      exportEnabled: true,
      title:{
        text: "Le produit " + name ,
        fontSize: 50
      },
      legend :{ 
        verticalAlign: "center", 
        horizontalAlign: "right" 
      }, 
      data: [{
        type: "pie",
        showInLegend: true,
        toolTipContent: "<b>{name}</b>: total {y} (#percent%)",
        indexLabel: "{name} - #percent%",
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

  getOne(){
    this.productService.getProduct(this.id).subscribe(data=>{
      this.datas= data;
    })
  }
}
