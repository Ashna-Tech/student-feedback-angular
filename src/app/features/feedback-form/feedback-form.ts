import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormControlName, ReactiveFormsModule, Validators } from '@angular/forms';
import { feedbackService } from '../../core/feedback.service';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-feedback-form',
  imports: [ReactiveFormsModule,CommonModule,RouterOutlet],
  templateUrl: './feedback-form.html',
  styleUrl: './feedback-form.scss'
})
export class FeedbackForm {
  feedbackForm: FormGroup;

  constructor(private fb: FormBuilder, private feedbackService: feedbackService) {
    this.feedbackForm = this.fb.group({
      name: ['', Validators.required],
      subject: ['', Validators.required],
      rating: [null, [Validators.required, Validators.min(1), Validators.max(5)]],
      comments: ['']
    });
  }

  onSubmit() {
    if (this.feedbackForm.valid) {
      this.feedbackService.addFeedback(this.feedbackForm.value);
      this.feedbackForm.reset();
      alert('Feedback submitted!');
    }
  }

}
