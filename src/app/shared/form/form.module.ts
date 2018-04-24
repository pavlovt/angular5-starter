import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import * as _ from 'lodash';
import { AutoCompleteModule, ButtonModule, CalendarModule, CaptchaModule, CheckboxModule, ColorPickerModule, 
  DropdownModule, FieldsetModule, FileUploadModule, InplaceModule, InputMaskModule, InputTextModule, InputSwitchModule, 
  InputTextareaModule, MultiSelectModule, PasswordModule, ProgressBarModule, ProgressSpinnerModule, RadioButtonModule, RatingModule, 
  SplitButtonModule, SelectButtonModule, TriStateCheckboxModule, ToggleButtonModule } from '../prime';
import { XInput } from './components/xinput/xinput'; export { XInput };
import { XPassword } from './components/xpassword/xpassword';  export { XPassword };
import { XDropdown } from 'app/shared/form/components/xdropdown/xdropdown'; export { XDropdown };
import { XMask } from 'app/shared/form/components/xmask/xmask'; export {XMask};


 


@NgModule({
  declarations: [
    XInput,
    XPassword,
    XDropdown,
    XMask
  
  
  ],
  imports: [
    AutoCompleteModule, ButtonModule, CalendarModule, CaptchaModule, CheckboxModule, ColorPickerModule, 
    DropdownModule, FieldsetModule, FileUploadModule, InplaceModule, InputMaskModule, InputTextModule, InputSwitchModule, 
    InputTextareaModule, MultiSelectModule, PasswordModule, ProgressBarModule, ProgressSpinnerModule, RadioButtonModule, RatingModule, 
    SplitButtonModule, SelectButtonModule, TriStateCheckboxModule, ToggleButtonModule,
    ReactiveFormsModule, FormsModule, CommonModule,
  ],
  providers: [],
  exports: [
    AutoCompleteModule, ButtonModule, CalendarModule, CaptchaModule, CheckboxModule, ColorPickerModule, 
    DropdownModule, FieldsetModule, FileUploadModule, InplaceModule, InputMaskModule, InputTextModule, InputSwitchModule, 
    InputTextareaModule, MultiSelectModule, PasswordModule, ProgressBarModule, ProgressSpinnerModule, RadioButtonModule, RatingModule, 
    SplitButtonModule, SelectButtonModule, TriStateCheckboxModule, ToggleButtonModule,

    XInput,XPassword,XDropdown,XMask

  ]
})

export class FormModule {}