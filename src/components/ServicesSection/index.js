//TODO: Replace images

import React from "react";
import Icon1 from '../../images/protection.png'
import Icon2 from '../../images/policy.png'
import Icon3 from '../../images/wallet.png'
import {
  ServicesContainer,
  ServicesH1,
  ServicesWrapper,
  ServicesCard,
  ServicesIcon,
  ServicesH2,
  ServicesP,
} from "./ServicesElements";

const Services = () => {
  return (
    <ServicesContainer id="services">
      <ServicesH1>What do we Offer</ServicesH1>
      <ServicesWrapper>
        <ServicesCard>
          <ServicesIcon src={Icon1} />
          <ServicesH2>Security</ServicesH2>
          <ServicesP>
            uis aute irure dolor in reprehenderit in voluptate velit esse cillum
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon2} />
          <ServicesH2>Smart Contracts</ServicesH2>
          <ServicesP>
            uis aute irure dolor in reprehenderit in voluptate velit esse cillum
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon3} />
          <ServicesH2>E-wallet</ServicesH2>
          <ServicesP>
            uis aute irure dolor in reprehenderit in voluptate velit esse cillum
          </ServicesP>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  );
};

export default Services;
