import React from "react";

import styled, { css, keyframes } from "styled-components";
const Svg = styled.svg`
  width: inherit;
  height: inherit;
`;

const slideAnimation = keyframes`
    from{
        transform:translate3d(0,0,0);
    }
    to{
        transform:translate3d(-50%,0,0);
    }
`;

const UsersSliderContainer = styled.div`
  width: 100%;
`;

const UsersSlider = styled.div`
  display: inline-block;
  animation: ${slideAnimation} 60s linear infinite;
  white-space: nowrap;
  overflow: hidden;
`;

const UsersWrapper = styled.section`
  white-space: nowrap;
  overflow: hidden;
  padding: 0.5rem;
  margin-bottom: 2rem;
`;

const CompanyLogo = styled.span`
  display: inline-block;
  vertical-align: middle;
  position: relative;
  height: ${(p) => p.height || "2rem"};
  margin: 0.5rem;
  bottom: ${(p) => p.bottom || 0};
  opacity: 0.8;
  filter: brightness(0) invert(1);
  transition: opacity 125ms ease-in-out;
  &:hover {
    opacity: 1;
  }
`;

const Wrapper = styled.div.attrs({
  className: "hero-header", // for integration tests
})`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: white;
  background: linear-gradient(20deg, red, gold);
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.17);
  box-sizing: border-box;
  min-height: 100vh;
`;
const AirBnBLogo = () => (
  <Svg viewBox="0 0 486.667 151.88">
    <path
      fill="#FFF"
      d="M131.216 122.994c-1.064 7.905-6.385 14.747-13.835 17.788-3.649 1.52-7.601 1.975-11.554 1.52-3.801-.457-7.602-1.673-11.555-3.953-5.473-3.04-10.946-7.754-17.331-14.747 10.034-12.315 16.115-23.565 18.395-33.6 1.065-4.712 1.217-8.969.76-12.922-.607-3.8-1.976-7.297-4.104-10.338C87.28 59.9 79.373 55.948 70.556 55.948c-8.819 0-16.724 4.104-21.437 10.794-2.128 3.04-3.497 6.537-4.105 10.338-.608 3.953-.456 8.362.76 12.923 2.28 10.034 8.514 21.436 18.396 33.751-6.233 6.994-11.859 11.706-17.331 14.747-3.953 2.28-7.754 3.496-11.555 3.952a24.324 24.324 0 0 1-11.554-1.52c-7.45-3.04-12.771-9.882-13.835-17.787-.456-3.8-.152-7.602 1.368-11.859.456-1.52 1.216-3.04 1.977-4.865 1.064-2.432 2.28-5.017 3.496-7.601l.152-.305c10.49-22.652 21.74-45.761 33.447-68.261l.456-.913c1.217-2.28 2.433-4.713 3.65-6.993 1.215-2.433 2.584-4.713 4.256-6.69 3.193-3.648 7.45-5.624 12.162-5.624 4.713 0 8.97 1.976 12.163 5.624 1.672 1.977 3.04 4.257 4.257 6.69 1.216 2.28 2.432 4.713 3.649 6.993l.456.913a2017.108 2017.108 0 0 1 33.295 68.414v.152c1.216 2.432 2.28 5.169 3.496 7.601.761 1.825 1.52 3.345 1.977 4.865 1.216 3.953 1.673 7.754 1.064 11.707zm-60.66-7.146C62.346 105.51 57.025 95.78 55.2 87.571c-.76-3.497-.913-6.538-.457-9.275.304-2.432 1.216-4.56 2.433-6.385 2.888-4.105 7.753-6.69 13.379-6.69 5.625 0 10.642 2.433 13.378 6.69 1.217 1.824 2.129 3.953 2.433 6.385.456 2.737.304 5.93-.457 9.275-1.824 8.057-7.145 17.787-15.354 28.277zm68.565-7.905c-.76-1.825-1.52-3.801-2.28-5.473-1.216-2.737-2.432-5.322-3.497-7.754l-.151-.152c-10.49-22.805-21.74-45.914-33.6-68.718l-.456-.913c-1.216-2.28-2.432-4.713-3.648-7.145-1.52-2.736-3.041-5.625-5.473-8.363C85.15 3.344 78.157 0 70.707 0c-7.601 0-14.442 3.344-19.46 9.121-2.28 2.738-3.952 5.626-5.472 8.363-1.217 2.432-2.433 4.865-3.65 7.145l-.456.912C29.963 48.346 18.56 71.455 8.07 94.26l-.152.304c-1.064 2.432-2.28 5.017-3.497 7.753-.76 1.673-1.52 3.497-2.28 5.473-1.976 5.626-2.584 10.947-1.824 16.42 1.672 11.402 9.274 20.98 19.764 25.238 3.953 1.672 8.058 2.432 12.314 2.432 1.217 0 2.737-.152 3.953-.304 5.017-.608 10.186-2.281 15.204-5.17 6.233-3.497 12.162-8.512 18.852-15.81 6.689 7.298 12.77 12.313 18.851 15.81 5.017 2.889 10.187 4.562 15.203 5.17 1.217.152 2.737.304 3.953.304 4.257 0 8.514-.76 12.315-2.432 10.642-4.258 18.091-13.988 19.765-25.238 1.216-5.321.608-10.642-1.37-16.267zm151.576-53.516c4.41 0 6.69.76 6.69.76V68.72s-12.163-4.106-19.764 4.56v39.985h-14.595V55.948h12.315c1.216 0 2.128 1.064 2.128 2.128v2.433c2.737-3.193 8.665-6.082 13.226-6.082zm39.528 46.37c-5.624 0-10.033-2.888-12.314-6.233V74.19c2.281-3.04 7.146-6.233 12.314-6.233 9.731 0 17.18 6.081 17.18 16.42 0 10.338-7.449 16.42-17.18 16.42zm2.434-46.37c-10.035 0-14.747 6.082-14.747 6.082V28.43h-14.596v84.682h12.315c1.216 0 2.128-1.065 2.128-2.129V108.4s4.713 6.233 14.748 6.233c16.57 0 29.493-12.77 29.493-30.103.152-17.33-12.77-30.102-29.341-30.102zM420.38 79.21v34.055h-14.596V80.88c0-9.426-3.04-13.227-11.249-13.227-4.41 0-8.97 2.28-11.859 5.625v39.833h-14.596V55.948h11.555c1.216 0 2.13 1.064 2.13 2.128v2.433c4.255-4.41 9.88-6.082 15.506-6.082 6.385 0 11.707 1.825 15.963 5.473 5.169 4.258 7.146 9.73 7.146 19.309zm34.511 21.588c-5.625 0-10.035-2.888-12.315-6.233V74.19c2.28-3.04 7.146-6.233 12.315-6.233 9.73 0 17.18 6.081 17.18 16.42 0 10.338-7.45 16.42-17.18 16.42zm2.432-46.37c-10.033 0-14.747 6.082-14.747 6.082V28.43h-14.594v84.682h12.314c1.216 0 2.128-1.065 2.128-2.129V108.4s4.714 6.233 14.747 6.233c16.572 0 29.495-12.77 29.495-30.103 0-17.33-12.923-30.102-29.343-30.102zm-218.013 1.52h14.594v57.165h-14.594zm-23.566 38.769c-2.28 3.345-6.841 6.233-12.314 6.233-9.73 0-17.179-6.081-17.179-16.42 0-10.338 7.45-16.419 17.179-16.419 5.321 0 10.186 3.04 12.314 6.234zm0-36.64v2.433s-4.712-6.082-14.746-6.082c-16.572 0-29.495 12.62-29.495 30.102 0 17.332 12.77 30.103 29.495 30.103 10.186 0 14.746-6.233 14.746-6.233v2.584c0 1.216.914 2.129 2.13 2.129h12.314V55.948h-12.314c-1.216 0-2.13 1.064-2.13 2.128zm40.746-19.916a9.863 9.863 0 0 1-9.883 9.882 9.862 9.862 0 0 1-9.881-9.882c0-5.473 4.256-9.882 9.881-9.882 5.625.152 9.883 4.56 9.883 9.882"
    />
  </Svg>
);

const Logos = () => {
  return (
    <>
      <CompanyLogo height="2.5rem">
        <AirBnBLogo />
      </CompanyLogo>
      <CompanyLogo height="2.5rem">
        <AirBnBLogo />
      </CompanyLogo>{" "}
      <CompanyLogo height="2.5rem">
        <AirBnBLogo />
      </CompanyLogo>{" "}
      <CompanyLogo height="2.5rem">
        <AirBnBLogo />
      </CompanyLogo>{" "}
      <CompanyLogo height="2.5rem">
        <AirBnBLogo />
      </CompanyLogo>{" "}
      <CompanyLogo height="2.5rem">
        <AirBnBLogo />
      </CompanyLogo>{" "}
      <CompanyLogo height="2.5rem">
        <AirBnBLogo />
      </CompanyLogo>{" "}
      <CompanyLogo height="2.5rem">
        <AirBnBLogo />
      </CompanyLogo>{" "}
      <CompanyLogo height="2.5rem">
        <AirBnBLogo />
      </CompanyLogo>{" "}
      <CompanyLogo height="2.5rem">
        <AirBnBLogo />
      </CompanyLogo>{" "}
      <CompanyLogo height="2.5rem">
        <AirBnBLogo />
      </CompanyLogo>{" "}
      <CompanyLogo height="2.5rem">
        <AirBnBLogo />
      </CompanyLogo>{" "}
      <CompanyLogo height="2.5rem">
        <AirBnBLogo />
      </CompanyLogo>{" "}
      <CompanyLogo height="2.5rem">
        <AirBnBLogo />
      </CompanyLogo>{" "}
      <CompanyLogo height="2.5rem">
        <AirBnBLogo />
      </CompanyLogo>{" "}
      <CompanyLogo height="2.5rem">
        <AirBnBLogo />
      </CompanyLogo>{" "}
      <CompanyLogo height="2.5rem">
        <AirBnBLogo />
      </CompanyLogo>
    </>
  );
};

export const LogoSlider = () => {
  return (
    <div>
      <UsersSliderContainer>
        <UsersSlider>
          <UsersWrapper>
            <Logos />
          </UsersWrapper>
        </UsersSlider>
      </UsersSliderContainer>
    </div>
  );
};
