//import EWCFilebutton from '../dist/ext-filebutton.component.js';
//inputs: (new EWCFilebutton()).properties,
//import EWCFilebutton from '@sencha/ext-web-components-classic/dist/ext-filebutton.component.js';
import { EWCFilebutton } from '@sencha/ext-web-components-classic';
import {
    Host,
    Optional,
    SkipSelf,
    Component,
    ElementRef,
    forwardRef,
    ViewContainerRef
  } from '@angular/core';
import { EngBase } from './runtime/angularbase';

@Component({
    selector: 'ExtFilebutton',
    inputs: ['aMe', 'header', 'renderer', 'label','fitToParent','tab','config','platformConfig','extname','viewport','align','plugins','responsiveConfig','responsiveFormulas','activeCounter','alignOnScroll','alignTarget','allowDepress','alwaysOnTop','anchor','animateShadow','ariaAttributes','ariaDescribedBy','ariaLabel','ariaLabelledBy','arrowAlign','arrowCls','arrowVisible','autoEl','autoRender','undefined','autoShow','baseCls','baseParams','bind','border','childEls','clickEvent','cls','columnWidth','componentCls','componentLayout','constrain','constraintInsets','constrainTo','contentEl','controller','data','defaultAlign','defaultListenerScope','destroyMenu','disabled','disabledCls','dock','draggable','enableToggle','fixed','flex','floating','focusCls','focusOnToFront','formBind','frame','glyph','handleMouseEvents','handler','height','hidden','hideMode','href','hrefTarget','html','icon','iconAlign','iconCls','id','itemId','keyMap','keyMapEnabled','keyMapTarget','liquidLayout','listeners','liveDrag','loader','margin','maskDefaults','maskElement','maxHeight','maxWidth','menu','menuAlign','minHeight','minWidth','modal','modelValidation','nameable','overCls','overflowText','undefined','undefined','padding','params','plugins','pressed','preventDefault','publishes','reference','region','renderConfig','renderData','undefined','renderTo','renderTpl','repeat','resizable','resizeHandles','saveDelay','scale','scope','scrollable','session','shadow','shadowOffset','shareableName','shim','showEmptyMenu','shrinkWrap','stateEvents','stateful','stateId','style','tabIndex','text','textAlign','toFrontOnShow','toggleGroup','toggleHandler','tooltip','tooltipType','touchAction','tpl','tplWriteMode','twoWayBindable','ui','uiCls','userCls','value','viewModel','weight','width','xtype',],
    outputs: ['ready','activate','added','afterlayoutanimation','afterrender','beforeactivate','beforedeactivate','beforedestroy','beforehide','beforerender','beforeshow','beforestaterestore','beforestatesave','beforetoggle','blur','boxready','click','deactivate','destroy','disable','enable','focus','focusenter','focusleave','glyphchange','hide','iconchange','menuhide','menushow','menutriggerout','menutriggerover','mouseout','mouseover','move','removed','render','resize','show','staterestore','statesave','textchange','toggle',],
    providers: [{provide: EngBase, useExisting: forwardRef(() => ExtFilebuttonComponent)}],
    template: '<ng-content></ng-content>'
})
export class ExtFilebuttonComponent extends EngBase {
    constructor(
        eRef: ElementRef,
        @Host() @Optional() @SkipSelf() hostComponent: EngBase,
        vc: ViewContainerRef
        ) {
        super(
            eRef,
            hostComponent,
            ['aMe', 'header', 'renderer', 'label','fitToParent','tab','config','platformConfig','extname','viewport','align','plugins','responsiveConfig','responsiveFormulas','activeCounter','alignOnScroll','alignTarget','allowDepress','alwaysOnTop','anchor','animateShadow','ariaAttributes','ariaDescribedBy','ariaLabel','ariaLabelledBy','arrowAlign','arrowCls','arrowVisible','autoEl','autoRender','undefined','autoShow','baseCls','baseParams','bind','border','childEls','clickEvent','cls','columnWidth','componentCls','componentLayout','constrain','constraintInsets','constrainTo','contentEl','controller','data','defaultAlign','defaultListenerScope','destroyMenu','disabled','disabledCls','dock','draggable','enableToggle','fixed','flex','floating','focusCls','focusOnToFront','formBind','frame','glyph','handleMouseEvents','handler','height','hidden','hideMode','href','hrefTarget','html','icon','iconAlign','iconCls','id','itemId','keyMap','keyMapEnabled','keyMapTarget','liquidLayout','listeners','liveDrag','loader','margin','maskDefaults','maskElement','maxHeight','maxWidth','menu','menuAlign','minHeight','minWidth','modal','modelValidation','nameable','overCls','overflowText','undefined','undefined','padding','params','plugins','pressed','preventDefault','publishes','reference','region','renderConfig','renderData','undefined','renderTo','renderTpl','repeat','resizable','resizeHandles','saveDelay','scale','scope','scrollable','session','shadow','shadowOffset','shareableName','shim','showEmptyMenu','shrinkWrap','stateEvents','stateful','stateId','style','tabIndex','text','textAlign','toFrontOnShow','toggleGroup','toggleHandler','tooltip','tooltipType','touchAction','tpl','tplWriteMode','twoWayBindable','ui','uiCls','userCls','value','viewModel','weight','width','xtype',],
            (new EWCFilebutton()).events,
            ['ready','activate','added','afterlayoutanimation','afterrender','beforeactivate','beforedeactivate','beforedestroy','beforehide','beforerender','beforeshow','beforestaterestore','beforestatesave','beforetoggle','blur','boxready','click','deactivate','destroy','disable','enable','focus','focusenter','focusleave','glyphchange','hide','iconchange','menuhide','menushow','menutriggerout','menutriggerover','mouseout','mouseover','move','removed','render','resize','show','staterestore','statesave','textchange','toggle',],
            vc
        )
        this.xtype = 'filebutton'
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

//var events = (new EWCFilebutton()).eventnames;
//var eventnamesall = [];
//events.forEach( (event: any, n: any) => {
//    eventnamesall.push(event.name)
//})
//const distinct = (value, index, self) => {
//    //return true
//    return self.indexOf(value) === index;
//}
//var eventnames = eventnamesall.filter(distinct);
