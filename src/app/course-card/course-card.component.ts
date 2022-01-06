import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { Course } from "../model/course";

enum Category {
  BEGINNER = "BEGINNER",
  INTERMEDIATE = "INTERMEDIATE",
  ADVANCED = "ADVANCED",
}

@Component({
  selector: "course-card",
  templateUrl: "./course-card.component.html",
  styleUrls: ["./course-card.component.css"],
})
export class CourseCardComponent {
  @Input() course: Course;
  @Input() cardIndex: number;

  @Output() courseEmmiter = new EventEmitter<Course>();

  constructor() {}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
  }

  public onCourseViewed(): void {
    console.log("card component");

    this.courseEmmiter.emit(this.course);
  }

  public cardClasses(): { [key: string]: boolean } {
    return {
      begginer: this.course.category === "BEGINNER",
    };
  }

  public cardStyles() {
    return {
      "text-decoration": "underline",
      "background-image": "url(" + this.course.iconUrl + ")",
    };
  }
}
