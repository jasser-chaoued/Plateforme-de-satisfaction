import { Component, OnInit } from '@angular/core';
import { Router, Routes } from '@angular/router';
import { AuthService } from './../../shared/auth.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { AuthGuard } from "../../shared/auth.guard";

import { UserProfileComponent } from '../../pages/user-profile/user-profile.component';



declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
const id = localStorage.getItem('user_id');

export const ROUTES: RouteInfo[] = [
    { path: '/dashboard', title: 'Dashboard',  icon: 'ni-tv-2 text-primary', class: '' },
    { path: '/user-profile/'+ id, title: 'User profile',  icon:'ni-single-02 text-yellow', class: '' },
    { path: '/tables', title: 'Tables',  icon:'ni-bullet-list-67 text-red', class: '' },
    { path: '/maps', title: 'Maps',  icon:'ni-pin-3 text-orange', class: '' },
    { path: '/icons', title: 'Icons',  icon:'ni-planet text-blue', class: '' },
    { path: '/NewProduct', title: 'New Product',  icon:'ni-fat-add text blue', class: '' },
    { path: '/Service', title: 'New Service',  icon:'ni-fat-add text blue', class: '' }
];

export const AdminLayoutRoutes: Routes = [

  { path: 'user-profile/:id',   component: UserProfileComponent, canActivate: [AuthGuard]},

];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  public menuItems: any[];
  public isCollapsed = true;
  currentUser: Object = {};

  constructor( private router: Router,
    public authService: AuthService,
    private actRoute: ActivatedRoute ) {
    let id1 = this.actRoute.snapshot.paramMap.get('id');
      this.authService.getUserProfile(id1).subscribe(res => {
        this.currentUser = res.msg;
      });
      }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
    this.router.events.subscribe((event) => {
      this.isCollapsed = true;
   });
   let id1 = this.actRoute.snapshot.paramMap.get('id');
   this.authService.getUserProfile(id1).subscribe(res => {
     this.currentUser = res.msg;
   });
  }
}
