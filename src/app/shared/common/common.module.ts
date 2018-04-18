import { NgModule } from '@angular/core';
import _ from 'lodash';

import { RxApi } from './services/rxapi'; export { RxApi };
import { Notify } from './services/notify'; export { Notify };

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
  ]
})

export class CommonModule {}