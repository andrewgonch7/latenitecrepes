import { QuantityPageComponent } from './quantity-page/quantity-page.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OrderComponent } from './order/order.component';
import { MenuComponent } from './menu/menu.component';
import { HomePageComponent } from './home-page/home-page.component';
import { TrackerComponent } from './tracker/tracker.component';


const routes: Routes = [{ path: '', component: HomePageComponent },
                        { path: 'quantity-page', component: QuantityPageComponent},
                        { path: 'order', component: OrderComponent },
                        { path: 'menu', component: MenuComponent },
                        { path: 'tracker', component: TrackerComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
