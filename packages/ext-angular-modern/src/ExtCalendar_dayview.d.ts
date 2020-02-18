import { ElementRef, ViewContainerRef } from '@angular/core';
import { EngBase } from './runtime/angularbase';
import * as ɵngcc0 from '@angular/core';
export declare class ExtCalendar_dayviewComponent extends EngBase {
    constructor(eRef: ElementRef, hostComponent: EngBase, vc: ViewContainerRef);
    ngOnInit(): void;
    ngAfterViewInit(): void;
    ngOnChanges(changes: any): void;
    ngOnDestroy(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<ExtCalendar_dayviewComponent>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<ExtCalendar_dayviewComponent, "ExtCalendar_dayview", never, {
    "aMe": "aMe";
    "header": "header";
    "renderer": "renderer";
    "label": "label";
    "fitToParent": "fitToParent";
    "tab": "tab";
    "config": "config";
    "platformConfig": "platformConfig";
    "extname": "extname";
    "viewport": "viewport";
    "align": "align";
    "plugins": "plugins";
    "responsiveConfig": "responsiveConfig";
    "responsiveFormulas": "responsiveFormulas";
    "addForm": "addForm";
    "alignSelf": "alignSelf";
    "allowSelection": "allowSelection";
    "alwaysOnTop": "alwaysOnTop";
    "ariaAttributes": "ariaAttributes";
    "ariaDescribedBy": "ariaDescribedBy";
    "ariaLabel": "ariaLabel";
    "ariaLabelledBy": "ariaLabelledBy";
    "axisLock": "axisLock";
    "bind": "bind";
    "border": "border";
    "bottom": "bottom";
    "centered": "centered";
    "cls": "cls";
    "compact": "compact";
    "compactOptions": "compactOptions";
    "constrainAlign": "constrainAlign";
    "contentEl": "contentEl";
    "controller": "controller";
    "controlStoreRange": "controlStoreRange";
    "data": "data";
    "defaultListenerScope": "defaultListenerScope";
    "disabled": "disabled";
    "displayed": "displayed";
    "displayOverlap": "displayOverlap";
    "docked": "docked";
    "draggable": "draggable";
    "droppable": "droppable";
    "editForm": "editForm";
    "endTime": "endTime";
    "undefined": "undefined";
    "eventDefaults": "eventDefaults";
    "flex": "flex";
    "floated": "floated";
    "focusCls": "focusCls";
    "fullscreen": "fullscreen";
    "gestureNavigation": "gestureNavigation";
    "height": "height";
    "hidden": "hidden";
    "hideAnimation": "hideAnimation";
    "hideMode": "hideMode";
    "hideOnMaskTap": "hideOnMaskTap";
    "html": "html";
    "id": "id";
    "instanceCls": "instanceCls";
    "itemId": "itemId";
    "keyMap": "keyMap";
    "keyMapEnabled": "keyMapEnabled";
    "keyMapTarget": "keyMapTarget";
    "left": "left";
    "listeners": "listeners";
    "margin": "margin";
    "maxHeight": "maxHeight";
    "maxWidth": "maxWidth";
    "minHeight": "minHeight";
    "minWidth": "minWidth";
    "modal": "modal";
    "modelValidation": "modelValidation";
    "name": "name";
    "nameable": "nameable";
    "padding": "padding";
    "publishes": "publishes";
    "record": "record";
    "reference": "reference";
    "relative": "relative";
    "renderTo": "renderTo";
    "resizeEvents": "resizeEvents";
    "right": "right";
    "ripple": "ripple";
    "scrollable": "scrollable";
    "session": "session";
    "shadow": "shadow";
    "shareableName": "shareableName";
    "shim": "shim";
    "showAnimation": "showAnimation";
    "showNowMarker": "showNowMarker";
    "startTime": "startTime";
    "stateful": "stateful";
    "statefulDefaults": "statefulDefaults";
    "stateId": "stateId";
    "store": "store";
    "style": "style";
    "tabIndex": "tabIndex";
    "timeFormat": "timeFormat";
    "timeRenderer": "timeRenderer";
    "timezoneOffset": "timezoneOffset";
    "toFrontOnShow": "toFrontOnShow";
    "tooltip": "tooltip";
    "top": "top";
    "touchAction": "touchAction";
    "tpl": "tpl";
    "tplWriteMode": "tplWriteMode";
    "translatable": "translatable";
    "twoWayBindable": "twoWayBindable";
    "ui": "ui";
    "userCls": "userCls";
    "userSelectable": "userSelectable";
    "value": "value";
    "viewModel": "viewModel";
    "visibleDays": "visibleDays";
    "weight": "weight";
    "width": "width";
    "x": "x";
    "xtype": "xtype";
    "y": "y";
    "zIndex": "zIndex";
}, {
    "ready": "ready";
    "added": "added";
    "beforebottomchange": "beforebottomchange";
    "beforecenteredchange": "beforecenteredchange";
    "beforedisabledchange": "beforedisabledchange";
    "beforedockedchange": "beforedockedchange";
    "beforeeventadd": "beforeeventadd";
    "beforeeventdragstart": "beforeeventdragstart";
    "beforeeventedit": "beforeeventedit";
    "beforeeventresizestart": "beforeeventresizestart";
    "beforeheightchange": "beforeheightchange";
    "beforehiddenchange": "beforehiddenchange";
    "beforehide": "beforehide";
    "beforeleftchange": "beforeleftchange";
    "beforemaxHeightchange": "beforemaxHeightchange";
    "beforemaxWidthchange": "beforemaxWidthchange";
    "beforeminHeightchange": "beforeminHeightchange";
    "beforeminWidthchange": "beforeminWidthchange";
    "beforeorientationchange": "beforeorientationchange";
    "beforerightchange": "beforerightchange";
    "beforescrollablechange": "beforescrollablechange";
    "beforeshow": "beforeshow";
    "beforetofront": "beforetofront";
    "beforetopchange": "beforetopchange";
    "beforewidthchange": "beforewidthchange";
    "blur": "blur";
    "bottomchange": "bottomchange";
    "centeredchange": "centeredchange";
    "destroy": "destroy";
    "disabledchange": "disabledchange";
    "dockedchange": "dockedchange";
    "erased": "erased";
    "eventadd": "eventadd";
    "eventdrop": "eventdrop";
    "eventedit": "eventedit";
    "eventresize": "eventresize";
    "eventtap": "eventtap";
    "floatingchange": "floatingchange";
    "focus": "focus";
    "focusenter": "focusenter";
    "focusleave": "focusleave";
    "fullscreen": "fullscreen";
    "heightchange": "heightchange";
    "hiddenchange": "hiddenchange";
    "hide": "hide";
    "initialize": "initialize";
    "leftchange": "leftchange";
    "maxHeightchange": "maxHeightchange";
    "maxWidthchange": "maxWidthchange";
    "minHeightchange": "minHeightchange";
    "minWidthchange": "minWidthchange";
    "moved": "moved";
    "orientationchange": "orientationchange";
    "painted": "painted";
    "positionedchange": "positionedchange";
    "removed": "removed";
    "resize": "resize";
    "rightchange": "rightchange";
    "scrollablechange": "scrollablechange";
    "show": "show";
    "tofront": "tofront";
    "topchange": "topchange";
    "updatedata": "updatedata";
    "validateeventadd": "validateeventadd";
    "validateeventdrop": "validateeventdrop";
    "validateeventedit": "validateeventedit";
    "validateeventresize": "validateeventresize";
    "valuechange": "valuechange";
    "widthchange": "widthchange";
}, never>;
}

//# sourceMappingURL=ExtCalendar_dayview.d.ts.map