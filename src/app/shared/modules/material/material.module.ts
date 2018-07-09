import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";

import { MatButtonModule, MatTooltipModule, MatInputModule, MatRippleModule } from "@angular/material";

@NgModule({
    imports: [
        CommonModule,
        MatButtonModule,
        MatTooltipModule,
        MatInputModule,
        MatRippleModule
    ],
    exports : [
        CommonModule,
        MatButtonModule,
        MatTooltipModule,
        MatInputModule,
        MatRippleModule
    ]
})
export class SharedMaterialModule { }
