import{ViewComponent} from "./app/component/view/view.component";
import{BookingComponent} from "./app/component/booking/booking.component";
import{DetailComponent} from "./app/component/detail/detail.component";
import{EventComponent} from "./app/component/event/event.component";

export const AppRoutes=[
    //{path:'',component:LoginComponent}
    {
        path:'', component:BookingComponent
       },
        {
        path:'detail', component:DetailComponent,children:[
            
           {
            path:'event', component:EventComponent
           },
           {
            path:'view', component:ViewComponent
           }
    ]},
    

];