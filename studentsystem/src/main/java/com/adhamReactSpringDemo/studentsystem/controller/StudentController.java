package com.adhamReactSpringDemo.studentsystem.controller;

import com.adhamReactSpringDemo.studentsystem.model.Student;
import com.adhamReactSpringDemo.studentsystem.service.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/student")
//override cors error
@CrossOrigin
public class StudentController {
    @Autowired
    private StudentService studentService;
    @PostMapping("/add")
    public String add(@RequestBody Student student){
        studentService.saveStudent(student);
        return "New Student is added";
    }
    @GetMapping("/getAll")
    public List<Student> getAllStudents(){
        return studentService.getAllStudents();
    }
}
