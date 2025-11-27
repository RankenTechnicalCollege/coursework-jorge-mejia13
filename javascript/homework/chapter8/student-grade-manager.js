function Student(firstName, lastName, studentId, grades) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.studentId = studentId;
    this.grades = grades;
}

Student.prototype.calculateAverage = function() {
    let total = this.grades.reduce((accumulator, currentValue) => {
        return accumulator + currentValue
    }, 0)

    return total / this.grades.length;
}

Student.prototype.getLetterGrade = function() {
    let grade = this.calculateAverage();

    if (grade >= 90) {
        return 'A';
    } else if (grade >= 80) {
        return 'B';
    } else if (grade >= 70) {
        return 'C';
    } else if (grade >= 60) {
        return 'D';
    } else {
        return 'F';
    }

}

Student.prototype.addGrade = function(grade) {
    this.grades.push(grade);
}

let student1 = new Student('Jorge', 'Mejia', '12345', [85, 90, 78]);
student1.addGrade(92); 
console.log(student1.grades);
console.log(`${student1.firstName} ${student1.lastName} ${student1.calculateAverage()} ${student1.getLetterGrade()}`);