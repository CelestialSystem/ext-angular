//import EWCGridcellbase from '../dist/ext-gridcellbase.component.js';
//inputs: (new EWCGridcellbase()).properties,
//import EWCGridcellbase from '@sencha/ext-web-components-modern/dist/ext-gridcellbase.component.js';
import { EWCGridcellbase } from '@sencha/ext-web-components-modern';
import {
    Host,
    Optional,
    SkipSelf,
    Component,
    ElementRef,
    forwardRef,
    ViewContainerRef
  } from '@angular/core';
import { EngBase } from './common/angularbase';

@Component({
    selector: 'ExtGridcellbase',
    inputs: ['aMe', 'header', 'renderer', 'label','fitToParent','tab','config','platformConfig','extname','viewport','align','plugins','responsiveConfig','responsiveFormulas','align','alignSelf','alwaysOnTop','ariaAttributes','ariaDescribedBy','ariaLabel','ariaLabelledBy','bind','bodyCls','bodyStyle','border','cellCls','cls','column','constrainAlign','controller','defaultListenerScope','defaultToolWeights','disabled','undefined','flex','floated','focusCls','height','hidden','hideMode','id','instanceCls','itemId','keyMap','keyMapEnabled','keyMapTarget','listeners','margin','name','nameable','plugins','publishes','record','reference','relative','renderTo','ripple','selectable','session','shadow','shareableName','shim','style','toFrontOnShow','toolDefaults','tools','touchAction','translatable','twoWayBindable','ui','userCls','value','viewModel','width','x','y',],
    outputs: ['ready','created','beforedisabledchange','beforeheightchange','beforehiddenchange','beforetofront','beforewidthchange','blur','disabledchange','focus','focusenter','focusleave','heightchange','hiddenchange','tofront','widthchange',],
    providers: [{provide: EngBase, useExisting: forwardRef(() => ExtGridcellbaseComponent)}],
    template: '<ng-content></ng-content>'
})
export class ExtGridcellbaseComponent extends EngBase {
    constructor(
        eRef: ElementRef,
        @Host() @Optional() @SkipSelf() hostComponent: EngBase,
        vc: ViewContainerRef
        ) {
        super(
            eRef,
            hostComponent,
            ['aMe', 'header', 'renderer', 'label','fitToParent','tab','config','platformConfig','extname','viewport','align','plugins','responsiveConfig','responsiveFormulas','align','alignSelf','alwaysOnTop','ariaAttributes','ariaDescribedBy','ariaLabel','ariaLabelledBy','bind','bodyCls','bodyStyle','border','cellCls','cls','column','constrainAlign','controller','defaultListenerScope','defaultToolWeights','disabled','undefined','flex','floated','focusCls','height','hidden','hideMode','id','instanceCls','itemId','keyMap','keyMapEnabled','keyMapTarget','listeners','margin','name','nameable','plugins','publishes','record','reference','relative','renderTo','ripple','selectable','session','shadow','shareableName','shim','style','toFrontOnShow','toolDefaults','tools','touchAction','translatable','twoWayBindable','ui','userCls','value','viewModel','width','x','y',],
            (new EWCGridcellbase()).events,
            ['ready','created','beforedisabledchange','beforeheightchange','beforehiddenchange','beforetofront','beforewidthchange','blur','disabledchange','focus','focusenter','focusleave','heightchange','hiddenchange','tofront','widthchange',],
            vc
        )
        this.xtype = 'gridcellbase'
    }

    public ngOnInit() {
        this.baseOnInit()
    }

    public ngAfterViewInit() {
        this.baseAfterViewInit()
    }

    public ngOnChanges(changes) {
        this.baseOnChanges(changes)
    }

    public ngOnDestroy() {
        this.baseOnDestroy()
    }
}


// function toPascalCase(s) {
//     return s.match(/[a-z]+/gi)
//         .map(function (word) {
//             return word.charAt(0).toUpperCase() + word.substr(1).toLowerCase()
//         })
//         .join('')
// }
// var pascalName = toPascalCase(tagName)

//var events = (new EWCGridcellbase()).eventnames;
//var eventnamesall = [];
//events.forEach( (event: any, n: any) => {
//    eventnamesall.push(event.name)
//})
//const distinct = (value, index, self) => {
//    //return true
//    return self.indexOf(value) === index;
//}
//var eventnames = eventnamesall.filter(distinct);
