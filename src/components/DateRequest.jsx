import { useState } from "react";
import styled from "styled-components";

const DateRequestContainer = styled.div`
    min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  
`;

const ContentWrapper = styled.div`
  padding: 30px;
  text-align: center;
  background: rgba(255, 255, 255, 0.9);
  border-radius: 20px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
`;

const Container = styled.div`
  padding: 30px;
  text-align: center;
`;

const Title = styled.h1`
  font-family: "Great Vibes", cursive;
  font-size: 36px;
  margin-bottom: 30px;
  color: #e91e63;
`;

const ButtonContainer = styled.div`
  margin: 20px;
`;

const Button = styled.button`
  font-size: 20px;
  padding: 12px 24px;
  margin: 10px;
  border: none;
  border-radius: 20px;
  background-color: #ff4081;
  color: #ffffff;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #ffffff;
    color: #ff4081;
  }
`;

const NoButton = styled(Button)`
  position: ${(props) => (props.isHovered ? "absolute" : "static")};
  left: ${(props) => props.position?.left || "auto"};
  top: ${(props) => props.position?.top || "auto"};
`;

const Popup = styled.div`
  display: ${(props) => (props.show ? "block" : "none")};
  background-color: #fff;
  border: 1px solid #e91e63;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  padding: 20px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 999;
  font-family: "Dancing Script", cursive;
  font-size: 24px;
  color: #e91e63;
  animation: fadeIn 0.3s ease;

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

function DateRequest({onTransition}) {
  const [showPopup, setShowPopup] = useState(false);
  const [noButtonPosition, setNoButtonPosition] = useState(null);
  const [isNoButtonHovered, setIsNoButtonHovered] = useState(false);

  const handleNoButtonHover = () => {
    setIsNoButtonHovered(true);
    setNoButtonPosition({
      left: `${Math.random() * 80}vw`,
      top: `${Math.random() * 80}vh`,
    });
  };

  const handleYesClick = () => {
    setShowPopup(true);
    setTimeout(() => {
      onTransition(); // Transition to DateOptions after some time
    }, 3000); // Adjust time as needed
  };

  const handlePopupClick = () => {
    setShowPopup(false);
  };

  return (
    <DateRequestContainer>
      <ContentWrapper>
        <Container>
          <Title>Will you go on a date with me?</Title>
          <ButtonContainer>
            <NoButton
              onMouseOver={handleNoButtonHover}
              isHovered={isNoButtonHovered}
              position={noButtonPosition}
            >
              No
            </NoButton>
            <Button onClick={handleYesClick}>Yes</Button>
          </ButtonContainer>
          <Popup show={showPopup} onClick={handlePopupClick}>
            <p>Aww, i know you will say yes! 💖</p>
          </Popup>
        </Container>
      </ContentWrapper>
    </DateRequestContainer>
  );
}

export default DateRequest;