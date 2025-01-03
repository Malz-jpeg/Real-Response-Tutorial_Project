import React from 'react';
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
    AccordionItemState
} from 'react-accessible-accordion';
import "react-accessible-accordion/dist/fancy-example.css";
import { MdOutlineArrowDropDown } from 'react-icons/md';
import './Value.css';
import data from '../../utils/accordion';

const Value = () => {
    return (
        <section className="v-wrapper">
            <div className="paddings innerWidth FlexCenter v-container">
                {/* Left Side */}
                <div className="v-left">
                    <div className="image-container">
                        <img src="./value.png" alt="Building" />
                    </div>
                </div>
                {/* Right Side */}
                <div className="flexColStart v-right">
                    <span className="orangeText">Our Value</span>
                    <span className="primaryText">Value We Give to You</span>
                    <span className="secondaryText">
                        We're always ready to help by providing the best services for you.
                        <br />
                        We believe a good place to live can make your life better.
                    </span>

                    <Accordion
                        className="accordion"
                        allowMultipleExpanded={true}
                        preExpanded={['0']} // Expand the first item by default
                    >
                        {data.map((item) => (
                            <AccordionItem
                                key={item.id}
                                className={`accordionItem ${item.id === '0' ? 'expanded' : ''}`}
                                uuid={item.id}
                            >
                                <AccordionItemHeading>
                                    <AccordionItemState>
                                        {({ expanded }) => (
                                            <AccordionItemButton
                                                className={`flexCenter accordionButton ${
                                                    expanded ? 'expand' : 'collapsed'
                                                }`}
                                            >
                                                <div className="flexCenter icon">{item.icon}</div>
                                                <span className="primaryText">{item.heading}</span>
                                                <div className="flexCenter icon">
                                                    <MdOutlineArrowDropDown size={20} />
                                                </div>
                                            </AccordionItemButton>
                                        )}
                                    </AccordionItemState>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    <p className="secondaryText">{item.detail}</p>
                                </AccordionItemPanel>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </div>
        </section>
    );
};

export default Value;


