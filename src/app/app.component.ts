import { Component } from "@angular/core";
import { COURSES } from "../db-data";
import { Course } from "./model/course";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  title = "Angular core deep dive"

  public courses = COURSES;

  public onCourseSelected(course: Course): void {
    console.log(course);

  }
}
