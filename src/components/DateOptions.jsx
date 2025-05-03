import React, { useState } from "react";
import styled from "styled-components";
import backgroundVideo from "../assets/background video.mp4";

const Container = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;
`;

const VideoBackground = styled.video`
  position: fixed;
  right: 0;
  bottom: 0;
  width: 100vw;
  z-index: -1;
  object-fit: fill;
`;

const ContentWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;

`;

const Form = styled.form`
  background: rgba(255, 255, 255, 0.9);
  padding: 2rem;
  border-radius: 20px;
  box-shadow: 0 0 20px rgba(241, 6, 120, 0.577);
  width: 100%;
  max-width: 600px;
`;

const FormGroup = styled.div`
  margin-bottom: 1.5rem;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  font-size: 1.1rem;
  color: #ff4081;
`;

const Select = styled.select`
  width: 100%;
  padding: 0.8rem;
  border: 2px solid #ff4081;
  border-radius: 10px;
  font-size: 1rem;
  margin-bottom: 1rem;
  background: white;
`;

const ChipContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 10px;
`;

const Chip = styled.div`
  background: ${(props) => (props.selected ? "#ff4081" : "#f8bbd0")};
  color: ${(props) => (props.selected ? "white" : "#ff4081")};
  padding: 8px 15px;
  border-radius: 20px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

const TextField = styled.textarea`
  width: 100%;

  border: 2px solid #ff4081;
  border-radius: 10px;
  font-size: 1rem;
  min-height: 100px;
  resize: vertical;
`;

const DateTimeInput = styled.input`
  width: 100%;
  padding: 0.8rem 0;
  border: 2px solid #ff4081;
  border-radius: 10px;
  font-size: 1rem;
  margin-bottom: 1rem;
`;

const SubmitButton = styled.button`
  background: linear-gradient(45deg, #ff4081, #ff80ab);
  color: white;
  padding: 1rem 2rem;
  border: none;
  border-radius: 25px;
  font-size: 1.1rem;
  cursor: pointer;
  transition: transform 0.3s ease;
  width: 100%;

  &:hover {
    transform: scale(1.05);
  }
`;

const SummaryOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
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

const Summary = styled.div`
  background: linear-gradient(45deg, #fff1f1, #fff8f8);
  padding: 2rem;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(255, 64, 129, 0.2);
  max-width: 500px;
  width: 90%;
  position: relative;
  animation: popIn 0.5s cubic-bezier(0.26, 0.53, 0.74, 1.48);
  border: 3px solid #ff4081;

  @keyframes popIn {
    0% {
      opacity: 0;
      transform: scale(0.5);
    }
    100% {
      opacity: 1;
      transform: scale(1);
    }
  }
`;

const SummaryTitle = styled.h3`
  color: #ff4081;
  font-size: 28px;
  margin-bottom: 20px;
  text-align: center;
  font-family: "Great Vibes", cursive;
`;

const SummaryItem = styled.p`
  margin: 15px 0;
  padding: 10px;
  background: rgba(255, 64, 129, 0.1);
  border-radius: 10px;
  color: #ff4081;
  font-size: 1.1rem;

  strong {
    color: #e91e63;
    font-weight: bold;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: -15px;
  right: -15px;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background: #ff4081;
  color: white;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.1);
  }
`;

const Hearts = styled.div`
  position: absolute;
  width: 100%;
  text-align: center;
  font-size: 24px;
  color: #ff4081;
  top: -30px;
  left: 0;
  animation: float 3s ease-in-out infinite;

  @keyframes float {
    0%,
    100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-10px);
    }
  }
`;

function DateOptions() {
  const [dateType, setDateType] = useState("");
  const [selectedFood, setSelectedFood] = useState([]);
  const [selectedSnacks, setSelectedSnacks] = useState([]);
  const [additionalIdeas, setAdditionalIdeas] = useState("");
  const [dateTime, setDateTime] = useState("");
  const [showSummary, setShowSummary] = useState(false);

  const foodOptions = [
    "Fried Chicken + Fries",
    "pizza",
    "burger",
    "asian food",
    "italian food",

    
  ];

  const snackOptions = ["Chips", "Drinks", "ice cream", "chocolate", "cheesecake"];

  const handleFoodSelect = (food) => {
    setSelectedFood((prev) =>
      prev.includes(food) ? prev.filter((f) => f !== food) : [...prev, food]
    );
  };

  const handleSnackSelect = (snack) => {
    setSelectedSnacks((prev) =>
      prev.includes(snack) ? prev.filter((s) => s !== snack) : [...prev, snack]
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowSummary(true);
  };

  return (
    <Container>
      <VideoBackground autoPlay loop muted>
        <source src={backgroundVideo} type="video/mp4" />
      </VideoBackground>
      <ContentWrapper>
        <Form onSubmit={handleSubmit}>
          <FormGroup>
            <Label>Type of Date</Label>
            <Select
              value={dateType}
              onChange={(e) => setDateType(e.target.value)}
              required
            >
              <option value="">Select type</option>
              <option value="dining">Fine Dining</option>
              <option value="cinema">Cinema</option>
              <option value="coffee date">Coffee Date</option>
              <option value="other">Other</option>
            </Select>
          </FormGroup>

          <FormGroup>
            <Label>Choose Food</Label>
            <ChipContainer>
              {foodOptions.map((food) => (
                <Chip
                  key={food}
                  selected={selectedFood.includes(food)}
                  onClick={() => handleFoodSelect(food)}
                >
                  {food}
                </Chip>
              ))}
            </ChipContainer>
          </FormGroup>

          <FormGroup>
            <Label>Choose Sides</Label>
            <ChipContainer>
              {snackOptions.map((snack) => (
                <Chip
                  key={snack}
                  selected={selectedSnacks.includes(snack)}
                  onClick={() => handleSnackSelect(snack)}
                >
                  {snack}
                </Chip>
              ))}
            </ChipContainer>
          </FormGroup>

          <FormGroup>
            <Label>Additional Ideas</Label>
            <TextField
              value={additionalIdeas}
              onChange={(e) => setAdditionalIdeas(e.target.value)}
              placeholder="Share your thoughts..."
            />
          </FormGroup>

          <FormGroup>
            <Label>Choose Date & Time</Label>
            <DateTimeInput
              type="datetime-local"
              value={dateTime}
              onChange={(e) => setDateTime(e.target.value)}
              required
            />
          </FormGroup>

          <SubmitButton type="submit">Done</SubmitButton>

          {showSummary && (
            <SummaryOverlay onClick={() => setShowSummary(false)}>
              <Summary onClick={(e) => e.stopPropagation()}>
                <Hearts>❤️ ❤️ ❤️</Hearts>
                <CloseButton onClick={() => setShowSummary(false)}>
                  ×
                </CloseButton>
                <SummaryTitle>Our Date Plans 💖</SummaryTitle>
                <SummaryItem>
                  <strong>Type of Date:</strong> {dateType}
                </SummaryItem>
                <SummaryItem>
                  <strong>Food Choices:</strong>{" "}
                  {selectedFood.join(", ") || "None selected"}
                </SummaryItem>
                <SummaryItem>
                  <strong>Snacks:</strong>{" "}
                  {selectedSnacks.join(", ") || "None selected"}
                </SummaryItem>
                {additionalIdeas && (
                  <SummaryItem>
                    <strong>Additional Ideas:</strong> {additionalIdeas}
                  </SummaryItem>
                )}
                <SummaryItem>
                  <strong>Date & Time:</strong>{" "}
                  {new Date(dateTime).toLocaleString()}
                </SummaryItem>
              </Summary>
            </SummaryOverlay>
          )}
        </Form>
      </ContentWrapper>
    </Container>
  );
}

export default DateOptions;
