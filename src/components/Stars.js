import React from 'react';
import styled from 'styled-components';
import { BsStarFill, BsStarHalf, BsStar } from 'react-icons/bs';
const Stars = ({ stars, reviews }) => {
  return (
    <Wrapper>
      <div className='stars'>
        {/* star */}

        {Array.from({ length: 5 }, (dontCare, index) => index + 1).map(
          (singleStar) => {
            return (
              <span key={singleStar}>
                {stars >= singleStar ? (
                  <BsStarFill />
                ) : stars >= singleStar + 0.5 ? (
                  <BsStarHalf />
                ) : (
                  <BsStar />
                )}
              </span>
            );
          }
        )}

        {/* end of star */}
      </div>
      <p className='reviews'>({reviews} customer reviews)</p>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  span {
    color: #ffb900;
    font-size: 1rem;
    margin-right: 0.25rem;
  }
  p {
    margin-left: 0.5rem;
    margin-bottom: 0;
  }
  margin-bottom: 0.5rem;
`;
export default Stars;
