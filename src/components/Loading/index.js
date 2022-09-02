import { LoadingStyle } from "./style";

const LoadingComponent = () => {
  return (
    <>
      <div className="loading-container">
        <div className="loading"></div>
      </div>
      <LoadingStyle />
    </>
  );
};

export default LoadingComponent;
