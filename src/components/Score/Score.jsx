const Score = (props) => {
  return (
      <p>
        {props.studentScores.map(score =>
          <p>
            Date: {score.date}
          <br/>
            Score: {score.score}
          </p>
        )}
      </p>
  );
}
 
export default Score;
