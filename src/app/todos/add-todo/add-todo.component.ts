import {
  Component,
  ChangeDetectionStrategy,
  Output,
  EventEmitter,
} from '@angular/core';
import { UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'ako-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddTodoComponent {
  addForm = new UntypedFormGroup({
    description: new UntypedFormControl('', Validators.required),
  });

  @Output() added = new EventEmitter<string>();

  add(): void {
    this.added.emit(this.addForm.get('description')!.value);
    this.reset();
  }

  reset(): void {
    this.addForm.reset({ description: '' });
  }
}
