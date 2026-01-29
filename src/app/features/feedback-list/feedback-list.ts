import { Component,computed,signal } from '@angular/core';
import { feedbackService } from '../../core/feedback.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-feedback-list',
  imports: [CommonModule],
  templateUrl: './feedback-list.html',
  styleUrl: './feedback-list.scss'
})
export class FeedbackList {
feedbacks ;

constructor(private feedbackService: feedbackService){
  this.feedbacks = this.feedbackService.getAllFeedbacks();
}

deleteFeedback(id:number){
  this.feedbackService.deleteFeedback(id);
}
}

