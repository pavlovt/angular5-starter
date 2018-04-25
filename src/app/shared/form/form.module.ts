import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import * as _ from 'lodash';
import { AutoCompleteModule, ButtonModule, CalendarModule, CaptchaModule, CheckboxModule, ColorPickerModule, 
  DropdownModule, FieldsetModule, FileUploadModule, InplaceModule, InputMaskModule, InputTextModule, InputSwitchModule, 
  InputTextareaModule, MultiSelectModule, PasswordModule, ProgressBarModule, ProgressSpinnerModule,SpinnerModule, RadioButtonModule, RatingModule, 
  SplitButtonModule, SelectButtonModule, TriStateCheckboxModule, ToggleButtonModule } from '../prime';
import { XInput } from './components/xinput/xinput'; export { XInput };
import { XPassword } from './components/xpassword/xpassword';  export { XPassword };
import { XDropdown } from 'app/shared/form/components/xdropdown/xdropdown'; export { XDropdown };
import { XMask } from 'app/shared/form/components/xmask/xmask'; export {XMask};
import { XAutoComplete } from 'app/shared/form/components/xauto-complete/xauto-complete'; export {XAutoComplete};
import { XRadioButton } from 'app/shared/form/components/xradio-button/xradio-button';export {XRadioButton};
import { XNumInput } from 'app/shared/form/components/xnum-input/xnum-input'; export {XNumInput}

 

 


@NgModule({
  declarations: [
    XInput,
    XPassword,
    XDropdown,
    XMask,
    XAutoComplete,
    XRadioButton,
    XNumInput
    
  
  
  ],
  imports: [
    AutoCompleteModule, ButtonModule, CalendarModule, CaptchaModule, CheckboxModule, ColorPickerModule, 
    DropdownModule, FieldsetModule, FileUploadModule, InplaceModule, InputMaskModule, InputTextModule, InputSwitchModule, 
    InputTextareaModule, MultiSelectModule, PasswordModule, ProgressBarModule, ProgressSpinnerModule,SpinnerModule, RadioButtonModule, RatingModule, 
    SplitButtonModule, SelectButtonModule, TriStateCheckboxModule, ToggleButtonModule,
    ReactiveFormsModule, FormsModule, CommonModule,
  ],
  providers: [],
  exports: [
    AutoCompleteModule, ButtonModule, CalendarModule, CaptchaModule, CheckboxModule, ColorPickerModule, 
    DropdownModule, FieldsetModule, FileUploadModule, InplaceModule, InputMaskModule, InputTextModule, InputSwitchModule, 
    InputTextareaModule, MultiSelectModule, PasswordModule, ProgressBarModule, ProgressSpinnerModule,SpinnerModule, RadioButtonModule, RatingModule, 
    SplitButtonModule, SelectButtonModule, TriStateCheckboxModule, ToggleButtonModule,

    XInput,XPassword,XDropdown,XMask,XAutoComplete, XRadioButton, XNumInput

  ]
})

export class FormModule {}