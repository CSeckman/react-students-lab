import Score from "../Score/Score"

const Student = (props) => {
  return  (
    <div id="student-card">
      <div id="student-name">
        <p>
          {props.student.name}
        </p>
      </div>
      <div>
        <Score
          studentScores={props.student.scores}
        />
      </div>
    </div>
  )
}

export default Student;
