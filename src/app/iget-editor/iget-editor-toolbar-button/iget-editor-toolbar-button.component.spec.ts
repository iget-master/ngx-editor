import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { IgetEditorToolbarButtonComponent } from './iget-editor-toolbar-button.component';
import { PopoverModule } from 'ngx-bootstrap';
import { CommandExecutorService } from '../common/services/command-executor.service';
import { MessageService } from '../common/services/message.service';
import {MatButtonModule, MatIconModule, MatMenuModule} from '@angular/material';
import {IgetEditorToolbarComponent} from '../iget-editor-toolbar/iget-editor-toolbar.component';
import {IgetEditorToolbarGroupComponent} from '../iget-editor-toolbar-group/iget-editor-toolbar-group.component';

describe('IgetEditorToolbarButtonComponent', () => {
  let component: IgetEditorToolbarButtonComponent;
  let fixture: ComponentFixture<IgetEditorToolbarButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        ReactiveFormsModule,
        PopoverModule.forRoot(),
        HttpClientModule,
        MatIconModule,
        MatButtonModule,
        MatMenuModule
      ],
      declarations: [
        IgetEditorToolbarComponent,
        IgetEditorToolbarGroupComponent,
        IgetEditorToolbarButtonComponent
      ],
      providers: [CommandExecutorService, MessageService]
    })
      .compileComponents();
  }));

  // @todo: uncomment and fix it
  // beforeEach(() => {
  //   fixture = TestBed.createComponent(IgetEditorToolbarButtonComponent);
  //   component = fixture.componentInstance;
  //   fixture.detectChanges();
  // });
  //
  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});
