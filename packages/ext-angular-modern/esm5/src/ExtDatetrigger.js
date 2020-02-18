import { __decorate, __extends, __param } from "tslib";
//import EWCDatetrigger from '../dist/ext-datetrigger.component.js';
//inputs: (new EWCDatetrigger()).properties,
//import EWCDatetrigger from '@sencha/ext-web-components-modern/dist/ext-datetrigger.component.js';
import { EWCDatetrigger } from '@sencha/ext-web-components-modern';
import { Host, Optional, SkipSelf, Component, ElementRef, forwardRef, ViewContainerRef } from '@angular/core';
import { EngBase } from './runtime/angularbase';
var ExtDatetriggerComponent = /** @class */ (function (_super) {
    __extends(ExtDatetriggerComponent, _super);
    function ExtDatetriggerComponent(eRef, hostComponent, vc) {
        var _this = _super.call(this, eRef, hostComponent, ['aMe', 'header', 'renderer', 'label', 'fitToParent', 'tab', 'config', 'platformConfig', 'extname', 'viewport', 'align', 'plugins', 'responsiveConfig', 'responsiveFormulas', 'alignSelf', 'alwaysOnTop', 'ariaAttributes', 'ariaDescribedBy', 'ariaLabel', 'ariaLabelledBy', 'bind', 'border', 'cls', 'constrainAlign', 'controller', 'defaultListenerScope', 'disabled', 'undefined', 'field', 'flex', 'floated', 'focusCls', 'focusOnTap', 'group', 'handler', 'height', 'hidden', 'hideMode', 'iconCls', 'id', 'instanceCls', 'itemId', 'keyMap', 'keyMapEnabled', 'keyMapTarget', 'listeners', 'margin', 'name', 'nameable', 'plugins', 'publishes', 'reference', 'relative', 'renderTo', 'repeat', 'ripple', 'scope', 'session', 'shadow', 'shareableName', 'shim', 'side', 'style', 'toFrontOnShow', 'touchAction', 'translatable', 'triggers', 'twoWayBindable', 'ui', 'userCls', 'viewModel', 'width', 'x', 'y',], (new EWCDatetrigger()).events, ['ready', 'beforedisabledchange', 'beforeheightchange', 'beforehiddenchange', 'beforetofront', 'beforewidthchange', 'blur', 'disabledchange', 'focus', 'focusenter', 'focusleave', 'heightchange', 'hiddenchange', 'tofront', 'widthchange',], vc) || this;
        _this.xtype = 'datetrigger';
        return _this;
    }
    ExtDatetriggerComponent_1 = ExtDatetriggerComponent;
    ExtDatetriggerComponent.prototype.ngOnInit = function () {
        this.baseOnInit();
    };
    ExtDatetriggerComponent.prototype.ngAfterViewInit = function () {
        this.baseAfterViewInit();
    };
    ExtDatetriggerComponent.prototype.ngOnChanges = function (changes) {
        this.baseOnChanges(changes);
    };
    ExtDatetriggerComponent.prototype.ngOnDestroy = function () {
        this.baseOnDestroy();
    };
    var ExtDatetriggerComponent_1;
    ExtDatetriggerComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: EngBase, decorators: [{ type: Host }, { type: Optional }, { type: SkipSelf }] },
        { type: ViewContainerRef }
    ]; };
    ExtDatetriggerComponent = ExtDatetriggerComponent_1 = __decorate([
        Component({
            selector: 'ExtDatetrigger',
            inputs: ['aMe', 'header', 'renderer', 'label', 'fitToParent', 'tab', 'config', 'platformConfig', 'extname', 'viewport', 'align', 'plugins', 'responsiveConfig', 'responsiveFormulas', 'alignSelf', 'alwaysOnTop', 'ariaAttributes', 'ariaDescribedBy', 'ariaLabel', 'ariaLabelledBy', 'bind', 'border', 'cls', 'constrainAlign', 'controller', 'defaultListenerScope', 'disabled', 'undefined', 'field', 'flex', 'floated', 'focusCls', 'focusOnTap', 'group', 'handler', 'height', 'hidden', 'hideMode', 'iconCls', 'id', 'instanceCls', 'itemId', 'keyMap', 'keyMapEnabled', 'keyMapTarget', 'listeners', 'margin', 'name', 'nameable', 'plugins', 'publishes', 'reference', 'relative', 'renderTo', 'repeat', 'ripple', 'scope', 'session', 'shadow', 'shareableName', 'shim', 'side', 'style', 'toFrontOnShow', 'touchAction', 'translatable', 'triggers', 'twoWayBindable', 'ui', 'userCls', 'viewModel', 'width', 'x', 'y',],
            outputs: ['ready', 'beforedisabledchange', 'beforeheightchange', 'beforehiddenchange', 'beforetofront', 'beforewidthchange', 'blur', 'disabledchange', 'focus', 'focusenter', 'focusleave', 'heightchange', 'hiddenchange', 'tofront', 'widthchange',],
            providers: [{ provide: EngBase, useExisting: forwardRef(function () { return ExtDatetriggerComponent_1; }) }],
            template: '<ng-content></ng-content>'
        }),
        __param(1, Host()), __param(1, Optional()), __param(1, SkipSelf())
    ], ExtDatetriggerComponent);
    return ExtDatetriggerComponent;
}(EngBase));
export { ExtDatetriggerComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRXh0RGF0ZXRyaWdnZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac2VuY2hhL2V4dC1hbmd1bGFyLW1vZGVybi8iLCJzb3VyY2VzIjpbInNyYy9FeHREYXRldHJpZ2dlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsb0VBQW9FO0FBQ3BFLDRDQUE0QztBQUM1QyxtR0FBbUc7QUFDbkcsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBQ25FLE9BQU8sRUFDSCxJQUFJLEVBQ0osUUFBUSxFQUNSLFFBQVEsRUFDUixTQUFTLEVBQ1QsVUFBVSxFQUNWLFVBQVUsRUFDVixnQkFBZ0IsRUFDakIsTUFBTSxlQUFlLENBQUM7QUFDekIsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBU2hEO0lBQTZDLDJDQUFPO0lBQ2hELGlDQUNJLElBQWdCLEVBQ2dCLGFBQXNCLEVBQ3RELEVBQW9CO1FBSHhCLFlBS0ksa0JBQ0ksSUFBSSxFQUNKLGFBQWEsRUFDYixDQUFDLEtBQUssRUFBRSxRQUFRLEVBQUUsVUFBVSxFQUFFLE9BQU8sRUFBQyxhQUFhLEVBQUMsS0FBSyxFQUFDLFFBQVEsRUFBQyxnQkFBZ0IsRUFBQyxTQUFTLEVBQUMsVUFBVSxFQUFDLE9BQU8sRUFBQyxTQUFTLEVBQUMsa0JBQWtCLEVBQUMsb0JBQW9CLEVBQUMsV0FBVyxFQUFDLGFBQWEsRUFBQyxnQkFBZ0IsRUFBQyxpQkFBaUIsRUFBQyxXQUFXLEVBQUMsZ0JBQWdCLEVBQUMsTUFBTSxFQUFDLFFBQVEsRUFBQyxLQUFLLEVBQUMsZ0JBQWdCLEVBQUMsWUFBWSxFQUFDLHNCQUFzQixFQUFDLFVBQVUsRUFBQyxXQUFXLEVBQUMsT0FBTyxFQUFDLE1BQU0sRUFBQyxTQUFTLEVBQUMsVUFBVSxFQUFDLFlBQVksRUFBQyxPQUFPLEVBQUMsU0FBUyxFQUFDLFFBQVEsRUFBQyxRQUFRLEVBQUMsVUFBVSxFQUFDLFNBQVMsRUFBQyxJQUFJLEVBQUMsYUFBYSxFQUFDLFFBQVEsRUFBQyxRQUFRLEVBQUMsZUFBZSxFQUFDLGNBQWMsRUFBQyxXQUFXLEVBQUMsUUFBUSxFQUFDLE1BQU0sRUFBQyxVQUFVLEVBQUMsU0FBUyxFQUFDLFdBQVcsRUFBQyxXQUFXLEVBQUMsVUFBVSxFQUFDLFVBQVUsRUFBQyxRQUFRLEVBQUMsUUFBUSxFQUFDLE9BQU8sRUFBQyxTQUFTLEVBQUMsUUFBUSxFQUFDLGVBQWUsRUFBQyxNQUFNLEVBQUMsTUFBTSxFQUFDLE9BQU8sRUFBQyxlQUFlLEVBQUMsYUFBYSxFQUFDLGNBQWMsRUFBQyxVQUFVLEVBQUMsZ0JBQWdCLEVBQUMsSUFBSSxFQUFDLFNBQVMsRUFBQyxXQUFXLEVBQUMsT0FBTyxFQUFDLEdBQUcsRUFBQyxHQUFHLEVBQUUsRUFDcHpCLENBQUMsSUFBSSxjQUFjLEVBQUUsQ0FBQyxDQUFDLE1BQU0sRUFDN0IsQ0FBQyxPQUFPLEVBQUMsc0JBQXNCLEVBQUMsb0JBQW9CLEVBQUMsb0JBQW9CLEVBQUMsZUFBZSxFQUFDLG1CQUFtQixFQUFDLE1BQU0sRUFBQyxnQkFBZ0IsRUFBQyxPQUFPLEVBQUMsWUFBWSxFQUFDLFlBQVksRUFBQyxjQUFjLEVBQUMsY0FBYyxFQUFDLFNBQVMsRUFBQyxhQUFhLEVBQUUsRUFDL04sRUFBRSxDQUNMLFNBRUo7UUFERyxLQUFJLENBQUMsS0FBSyxHQUFHLGFBQWEsQ0FBQTs7SUFDOUIsQ0FBQztnQ0FmUSx1QkFBdUI7SUFpQnpCLDBDQUFRLEdBQWY7UUFDSSxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUE7SUFDckIsQ0FBQztJQUVNLGlEQUFlLEdBQXRCO1FBQ0ksSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUE7SUFDNUIsQ0FBQztJQUVNLDZDQUFXLEdBQWxCLFVBQW1CLE9BQU87UUFDdEIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQTtJQUMvQixDQUFDO0lBRU0sNkNBQVcsR0FBbEI7UUFDSSxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUE7SUFDeEIsQ0FBQzs7O2dCQTdCUyxVQUFVO2dCQUMrQixPQUFPLHVCQUFyRCxJQUFJLFlBQUksUUFBUSxZQUFJLFFBQVE7Z0JBQ3pCLGdCQUFnQjs7SUFKZix1QkFBdUI7UUFQbkMsU0FBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLGdCQUFnQjtZQUMxQixNQUFNLEVBQUUsQ0FBQyxLQUFLLEVBQUUsUUFBUSxFQUFFLFVBQVUsRUFBRSxPQUFPLEVBQUMsYUFBYSxFQUFDLEtBQUssRUFBQyxRQUFRLEVBQUMsZ0JBQWdCLEVBQUMsU0FBUyxFQUFDLFVBQVUsRUFBQyxPQUFPLEVBQUMsU0FBUyxFQUFDLGtCQUFrQixFQUFDLG9CQUFvQixFQUFDLFdBQVcsRUFBQyxhQUFhLEVBQUMsZ0JBQWdCLEVBQUMsaUJBQWlCLEVBQUMsV0FBVyxFQUFDLGdCQUFnQixFQUFDLE1BQU0sRUFBQyxRQUFRLEVBQUMsS0FBSyxFQUFDLGdCQUFnQixFQUFDLFlBQVksRUFBQyxzQkFBc0IsRUFBQyxVQUFVLEVBQUMsV0FBVyxFQUFDLE9BQU8sRUFBQyxNQUFNLEVBQUMsU0FBUyxFQUFDLFVBQVUsRUFBQyxZQUFZLEVBQUMsT0FBTyxFQUFDLFNBQVMsRUFBQyxRQUFRLEVBQUMsUUFBUSxFQUFDLFVBQVUsRUFBQyxTQUFTLEVBQUMsSUFBSSxFQUFDLGFBQWEsRUFBQyxRQUFRLEVBQUMsUUFBUSxFQUFDLGVBQWUsRUFBQyxjQUFjLEVBQUMsV0FBVyxFQUFDLFFBQVEsRUFBQyxNQUFNLEVBQUMsVUFBVSxFQUFDLFNBQVMsRUFBQyxXQUFXLEVBQUMsV0FBVyxFQUFDLFVBQVUsRUFBQyxVQUFVLEVBQUMsUUFBUSxFQUFDLFFBQVEsRUFBQyxPQUFPLEVBQUMsU0FBUyxFQUFDLFFBQVEsRUFBQyxlQUFlLEVBQUMsTUFBTSxFQUFDLE1BQU0sRUFBQyxPQUFPLEVBQUMsZUFBZSxFQUFDLGFBQWEsRUFBQyxjQUFjLEVBQUMsVUFBVSxFQUFDLGdCQUFnQixFQUFDLElBQUksRUFBQyxTQUFTLEVBQUMsV0FBVyxFQUFDLE9BQU8sRUFBQyxHQUFHLEVBQUMsR0FBRyxFQUFFO1lBQzV6QixPQUFPLEVBQUUsQ0FBQyxPQUFPLEVBQUMsc0JBQXNCLEVBQUMsb0JBQW9CLEVBQUMsb0JBQW9CLEVBQUMsZUFBZSxFQUFDLG1CQUFtQixFQUFDLE1BQU0sRUFBQyxnQkFBZ0IsRUFBQyxPQUFPLEVBQUMsWUFBWSxFQUFDLFlBQVksRUFBQyxjQUFjLEVBQUMsY0FBYyxFQUFDLFNBQVMsRUFBQyxhQUFhLEVBQUU7WUFDeE8sU0FBUyxFQUFFLENBQUMsRUFBQyxPQUFPLEVBQUUsT0FBTyxFQUFFLFdBQVcsRUFBRSxVQUFVLENBQUMsY0FBTSxPQUFBLHlCQUF1QixFQUF2QixDQUF1QixDQUFDLEVBQUMsQ0FBQztZQUN2RixRQUFRLEVBQUUsMkJBQTJCO1NBQ3hDLENBQUM7UUFJTyxXQUFBLElBQUksRUFBRSxDQUFBLEVBQUUsV0FBQSxRQUFRLEVBQUUsQ0FBQSxFQUFFLFdBQUEsUUFBUSxFQUFFLENBQUE7T0FIMUIsdUJBQXVCLENBZ0NuQztJQUFELDhCQUFDO0NBQUEsQUFoQ0QsQ0FBNkMsT0FBTyxHQWdDbkQ7U0FoQ1ksdUJBQXVCO0FBbUNwQyw2QkFBNkI7QUFDN0IsaUNBQWlDO0FBQ2pDLGlDQUFpQztBQUNqQyxpRkFBaUY7QUFDakYsYUFBYTtBQUNiLG9CQUFvQjtBQUNwQixJQUFJO0FBQ0oseUNBQXlDO0FBRXpDLGlEQUFpRDtBQUNqRCx5QkFBeUI7QUFDekIsMkNBQTJDO0FBQzNDLG9DQUFvQztBQUNwQyxJQUFJO0FBQ0osNENBQTRDO0FBQzVDLG1CQUFtQjtBQUNuQiwyQ0FBMkM7QUFDM0MsR0FBRztBQUNILGtEQUFrRCIsInNvdXJjZXNDb250ZW50IjpbIi8vaW1wb3J0IEVXQ0RhdGV0cmlnZ2VyIGZyb20gJy4uL2Rpc3QvZXh0LWRhdGV0cmlnZ2VyLmNvbXBvbmVudC5qcyc7XG4vL2lucHV0czogKG5ldyBFV0NEYXRldHJpZ2dlcigpKS5wcm9wZXJ0aWVzLFxuLy9pbXBvcnQgRVdDRGF0ZXRyaWdnZXIgZnJvbSAnQHNlbmNoYS9leHQtd2ViLWNvbXBvbmVudHMtbW9kZXJuL2Rpc3QvZXh0LWRhdGV0cmlnZ2VyLmNvbXBvbmVudC5qcyc7XG5pbXBvcnQgeyBFV0NEYXRldHJpZ2dlciB9IGZyb20gJ0BzZW5jaGEvZXh0LXdlYi1jb21wb25lbnRzLW1vZGVybic7XG5pbXBvcnQge1xuICAgIEhvc3QsXG4gICAgT3B0aW9uYWwsXG4gICAgU2tpcFNlbGYsXG4gICAgQ29tcG9uZW50LFxuICAgIEVsZW1lbnRSZWYsXG4gICAgZm9yd2FyZFJlZixcbiAgICBWaWV3Q29udGFpbmVyUmVmXG4gIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBFbmdCYXNlIH0gZnJvbSAnLi9ydW50aW1lL2FuZ3VsYXJiYXNlJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdFeHREYXRldHJpZ2dlcicsXG4gICAgaW5wdXRzOiBbJ2FNZScsICdoZWFkZXInLCAncmVuZGVyZXInLCAnbGFiZWwnLCdmaXRUb1BhcmVudCcsJ3RhYicsJ2NvbmZpZycsJ3BsYXRmb3JtQ29uZmlnJywnZXh0bmFtZScsJ3ZpZXdwb3J0JywnYWxpZ24nLCdwbHVnaW5zJywncmVzcG9uc2l2ZUNvbmZpZycsJ3Jlc3BvbnNpdmVGb3JtdWxhcycsJ2FsaWduU2VsZicsJ2Fsd2F5c09uVG9wJywnYXJpYUF0dHJpYnV0ZXMnLCdhcmlhRGVzY3JpYmVkQnknLCdhcmlhTGFiZWwnLCdhcmlhTGFiZWxsZWRCeScsJ2JpbmQnLCdib3JkZXInLCdjbHMnLCdjb25zdHJhaW5BbGlnbicsJ2NvbnRyb2xsZXInLCdkZWZhdWx0TGlzdGVuZXJTY29wZScsJ2Rpc2FibGVkJywndW5kZWZpbmVkJywnZmllbGQnLCdmbGV4JywnZmxvYXRlZCcsJ2ZvY3VzQ2xzJywnZm9jdXNPblRhcCcsJ2dyb3VwJywnaGFuZGxlcicsJ2hlaWdodCcsJ2hpZGRlbicsJ2hpZGVNb2RlJywnaWNvbkNscycsJ2lkJywnaW5zdGFuY2VDbHMnLCdpdGVtSWQnLCdrZXlNYXAnLCdrZXlNYXBFbmFibGVkJywna2V5TWFwVGFyZ2V0JywnbGlzdGVuZXJzJywnbWFyZ2luJywnbmFtZScsJ25hbWVhYmxlJywncGx1Z2lucycsJ3B1Ymxpc2hlcycsJ3JlZmVyZW5jZScsJ3JlbGF0aXZlJywncmVuZGVyVG8nLCdyZXBlYXQnLCdyaXBwbGUnLCdzY29wZScsJ3Nlc3Npb24nLCdzaGFkb3cnLCdzaGFyZWFibGVOYW1lJywnc2hpbScsJ3NpZGUnLCdzdHlsZScsJ3RvRnJvbnRPblNob3cnLCd0b3VjaEFjdGlvbicsJ3RyYW5zbGF0YWJsZScsJ3RyaWdnZXJzJywndHdvV2F5QmluZGFibGUnLCd1aScsJ3VzZXJDbHMnLCd2aWV3TW9kZWwnLCd3aWR0aCcsJ3gnLCd5JyxdLFxuICAgIG91dHB1dHM6IFsncmVhZHknLCdiZWZvcmVkaXNhYmxlZGNoYW5nZScsJ2JlZm9yZWhlaWdodGNoYW5nZScsJ2JlZm9yZWhpZGRlbmNoYW5nZScsJ2JlZm9yZXRvZnJvbnQnLCdiZWZvcmV3aWR0aGNoYW5nZScsJ2JsdXInLCdkaXNhYmxlZGNoYW5nZScsJ2ZvY3VzJywnZm9jdXNlbnRlcicsJ2ZvY3VzbGVhdmUnLCdoZWlnaHRjaGFuZ2UnLCdoaWRkZW5jaGFuZ2UnLCd0b2Zyb250Jywnd2lkdGhjaGFuZ2UnLF0sXG4gICAgcHJvdmlkZXJzOiBbe3Byb3ZpZGU6IEVuZ0Jhc2UsIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IEV4dERhdGV0cmlnZ2VyQ29tcG9uZW50KX1dLFxuICAgIHRlbXBsYXRlOiAnPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50Pidcbn0pXG5leHBvcnQgY2xhc3MgRXh0RGF0ZXRyaWdnZXJDb21wb25lbnQgZXh0ZW5kcyBFbmdCYXNlIHtcbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgZVJlZjogRWxlbWVudFJlZixcbiAgICAgICAgQEhvc3QoKSBAT3B0aW9uYWwoKSBAU2tpcFNlbGYoKSBob3N0Q29tcG9uZW50OiBFbmdCYXNlLFxuICAgICAgICB2YzogVmlld0NvbnRhaW5lclJlZlxuICAgICAgICApIHtcbiAgICAgICAgc3VwZXIoXG4gICAgICAgICAgICBlUmVmLFxuICAgICAgICAgICAgaG9zdENvbXBvbmVudCxcbiAgICAgICAgICAgIFsnYU1lJywgJ2hlYWRlcicsICdyZW5kZXJlcicsICdsYWJlbCcsJ2ZpdFRvUGFyZW50JywndGFiJywnY29uZmlnJywncGxhdGZvcm1Db25maWcnLCdleHRuYW1lJywndmlld3BvcnQnLCdhbGlnbicsJ3BsdWdpbnMnLCdyZXNwb25zaXZlQ29uZmlnJywncmVzcG9uc2l2ZUZvcm11bGFzJywnYWxpZ25TZWxmJywnYWx3YXlzT25Ub3AnLCdhcmlhQXR0cmlidXRlcycsJ2FyaWFEZXNjcmliZWRCeScsJ2FyaWFMYWJlbCcsJ2FyaWFMYWJlbGxlZEJ5JywnYmluZCcsJ2JvcmRlcicsJ2NscycsJ2NvbnN0cmFpbkFsaWduJywnY29udHJvbGxlcicsJ2RlZmF1bHRMaXN0ZW5lclNjb3BlJywnZGlzYWJsZWQnLCd1bmRlZmluZWQnLCdmaWVsZCcsJ2ZsZXgnLCdmbG9hdGVkJywnZm9jdXNDbHMnLCdmb2N1c09uVGFwJywnZ3JvdXAnLCdoYW5kbGVyJywnaGVpZ2h0JywnaGlkZGVuJywnaGlkZU1vZGUnLCdpY29uQ2xzJywnaWQnLCdpbnN0YW5jZUNscycsJ2l0ZW1JZCcsJ2tleU1hcCcsJ2tleU1hcEVuYWJsZWQnLCdrZXlNYXBUYXJnZXQnLCdsaXN0ZW5lcnMnLCdtYXJnaW4nLCduYW1lJywnbmFtZWFibGUnLCdwbHVnaW5zJywncHVibGlzaGVzJywncmVmZXJlbmNlJywncmVsYXRpdmUnLCdyZW5kZXJUbycsJ3JlcGVhdCcsJ3JpcHBsZScsJ3Njb3BlJywnc2Vzc2lvbicsJ3NoYWRvdycsJ3NoYXJlYWJsZU5hbWUnLCdzaGltJywnc2lkZScsJ3N0eWxlJywndG9Gcm9udE9uU2hvdycsJ3RvdWNoQWN0aW9uJywndHJhbnNsYXRhYmxlJywndHJpZ2dlcnMnLCd0d29XYXlCaW5kYWJsZScsJ3VpJywndXNlckNscycsJ3ZpZXdNb2RlbCcsJ3dpZHRoJywneCcsJ3knLF0sXG4gICAgICAgICAgICAobmV3IEVXQ0RhdGV0cmlnZ2VyKCkpLmV2ZW50cyxcbiAgICAgICAgICAgIFsncmVhZHknLCdiZWZvcmVkaXNhYmxlZGNoYW5nZScsJ2JlZm9yZWhlaWdodGNoYW5nZScsJ2JlZm9yZWhpZGRlbmNoYW5nZScsJ2JlZm9yZXRvZnJvbnQnLCdiZWZvcmV3aWR0aGNoYW5nZScsJ2JsdXInLCdkaXNhYmxlZGNoYW5nZScsJ2ZvY3VzJywnZm9jdXNlbnRlcicsJ2ZvY3VzbGVhdmUnLCdoZWlnaHRjaGFuZ2UnLCdoaWRkZW5jaGFuZ2UnLCd0b2Zyb250Jywnd2lkdGhjaGFuZ2UnLF0sXG4gICAgICAgICAgICB2Y1xuICAgICAgICApXG4gICAgICAgIHRoaXMueHR5cGUgPSAnZGF0ZXRyaWdnZXInXG4gICAgfVxuXG4gICAgcHVibGljIG5nT25Jbml0KCkge1xuICAgICAgICB0aGlzLmJhc2VPbkluaXQoKVxuICAgIH1cblxuICAgIHB1YmxpYyBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgICAgIHRoaXMuYmFzZUFmdGVyVmlld0luaXQoKVxuICAgIH1cblxuICAgIHB1YmxpYyBuZ09uQ2hhbmdlcyhjaGFuZ2VzKSB7XG4gICAgICAgIHRoaXMuYmFzZU9uQ2hhbmdlcyhjaGFuZ2VzKVxuICAgIH1cblxuICAgIHB1YmxpYyBuZ09uRGVzdHJveSgpIHtcbiAgICAgICAgdGhpcy5iYXNlT25EZXN0cm95KClcbiAgICB9XG59XG5cblxuLy8gZnVuY3Rpb24gdG9QYXNjYWxDYXNlKHMpIHtcbi8vICAgICByZXR1cm4gcy5tYXRjaCgvW2Etel0rL2dpKVxuLy8gICAgICAgICAubWFwKGZ1bmN0aW9uICh3b3JkKSB7XG4vLyAgICAgICAgICAgICByZXR1cm4gd29yZC5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHdvcmQuc3Vic3RyKDEpLnRvTG93ZXJDYXNlKClcbi8vICAgICAgICAgfSlcbi8vICAgICAgICAgLmpvaW4oJycpXG4vLyB9XG4vLyB2YXIgcGFzY2FsTmFtZSA9IHRvUGFzY2FsQ2FzZSh0YWdOYW1lKVxuXG4vL3ZhciBldmVudHMgPSAobmV3IEVXQ0RhdGV0cmlnZ2VyKCkpLmV2ZW50bmFtZXM7XG4vL3ZhciBldmVudG5hbWVzYWxsID0gW107XG4vL2V2ZW50cy5mb3JFYWNoKCAoZXZlbnQ6IGFueSwgbjogYW55KSA9PiB7XG4vLyAgICBldmVudG5hbWVzYWxsLnB1c2goZXZlbnQubmFtZSlcbi8vfSlcbi8vY29uc3QgZGlzdGluY3QgPSAodmFsdWUsIGluZGV4LCBzZWxmKSA9PiB7XG4vLyAgICAvL3JldHVybiB0cnVlXG4vLyAgICByZXR1cm4gc2VsZi5pbmRleE9mKHZhbHVlKSA9PT0gaW5kZXg7XG4vL31cbi8vdmFyIGV2ZW50bmFtZXMgPSBldmVudG5hbWVzYWxsLmZpbHRlcihkaXN0aW5jdCk7XG4iXX0=