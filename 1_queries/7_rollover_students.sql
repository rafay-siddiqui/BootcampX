SELECT students.name, cohorts.name, students.start_date as student_start, cohorts.start_date as cohort_start
FROM students 
JOIN cohorts ON cohort_id = cohorts.id
WHERE students.start_date <> cohorts.start_date
ORDER BY cohort_start;