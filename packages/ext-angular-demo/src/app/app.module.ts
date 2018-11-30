import {
  Component,
  NgModule,
  Injectable,
  Injector,
  ComponentFactoryResolver,
  EmbeddedViewRef,
  ApplicationRef,
  VERSION} from '@angular/core'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import {BrowserModule} from '@angular/platform-browser'
import { ExtAngularModernModule } from './ext-angular-modern/ext-angular-modern.module'
import { AppComponent } from './app.component'
import { MjgComponent } from './mjg.component'

@Injectable()
export class DomService {
  constructor(
      private componentFactoryResolver: ComponentFactoryResolver,
      private appRef: ApplicationRef,
      private injector: Injector
  ) {}

  appendComponentToBody(component: any, root: any) {
    const componentRef = this.componentFactoryResolver
      .resolveComponentFactory(component)
      .create(this.injector)
    this.appRef.attachView(componentRef.hostView)
    const domElem = (componentRef.hostView as EmbeddedViewRef<any>)
      .rootNodes[0] as HTMLElement
    //var root = document.getElementsByClassName('x-viewport-body-el')[0]
    root.appendChild(domElem)
  }
}

@Component({
  selector: 'app-root',
  template: ``,
})
export class App {
  constructor(private domService: DomService) {
    var root = document.getElementsByClassName('x-viewport-body-el')[0]
    this.domService.appendComponentToBody(AppComponent, root);
  }
}

@NgModule({
  imports: [ BrowserModule, BrowserAnimationsModule, ExtAngularModernModule ],
  declarations: [ App, AppComponent, MjgComponent ],
  bootstrap: [ App ],
  providers: [ DomService ],
  entryComponents: [ AppComponent, MjgComponent]
})
export class AppModule {}