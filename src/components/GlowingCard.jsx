import styled, { keyframes, createGlobalStyle } from "styled-components";
import { useRef, useEffect, useState } from "react";
import photo1 from "../assets/photo1.jpg";
import photo2 from "../assets/photo2.jpg";
import photo3 from "../assets/photo3.jpg";
import photo4 from "../assets/photo4.jpg";
import photo5 from "../assets/photo5.jpg";
import photo6 from "../assets/photo6.jpg";
import photo7 from "../assets/photo7.jpg";
import photo8 from "../assets/photo8.jpg";
import photo9 from "../assets/photo9.jpg";
import photo10 from "../assets/photo10.jpg";
import photo11 from "../assets/photo11.jpg";
import photo12 from "../assets/photo12.jpg";
import photo13 from "../assets/photo13.jpg";
import photo14 from "../assets/photo14.jpg";
import photo15 from "../assets/photo15.jpg";
import introVideo from '../assets/introheart.mp4'; // Adjust path as needed

const GlobalStyle = createGlobalStyle`
    @property --gradient-angle {
        syntax: "<angle>";
        initial-value: 0deg;
        inherits: false;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body, html {
        width: 100%;
        height: 100%;
        margin: 0;
        padding: 0;
        overflow: hidden;
    }

    #root {
        width: 100%;
        height: 100vh;
    }
`;

const rotate = keyframes`
    0% {
        --gradient-angle: 0deg;
    }
    100% {
        --gradient-angle: 360deg;
    }
`;

const float = keyframes`
  0% {
    transform: translateY(0px) rotate(0deg);
  }
  50% {
    transform: translateY(-20px) rotate(3deg);
  }
  100% {
    transform: translateY(0px) rotate(0deg);
  }
`;

const buttonGlow = keyframes`
  0% {
    box-shadow: 0 0 5px #6420aa,
                0 0 10px #6420aa,
                0 0 15px #6420aa;
  }
  50% {
    box-shadow: 0 0 10px #ff3ea5,
                0 0 20px #ff3ea5,
                0 0 30px #ff3ea5;
  }
  100% {
    box-shadow: 0 0 5px #6420aa,
                0 0 10px #6420aa,
                0 0 15px #6420aa;
  }
`;

const Wrapper = styled.div`
  position: fixed;
  inset: 0;
  margin: 0;
  padding: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.95);
  overflow: hidden;
`;

const Container = styled.div`
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

const CardsTrack = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 1200px;
  transition: transform 0.5s ease;
  transform: translateX(-8rem); // Adjust center position
`;

const CardWrapper = styled.div`
  position: absolute;
  width: 18rem;
  transition: all 0.3s ease;
  opacity: 0;
  visibility: hidden;

  &.active {
    left: 50%;
    transform: translateX(-50%) scale(1.1);
    z-index: 5;
    opacity: 1;
    visibility: visible;
  }

  &.prev {
    left: calc(50% - 28rem); // Adjusted from 20rem to 22rem
    transform: translateX(-50%) scale(0.9) rotate(-5deg);
    z-index: 4;
    opacity: 0.7;
    visibility: visible;
  }

  &.next {
    left: calc(50% + 28rem); // Adjusted from 20rem to 22rem
    transform: translateX(-50%) scale(0.9) rotate(5deg);
    z-index: 4;
    opacity: 0.7;
    visibility: visible;
  }

  animation: ${float} 6s ease-in-out infinite;
  transform-origin: center center;
`;
const ScrollButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(100, 32, 170, 0.3);
  border: none;
  border-radius: 50%;
  width: 3rem;
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 10;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(100, 32, 170, 0.8);
    animation: ${buttonGlow} 2s infinite;
  }

  &.left {
    left: 2rem;
  }

  &.right {
    right: 2rem;
  }

  &::before {
    content: "";
    border: solid white;
    border-width: 0 3px 3px 0;
    display: inline-block;
    padding: 5px;
    transform: ${(props) =>
      props.direction === "left" ? "rotate(135deg)" : "rotate(-45deg)"};
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    animation: none;
  }
`;

const Card = styled.div`
  position: relative;
  height: 24rem;
  width: 16rem;
  background: #1f2937;
  border-radius: 0.45rem;
  cursor: pointer;
  margin: 2rem;

  &::before,
  &::after {
    content: "";
    position: absolute;
    inset: -0.2rem;
    z-index: -1;
    background: conic-gradient(
      from var(--gradient-angle),
      #6420aa,
      #ff3ea5,
      #ff7ed4,
      #ff3ea5,
      #6420aa
    );
    border-radius: inherit;
    animation: ${rotate} 3s linear infinite;
  }

  &::before {
    filter: blur(1.5rem);
    opacity: 0.8;
  }

  &::after {
    filter: blur(3rem);
    opacity: 0.4;
    inset: -1rem;
  }

  .inner-card {
    position: absolute;
    inset: 2px;
    background: #1f2937;
    border-radius: inherit;
    z-index: 1;
  }
`;

const ContinueButton = styled.button`
  position: absolute;
  bottom: 3rem;
  left: 50%;
  transform: translateX(-50%);
  background: linear-gradient(45deg, #6420aa, #ff3ea5);
  border: none;
  border-radius: 2rem;
  padding: 1rem 2.5rem;
  color: white;
  font-size: 1.2rem;
  font-weight: 600;
  cursor: pointer;
  z-index: 10;
  transition: all 0.3s ease;
  box-shadow: 0 0 15px rgba(100, 32, 170, 0.3);

  &:hover {
    transform: translateX(-50%) translateY(-3px);
    box-shadow: 0 0 20px rgba(255, 62, 165, 0.5),
      0 0 40px rgba(100, 32, 170, 0.3);
    background: linear-gradient(45deg, #ff3ea5, #6420aa);
  }

  &:active {
    transform: translateX(-50%) translateY(-1px);
  }

  &::before {
    content: "✨";
    margin-right: 0.5rem;
  }

  &::after {
    content: "✨";
    margin-left: 0.5rem;
  }
`;

const CardContent = styled.div`
  position: absolute;
  inset: 2px;
  background: #1f2937;
  border-radius: inherit;
  z-index: 1;
  overflow: hidden;
  display: flex;
  flex-direction: column;
`;

const CardImage = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  background-image: url(${(props) => props.src});
  background-size: cover;
  background-position: center;

  &::after {
    content: "";
    position: absolute;
    inset: 0;
    background: linear-gradient(
      to bottom,
      rgba(31, 41, 55, 0.3),
      rgba(31, 41, 55, 0.8)
    );
  }
`;

const CardText = styled.div`
  position: relative;
  z-index: 2;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: flex-end;
`;

const CardTitle = styled.h2`
  font-family: "Pacifico", cursive;
  color: #fff;
  font-size: 1.8rem;
  margin-bottom: 0.5rem;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
`;

const CardDescription = styled.p`
  font-family: "Poppins", sans-serif;
  color: #f3f4f6;
  font-size: 0.9rem;
  line-height: 1.4;
  opacity: 0.9;
`;

// Example card data
const cardData = [
  {
    id: 0,
    title: "you are very special person tome",
    description: "Every moment with you  feels differently and  unique ✨",
    image: null
  },
  {
    id: 1,
    title: "a literal living angel",
    description:
      "i cant describe how beautiful you are and how you look in my eyes whether its how you look or how you act you are so gorgeous  💖",
      image: null
  },
  {
    id: 2,
    title: "sweet memories",
    description:
      "i had so much fun with you and i will never forget the moments we shared our laughter jokes and the moments we spent together 🌅",
      image: null
  },
  {
    id: 3,
    title: "strong connection",
    description:
      "we share a good strong connection and share a lot of common interests complete each other sentences and thing we agree on and how we view the aspects of life 💖",
      image: null
  },
  {
    id: 4,
    title: "goofy and cutie ",
    description:
      "you are so goofy and cute and i love how you are and how you act and how you are with me and how you make me laugh and smile and how you are so sweet and caring and i love ur weird side 💖",
      image: null
  },
  {
    id: 5,
    title: "what i love about you",
    description:
      "your smile your laugh your voice your eyes your hair  how u look in anytime and anyway how u caring and how u make me feel when i am with u",
      image: null
  },
  {
    id: 6,
    title: "what i know about your interests",
    description:
      "you like to play go to gym use snapchat(obviously)  design and fashion watch netflex and listen to music like to eat fried chicken and fries",
      image: null
  },
  {
    id: 7,
    title: "what you want in life",
    description:
      "you want something to call it home you want your own kingdom to live free do what you want when you feel like it to feel safe someone to love you and treat you right  🏡",
      image: null
  },
  {
    id: 8,
    title: "some of your adjectives",
    description:
      "you are so sweet , caring , funny , cute , beautiful , amazing , smart , talented , and so much more ",
      image: null
  },
  {
    id: 9,
    title: "wishes ",
    description:
      "i really want to see you happy and feel safe and love and i want to see you succeed in life and i want to see you smile and laugh ",
      image: null
  },
  {
    id: 10,
    title: "advices",
    description:
      "stop being sad about everything try to Restrain yourself life is short and you should enjoy it and dont let the little things ruin your day try to develop and grow as a person and as a mentality be more positive and mature",
      image: null
  },
  {
    id: 11,
    title: "career",
    description:
      "you are smart dont let that goto waste you should focus on your career and work hard and be the best in your field and be the best in the world and be the best in your life you are smart and talented and you can do anything you want if you work hard and focus on it and you will be successful",
      image: null
  },
  {
    id: 12,
    title: "what i hope",
    description:
      "i wish we can be together i found alot of things i want in you 👨‍👩‍👧‍👦",
      image: null
  },
  {
    id: 13,
    title: " Journey ",
    description:
      "i will always be here for you and i will always support you even if things didnt work out u can still talk to me when you need someone to talk to or when you need someone to listen to you or when you need someone to help you or when you need someone to be with you i will always be here for you and i will always support you",
      image: null
  },
  {
    id: 14,
    title: "in the end",
    description:
      "we had great time together it was nice experince and i will never forget it and i will always remember it and i will always cherish it whether it might works out or not",
    image: null
  },
];

const VideoContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: black;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const Video = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover; // This ensures better video display
`;

function GlowingCards({ onContinue }) {
    const [currentIndex, setCurrentIndex] = useState(1);
    const [shuffledImages, setShuffledImages] = useState([]);
    const [showVideo, setShowVideo] = useState(false);
    const videoRef = useRef(null);
  
    // useEffect(() => {
    //   const images = [
    //     photo1, photo2, photo3, photo4, photo5,
    //     photo6, photo7, photo8, photo9, photo10,
    //     photo11, photo12, photo13, photo14, photo15
    //   ];
    //   const shuffled = [...images].sort(() => Math.random() - 0.5);
    //   setShuffledImages(shuffled);
    // }, []);
  
    const cardsWithShuffledImages = cardData.map((card, index) => ({
      ...card,
      image: shuffledImages[index] || card.image,
    }));
  
    const handleScroll = (direction) => {
      if (direction === "right" && currentIndex < cardData.length - 1) {
        setCurrentIndex((prev) => prev + 1);
      } else if (direction === "left" && currentIndex > 0) {
        setCurrentIndex((prev) => prev - 1);
      }
    };
  
    const handleContinue = () => {
      setShowVideo(true);
    };
  
    const handleVideoEnd = () => {
      onContinue();
    };
  
    return (
      <>
        {!showVideo ? (
          <>
            <GlobalStyle />
            <Wrapper>
              <Container>
                <ScrollButton
                  direction="left"
                  className="left"
                  onClick={() => handleScroll("left")}
                  disabled={currentIndex === 0}
                />
                <CardsTrack>
                  {cardsWithShuffledImages.map((card, index) => (
                    <CardWrapper
                      key={card.id}
                      className={
                        index === currentIndex
                          ? "active"
                          : index === currentIndex - 1
                          ? "prev"
                          : index === currentIndex + 1
                          ? "next"
                          : ""
                      }
                    >
                      <Card>
                        <div className="inner-card">
                          <CardContent>
                            <CardImage src={card.image} alt={card.title} />
                            <CardText>
                              <CardTitle>{card.title}</CardTitle>
                              <CardDescription>{card.description}</CardDescription>
                            </CardText>
                          </CardContent>
                        </div>
                      </Card>
                    </CardWrapper>
                  ))}
                </CardsTrack>
                <ScrollButton
                  direction="right"
                  className="right"
                  onClick={() => handleScroll("right")}
                  disabled={currentIndex === cardData.length - 1}
                />
                <ContinueButton onClick={handleContinue}>
                  Continue to Your Special Gift ❤️
                </ContinueButton>
              </Container>
            </Wrapper>
          </>
        ) : (
          <VideoContainer>
            <Video
              ref={videoRef}
              autoPlay
              playsInline
              onEnded={handleVideoEnd}
            >
              <source src={introVideo} type="video/mp4" />
              Your browser does not support the video tag.
            </Video>
          </VideoContainer>
        )}
      </>
    );
}
  
export default GlowingCards;
