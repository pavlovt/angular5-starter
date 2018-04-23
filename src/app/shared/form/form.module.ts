import { NgModule } from '@angular/core';
import _ from 'lodash';
import { AutoCompleteModule, ButtonModule, CalendarModule, CaptchaModule, CheckboxModule, ColorPickerModule, 
  DropdownModule, FieldsetModule, FileUploadModule, InplaceModule, InputMaskModule, InputTextModule, InputSwitchModule, 
  InputTextareaModule, MultiSelectModule, PasswordModule, ProgressBarModule, ProgressSpinnerModule, RadioButtonModule, RatingModule, 
  SplitButtonModule, SelectButtonModule, TriStateCheckboxModule, ToggleButtonModule } from '../prime';
import { XInput } from './components/xinput/xinput'; export { XInput };

@NgModule({
  declarations: [
    XInput
  ],
  imports: [
    AutoCompleteModule, ButtonModule, CalendarModule, CaptchaModule, CheckboxModule, ColorPickerModule, 
    DropdownModule, FieldsetModule, FileUploadModule, InplaceModule, InputMaskModule, InputTextModule, InputSwitchModule, 
    InputTextareaModule, MultiSelectModule, PasswordModule, ProgressBarModule, ProgressSpinnerModule, RadioButtonModule, RatingModule, 
    SplitButtonModule, SelectButtonModule, TriStateCheckboxModule, ToggleButtonModule
  ],
  providers: [],
  exports: [
    AutoCompleteModule, ButtonModule, CalendarModule, CaptchaModule, CheckboxModule, ColorPickerModule, 
    DropdownModule, FieldsetModule, FileUploadModule, InplaceModule, InputMaskModule, InputTextModule, InputSwitchModule, 
    InputTextareaModule, MultiSelectModule, PasswordModule, ProgressBarModule, ProgressSpinnerModule, RadioButtonModule, RatingModule, 
    SplitButtonModule, SelectButtonModule, TriStateCheckboxModule, ToggleButtonModule,

    XInput
  ]
})

export class FormModule {}