import '../components/SeasonDisplay.css';
import DisplayDateTime from './timer'


const seasonConfig = {
  summer : {
    title: "SUMMERTIME!",
    text: "Let's hit the beach!",
    iconName: "sun"
  },
  winter: {
    title: "WINTER!",
    text: "Fammm it's cold",
    iconName: "snowflake"
  }
};

const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? 'summer' : 'winter'
  }
  else {
    return lat > 0 ? 'winter' : 'summer' 
  }
}
const SeasonDisplay = (props) => {
  const season = getSeason ( props.lat, new Date().getMonth());
  const { text, iconName } = seasonConfig[season];

  return (
    <div className = {`heading-display ${season}`}>
      <i className = { `icon-left massive ${iconName} icon`} />
      <h1>
        {text}
        <DisplayDateTime/>
      </h1>
      <i className = { `icon-right massive ${iconName} icon`} />
    </div>
  );
};

export default SeasonDisplay;