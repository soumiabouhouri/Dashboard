import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { DialyInputComponent } from './daily-input/dialy-input.component';
import { ExtraInputComponent } from './extra-input/extra-input.component';
import { ProjectDataComponent } from './project-data/project-data.component';
import { OutputViewerComponent } from './output-viewer/output-viewer.component';
import {RouterModule, Routes} from '@angular/router';
import { MainViewComponent } from './main-view/main-view.component';
import { ContainerComponent } from './container/container.component';
import { TopNavComponent } from './top-nav/top-nav.component';
import { ProjectSelectcomboComponent } from './project-selectcombo/project-selectcombo.component';

const routes: Routes = [
  { path: 'MainView', component: MainViewComponent  },
  { path: 'DailyInput', component: DialyInputComponent  },
  { path: 'ExtraInput', component: ExtraInputComponent  },
  { path: 'ProjectData', component: ProjectDataComponent  },
  { path: 'OutPutViewer', component: OutputViewerComponent  },
  // the app navigate to the dashboard automatically
  { path: '', redirectTo: '/MainView', pathMatch: 'full' },
];
@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    DialyInputComponent,
    ExtraInputComponent,
    ProjectDataComponent,
    OutputViewerComponent,
    MainViewComponent,
    ContainerComponent,
    TopNavComponent,
    ProjectSelectcomboComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
