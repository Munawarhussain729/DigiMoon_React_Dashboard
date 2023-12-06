import '../assets/LoadingSpinner.css'; // Import the CSS file for styling

const LoadingSpinner = () => {
  return (
    <div className="spinner-overlay">
      <div className="spinner-container"></div>
    </div>
  );
};

export default LoadingSpinner;
