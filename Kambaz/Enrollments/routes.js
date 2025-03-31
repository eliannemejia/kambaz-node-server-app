import * as enrollmentsDao from "./dao.js";
export default function EnrollmentRoutes(app) {
    app.put("/api/courses/enroll", async (req, res) => {
        const currentUser = req.session["currentUser"];
        const courseId = req.params;
        const status = await enrollmentsDao.enrollUserInCourse(currentUser._id, courseId);
        res.send(status);
    });
    
    app.delete("/api/courses/unenroll", async (req, res) => {
        const currentUser = req.session["currentUser"];
        const { courseId } = req.params;
        const status = await enrollmentsDao.unenrollUserFromCourse(currentUser._id, courseId);
        res.send(status);
    });

}
