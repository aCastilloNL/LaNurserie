import React from "react";
import { theme } from "../../data/theme";
import styled from 'styled-components';


//  images
import firstPortrait from "../../Images/customer1.png";
import secondPortrait from "../../Images/costumer2.png";
import thirdPortrait from "../../Images/costumer3.png";

// icons
import { BsStarFill } from "react-icons/bs";
import { BsStarHalf } from "react-icons/bs";
import { BsStar } from "react-icons/bs";

//Customer Testmonials
const StyledCard = styled.div`
    width: 100%;
    height: 330px;
    border-radius: ${theme.borderRadius.small};
    display: flex;
    flex-direction: column;
    gap: ${theme.padding.standard};
    align-items: center;
    padding: ${theme.padding.standard};
    background-color: ${theme.color.light};

    img {
        width: 125px;
        border-radius: ${theme.borderRadius.circle};
        border: ${theme.borderWidth.medium} solid ${theme.color.primary};
        padding: ${theme.padding.small};
    }

    h2 {
        font-size: ${theme.fontSize.medium};
        line-height: ${theme.lineHeight.medium};
        text-align: center;
        margin-top: ${theme.padding.double};
    }

    p {
        font-size: ${theme.fontSize.medium};
        line-height: ${theme.lineHeight.medium};
        text-align: center;
    }

    svg {
        color: ${theme.color.tertiary};
        width: 24px;
        height: 24px;
        margin-left: ${theme.margin.small};
    }

    @media (min-width: ${theme.media.phone}) {
        max-width: ${theme.media.phone};
    }
`;

const Card = ({ imageNumber }) => {
  

    return (
        <StyledCard>
            {
                imageNumber === 0
                    ? (<>
                            <img src={firstPortrait} alt="Reviewer" />
                            <h2>Angelina J.</h2>
                            <p>"Amazing service. Our nanny is an incredible human being. My kids love her and they are even learning French from her!"</p>
                            <div>
                                <BsStarFill />
                                <BsStarFill />
                                <BsStarFill />
                                <BsStarFill />
                                <BsStarHalf />
                            </div>
                        </>)
                    : imageNumber === 1
                        ? (<>
                            <img src={secondPortrait} alt="Reviewer number 2" />
                            <h2>Anna M.</h2>
                            <p>"This service saved my life. I was on the verge of leaving my job until I found La Nurserie. I recommend it to every parent in need of a qualified babysitter."</p>
                            <div>
                                <BsStarFill />
                                <BsStarFill />
                                <BsStarFill />
                                <BsStarFill />
                                <BsStarFill />
                            </div>
                        </>)
                        : (<>
                            <img src={thirdPortrait} alt="Reviewer umber 3" />
                            <h2>Stephen K.</h2>
                            <p>"Excellent service. My babysitter is very patient and downright hilarious. I highly recommend La Nurserie!"</p>
                            <div>
                                <BsStarFill />
                                <BsStarFill />
                                <BsStarFill />
                                <BsStarFill />
                                <BsStar />
                            </div>
                        </>)
            }
        </StyledCard>

    )
}

export default Card;