import { Routes } from '@angular/router';

import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { IconsComponent } from '../../pages/icons/icons.component';
import { MapsComponent } from '../../pages/maps/maps.component';
import { UserProfileComponent } from '../../pages/user-profile/user-profile.component';
import { TablesComponent } from '../../pages/tables/tables.component';
import { AddProductComponent } from '../../pages/add-product/add-product.component';
import { GoVoteComponent } from '../../pages/go-vote/go-vote.component';
import { VoteSatisfaitComponent } from '../../pages/vote-satisfait/vote-satisfait.component';
import { VoteNonSatisfaitComponent } from '../../pages/vote-non-satisfait/vote-non-satisfait.component';
import { VoteIndiferentComponent } from '../../pages/vote-indiferent/vote-indiferent.component';
import { ProductDetailsComponent } from '../../pages/product-details/product-details.component';
import { AddServiceComponent } from '../../pages/add-service/add-service.component';
import { SAVComponent } from '../../pages/sav/sav.component';



import { AuthGuard } from "../../shared/auth.guard";
import { SavNonSatisfaitComponent } from 'src/app/pages/sav-non-satisfait/sav-non-satisfait.component';
import { SavIndiferentComponent } from 'src/app/pages/sav-indiferent/sav-indiferent.component';
import { SavSatisfaitComponent } from 'src/app/pages/sav-satisfait/sav-satisfait.component';
import { ReviewsComponent } from 'src/app/pages/reviews/reviews.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',      component: DashboardComponent, canActivate: [AuthGuard]},
    { path: 'user-profile/:id',   component: UserProfileComponent, canActivate: [AuthGuard]},
    { path: 'tables',         component: TablesComponent, canActivate: [AuthGuard]},
    { path: 'icons',          component: IconsComponent, canActivate: [AuthGuard]},
    { path: 'maps',           component: MapsComponent, canActivate: [AuthGuard] },
    { path: 'NewProduct', component: AddProductComponent },
    { path: 'Satisfait/:id', component: VoteSatisfaitComponent },
    { path: 'NonSatisfait/:id', component: VoteNonSatisfaitComponent },
    { path: 'Indiferent/:id', component: VoteIndiferentComponent },
    { path: 'GoVote/:id', component: GoVoteComponent },
    { path: 'Service', component: AddServiceComponent },
    { path: 'SAV/:id', component: SAVComponent },
    { path: 'savNonSatisfait/:id', component: SavNonSatisfaitComponent },
    { path: 'savSatisfait/:id', component: SavSatisfaitComponent },
    { path: 'savIndiferent/:id', component: SavIndiferentComponent },
    {
        path: 'reviews',
        component: ReviewsComponent ,
      },
    { path: 'Details/:id', component: ProductDetailsComponent }
];
