import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import * as _ from 'lodash';
import { AutoCompleteModule, ButtonModule, CalendarModule, CaptchaModule, CheckboxModule, ColorPickerModule, 
  DropdownModule, FieldsetModule, FileUploadModule, InplaceModule, InputMaskModule, InputTextModule, InputSwitchModule, 
  InputTextareaModule, MultiSelectModule, PasswordModule, ProgressBarModule, ProgressSpinnerModule,SpinnerModule, RadioButtonModule, RatingModule, 
  SplitButtonModule, SelectButtonModule, TriStateCheckboxModule, ToggleButtonModule, EditorModule } from '../prime';
import { XInput } from './components/xinput/xinput'; export { XInput };
import { XPassword } from './components/xpassword/xpassword';  export { XPassword };
import { XDropdown } from 'app/shared/form/components/xdropdown/xdropdown'; export { XDropdown };
import { XMask } from 'app/shared/form/components/xmask/xmask'; export {XMask};
import { XAutoComplete } from 'app/shared/form/components/xauto-complete/xauto-complete'; export {XAutoComplete};
import { XRadioButton } from 'app/shared/form/components/xradio-button/xradio-button';export {XRadioButton};
import { XNumInput } from 'app/shared/form/components/xnum-input/xnum-input'; export {XNumInput}
import { XArea } from './components/xarea/xarea'; export { XArea };
import { XCheckbox } from './components/xcheckbox/xcheckbox'; export { XCheckbox };
import { XMultiSelect } from './components/xmultiselect/xmultiselect'; export { XMultiSelect };
import { XDate } from './components/xdate/xdate'; export { XDate };
import { XEditor } from './components/xeditor/xeditor'; export { XEditor };

@NgModule({
  declarations: [
    XInput,
    XPassword,
    XDropdown,
    XMask,
    XAutoComplete,
    XRadioButton,
    XNumInput,
    XArea,
    XCheckbox,
    XMultiSelect,
    XDate,
    XEditor
  ],
  imports: [
    AutoCompleteModule, ButtonModule, CalendarModule, CaptchaModule, CheckboxModule, ColorPickerModule, 
    DropdownModule, FieldsetModule, FileUploadModule, InplaceModule, InputMaskModule, InputTextModule, InputSwitchModule, 
    InputTextareaModule, MultiSelectModule, PasswordModule, ProgressBarModule, ProgressSpinnerModule,SpinnerModule, RadioButtonModule, RatingModule, 
    SplitButtonModule, SelectButtonModule, TriStateCheckboxModule, ToggleButtonModule,
    ReactiveFormsModule, FormsModule, CommonModule, EditorModule,
  ],
  providers: [],
  exports: [
    AutoCompleteModule, ButtonModule, CalendarModule, CaptchaModule, CheckboxModule, ColorPickerModule, 
    DropdownModule, FieldsetModule, FileUploadModule, InplaceModule, InputMaskModule, InputTextModule, InputSwitchModule, 
    InputTextareaModule, MultiSelectModule, PasswordModule, ProgressBarModule, ProgressSpinnerModule,SpinnerModule, RadioButtonModule, RatingModule, 
    SplitButtonModule, SelectButtonModule, TriStateCheckboxModule, ToggleButtonModule, EditorModule,

    XInput,XPassword,XDropdown,XMask,XAutoComplete, XRadioButton, XNumInput,XArea,XCheckbox,XMultiSelect,XDate,XEditor
  ]
})

export class FormModule {}