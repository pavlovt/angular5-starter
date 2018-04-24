import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import _ from 'lodash';
import { AutoCompleteModule, ButtonModule, CalendarModule, CaptchaModule, CheckboxModule, ColorPickerModule, 
  DropdownModule, FieldsetModule, FileUploadModule, InplaceModule, InputMaskModule, InputTextModule, InputSwitchModule, 
  InputTextareaModule, MultiSelectModule, PasswordModule, ProgressBarModule, ProgressSpinnerModule, RadioButtonModule, RatingModule, 
  SplitButtonModule, SelectButtonModule, TriStateCheckboxModule, ToggleButtonModule } from '../prime';
import { XInput } from './components/xinput/xinput'; export { XInput };
import { XPassword } from './components/xpassword/xpassword'; export { XPassword };
import { XArea } from './components/xarea/xarea'; export { XArea };
import { XCheckbox } from './components/xcheckbox/xcheckbox'; export { XCheckbox };
import { XMultiSelect } from './components/xmultiselect/xmultiselect'; export { XMultiSelect };
import { XDate } from './components/xdate/xdate'; export { XDate };
import { XEditor } from './components/xeditor/xeditor'; export { XEditor };

@NgModule({
  declarations: [
    XInput,
    XPassword,
    XArea,
    XCheckbox,
    XMultiSelect,
    XDate,
    XEditor
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

    XInput,
    XPassword,
    XArea,
    XCheckbox,
    XMultiSelect,
    XDate,
    XEditor
  ]
})

export class FormModule {}