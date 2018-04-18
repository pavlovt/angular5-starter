import { NgModule } from '@angular/core';
import { CommonModule as AngularCommonModule } from '@angular/common';
import _ from 'lodash';

import { RxApi } from './services/rxapi'; export { RxApi };
import { Notify } from './services/notify'; export { Notify };

import { XTableComponent } from './components/xtable/xtable.component';

import { AccordionModule, AutoCompleteModule, BlockUIModule, BreadcrumbModule, ButtonModule, CalendarModule, CaptchaModule, CardModule,
  CarouselModule, ChartModule, ChipsModule, ConfirmDialogModule, CodeHighlighterModule, CheckboxModule, ColorPickerModule,
  ContextMenuModule, DataGridModule, DeferModule, DialogModule, DropdownModule, DataListModule, DataViewModule, DragDropModule,
  DataScrollerModule, EditorModule, FieldsetModule, FileUploadModule, KeyFilterModule, GalleriaModule, GMapModule, GrowlModule,
  InplaceModule, InputMaskModule, InputTextModule, InputSwitchModule, InputTextareaModule, LightboxModule, PickListModule, OrderListModule,
  MegaMenuModule, MenuModule, MenubarModule, MessageModule, MessagesModule, MultiSelectModule, TabMenuModule, PanelMenuModule, SlideMenuModule,
  TieredMenuModule, OrganizationChartModule, OverlayPanelModule, PaginatorModule, PanelModule, PasswordModule, ProgressBarModule, ProgressSpinnerModule,
  ScrollPanelModule, RadioButtonModule, RatingModule, StepsModule, SliderModule, SidebarModule, SpinnerModule, SplitButtonModule, SelectButtonModule,
  TriStateCheckboxModule, TreeModule, TableModule, ToolbarModule, TooltipModule, TerminalModule, TabViewModule, TreeTableModule, ToggleButtonModule } from '../prime';

@NgModule({
  declarations: [
    XTableComponent
  ],
  imports: [
    AccordionModule, AutoCompleteModule, BlockUIModule, BreadcrumbModule, ButtonModule, CalendarModule, CaptchaModule, CardModule,
    CarouselModule, ChartModule, ChipsModule, ConfirmDialogModule, CodeHighlighterModule, CheckboxModule, ColorPickerModule,
    ContextMenuModule, DataGridModule, DeferModule, DialogModule, DropdownModule, DataListModule, DataViewModule, DragDropModule,
    DataScrollerModule, EditorModule, FieldsetModule, FileUploadModule, KeyFilterModule, GalleriaModule, GMapModule, GrowlModule,
    InplaceModule, InputMaskModule, InputTextModule, InputSwitchModule, InputTextareaModule, LightboxModule, PickListModule, OrderListModule,
    MegaMenuModule, MenuModule, MenubarModule, MessageModule, MessagesModule, MultiSelectModule, TabMenuModule, PanelMenuModule, SlideMenuModule,
    TieredMenuModule, OrganizationChartModule, OverlayPanelModule, PaginatorModule, PanelModule, PasswordModule, ProgressBarModule, ProgressSpinnerModule,
    ScrollPanelModule, RadioButtonModule, RatingModule, StepsModule, SliderModule, SidebarModule, SpinnerModule, SplitButtonModule, SelectButtonModule,
    TriStateCheckboxModule, TreeModule, TableModule, ToolbarModule, TooltipModule, TerminalModule, TabViewModule, TreeTableModule, ToggleButtonModule,
    AngularCommonModule
  ],
  providers: [
    RxApi, Notify,
  ],
  exports: [
    AccordionModule, AutoCompleteModule, BlockUIModule, BreadcrumbModule, ButtonModule, CalendarModule, CaptchaModule, CardModule,
    CarouselModule, ChartModule, ChipsModule, ConfirmDialogModule, CodeHighlighterModule, CheckboxModule, ColorPickerModule,
    ContextMenuModule, DataGridModule, DeferModule, DialogModule, DropdownModule, DataListModule, DataViewModule, DragDropModule,
    DataScrollerModule, EditorModule, FieldsetModule, FileUploadModule, KeyFilterModule, GalleriaModule, GMapModule, GrowlModule,
    InplaceModule, InputMaskModule, InputTextModule, InputSwitchModule, InputTextareaModule, LightboxModule, PickListModule, OrderListModule,
    MegaMenuModule, MenuModule, MenubarModule, MessageModule, MessagesModule, MultiSelectModule, TabMenuModule, PanelMenuModule, SlideMenuModule,
    TieredMenuModule, OrganizationChartModule, OverlayPanelModule, PaginatorModule, PanelModule, PasswordModule, ProgressBarModule, ProgressSpinnerModule,
    ScrollPanelModule, RadioButtonModule, RatingModule, StepsModule, SliderModule, SidebarModule, SpinnerModule, SplitButtonModule, SelectButtonModule,
    TriStateCheckboxModule, TreeModule, TableModule, ToolbarModule, TooltipModule, TerminalModule, TabViewModule, TreeTableModule, ToggleButtonModule,
    XTableComponent
  ]
})

export class CommonModule {}
