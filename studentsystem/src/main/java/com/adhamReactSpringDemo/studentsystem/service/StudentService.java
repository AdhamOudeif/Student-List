package com.adhamReactSpringDemo.studentsystem.service;
import com.adhamReactSpringDemo.studentsystem.model.Student;

import java.util.List;

public interface StudentService {
    public Student saveStudent(Student student);
    //get data from database
    public List<Student> getAllStudents();
}
