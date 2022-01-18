import {
  AfterContentInit,
  AfterViewInit,
  Component,
  ContentChild,
  ContentChildren,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  QueryList
} from '@angular/core';
import { CourseImageComponent } from '../course-image/course-image.component';
import { Course } from '../core/model/Course';

@Component({
  selector: 'course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.css']
})
export class CourseCardComponent implements AfterViewInit, AfterContentInit {
  @Input() course: Course;

  @Input() cardIndex: number;

  @Output() courseEmmiter = new EventEmitter<Course>();

  /* @ContentChild só consegue buscar os elementos projetados via ng-content
    com o nome em questão (no caso "courseImage")
   */
  @ContentChild(CourseImageComponent, { read: ElementRef })
  image: ElementRef;

  @ContentChildren(CourseImageComponent, { read: ElementRef })
  images: QueryList<CourseImageComponent | ElementRef>;

  constructor() {}
  public ngAfterContentInit(): void {
    console.log('LOG 1', this.images);
  }

  public ngAfterViewInit(): void {}

  public onCourseViewed(): void {
    this.courseEmmiter.emit(this.course);
  }

  public cardClasses(): { [key: string]: boolean } {
    return {
      begginer: this.course.category === 'BEGINNER'
    };
  }

  public cardStyles() {
    return {
      'text-decoration': 'underline',
      'background-image': 'url(' + this.course.iconUrl + ')'
    };
  }
}
