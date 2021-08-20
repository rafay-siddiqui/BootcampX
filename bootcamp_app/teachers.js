const { Pool } = require('pg');

const args = process.argv.splice(2)

const pool = new Pool({
  user: 'vagrant',
  password: '123',
  host: 'localhost',
  database: 'bootcampx'
});

pool.query(`
SELECT DISTINCT teachers.name AS teacher, cohorts.name AS cohort
FROM teachers
JOIN assistance_requests ON teachers.id = teacher_id
JOIN students ON student_id = students.id
JOIN cohorts ON cohort_id = cohorts.id
WHERE cohorts.name LIKE '${args[0]}'
ORDER BY teachers.name;
`)
.then(res => {
  console.log('connected');
  res.rows.forEach(row => {
    console.log(row.cohort + ': ' + row.teacher);
  })
})
.catch(err => console.error('query error', err.stack));