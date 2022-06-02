import React from "react";
import SecondaryButton from "../SecondaryButton";
import "./styles.scss";

export default function Carousel({ children }) {
  const [activeIndex, setActiveIndex] = React.useState(0);

  const updateIndex = (newIndex) => {
    if (newIndex < 0) {
      newIndex = 0;
    } else if (newIndex > React.Children.count(children)) {
      newIndex = React.Children.count(children) - 1;
    }

    setActiveIndex(newIndex);
  };

  return (
    <div className="carousel">
      <div
        className="inner"
        style={{ transform: `translateX(-${activeIndex * 100}%)` }}
      >
        {React.Children.map(children, (child, index) =>
          React.cloneElement(child, { width: "20%" })
        )}
      </div>
      <div className="indicators">
        <SecondaryButton
          disabled={activeIndex === 0}
          onClick={() => updateIndex(activeIndex - 1)}
        >
          Previous
        </SecondaryButton>
        <SecondaryButton onClick={() => updateIndex(activeIndex + 1)}>
          Next
        </SecondaryButton>
      </div>
    </div>
  );
}

export const CarouselItem = ({ children, width }) => {
  return (
    <div className="carousel-item" style={{ width }}>
      {children}
    </div>
  );
};
