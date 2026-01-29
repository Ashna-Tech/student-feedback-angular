import { Routes } from '@angular/router';
import { FeedbackForm } from './features/feedback-form/feedback-form';
import { FeedbackList } from './features/feedback-list/feedback-list';

export const routes: Routes = [

    {
        path: '',
        component: FeedbackForm,
        children: [
            {
                path: '',
                component: FeedbackList,
            }
        ]
    }


];
