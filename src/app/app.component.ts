import { Component, ElementRef, QueryList, ViewChildren } from '@angular/core';
import { COURSES } from '../db-data';
import { CourseCardComponent } from './course-card/course-card.component';
import { Course } from './core/model/Course';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public readonly headerImgSrc =
    'https://angular-academy.s3.amazonaws.com/main-logo/main-page-logo-small-hat.png';

  title = 'Angular core deep dive';

  public courses = COURSES;

  @ViewChildren(CourseCardComponent, { read: ElementRef })
  cards: QueryList<ElementRef>;

  public onCourseSelected(course: Course): void {}
}
