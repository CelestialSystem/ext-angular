import { SimpleChanges } from '@angular/core';
export declare class base {
    private metaData;
    hostComponent: base;
    ext: any;
    private _nativeElement;
    private _hostComponent;
    private _extChildren;
    private q;
    constructor(nativeElement: any, metaData: any, hostComponent: base);
    baseOnInit(metaData: any): void;
    ngOnDestroy(): void;
    _extroute: any;
    baseAfterContentInit(): void;
    addTheChild(parentCmp: any, childCmp: any): void;
    ngOnChanges(changes: SimpleChanges): void;
}