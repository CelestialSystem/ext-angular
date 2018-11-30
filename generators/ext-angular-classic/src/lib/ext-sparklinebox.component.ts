import {
  Output,
  OnInit,
  AfterContentInit,
  OnChanges,
  Component,
  ElementRef,
  forwardRef
} from '@angular/core';
import { base } from './base';
export class sparklineboxMetaData {
  public static XTYPE: string = 'sparklinebox';
  public static PROPERTIESOBJECT: any = {
    "ariaAttributes": "Object",
    "ariaDescribedBy": "String",
    "ariaLabel": "String",
    "ariaLabelledBy": "String",
    "bind": "Object/String",
    "border": "Boolean",
    "boxFillColor": "String",
    "boxLineColor": "String",
    "chartRangeMax": "Number",
    "chartRangeMin": "Number",
    "cls": "String/String[]",
    "controller": "String/Object/Ext.app.ViewController",
    "defaultListenerScope": "Boolean",
    "disabled": "Boolean",
    "disableTooltips": "Boolean",
    "eventHandlers": "Object",
    "focusCls": "String",
    "height": "Number/String",
    "hidden": "Boolean",
    "hideMode": "'clip'/'display'/'offsets'/'opacity'/'visibility'",
    "highlightColor": "String",
    "highlightLighten": "Number",
    "instanceCls": "String/String[]",
    "keyMap": "Object",
    "keyMapEnabled": "Boolean",
    "keyMapTarget": "String",
    "lineColor": "String",
    "listeners": "Object",
    "medianColor": "String",
    "name": "String",
    "nameable": "Boolean",
    "outlierFillColor": "String",
    "outlierIQR": "Number",
    "outlierLineColor": "String",
    "plugins": "Array/Ext.enums.Plugin/Object/Ext.plugin.Abstract",
    "publishes": "String/String[]/Object",
    "raw": "Boolean",
    "reference": "String",
    "renderTo": "Ext.Element",
    "ripple": "Boolean/Object/String",
    "session": "Boolean/Object/Ext.data.Session",
    "shareableName": "Boolean",
    "showOutliers": "Boolean",
    "spotRadius": "Number",
    "style": "String/Object",
    "target": "Number",
    "targetColor": "String",
    "tipTpl": "String/Ext.XTemplate",
    "tooltipPrefix": "String",
    "tooltipSkipNull": "Boolean",
    "tooltipSuffix": "String",
    "touchAction": "Object",
    "twoWayBindable": "String/String[]/Object",
    "ui": "String/String[]",
    "userCls": "String/String[]",
    "values": "Number[]",
    "viewModel": "String/Object/Ext.app.ViewModel",
    "whiskerColor": "String",
    "width": "Number/String",
    "platformConfig": "Object",
    "responsiveConfig": "Object",
    "fitToParent": "Boolean",
    "config": "Object",
};
  public static PROPERTIES: string[] = [
    'ariaAttributes',
    'ariaDescribedBy',
    'ariaLabel',
    'ariaLabelledBy',
    'bind',
    'border',
    'boxFillColor',
    'boxLineColor',
    'chartRangeMax',
    'chartRangeMin',
    'cls',
    'controller',
    'defaultListenerScope',
    'disabled',
    'disableTooltips',
    'eventHandlers',
    'focusCls',
    'height',
    'hidden',
    'hideMode',
    'highlightColor',
    'highlightLighten',
    'instanceCls',
    'keyMap',
    'keyMapEnabled',
    'keyMapTarget',
    'lineColor',
    'listeners',
    'medianColor',
    'name',
    'nameable',
    'outlierFillColor',
    'outlierIQR',
    'outlierLineColor',
    'plugins',
    'publishes',
    'raw',
    'reference',
    'renderTo',
    'ripple',
    'session',
    'shareableName',
    'showOutliers',
    'spotRadius',
    'style',
    'target',
    'targetColor',
    'tipTpl',
    'tooltipPrefix',
    'tooltipSkipNull',
    'tooltipSuffix',
    'touchAction',
    'twoWayBindable',
    'ui',
    'userCls',
    'values',
    'viewModel',
    'whiskerColor',
    'width',
    'platformConfig',
    'responsiveConfig',
    'fitToParent',
    'config'
];
  public static EVENTS: any[] = [
		{name:'beforedisabledchange',parameters:'sender,value,oldValue,undefined'},
		{name:'beforeheightchange',parameters:'sender,value,oldValue,undefined'},
		{name:'beforehiddenchange',parameters:'sender,value,oldValue,undefined'},
		{name:'beforewidthchange',parameters:'sender,value,oldValue,undefined'},
		{name:'blur',parameters:'sparklinebox,event'},
		{name:'disabledchange',parameters:'sender,value,oldValue'},
		{name:'focus',parameters:'sparklinebox,event'},
		{name:'focusenter',parameters:'sparklinebox,event'},
		{name:'focusleave',parameters:'sparklinebox,event'},
		{name:'heightchange',parameters:'sender,value,oldValue'},
		{name:'hiddenchange',parameters:'sender,value,oldValue'},
		{name:'widthchange',parameters:'sender,value,oldValue'},
		{name:'ready',parameters:''}
];
  public static EVENTNAMES: string[] = [
		'beforedisabledchange',
		'beforeheightchange',
		'beforehiddenchange',
		'beforewidthchange',
		'blur',
		'disabledchange',
		'focus',
		'focusenter',
		'focusleave',
		'heightchange',
		'hiddenchange',
		'widthchange',
		'ready'
];
}
@Component({
  selector: 'sparklinebox', 
  inputs: sparklineboxMetaData.PROPERTIES,
  outputs: sparklineboxMetaData.EVENTNAMES,
  providers: [{provide: base, useExisting: forwardRef(() => ExtSparklineboxComponent)}],
  template: '<ng-template #dynamic></ng-template>'
})
export class ExtSparklineboxComponent extends base implements OnInit,AfterContentInit,OnChanges {
  constructor(eRef:ElementRef) {super(eRef,sparklineboxMetaData)}
  public ngOnInit() {this.baseOnInit(sparklineboxMetaData)}
  //public ngOnChanges(changes: SimpleChanges) {this.baseOnChanges(changes)}
  public ngAfterContentInit() {
    this.baseAfterContentInit()
    this['ready'].emit(this)
    }
}