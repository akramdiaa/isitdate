import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import GlowingCards from './components/GlowingCard';
import DateRequest from './components/DateRequest';
import DateOptions from './components/DateOptions';

const TransitionWrapper = styled.div`
  .fade-enter {
    opacity: 0;
    transform: scale(0.95);
  }
  .fade-enter-active {
    opacity: 1;
    transform: scale(1);
    transition: opacity 1000ms ease-in-out, transform 1000ms ease-in-out;
  }
  .fade-exit {
    opacity: 1;
    transform: scale(1);
  }
  .fade-exit-active {
    opacity: 0;
    transform: scale(0.95);
    transition: opacity 1000ms ease-in-out, transform 1000ms ease-in-out;
  }
`;

const WelcomeContainer = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

`;

const HeartsMessage = styled.div`
  background: rgba(255, 255, 255, 0.9);
  padding: 2rem;
  border-radius: 20px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  text-align: center;
  max-width: 600px;
`;

const FloatingHearts = styled.div`
  margin: 20px 0;
  animation: float 3s ease-in-out infinite;

  @keyframes float {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-10px); }
  }
`;

const Message = styled.p`
  line-height: 1.6;
  color: #ff6b6b;
  font-size: 1.1rem;
  margin: 20px 0;
`;

const ContinueButton = styled.button`
  padding: 12px 24px;
  background: linear-gradient(45deg, #ff6b6b, #ff8e8e);
  border: none;
  border-radius: 25px;
  color: white;
  font-size: 1.1rem;
  cursor: pointer;
  transition: transform 0.3s ease;
  animation: fadeIn 1s ease-in;

  &:hover {
    transform: scale(1.05);
  }
`;

function App() {
  const [currentScreen, setCurrentScreen] = useState('welcome');
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowButton(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <TransitionWrapper>
      <TransitionGroup>
        <CSSTransition
          key={currentScreen}
          timeout={1000}
          classNames="fade"
          unmountOnExit
        >
          {currentScreen === 'welcome' ? (
            <WelcomeContainer>
              <HeartsMessage>
                <FloatingHearts>
                  {'❤️ '.repeat(15)}
                </FloatingHearts>
                <Message>
                  some text
                </Message>
                <FloatingHearts>
                  {'❤️ '.repeat(15)}
                </FloatingHearts>
                {showButton && (
                  <ContinueButton 
                    onClick={() => setCurrentScreen('glowingCards')}
                  >
                    Continue to Your Gift ❤️
                  </ContinueButton>
                )}
              </HeartsMessage>
            </WelcomeContainer>
          ) : currentScreen === 'glowingCards' ? (
            <GlowingCards 
              onContinue={() => setCurrentScreen('dateRequest')}
            />
          ) : currentScreen === 'dateRequest' ? (
            <DateRequest 
              onTransition={() => setCurrentScreen('dateOptions')}
            />
          ) : (
            <DateOptions />
          )}
        </CSSTransition>
      </TransitionGroup>
    </TransitionWrapper>
  );
}

export default App;