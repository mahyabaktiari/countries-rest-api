import React from "react";
//styles
import { SkeletonStyle } from "./styles";

const Skeleton = ({ theme, count }) => {
  const renderSkeletons = () => {
    let skeletons = [];
    for (let i = 1; i <= count; i++) {
      skeletons.push(
        <div className="skeleton-card-container">
          <div className="skeleton-card">
            <div className="img"></div>
            <div className="content">
              <div className="small"></div>
              <div className="big"></div>
            </div>
          </div>
        </div>
      );
    }

    return skeletons;
  };
  return (
    <>
      <SkeletonStyle theme={theme} />
      <div className="skeleton-container">{renderSkeletons()}</div>
    </>
  );
};

export default Skeleton;
