import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCategoryComponent } from './pages/admin/add-category/add-category.component';
import { AddQuestionComponent } from './pages/admin/add-question/add-question.component';
import { AddQuizComponent } from './pages/admin/add-quiz/add-quiz.component';
import { DashboardComponent } from './pages/admin/admin-dashboard/dashboard.component';
import { QuizAttemptsComponent } from './pages/admin/quiz-attempts/quiz-attempts.component';
import { UpdateQuizComponent } from './pages/admin/update-quiz/update-quiz.component';
import { ViewCategoriesComponent } from './pages/admin/view-categories/view-categories.component';
import { ViewQuestionsComponent } from './pages/admin/view-questions/view-questions.component';
import { ViewQuizComponent } from './pages/admin/view-quiz/view-quiz.component';
import { WelcomeComponent } from './pages/admin/welcome/welcome.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { SignupComponent } from './pages/signup/signup.component';
import { InstructionsComponent } from './pages/student/instructions/instructions.component';
import { LoadQuizComponent } from './pages/student/load-quiz/load-quiz.component';
import { StartQuizComponent } from './pages/student/start-quiz/start-quiz.component';
import { StudentDashboardComponent } from './pages/student/student-dashboard/student-dashboard.component';
import { StudentProfileComponent } from './pages/student/student-profile/student-profile.component';
import { StudentWelcomeComponent } from './pages/student/student-welcome/student-welcome.component';
import { AdminGuardGuard } from './services/admin-guard.guard';
import { LoginGuardGuard } from './services/login-guard.guard';
import { StudentGuard } from './services/student.guard';

const routes: Routes = [
    {
      path:'',
      component:HomeComponent,
      pathMatch:'full'
    },
    {
      path:'signup',
      component:SignupComponent,
      canActivate:[LoginGuardGuard],
      pathMatch:'full'
    },
    {
      path:'login',
      canActivate:[LoginGuardGuard],
      component:LoginComponent,
      pathMatch:'full'
    },
    {
      path:'admin',
      component:DashboardComponent,
      canActivate:[AdminGuardGuard],
      children:[
        {
          path:'',
          component:WelcomeComponent
        },
        {
          path:'profile',
          component:ProfileComponent
        },
        {
          path:'categories',
          component:ViewCategoriesComponent
        },
        {
          path:'add_category',
          component:AddCategoryComponent
        },
        {
          path:'quiz',
          component:ViewQuizComponent
        },
        {
          path:'add_quiz',
          component:AddQuizComponent
        },
        {
          path:'quiz/:qid',
          component:UpdateQuizComponent
        },
        {
          path:'view-questions/:qid/:title',
          component:ViewQuestionsComponent
        },
        {
          path:'add-question/:qid/:title',
          component:AddQuestionComponent
        },
        {
          path:'view_attempts/:qid/:title',
          component:QuizAttemptsComponent
        }
      ]
    },
    {
      path:'user-dashboard',
      component:StudentDashboardComponent,
      canActivate:[StudentGuard],
      children:[
        {
          path:'',
          component:StudentWelcomeComponent
        },
        {
          path:'profile',
          component:StudentProfileComponent
        },
        {
          path:':catid',
          component:LoadQuizComponent
        },
        {
          path:'instructions/:qid',
          component:InstructionsComponent
        }
      ]
    },
    {
      path:'start_quiz/:qid',
      canActivate:[StudentGuard],
      component:StartQuizComponent
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
