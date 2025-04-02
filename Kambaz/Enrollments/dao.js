import Database from "../Database/index.js";
import { v4 as uuidv4 } from "uuid";


export function enrollUserInCourse(userId, courseId) {
    const { enrollments } = Database;
    enrollments.push({ _id: uuidv4(), user: userId, course: courseId });
    console.log("COURSE ID: ", courseId);
    console.log("IN ENROLLMENTS DAO: ", enrollments);
}


export function unenrollUserFromCourse(userId, courseId) {
    console.log("IN UNENROLL ENROLLMENTS DAO");
    const { enrollments } = Database;
    console.log(enrollments);
    console.log("COURSE ID: ", courseId);
    const index = enrollments.findIndex((e) => e.user === userId && e.course === courseId);
    
    enrollments.splice(index, 1);
    // Database.enrollments = enrollments.filter(
    //     (enrollment) => !(enrollment.user === userId && enrollment.course === courseId)
    // );
}
