package com.experiment12;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;

@Service
public class EmployeeService {

    @Autowired
    private EmployeeRepository repository;

    public Employee addEmployee(Employee employee) {
        return repository.save(employee);
    }

    public List<Employee> getAllEmployees() {
        return repository.findAll();
    }

    public Optional<Employee> getEmployeeById(int id) {
        return repository.findById(id);
    }

    public Employee updateEmployee(int id, Employee updatedEmployee) {
        updatedEmployee.setId(id);
        return repository.save(updatedEmployee);
    }

    public void deleteEmployee(int id) {
        repository.deleteById(id);
    }
}