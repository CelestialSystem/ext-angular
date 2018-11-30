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
export class filebuttonMetaData {
  public static XTYPE: string = 'filebutton';
  public static PROPERTIESOBJECT: any = {
    "activeCounter": "Number",
    "alignOnScroll": "Boolean",
    "alignTarget": "String",
    "allowDepress": "Boolean",
    "alwaysOnTop": "Boolean/Number",
    "anchor": "String",
    "animateShadow": "Boolean",
    "ariaAttributes": "Object",
    "ariaDescribedBy": "String",
    "ariaLabel": "String",
    "ariaLabelledBy": "String",
    "arrowAlign": "String",
    "arrowCls": "String",
    "arrowVisible": "Boolean",
    "autoEl": "String/Object",
    "autoRender": "Boolean/String/HTMLElement/Ext.dom.Element",
    "autoScroll": "Boolean",
    "autoShow": "Boolean",
    "baseCls": "String",
    "baseParams": "Object",
    "bind": "Object/String",
    "border": "Number/String/Boolean",
    "childEls": "Object/String[]/Object[]",
    "clickEvent": "String",
    "cls": "String",
    "columnWidth": "Number",
    "componentCls": "String",
    "componentLayout": "String/Object",
    "constrain": "Boolean",
    "constraintInsets": "Object/String",
    "constrainTo": "Ext.util.Region/Ext.dom.Element",
    "contentEl": "String",
    "controller": "String/Object/Ext.app.ViewController",
    "data": "Object",
    "defaultAlign": "String",
    "defaultListenerScope": "Boolean",
    "destroyMenu": "Boolean",
    "disabled": "Boolean",
    "disabledCls": "String",
    "dock": "'top'/'bottom'/'left'/'right'",
    "draggable": "Boolean/Object",
    "enableToggle": "Boolean",
    "fixed": "Boolean",
    "flex": "Number",
    "floating": "Boolean",
    "focusCls": "String",
    "focusOnToFront": "Boolean",
    "formBind": "Boolean",
    "frame": "Boolean",
    "glyph": "Number/String",
    "handleMouseEvents": "Boolean",
    "handler": "Function/String",
    "height": "Number|String",
    "hidden": "Boolean",
    "hideMode": "String",
    "href": "String",
    "hrefTarget": "String",
    "html": "String/Object",
    "icon": "String",
    "iconAlign": "String",
    "iconCls": "String",
    "id": "String",
    "itemId": "String",
    "keyMap": "Object",
    "keyMapEnabled": "Boolean",
    "keyMapTarget": "String",
    "liquidLayout": "Boolean",
    "listeners": "Object",
    "liveDrag": "Boolean",
    "loader": "Ext.ComponentLoader/Object",
    "margin": "Number/String",
    "maskDefaults": "Object",
    "maskElement": "String",
    "maxHeight": "Number",
    "maxWidth": "Number",
    "menu": "Ext.menu.Menu/String/Object",
    "menuAlign": "String",
    "minHeight": "Number",
    "minWidth": "Number",
    "modal": "Boolean",
    "modelValidation": "Boolean",
    "nameable": "Boolean",
    "overCls": "String",
    "overflowText": "String",
    "overflowX": "String",
    "overflowY": "String",
    "padding": "Number/String",
    "params": "Object",
    "plugins": "Array/Ext.enums.Plugin/Object/Ext.plugin.Abstract",
    "pressed": "Boolean",
    "preventDefault": "Boolean",
    "publishes": "String/String[]/Object",
    "reference": "String",
    "region": "'north'/'south'/'east'/'west'/'center'",
    "renderConfig": "Object",
    "renderData": "Object",
    "renderSelectors": "Object",
    "renderTo": "String/HTMLElement/Ext.dom.Element",
    "renderTpl": "Ext.XTemplate/String/String[]",
    "repeat": "Boolean/Object",
    "resizable": "Boolean/Object",
    "resizeHandles": "String",
    "saveDelay": "Number",
    "scale": "'small'/'medium'/'large'",
    "scope": "Object",
    "scrollable": "Boolean/String/Object",
    "session": "Boolean/Object/Ext.data.Session",
    "shadow": "String/Boolean",
    "shadowOffset": "Number",
    "shareableName": "Boolean",
    "shim": "Boolean",
    "showEmptyMenu": "Boolean",
    "shrinkWrap": "Boolean/Number",
    "stateEvents": "String[]",
    "stateful": "Boolean/Object",
    "stateId": "String",
    "style": "String/Object",
    "tabIndex": "Number",
    "text": "String",
    "textAlign": "String",
    "toFrontOnShow": "Boolean",
    "toggleGroup": "String",
    "toggleHandler": "Function/String",
    "tooltip": "String/Object",
    "tooltipType": "String",
    "touchAction": "Object",
    "tpl": "Ext.XTemplate/Ext.Template/String/String[]",
    "tplWriteMode": "String",
    "twoWayBindable": "String/String[]/Object",
    "ui": "String",
    "uiCls": "String[]",
    "userCls": "String/String[]",
    "value": "String/Number",
    "viewModel": "String/Object/Ext.app.ViewModel",
    "weight": "Number",
    "width": "Number|String",
    "xtype": "Ext.enums.Widget",
    "platformConfig": "Object",
    "responsiveConfig": "Object",
    "fitToParent": "Boolean",
    "config": "Object",
};
  public static PROPERTIES: string[] = [
    'activeCounter',
    'alignOnScroll',
    'alignTarget',
    'allowDepress',
    'alwaysOnTop',
    'anchor',
    'animateShadow',
    'ariaAttributes',
    'ariaDescribedBy',
    'ariaLabel',
    'ariaLabelledBy',
    'arrowAlign',
    'arrowCls',
    'arrowVisible',
    'autoEl',
    'autoRender',
    'autoScroll',
    'autoShow',
    'baseCls',
    'baseParams',
    'bind',
    'border',
    'childEls',
    'clickEvent',
    'cls',
    'columnWidth',
    'componentCls',
    'componentLayout',
    'constrain',
    'constraintInsets',
    'constrainTo',
    'contentEl',
    'controller',
    'data',
    'defaultAlign',
    'defaultListenerScope',
    'destroyMenu',
    'disabled',
    'disabledCls',
    'dock',
    'draggable',
    'enableToggle',
    'fixed',
    'flex',
    'floating',
    'focusCls',
    'focusOnToFront',
    'formBind',
    'frame',
    'glyph',
    'handleMouseEvents',
    'handler',
    'height',
    'hidden',
    'hideMode',
    'href',
    'hrefTarget',
    'html',
    'icon',
    'iconAlign',
    'iconCls',
    'id',
    'itemId',
    'keyMap',
    'keyMapEnabled',
    'keyMapTarget',
    'liquidLayout',
    'listeners',
    'liveDrag',
    'loader',
    'margin',
    'maskDefaults',
    'maskElement',
    'maxHeight',
    'maxWidth',
    'menu',
    'menuAlign',
    'minHeight',
    'minWidth',
    'modal',
    'modelValidation',
    'nameable',
    'overCls',
    'overflowText',
    'overflowX',
    'overflowY',
    'padding',
    'params',
    'plugins',
    'pressed',
    'preventDefault',
    'publishes',
    'reference',
    'region',
    'renderConfig',
    'renderData',
    'renderSelectors',
    'renderTo',
    'renderTpl',
    'repeat',
    'resizable',
    'resizeHandles',
    'saveDelay',
    'scale',
    'scope',
    'scrollable',
    'session',
    'shadow',
    'shadowOffset',
    'shareableName',
    'shim',
    'showEmptyMenu',
    'shrinkWrap',
    'stateEvents',
    'stateful',
    'stateId',
    'style',
    'tabIndex',
    'text',
    'textAlign',
    'toFrontOnShow',
    'toggleGroup',
    'toggleHandler',
    'tooltip',
    'tooltipType',
    'touchAction',
    'tpl',
    'tplWriteMode',
    'twoWayBindable',
    'ui',
    'uiCls',
    'userCls',
    'value',
    'viewModel',
    'weight',
    'width',
    'xtype',
    'platformConfig',
    'responsiveConfig',
    'fitToParent',
    'config'
];
  public static EVENTS: any[] = [
		{name:'activate',parameters:'filebutton'},
		{name:'added',parameters:'filebutton,container,pos'},
		{name:'afterlayoutanimation',parameters:'filebutton'},
		{name:'afterrender',parameters:'filebutton'},
		{name:'beforeactivate',parameters:'filebutton'},
		{name:'beforedeactivate',parameters:'filebutton'},
		{name:'beforedestroy',parameters:'filebutton'},
		{name:'beforehide',parameters:'filebutton'},
		{name:'beforerender',parameters:'filebutton'},
		{name:'beforeshow',parameters:'filebutton'},
		{name:'beforestaterestore',parameters:'filebutton,state'},
		{name:'beforestatesave',parameters:'filebutton,state'},
		{name:'beforetoggle',parameters:'filebutton,pressed'},
		{name:'blur',parameters:'filebutton,event'},
		{name:'boxready',parameters:'filebutton,width,height'},
		{name:'click',parameters:'filebutton,e'},
		{name:'deactivate',parameters:'filebutton'},
		{name:'destroy',parameters:'filebutton'},
		{name:'disable',parameters:'filebutton'},
		{name:'enable',parameters:'filebutton'},
		{name:'focus',parameters:'filebutton,event'},
		{name:'focusenter',parameters:'filebutton,event'},
		{name:'focusleave',parameters:'filebutton,event'},
		{name:'glyphchange',parameters:'filebutton,newGlyph,oldGlyph'},
		{name:'hide',parameters:'filebutton'},
		{name:'iconchange',parameters:'filebutton,oldIcon,newIcon'},
		{name:'menuhide',parameters:'filebutton,menu'},
		{name:'menushow',parameters:'filebutton,menu'},
		{name:'menutriggerout',parameters:'filebutton,menu,e'},
		{name:'menutriggerover',parameters:'filebutton,menu,e'},
		{name:'mouseout',parameters:'filebutton,e'},
		{name:'mouseover',parameters:'filebutton,e'},
		{name:'move',parameters:'filebutton,x,y'},
		{name:'removed',parameters:'filebutton,ownerCt'},
		{name:'render',parameters:'filebutton'},
		{name:'resize',parameters:'filebutton,width,height,oldWidth,oldHeight'},
		{name:'show',parameters:'filebutton'},
		{name:'staterestore',parameters:'filebutton,state'},
		{name:'statesave',parameters:'filebutton,state'},
		{name:'textchange',parameters:'filebutton,oldText,newText'},
		{name:'toggle',parameters:'filebutton,pressed'},
		{name:'ready',parameters:''}
];
  public static EVENTNAMES: string[] = [
		'activate',
		'added',
		'afterlayoutanimation',
		'afterrender',
		'beforeactivate',
		'beforedeactivate',
		'beforedestroy',
		'beforehide',
		'beforerender',
		'beforeshow',
		'beforestaterestore',
		'beforestatesave',
		'beforetoggle',
		'blur',
		'boxready',
		'click',
		'deactivate',
		'destroy',
		'disable',
		'enable',
		'focus',
		'focusenter',
		'focusleave',
		'glyphchange',
		'hide',
		'iconchange',
		'menuhide',
		'menushow',
		'menutriggerout',
		'menutriggerover',
		'mouseout',
		'mouseover',
		'move',
		'removed',
		'render',
		'resize',
		'show',
		'staterestore',
		'statesave',
		'textchange',
		'toggle',
		'ready'
];
}
@Component({
  selector: 'filebutton', 
  inputs: filebuttonMetaData.PROPERTIES,
  outputs: filebuttonMetaData.EVENTNAMES,
  providers: [{provide: base, useExisting: forwardRef(() => ExtFilebuttonComponent)}],
  template: '<ng-template #dynamic></ng-template>'
})
export class ExtFilebuttonComponent extends base implements OnInit,AfterContentInit,OnChanges {
  constructor(eRef:ElementRef) {super(eRef,filebuttonMetaData)}
  public ngOnInit() {this.baseOnInit(filebuttonMetaData)}
  //public ngOnChanges(changes: SimpleChanges) {this.baseOnChanges(changes)}
  public ngAfterContentInit() {
    this.baseAfterContentInit()
    this['ready'].emit(this)
    }
}