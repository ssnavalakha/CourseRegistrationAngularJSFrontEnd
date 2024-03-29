import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {LessonServiceClient} from '../../Services/LessonServiceClient';

@Component({
  selector: 'app-lesson-tabs-component',
  templateUrl: './lesson-tabs-component.component.html',
  styleUrls: ['./lesson-tabs-component.component.css']
})
export class LessonTabsComponentComponent implements OnInit {
  public lessons: any[];
  public moduleId: any;
  public selectedRow: any;
  public courseId: any;

  constructor(private activatedRoute: ActivatedRoute,
              private lessonService: LessonServiceClient) {
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.moduleId = params.moduleId;
      this.courseId = params.courseId;
      this.selectedRow = Number(params.lessonId);
      this.getLessonsForModuleId(this.moduleId);
    });
    }
    getLessonsForModuleId(moduleId) {
      if (this.moduleId != null) {
        this.lessonService.findLessonsByModule(this.moduleId)
          .then(ls => this.lessons = ls);
      }
    }
  setClickedRow(l) {
    this.selectedRow = l.id;
  }

}
