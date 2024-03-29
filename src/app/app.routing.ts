import { Routes, RouterModule } from '@angular/router';
import {CourseGridComponentComponent} from './course-grid-component/course-grid-component.component';
import {CourseEditorComponentComponent} from './course-editor-component/course-editor-component.component';
import {CourseTableComponentComponent} from './course-table-component/course-table-component.component';
const appRoutes: Routes = [
  { path: '', component: CourseGridComponentComponent},
  { path: 'course', component: CourseGridComponentComponent },
  { path: 'course/table', component: CourseTableComponentComponent},
  { path: 'course/:courseId', component: CourseEditorComponentComponent },
  { path: 'course/:courseId/module', component: CourseEditorComponentComponent},
  { path: 'course/:courseId/module/:moduleId/lesson', component: CourseEditorComponentComponent},
  { path: 'course/:courseId/module/:moduleId/lesson/:lessonId/topic', component: CourseEditorComponentComponent},
  { path: 'course/:courseId/module/:moduleId/lesson/:lessonId/topic/:topicId/widget', component: CourseEditorComponentComponent}
];
export const routing = RouterModule.forRoot(appRoutes);
