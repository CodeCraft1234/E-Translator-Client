
 // Import the CSS file for styling
import ProgressBar from './ProgressBar';



const WebRating = () => {
  return (
    <div className='mt-40'>
      <ProgressBar  label="5 Star" percentage={80} duration={1000} />
      
      <ProgressBar label="4 Star" percentage={70} duration={1000} />
      <ProgressBar label="3 Star" percentage={50} duration={1000} />
      <ProgressBar label="2 Star" percentage={30} duration={1000} />
      <ProgressBar label="1 Star" percentage={15} duration={1000} />
    </div>
  );
};

export default WebRating;
