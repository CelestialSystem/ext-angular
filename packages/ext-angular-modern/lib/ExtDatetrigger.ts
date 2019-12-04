//import EWCDatetrigger from '../dist/ext-datetrigger.component.js';
//inputs: (new EWCDatetrigger()).properties,
import EWCDatetrigger from '@sencha/ext-web-components-modern/dist/ext-datetrigger.component.js';
import {
    Host,
    Optional,
    SkipSelf,
    Component,
    ElementRef,
    forwardRef,
    ViewContainerRef
  } from '@angular/core';
import { EngBase } from './angularbase';

@Component({
    selector: 'ExtDatetrigger',
    inputs: ['aMe', 'header', 'renderer', 'label','fitToParent','tab','config','platformConfig','extname','viewport','align','plugins','responsiveConfig','responsiveFormulas','alignSelf','alwaysOnTop','ariaAttributes','ariaDescribedBy','ariaLabel','ariaLabelledBy','bind','border','cls','constrainAlign','controller','defaultListenerScope','disabled','undefined','field','flex','floated','focusCls','focusOnTap','group','handler','height','hidden','hideMode','iconCls','id','instanceCls','itemId','keyMap','keyMapEnabled','keyMapTarget','listeners','margin','name','nameable','plugins','publishes','reference','relative','renderTo','repeat','ripple','scope','session','shadow','shareableName','shim','side','style','toFrontOnShow','touchAction','translatable','triggers','twoWayBindable','ui','userCls','viewModel','width','x','y',],
    outputs: ['ready','beforedisabledchange','beforeheightchange','beforehiddenchange','beforetofront','beforewidthchange','blur','disabledchange','focus','focusenter','focusleave','heightchange','hiddenchange','tofront','widthchange',],
    providers: [{provide: EngBase, useExisting: forwardRef(() => ExtDatetriggerComponent)}],
    template: '<ng-content></ng-content>'
})
export class ExtDatetriggerComponent extends EngBase {
    constructor(
        eRef: ElementRef,
        @Host() @Optional() @SkipSelf() hostComponent: EngBase,
        vc: ViewContainerRef
        ) {
        super(
            eRef,
            hostComponent,
            ['aMe', 'header', 'renderer', 'label','fitToParent','tab','config','platformConfig','extname','viewport','align','plugins','responsiveConfig','responsiveFormulas','alignSelf','alwaysOnTop','ariaAttributes','ariaDescribedBy','ariaLabel','ariaLabelledBy','bind','border','cls','constrainAlign','controller','defaultListenerScope','disabled','undefined','field','flex','floated','focusCls','focusOnTap','group','handler','height','hidden','hideMode','iconCls','id','instanceCls','itemId','keyMap','keyMapEnabled','keyMapTarget','listeners','margin','name','nameable','plugins','publishes','reference','relative','renderTo','repeat','ripple','scope','session','shadow','shareableName','shim','side','style','toFrontOnShow','touchAction','translatable','triggers','twoWayBindable','ui','userCls','viewModel','width','x','y',],
            (new EWCDatetrigger()).events,
            ['ready','beforedisabledchange','beforeheightchange','beforehiddenchange','beforetofront','beforewidthchange','blur','disabledchange','focus','focusenter','focusleave','heightchange','hiddenchange','tofront','widthchange',],
            vc
        )
        this.xtype = 'datetrigger'
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

//var events = (new EWCDatetrigger()).eventnames;
//var eventnamesall = [];
//events.forEach( (event: any, n: any) => {
//    eventnamesall.push(event.name)
//})
//const distinct = (value, index, self) => {
//    //return true
//    return self.indexOf(value) === index;
//}
//var eventnames = eventnamesall.filter(distinct);
