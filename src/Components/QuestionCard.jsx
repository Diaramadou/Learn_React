function QuestionCard({Question, response, update}) {
  return (
    <div className="QuestionCard">
      <p>{Question}</p>
      <ul>

        {Object.keys(response).map((resp) => (
          <li>
            <input type="checkbox" name="" id="" onChange={(e)=>{
                update(Question, resp)
            }} />
            {resp}
          </li>
        ))}
      </ul>
    </div>
  );
}
export default QuestionCard;
