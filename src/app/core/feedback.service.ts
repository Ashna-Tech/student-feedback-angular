import { Injectable,signal } from "@angular/core";
import { Feedback } from "../models/feedback.model";

@Injectable({
    providedIn : "root"
})

export class feedbackService{
 private feedbackList = signal<Feedback[]>([]);
 private nextId = 1;

 getAllFeedbacks(){
    return this.feedbackList;
 }

 addFeedback(feedback:Omit<Feedback, 'id'>){
   const newFeedback: Feedback = { id: this.nextId++, ...feedback };
   this.feedbackList.update((list) => [...list, newFeedback]);
 }

 deleteFeedback(id : number){
  this.feedbackList.update((list) => list.filter(f => f.id !== id));
 }
}







