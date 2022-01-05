import {
  AfterViewInit,
  Component,
  ElementRef,
  QueryList,
  ViewChild,
  ViewChildren
} from '@angular/core';
import { COURSES } from '../db-data';
import { CourseCardComponent } from './course-card/course-card.component';
import { Course } from './model/course';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  @ViewChild('cardRef1', { read: ElementRef })
  card1: CourseCardComponent;

  /* Não é possivel utilizar o view child para "descer" (drill down) na hierarquia do DOM
    o ViewChild só consegue atuar no template local do componente que o declara.
    Se tentarmos acessar propriedades dentro dos componentes utilizando template variables + ViewChild
    não conseguiremos acessar a propriedades
  */
  @ViewChild('courseImg')
  courseImg: ElementRef;

  @ViewChildren(CourseCardComponent, { read: ElementRef })
  cards: QueryList<ElementRef>;

  public courses = COURSES as any[];

  constructor() {}

  public ngAfterViewInit(): void {
    console.log('ngAfterViewInit:', this.courseImg);
    /* Avoid data modification here => break unidirection data flow
    Use it for template querying */

    this.cards.changes.subscribe((cards) => console.log(cards));

    console.log();
  }

  public onCourseSelected(course: Course): void {}

  public onCoursesEdit(): void {
    this.courses.push({
      id: 1,
      description: 'Angular core deep dive',
      iconUrl:
        'https://s3-us-west-1.amazonaws.com/angular-university/course-images/angular-core-in-depth-small.png',
      longDescription:
        'A detailed walk-through of the most important part of Angular - the Core and Common modules',
      category: 'INTERMEDIATE',
      lessonsCount: 10
    });
  }
}
