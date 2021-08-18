SELECT SUM(assignment_submissions.duration)
FROM students 
JOIN assignment_submissions ON students.id = student_id
JOIN cohorts ON cohort_id = cohorts.id
WHERE cohorts.name = 'FEB12';