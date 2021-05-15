import ResultItem from '../ResultItem/ResultItem';

function ResultList(props) {
  const resultArray = props.resultArray;
  
  if (resultArray == null) {
    return <div/>;
  } else {
    return (
      <ul>
        {resultArray.map((result, key) => (
          <li>
            <ResultItem key={key} item={result} />
          </li>
      ))}
      </ul>
    )
  }

}

export default ResultList;

