/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Host, Optional, SkipSelf, Component, ElementRef, forwardRef } from '@angular/core';
import { base } from './base';
export class datecolumnMetaData {
}
datecolumnMetaData.XTYPE = 'datecolumn';
datecolumnMetaData.PROPERTIES = [
    'activeChildTabIndex',
    'activeItem',
    'align',
    'allowFocusingDisabledChildren',
    'alwaysOnTop',
    'ariaAttributes',
    'ariaDescribedBy',
    'ariaLabel',
    'ariaLabelledBy',
    'autoDestroy',
    'autoSize',
    'axisLock',
    'bind',
    'border',
    'bottom',
    'cardSwitchAnimation',
    'cell',
    'centered',
    'cls',
    'columns',
    'computedWidth',
    'constrainAlign',
    'contentEl',
    'control',
    'controller',
    'data',
    'dataIndex',
    'defaultColumnUI',
    'defaultEditor',
    'defaultFocus',
    'defaultListenerScope',
    'defaults',
    'defaultToolWeights',
    'defaultType',
    'defaultWidth',
    'depends',
    'disabled',
    'displayed',
    'docked',
    'draggable',
    'editable',
    'editor',
    'enterAnimation',
    'eventHandlers',
    'exitAnimation',
    'exportRenderer',
    'exportStyle',
    'exportSummaryRenderer',
    'filter',
    'flex',
    'floated',
    'focusableContainer',
    'focusCls',
    'format',
    'formatter',
    'fullscreen',
    'groupable',
    'grouper',
    'groupHeaderTpl',
    'height',
    'hidden',
    'hideable',
    'hideAnimation',
    'hideMode',
    'hideOnMaskTap',
    'hideShowMenuItem',
    'html',
    'id',
    'ignore',
    'ignoreExport',
    'inactiveChildTabIndex',
    'innerCls',
    'instanceCls',
    'itemId',
    'items',
    'keyMap',
    'keyMapEnabled',
    'keyMapTarget',
    'layout',
    'left',
    'listeners',
    'locked',
    'manageBorders',
    'margin',
    'masked',
    'maxHeight',
    'maxWidth',
    'menu',
    'menuDisabled',
    'minHeight',
    'minWidth',
    'modal',
    'modelValidation',
    'name',
    'nameable',
    'nameHolder',
    'padding',
    'plugins',
    'publishes',
    'record',
    'reference',
    'referenceHolder',
    'relative',
    'renderer',
    'renderTo',
    'reserveScrollbar',
    'resetFocusPosition',
    'resizable',
    'right',
    'ripple',
    'scope',
    'scratchCell',
    'scrollable',
    'selfAlign',
    'session',
    'shadow',
    'shareableName',
    'shim',
    'showAnimation',
    'sortable',
    'sorter',
    'stateful',
    'statefulDefaults',
    'stateId',
    'style',
    'summary',
    'summaryCell',
    'summaryDataIndex',
    'summaryFormatter',
    'summaryRenderer',
    'summaryType',
    'tabIndex',
    'text',
    'toFrontOnShow',
    'toolDefaults',
    'tools',
    'tooltip',
    'top',
    'touchAction',
    'tpl',
    'tplWriteMode',
    'translatable',
    'twoWayBindable',
    'ui',
    'userCls',
    'userSelectable',
    'verticalOverflow',
    'viewModel',
    'weight',
    'weighted',
    'width',
    'x',
    'xtype',
    'y',
    'zIndex',
    'platformConfig',
    'responsiveConfig',
    'align',
    'fitToParent',
    'config'
];
datecolumnMetaData.EVENTS = [
    { name: 'activate', parameters: 'newActiveItem,datecolumn,oldActiveItem' },
    { name: 'activeItemchange', parameters: 'sender,value,oldValue' },
    { name: 'add', parameters: 'datecolumn,item,index' },
    { name: 'added', parameters: 'sender,container,index' },
    { name: 'beforeactiveItemchange', parameters: 'sender,value,oldValue,undefined' },
    { name: 'beforebottomchange', parameters: 'sender,value,oldValue,undefined' },
    { name: 'beforecenteredchange', parameters: 'sender,value,oldValue,undefined' },
    { name: 'beforedisabledchange', parameters: 'sender,value,oldValue,undefined' },
    { name: 'beforedockedchange', parameters: 'sender,value,oldValue,undefined' },
    { name: 'beforeheightchange', parameters: 'sender,value,oldValue,undefined' },
    { name: 'beforehiddenchange', parameters: 'sender,value,oldValue,undefined' },
    { name: 'beforehide', parameters: 'sender' },
    { name: 'beforeleftchange', parameters: 'sender,value,oldValue,undefined' },
    { name: 'beforemaxHeightchange', parameters: 'sender,value,oldValue,undefined' },
    { name: 'beforemaxWidthchange', parameters: 'sender,value,oldValue,undefined' },
    { name: 'beforeminHeightchange', parameters: 'sender,value,oldValue,undefined' },
    { name: 'beforeminWidthchange', parameters: 'sender,value,oldValue,undefined' },
    { name: 'beforeorientationchange', parameters: '' },
    { name: 'beforerightchange', parameters: 'sender,value,oldValue,undefined' },
    { name: 'beforescrollablechange', parameters: 'sender,value,oldValue,undefined' },
    { name: 'beforeshow', parameters: 'sender' },
    { name: 'beforetofront', parameters: 'datecolumn' },
    { name: 'beforetopchange', parameters: 'sender,value,oldValue,undefined' },
    { name: 'beforewidthchange', parameters: 'sender,value,oldValue,undefined' },
    { name: 'blur', parameters: 'datecolumn,event' },
    { name: 'bottomchange', parameters: 'sender,value,oldValue' },
    { name: 'centeredchange', parameters: 'sender,value,oldValue' },
    { name: 'deactivate', parameters: 'oldActiveItem,datecolumn,newActiveItem' },
    { name: 'destroy', parameters: '' },
    { name: 'disabledchange', parameters: 'sender,value,oldValue' },
    { name: 'dockedchange', parameters: 'sender,value,oldValue' },
    { name: 'erased', parameters: 'sender' },
    { name: 'floatingchange', parameters: 'sender,positioned' },
    { name: 'focus', parameters: 'datecolumn,event' },
    { name: 'focusenter', parameters: 'datecolumn,event' },
    { name: 'focusleave', parameters: 'datecolumn,event' },
    { name: 'fullscreen', parameters: 'sender' },
    { name: 'heightchange', parameters: 'sender,value,oldValue' },
    { name: 'hiddenchange', parameters: 'sender,value,oldValue' },
    { name: 'hide', parameters: 'sender' },
    { name: 'initialize', parameters: 'sender' },
    { name: 'leftchange', parameters: 'sender,value,oldValue' },
    { name: 'maxHeightchange', parameters: 'sender,value,oldValue' },
    { name: 'maxWidthchange', parameters: 'sender,value,oldValue' },
    { name: 'minHeightchange', parameters: 'sender,value,oldValue' },
    { name: 'minWidthchange', parameters: 'sender,value,oldValue' },
    { name: 'move', parameters: 'datecolumn,item,toIndex,fromIndex' },
    { name: 'moved', parameters: 'sender,container,toIndex,fromIndex' },
    { name: 'orientationchange', parameters: '' },
    { name: 'painted', parameters: 'sender,element' },
    { name: 'positionedchange', parameters: 'sender,positioned' },
    { name: 'remove', parameters: 'datecolumn,item,index' },
    { name: 'removed', parameters: 'sender,container,index' },
    { name: 'renderedchange', parameters: 'datecolumn,item,rendered' },
    { name: 'resize', parameters: 'element,info' },
    { name: 'rightchange', parameters: 'sender,value,oldValue' },
    { name: 'scrollablechange', parameters: 'sender,value,oldValue' },
    { name: 'show', parameters: 'sender' },
    { name: 'tofront', parameters: 'datecolumn' },
    { name: 'topchange', parameters: 'sender,value,oldValue' },
    { name: 'updatedata', parameters: 'sender,newData' },
    { name: 'widthchange', parameters: 'sender,value,oldValue' },
    { name: 'ready', parameters: '' }
];
datecolumnMetaData.EVENTNAMES = [
    'activate',
    'activeItemchange',
    'add',
    'added',
    'beforeactiveItemchange',
    'beforebottomchange',
    'beforecenteredchange',
    'beforedisabledchange',
    'beforedockedchange',
    'beforeheightchange',
    'beforehiddenchange',
    'beforehide',
    'beforeleftchange',
    'beforemaxHeightchange',
    'beforemaxWidthchange',
    'beforeminHeightchange',
    'beforeminWidthchange',
    'beforeorientationchange',
    'beforerightchange',
    'beforescrollablechange',
    'beforeshow',
    'beforetofront',
    'beforetopchange',
    'beforewidthchange',
    'blur',
    'bottomchange',
    'centeredchange',
    'deactivate',
    'destroy',
    'disabledchange',
    'dockedchange',
    'erased',
    'floatingchange',
    'focus',
    'focusenter',
    'focusleave',
    'fullscreen',
    'heightchange',
    'hiddenchange',
    'hide',
    'initialize',
    'leftchange',
    'maxHeightchange',
    'maxWidthchange',
    'minHeightchange',
    'minWidthchange',
    'move',
    'moved',
    'orientationchange',
    'painted',
    'positionedchange',
    'remove',
    'removed',
    'renderedchange',
    'resize',
    'rightchange',
    'scrollablechange',
    'show',
    'tofront',
    'topchange',
    'updatedata',
    'widthchange',
    'ready'
];
if (false) {
    /** @type {?} */
    datecolumnMetaData.XTYPE;
    /** @type {?} */
    datecolumnMetaData.PROPERTIES;
    /** @type {?} */
    datecolumnMetaData.EVENTS;
    /** @type {?} */
    datecolumnMetaData.EVENTNAMES;
}
export class ExtDatecolumnComponent extends base {
    /**
     * @param {?} eRef
     * @param {?} hostComponent
     */
    constructor(eRef, hostComponent) {
        super(eRef.nativeElement, datecolumnMetaData, hostComponent);
        this.hostComponent = hostComponent;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.baseOnInit(datecolumnMetaData);
    }
    /**
     * @return {?}
     */
    ngAfterContentInit() {
        this.baseAfterContentInit();
        //this['ready'].emit(this)
    }
}
ExtDatecolumnComponent.decorators = [
    { type: Component, args: [{
                selector: 'datecolumn',
                inputs: datecolumnMetaData.PROPERTIES,
                outputs: datecolumnMetaData.EVENTNAMES,
                providers: [{ provide: base, useExisting: forwardRef(() => ExtDatecolumnComponent) }],
                template: '<ng-template></ng-template>'
            }] }
];
/** @nocollapse */
ExtDatecolumnComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: base, decorators: [{ type: Host }, { type: Optional }, { type: SkipSelf }] }
];
if (false) {
    /** @type {?} */
    ExtDatecolumnComponent.prototype.hostComponent;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXh0LWRhdGVjb2x1bW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNlbmNoYS9leHQtYW5ndWxhci8iLCJzb3VyY2VzIjpbImxpYi9leHQtZGF0ZWNvbHVtbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFFTCxJQUFJLEVBQ0osUUFBUSxFQUNSLFFBQVEsRUFLUixTQUFTLEVBQ1QsVUFBVSxFQUNWLFVBQVUsRUFDWCxNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sUUFBUSxDQUFDO0FBQzlCLE1BQU0sT0FBTyxrQkFBa0I7O0FBQ2Ysd0JBQUssR0FBVyxZQUFZLENBQUM7QUFDN0IsNkJBQVUsR0FBYTtJQUNuQyxxQkFBcUI7SUFDckIsWUFBWTtJQUNaLE9BQU87SUFDUCwrQkFBK0I7SUFDL0IsYUFBYTtJQUNiLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsV0FBVztJQUNYLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2IsVUFBVTtJQUNWLFVBQVU7SUFDVixNQUFNO0lBQ04sUUFBUTtJQUNSLFFBQVE7SUFDUixxQkFBcUI7SUFDckIsTUFBTTtJQUNOLFVBQVU7SUFDVixLQUFLO0lBQ0wsU0FBUztJQUNULGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsV0FBVztJQUNYLFNBQVM7SUFDVCxZQUFZO0lBQ1osTUFBTTtJQUNOLFdBQVc7SUFDWCxpQkFBaUI7SUFDakIsZUFBZTtJQUNmLGNBQWM7SUFDZCxzQkFBc0I7SUFDdEIsVUFBVTtJQUNWLG9CQUFvQjtJQUNwQixhQUFhO0lBQ2IsY0FBYztJQUNkLFNBQVM7SUFDVCxVQUFVO0lBQ1YsV0FBVztJQUNYLFFBQVE7SUFDUixXQUFXO0lBQ1gsVUFBVTtJQUNWLFFBQVE7SUFDUixnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixRQUFRO0lBQ1IsTUFB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LFlBQ0UsSUFBZSxFQUF5QyxhQUFvQjtRQUMxRSxLQUFLLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBQyxrQkFBa0IsRUFBQyxhQUFhLENBQUMsQ0FBQTtRQURKLGtCQUFhLEdBQWIsYUFBYSxDQUFPO0lBRTVFLENBQUM7Ozs7SUFDSSxRQUFRO1FBQ2IsSUFBSSxDQUFDLFVBQVUsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFBO0lBQ3JDLENBQUM7Ozs7SUFDTSxrQkFBa0I7UUFDdkIsSUFBSSxDQUFDLG9CQUFvQixFQUFFLENBQUE7UUFDM0IsMEJBQTBCO0lBQzVCLENBQUM7OztZQWxCRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLFlBQVk7Z0JBQ3RCLE1BQU0sRUFBRSxrQkFBa0IsQ0FBQyxVQUFVO2dCQUNyQyxPQUFPLEVBQUUsa0JBQWtCLENBQUMsVUFBVTtnQkFDdEMsU0FBUyxFQUFFLENBQUMsRUFBQyxPQUFPLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRSxVQUFVLENBQUMsR0FBRyxFQUFFLENBQUMsc0JBQXNCLENBQUMsRUFBQyxDQUFDO2dCQUNuRixRQUFRLEVBQUUsNkJBQTZCO2FBQ3hDOzs7O1lBalRDLFVBQVU7WUFHSCxJQUFJLHVCQWlUUyxJQUFJLFlBQUksUUFBUSxZQUFJLFFBQVE7Ozs7SUFBN0IsK0NBQTJEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgSW5qZWN0YWJsZSxcbiAgSG9zdCxcbiAgT3B0aW9uYWwsXG4gIFNraXBTZWxmLFxuICBPdXRwdXQsXG4gIE9uSW5pdCxcbiAgQWZ0ZXJDb250ZW50SW5pdCxcbiAgT25DaGFuZ2VzLFxuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIGZvcndhcmRSZWZcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBiYXNlIH0gZnJvbSAnLi9iYXNlJztcbmV4cG9ydCBjbGFzcyBkYXRlY29sdW1uTWV0YURhdGEge1xuICBwdWJsaWMgc3RhdGljIFhUWVBFOiBzdHJpbmcgPSAnZGF0ZWNvbHVtbic7XG4gIHB1YmxpYyBzdGF0aWMgUFJPUEVSVElFUzogc3RyaW5nW10gPSBbXG4gICAgJ2FjdGl2ZUNoaWxkVGFiSW5kZXgnLFxuICAgICdhY3RpdmVJdGVtJyxcbiAgICAnYWxpZ24nLFxuICAgICdhbGxvd0ZvY3VzaW5nRGlzYWJsZWRDaGlsZHJlbicsXG4gICAgJ2Fsd2F5c09uVG9wJyxcbiAgICAnYXJpYUF0dHJpYnV0ZXMnLFxuICAgICdhcmlhRGVzY3JpYmVkQnknLFxuICAgICdhcmlhTGFiZWwnLFxuICAgICdhcmlhTGFiZWxsZWRCeScsXG4gICAgJ2F1dG9EZXN0cm95JyxcbiAgICAnYXV0b1NpemUnLFxuICAgICdheGlzTG9jaycsXG4gICAgJ2JpbmQnLFxuICAgICdib3JkZXInLFxuICAgICdib3R0b20nLFxuICAgICdjYXJkU3dpdGNoQW5pbWF0aW9uJyxcbiAgICAnY2VsbCcsXG4gICAgJ2NlbnRlcmVkJyxcbiAgICAnY2xzJyxcbiAgICAnY29sdW1ucycsXG4gICAgJ2NvbXB1dGVkV2lkdGgnLFxuICAgICdjb25zdHJhaW5BbGlnbicsXG4gICAgJ2NvbnRlbnRFbCcsXG4gICAgJ2NvbnRyb2wnLFxuICAgICdjb250cm9sbGVyJyxcbiAgICAnZGF0YScsXG4gICAgJ2RhdGFJbmRleCcsXG4gICAgJ2RlZmF1bHRDb2x1bW5VSScsXG4gICAgJ2RlZmF1bHRFZGl0b3InLFxuICAgICdkZWZhdWx0Rm9jdXMnLFxuICAgICdkZWZhdWx0TGlzdGVuZXJTY29wZScsXG4gICAgJ2RlZmF1bHRzJyxcbiAgICAnZGVmYXVsdFRvb2xXZWlnaHRzJyxcbiAgICAnZGVmYXVsdFR5cGUnLFxuICAgICdkZWZhdWx0V2lkdGgnLFxuICAgICdkZXBlbmRzJyxcbiAgICAnZGlzYWJsZWQnLFxuICAgICdkaXNwbGF5ZWQnLFxuICAgICdkb2NrZWQnLFxuICAgICdkcmFnZ2FibGUnLFxuICAgICdlZGl0YWJsZScsXG4gICAgJ2VkaXRvcicsXG4gICAgJ2VudGVyQW5pbWF0aW9uJyxcbiAgICAnZXZlbnRIYW5kbGVycycsXG4gICAgJ2V4aXRBbmltYXRpb24nLFxuICAgICdleHBvcnRSZW5kZXJlcicsXG4gICAgJ2V4cG9ydFN0eWxlJyxcbiAgICAnZXhwb3J0U3VtbWFyeVJlbmRlcmVyJyxcbiAgICAnZmlsdGVyJyxcbiAgICAnZmxleCcsXG4gICAgJ2Zsb2F0ZWQnLFxuICAgICdmb2N1c2FibGVDb250YWluZXInLFxuICAgICdmb2N1c0NscycsXG4gICAgJ2Zvcm1hdCcsXG4gICAgJ2Zvcm1hdHRlcicsXG4gICAgJ2Z1bGxzY3JlZW4nLFxuICAgICdncm91cGFibGUnLFxuICAgICdncm91cGVyJyxcbiAgICAnZ3JvdXBIZWFkZXJUcGwnLFxuICAgICdoZWlnaHQnLFxuICAgICdoaWRkZW4nLFxuICAgICdoaWRlYWJsZScsXG4gICAgJ2hpZGVBbmltYXRpb24nLFxuICAgICdoaWRlTW9kZScsXG4gICAgJ2hpZGVPbk1hc2tUYXAnLFxuICAgICdoaWRlU2hvd01lbnVJdGVtJyxcbiAgICAnaHRtbCcsXG4gICAgJ2lkJyxcbiAgICAnaWdub3JlJyxcbiAgICAnaWdub3JlRXhwb3J0JyxcbiAgICAnaW5hY3RpdmVDaGlsZFRhYkluZGV4JyxcbiAgICAnaW5uZXJDbHMnLFxuICAgICdpbnN0YW5jZUNscycsXG4gICAgJ2l0ZW1JZCcsXG4gICAgJ2l0ZW1zJyxcbiAgICAna2V5TWFwJyxcbiAgICAna2V5TWFwRW5hYmxlZCcsXG4gICAgJ2tleU1hcFRhcmdldCcsXG4gICAgJ2xheW91dCcsXG4gICAgJ2xlZnQnLFxuICAgICdsaXN0ZW5lcnMnLFxuICAgICdsb2NrZWQnLFxuICAgICdtYW5hZ2VCb3JkZXJzJyxcbiAgICAnbWFyZ2luJyxcbiAgICAnbWFza2VkJyxcbiAgICAnbWF4SGVpZ2h0JyxcbiAgICAnbWF4V2lkdGgnLFxuICAgICdtZW51JyxcbiAgICAnbWVudURpc2FibGVkJyxcbiAgICAnbWluSGVpZ2h0JyxcbiAgICAnbWluV2lkdGgnLFxuICAgICdtb2RhbCcsXG4gICAgJ21vZGVsVmFsaWRhdGlvbicsXG4gICAgJ25hbWUnLFxuICAgICduYW1lYWJsZScsXG4gICAgJ25hbWVIb2xkZXInLFxuICAgICdwYWRkaW5nJyxcbiAgICAncGx1Z2lucycsXG4gICAgJ3B1Ymxpc2hlcycsXG4gICAgJ3JlY29yZCcsXG4gICAgJ3JlZmVyZW5jZScsXG4gICAgJ3JlZmVyZW5jZUhvbGRlcicsXG4gICAgJ3JlbGF0aXZlJyxcbiAgICAncmVuZGVyZXInLFxuICAgICdyZW5kZXJUbycsXG4gICAgJ3Jlc2VydmVTY3JvbGxiYXInLFxuICAgICdyZXNldEZvY3VzUG9zaXRpb24nLFxuICAgICdyZXNpemFibGUnLFxuICAgICdyaWdodCcsXG4gICAgJ3JpcHBsZScsXG4gICAgJ3Njb3BlJyxcbiAgICAnc2NyYXRjaENlbGwnLFxuICAgICdzY3JvbGxhYmxlJyxcbiAgICAnc2VsZkFsaWduJyxcbiAgICAnc2Vzc2lvbicsXG4gICAgJ3NoYWRvdycsXG4gICAgJ3NoYXJlYWJsZU5hbWUnLFxuICAgICdzaGltJyxcbiAgICAnc2hvd0FuaW1hdGlvbicsXG4gICAgJ3NvcnRhYmxlJyxcbiAgICAnc29ydGVyJyxcbiAgICAnc3RhdGVmdWwnLFxuICAgICdzdGF0ZWZ1bERlZmF1bHRzJyxcbiAgICAnc3RhdGVJZCcsXG4gICAgJ3N0eWxlJyxcbiAgICAnc3VtbWFyeScsXG4gICAgJ3N1bW1hcnlDZWxsJyxcbiAgICAnc3VtbWFyeURhdGFJbmRleCcsXG4gICAgJ3N1bW1hcnlGb3JtYXR0ZXInLFxuICAgICdzdW1tYXJ5UmVuZGVyZXInLFxuICAgICdzdW1tYXJ5VHlwZScsXG4gICAgJ3RhYkluZGV4JyxcbiAgICAndGV4dCcsXG4gICAgJ3RvRnJvbnRPblNob3cnLFxuICAgICd0b29sRGVmYXVsdHMnLFxuICAgICd0b29scycsXG4gICAgJ3Rvb2x0aXAnLFxuICAgICd0b3AnLFxuICAgICd0b3VjaEFjdGlvbicsXG4gICAgJ3RwbCcsXG4gICAgJ3RwbFdyaXRlTW9kZScsXG4gICAgJ3RyYW5zbGF0YWJsZScsXG4gICAgJ3R3b1dheUJpbmRhYmxlJyxcbiAgICAndWknLFxuICAgICd1c2VyQ2xzJyxcbiAgICAndXNlclNlbGVjdGFibGUnLFxuICAgICd2ZXJ0aWNhbE92ZXJmbG93JyxcbiAgICAndmlld01vZGVsJyxcbiAgICAnd2VpZ2h0JyxcbiAgICAnd2VpZ2h0ZWQnLFxuICAgICd3aWR0aCcsXG4gICAgJ3gnLFxuICAgICd4dHlwZScsXG4gICAgJ3knLFxuICAgICd6SW5kZXgnLFxuICAgICdwbGF0Zm9ybUNvbmZpZycsXG4gICAgJ3Jlc3BvbnNpdmVDb25maWcnLFxuICAgICdhbGlnbicsXG4gICAgJ2ZpdFRvUGFyZW50JyxcbiAgICAnY29uZmlnJ1xuXTtcbiAgcHVibGljIHN0YXRpYyBFVkVOVFM6IGFueVtdID0gW1xuXHRcdHtuYW1lOidhY3RpdmF0ZScscGFyYW1ldGVyczonbmV3QWN0aXZlSXRlbSxkYXRlY29sdW1uLG9sZEFjdGl2ZUl0ZW0nfSxcblx0XHR7bmFtZTonYWN0aXZlSXRlbWNoYW5nZScscGFyYW1ldGVyczonc2VuZGVyLHZhbHVlLG9sZFZhbHVlJ30sXG5cdFx0e25hbWU6J2FkZCcscGFyYW1ldGVyczonZGF0ZWNvbHVtbixpdGVtLGluZGV4J30sXG5cdFx0e25hbWU6J2FkZGVkJyxwYXJhbWV0ZXJzOidzZW5kZXIsY29udGFpbmVyLGluZGV4J30sXG5cdFx0e25hbWU6J2JlZm9yZWFjdGl2ZUl0ZW1jaGFuZ2UnLHBhcmFtZXRlcnM6J3NlbmRlcix2YWx1ZSxvbGRWYWx1ZSx1bmRlZmluZWQnfSxcblx0XHR7bmFtZTonYmVmb3JlYm90dG9tY2hhbmdlJyxwYXJhbWV0ZXJzOidzZW5kZXIsdmFsdWUsb2xkVmFsdWUsdW5kZWZpbmVkJ30sXG5cdFx0e25hbWU6J2JlZm9yZWNlbnRlcmVkY2hhbmdlJyxwYXJhbWV0ZXJzOidzZW5kZXIsdmFsdWUsb2xkVmFsdWUsdW5kZWZpbmVkJ30sXG5cdFx0e25hbWU6J2JlZm9yZWRpc2FibGVkY2hhbmdlJyxwYXJhbWV0ZXJzOidzZW5kZXIsdmFsdWUsb2xkVmFsdWUsdW5kZWZpbmVkJ30sXG5cdFx0e25hbWU6J2JlZm9yZWRvY2tlZGNoYW5nZScscGFyYW1ldGVyczonc2VuZGVyLHZhbHVlLG9sZFZhbHVlLHVuZGVmaW5lZCd9LFxuXHRcdHtuYW1lOidiZWZvcmVoZWlnaHRjaGFuZ2UnLHBhcmFtZXRlcnM6J3NlbmRlcix2YWx1ZSxvbGRWYWx1ZSx1bmRlZmluZWQnfSxcblx0XHR7bmFtZTonYmVmb3JlaGlkZGVuY2hhbmdlJyxwYXJhbWV0ZXJzOidzZW5kZXIsdmFsdWUsb2xkVmFsdWUsdW5kZWZpbmVkJ30sXG5cdFx0e25hbWU6J2JlZm9yZWhpZGUnLHBhcmFtZXRlcnM6J3NlbmRlcid9LFxuXHRcdHtuYW1lOidiZWZvcmVsZWZ0Y2hhbmdlJyxwYXJhbWV0ZXJzOidzZW5kZXIsdmFsdWUsb2xkVmFsdWUsdW5kZWZpbmVkJ30sXG5cdFx0e25hbWU6J2JlZm9yZW1heEhlaWdodGNoYW5nZScscGFyYW1ldGVyczonc2VuZGVyLHZhbHVlLG9sZFZhbHVlLHVuZGVmaW5lZCd9LFxuXHRcdHtuYW1lOidiZWZvcmVtYXhXaWR0aGNoYW5nZScscGFyYW1ldGVyczonc2VuZGVyLHZhbHVlLG9sZFZhbHVlLHVuZGVmaW5lZCd9LFxuXHRcdHtuYW1lOidiZWZvcmVtaW5IZWlnaHRjaGFuZ2UnLHBhcmFtZXRlcnM6J3NlbmRlcix2YWx1ZSxvbGRWYWx1ZSx1bmRlZmluZWQnfSxcblx0XHR7bmFtZTonYmVmb3JlbWluV2lkdGhjaGFuZ2UnLHBhcmFtZXRlcnM6J3NlbmRlcix2YWx1ZSxvbGRWYWx1ZSx1bmRlZmluZWQnfSxcblx0XHR7bmFtZTonYmVmb3Jlb3JpZW50YXRpb25jaGFuZ2UnLHBhcmFtZXRlcnM6Jyd9LFxuXHRcdHtuYW1lOidiZWZvcmVyaWdodGNoYW5nZScscGFyYW1ldGVyczonc2VuZGVyLHZhbHVlLG9sZFZhbHVlLHVuZGVmaW5lZCd9LFxuXHRcdHtuYW1lOidiZWZvcmVzY3JvbGxhYmxlY2hhbmdlJyxwYXJhbWV0ZXJzOidzZW5kZXIsdmFsdWUsb2xkVmFsdWUsdW5kZWZpbmVkJ30sXG5cdFx0e25hbWU6J2JlZm9yZXNob3cnLHBhcmFtZXRlcnM6J3NlbmRlcid9LFxuXHRcdHtuYW1lOidiZWZvcmV0b2Zyb250JyxwYXJhbWV0ZXJzOidkYXRlY29sdW1uJ30sXG5cdFx0e25hbWU6J2JlZm9yZXRvcGNoYW5nZScscGFyYW1ldGVyczonc2VuZGVyLHZhbHVlLG9sZFZhbHVlLHVuZGVmaW5lZCd9LFxuXHRcdHtuYW1lOidiZWZvcmV3aWR0aGNoYW5nZScscGFyYW1ldGVyczonc2VuZGVyLHZhbHVlLG9sZFZhbHVlLHVuZGVmaW5lZCd9LFxuXHRcdHtuYW1lOidibHVyJyxwYXJhbWV0ZXJzOidkYXRlY29sdW1uLGV2ZW50J30sXG5cdFx0e25hbWU6J2JvdHRvbWNoYW5nZScscGFyYW1ldGVyczonc2VuZGVyLHZhbHVlLG9sZFZhbHVlJ30sXG5cdFx0e25hbWU6J2NlbnRlcmVkY2hhbmdlJyxwYXJhbWV0ZXJzOidzZW5kZXIsdmFsdWUsb2xkVmFsdWUnfSxcblx0XHR7bmFtZTonZGVhY3RpdmF0ZScscGFyYW1ldGVyczonb2xkQWN0aXZlSXRlbSxkYXRlY29sdW1uLG5ld0FjdGl2ZUl0ZW0nfSxcblx0XHR7bmFtZTonZGVzdHJveScscGFyYW1ldGVyczonJ30sXG5cdFx0e25hbWU6J2Rpc2FibGVkY2hhbmdlJyxwYXJhbWV0ZXJzOidzZW5kZXIsdmFsdWUsb2xkVmFsdWUnfSxcblx0XHR7bmFtZTonZG9ja2VkY2hhbmdlJyxwYXJhbWV0ZXJzOidzZW5kZXIsdmFsdWUsb2xkVmFsdWUnfSxcblx0XHR7bmFtZTonZXJhc2VkJyxwYXJhbWV0ZXJzOidzZW5kZXInfSxcblx0XHR7bmFtZTonZmxvYXRpbmdjaGFuZ2UnLHBhcmFtZXRlcnM6J3NlbmRlcixwb3NpdGlvbmVkJ30sXG5cdFx0e25hbWU6J2ZvY3VzJyxwYXJhbWV0ZXJzOidkYXRlY29sdW1uLGV2ZW50J30sXG5cdFx0e25hbWU6J2ZvY3VzZW50ZXInLHBhcmFtZXRlcnM6J2RhdGVjb2x1bW4sZXZlbnQnfSxcblx0XHR7bmFtZTonZm9jdXNsZWF2ZScscGFyYW1ldGVyczonZGF0ZWNvbHVtbixldmVudCd9LFxuXHRcdHtuYW1lOidmdWxsc2NyZWVuJyxwYXJhbWV0ZXJzOidzZW5kZXInfSxcblx0XHR7bmFtZTonaGVpZ2h0Y2hhbmdlJyxwYXJhbWV0ZXJzOidzZW5kZXIsdmFsdWUsb2xkVmFsdWUnfSxcblx0XHR7bmFtZTonaGlkZGVuY2hhbmdlJyxwYXJhbWV0ZXJzOidzZW5kZXIsdmFsdWUsb2xkVmFsdWUnfSxcblx0XHR7bmFtZTonaGlkZScscGFyYW1ldGVyczonc2VuZGVyJ30sXG5cdFx0e25hbWU6J2luaXRpYWxpemUnLHBhcmFtZXRlcnM6J3NlbmRlcid9LFxuXHRcdHtuYW1lOidsZWZ0Y2hhbmdlJyxwYXJhbWV0ZXJzOidzZW5kZXIsdmFsdWUsb2xkVmFsdWUnfSxcblx0XHR7bmFtZTonbWF4SGVpZ2h0Y2hhbmdlJyxwYXJhbWV0ZXJzOidzZW5kZXIsdmFsdWUsb2xkVmFsdWUnfSxcblx0XHR7bmFtZTonbWF4V2lkdGhjaGFuZ2UnLHBhcmFtZXRlcnM6J3NlbmRlcix2YWx1ZSxvbGRWYWx1ZSd9LFxuXHRcdHtuYW1lOidtaW5IZWlnaHRjaGFuZ2UnLHBhcmFtZXRlcnM6J3NlbmRlcix2YWx1ZSxvbGRWYWx1ZSd9LFxuXHRcdHtuYW1lOidtaW5XaWR0aGNoYW5nZScscGFyYW1ldGVyczonc2VuZGVyLHZhbHVlLG9sZFZhbHVlJ30sXG5cdFx0e25hbWU6J21vdmUnLHBhcmFtZXRlcnM6J2RhdGVjb2x1bW4saXRlbSx0b0luZGV4LGZyb21JbmRleCd9LFxuXHRcdHtuYW1lOidtb3ZlZCcscGFyYW1ldGVyczonc2VuZGVyLGNvbnRhaW5lcix0b0luZGV4LGZyb21JbmRleCd9LFxuXHRcdHtuYW1lOidvcmllbnRhdGlvbmNoYW5nZScscGFyYW1ldGVyczonJ30sXG5cdFx0e25hbWU6J3BhaW50ZWQnLHBhcmFtZXRlcnM6J3NlbmRlcixlbGVtZW50J30sXG5cdFx0e25hbWU6J3Bvc2l0aW9uZWRjaGFuZ2UnLHBhcmFtZXRlcnM6J3NlbmRlcixwb3NpdGlvbmVkJ30sXG5cdFx0e25hbWU6J3JlbW92ZScscGFyYW1ldGVyczonZGF0ZWNvbHVtbixpdGVtLGluZGV4J30sXG5cdFx0e25hbWU6J3JlbW92ZWQnLHBhcmFtZXRlcnM6J3NlbmRlcixjb250YWluZXIsaW5kZXgnfSxcblx0XHR7bmFtZToncmVuZGVyZWRjaGFuZ2UnLHBhcmFtZXRlcnM6J2RhdGVjb2x1bW4saXRlbSxyZW5kZXJlZCd9LFxuXHRcdHtuYW1lOidyZXNpemUnLHBhcmFtZXRlcnM6J2VsZW1lbnQsaW5mbyd9LFxuXHRcdHtuYW1lOidyaWdodGNoYW5nZScscGFyYW1ldGVyczonc2VuZGVyLHZhbHVlLG9sZFZhbHVlJ30sXG5cdFx0e25hbWU6J3Njcm9sbGFibGVjaGFuZ2UnLHBhcmFtZXRlcnM6J3NlbmRlcix2YWx1ZSxvbGRWYWx1ZSd9LFxuXHRcdHtuYW1lOidzaG93JyxwYXJhbWV0ZXJzOidzZW5kZXInfSxcblx0XHR7bmFtZTondG9mcm9udCcscGFyYW1ldGVyczonZGF0ZWNvbHVtbid9LFxuXHRcdHtuYW1lOid0b3BjaGFuZ2UnLHBhcmFtZXRlcnM6J3NlbmRlcix2YWx1ZSxvbGRWYWx1ZSd9LFxuXHRcdHtuYW1lOid1cGRhdGVkYXRhJyxwYXJhbWV0ZXJzOidzZW5kZXIsbmV3RGF0YSd9LFxuXHRcdHtuYW1lOid3aWR0aGNoYW5nZScscGFyYW1ldGVyczonc2VuZGVyLHZhbHVlLG9sZFZhbHVlJ30sXG5cdFx0e25hbWU6J3JlYWR5JyxwYXJhbWV0ZXJzOicnfVxuXTtcbiAgcHVibGljIHN0YXRpYyBFVkVOVE5BTUVTOiBzdHJpbmdbXSA9IFtcblx0XHQnYWN0aXZhdGUnLFxuXHRcdCdhY3RpdmVJdGVtY2hhbmdlJyxcblx0XHQnYWRkJyxcblx0XHQnYWRkZWQnLFxuXHRcdCdiZWZvcmVhY3RpdmVJdGVtY2hhbmdlJyxcblx0XHQnYmVmb3JlYm90dG9tY2hhbmdlJyxcblx0XHQnYmVmb3JlY2VudGVyZWRjaGFuZ2UnLFxuXHRcdCdiZWZvcmVkaXNhYmxlZGNoYW5nZScsXG5cdFx0J2JlZm9yZWRvY2tlZGNoYW5nZScsXG5cdFx0J2JlZm9yZWhlaWdodGNoYW5nZScsXG5cdFx0J2JlZm9yZWhpZGRlbmNoYW5nZScsXG5cdFx0J2JlZm9yZWhpZGUnLFxuXHRcdCdiZWZvcmVsZWZ0Y2hhbmdlJyxcblx0XHQnYmVmb3JlbWF4SGVpZ2h0Y2hhbmdlJyxcblx0XHQnYmVmb3JlbWF4V2lkdGhjaGFuZ2UnLFxuXHRcdCdiZWZvcmVtaW5IZWlnaHRjaGFuZ2UnLFxuXHRcdCdiZWZvcmVtaW5XaWR0aGNoYW5nZScsXG5cdFx0J2JlZm9yZW9yaWVudGF0aW9uY2hhbmdlJyxcblx0XHQnYmVmb3JlcmlnaHRjaGFuZ2UnLFxuXHRcdCdiZWZvcmVzY3JvbGxhYmxlY2hhbmdlJyxcblx0XHQnYmVmb3Jlc2hvdycsXG5cdFx0J2JlZm9yZXRvZnJvbnQnLFxuXHRcdCdiZWZvcmV0b3BjaGFuZ2UnLFxuXHRcdCdiZWZvcmV3aWR0aGNoYW5nZScsXG5cdFx0J2JsdXInLFxuXHRcdCdib3R0b21jaGFuZ2UnLFxuXHRcdCdjZW50ZXJlZGNoYW5nZScsXG5cdFx0J2RlYWN0aXZhdGUnLFxuXHRcdCdkZXN0cm95Jyxcblx0XHQnZGlzYWJsZWRjaGFuZ2UnLFxuXHRcdCdkb2NrZWRjaGFuZ2UnLFxuXHRcdCdlcmFzZWQnLFxuXHRcdCdmbG9hdGluZ2NoYW5nZScsXG5cdFx0J2ZvY3VzJyxcblx0XHQnZm9jdXNlbnRlcicsXG5cdFx0J2ZvY3VzbGVhdmUnLFxuXHRcdCdmdWxsc2NyZWVuJyxcblx0XHQnaGVpZ2h0Y2hhbmdlJyxcblx0XHQnaGlkZGVuY2hhbmdlJyxcblx0XHQnaGlkZScsXG5cdFx0J2luaXRpYWxpemUnLFxuXHRcdCdsZWZ0Y2hhbmdlJyxcblx0XHQnbWF4SGVpZ2h0Y2hhbmdlJyxcblx0XHQnbWF4V2lkdGhjaGFuZ2UnLFxuXHRcdCdtaW5IZWlnaHRjaGFuZ2UnLFxuXHRcdCdtaW5XaWR0aGNoYW5nZScsXG5cdFx0J21vdmUnLFxuXHRcdCdtb3ZlZCcsXG5cdFx0J29yaWVudGF0aW9uY2hhbmdlJyxcblx0XHQncGFpbnRlZCcsXG5cdFx0J3Bvc2l0aW9uZWRjaGFuZ2UnLFxuXHRcdCdyZW1vdmUnLFxuXHRcdCdyZW1vdmVkJyxcblx0XHQncmVuZGVyZWRjaGFuZ2UnLFxuXHRcdCdyZXNpemUnLFxuXHRcdCdyaWdodGNoYW5nZScsXG5cdFx0J3Njcm9sbGFibGVjaGFuZ2UnLFxuXHRcdCdzaG93Jyxcblx0XHQndG9mcm9udCcsXG5cdFx0J3RvcGNoYW5nZScsXG5cdFx0J3VwZGF0ZWRhdGEnLFxuXHRcdCd3aWR0aGNoYW5nZScsXG5cdFx0J3JlYWR5J1xuXTtcbn1cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2RhdGVjb2x1bW4nLCBcbiAgaW5wdXRzOiBkYXRlY29sdW1uTWV0YURhdGEuUFJPUEVSVElFUyxcbiAgb3V0cHV0czogZGF0ZWNvbHVtbk1ldGFEYXRhLkVWRU5UTkFNRVMsXG4gIHByb3ZpZGVyczogW3twcm92aWRlOiBiYXNlLCB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBFeHREYXRlY29sdW1uQ29tcG9uZW50KX1dLFxuICB0ZW1wbGF0ZTogJzxuZy10ZW1wbGF0ZT48L25nLXRlbXBsYXRlPidcbn0pXG5leHBvcnQgY2xhc3MgRXh0RGF0ZWNvbHVtbkNvbXBvbmVudCBleHRlbmRzIGJhc2UgaW1wbGVtZW50cyBPbkluaXQsQWZ0ZXJDb250ZW50SW5pdCxPbkNoYW5nZXMge1xuICBjb25zdHJ1Y3RvcihcbiAgICBlUmVmOkVsZW1lbnRSZWYsIEBIb3N0KCkgQE9wdGlvbmFsKCkgQFNraXBTZWxmKCkgcHVibGljIGhvc3RDb21wb25lbnQgOiBiYXNlKSB7XG4gICAgICBzdXBlcihlUmVmLm5hdGl2ZUVsZW1lbnQsZGF0ZWNvbHVtbk1ldGFEYXRhLGhvc3RDb21wb25lbnQpXG4gICAgfVxuICBwdWJsaWMgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5iYXNlT25Jbml0KGRhdGVjb2x1bW5NZXRhRGF0YSlcbiAgfVxuICBwdWJsaWMgbmdBZnRlckNvbnRlbnRJbml0KCkge1xuICAgIHRoaXMuYmFzZUFmdGVyQ29udGVudEluaXQoKVxuICAgIC8vdGhpc1sncmVhZHknXS5lbWl0KHRoaXMpXG4gIH1cbiAgLy9wdWJsaWMgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge3RoaXMuYmFzZU9uQ2hhbmdlcyhjaGFuZ2VzKX1cblxufSJdfQ==