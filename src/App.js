
import './App.css';
import ReactPlayer from "react-player/youtube"

function App() {

  const vidUrl = "https://youtu.be/i7MLT4MmAK8"


  return (
    <div className="App">
      <h1>react video player example</h1>
      <ReactPlayer className="videoPlayer"
        url={vidUrl}//video url getting from vidUrl component.
        playing={false}//not otomaticly playin.
        volume={0.5}// volume is mid.
      />
    </div>
  );
}

export default App;
