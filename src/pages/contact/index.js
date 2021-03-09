import React, { useState } from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import { Helmet } from "react-helmet"

// components
import Layout from "../../components/layout/layout"
import Hero from "../../components/hero/hero"
import CardComponent from "../../components/card/card"
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';
// import PreFooter from "../../components/pre-footer/preFooter"
import SEO from "../../components/seo/seo"
import ContactForm from "../../components/form/form"

// styles
import accordionStyles from "../../components/accordion/accordion.module.scss"
import "../../components/modal/modal.scss"

// icons
import horseShoeIcon from "../../images/icons/horse-shoe-icon.svg"
import { BsChevronCompactDown, BsChevronCompactUp, BsHammer } from "react-icons/bs";

const ContactPage = () => {

    // set active state to bs accordion when open
    const [activeId, setActiveId] = useState();
    function toggleActive(id) {
      if (activeId === id) {
        setActiveId(null);
      } else {
        setActiveId(id);
      }
    }

    // modals
    // map
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    // form
    const [showForm, setShowForm] = useState(false);
    const handleCloseForm = () => setShowForm(false);
    const handleShowForm = () => setShowForm(true);

    // structured data FAQ's
    const schemaFAQ = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [{
            "@type": "Question",
            "name": "What packages do you offer?",
            "acceptedAnswer": {
            "@type": "Answer",
            "text": "We offer payed, free and tab bar packages, find out more about them here. We can also build a custom package to suit your needs, contact us at <a href='info@thepintandpony.co.uk'>info@thepintandpony.co.uk</a>, to discuss your event."
            }
        }, {
            "@type": "Question",
            "name": "What are minimum and maximum number of guests The Pint & Pony can cater for?",
            "acceptedAnswer": {
            "@type": "Answer",
            "text": "We cater for events that have between 75 – 450 guests. If your event has less than 75 guests you might be able to hire The Pint & Pony at an additional cost, please get in touch to find out more"
            }
        }, {
            "@type": "Question",
            "name": "How long can The Pint & Pony be hired for?",
            "acceptedAnswer": {
            "@type": "Answer",
            "text": "As long as you need us! The Pint & Pony can be hired for all kinds of events, so whether it’s your wedding day or a corporate weekend, we’ve got you covered. Please note we’re unable to cater for events that last more than 7 days."
            }
        }, {
            "@type": "Question",
            "name": "What distance will you travel?",
            "acceptedAnswer": {
            "@type": "Answer",
            "text": "The Pint & Pony will travel to all venues within 35 miles of our base in Worthing. To see if your venue falls within our service area please click here. If your venue is further afield you might be able to hire The Pint & Pony at an additional cost, please get in touch to find out more."
            }
        }, {
            "@type": "Question",
            "name": "Is there a travel fee to hire The Pint & Pony",
            "acceptedAnswer": {
            "@type": "Answer",
            "text": "There is no travel fee providing your event is within 35 miles of our base in Worthing, and meets our minimum booking requirements (minimum 75 guests). To see if your venue falls within our service area please click here. If your venue is further afield or you have less than 75 guests you might be able to hire The Pint & Pony at an additional cost, please get in touch to find out more."}
        }, {
            "@type": "Question",
            "name": "Is there a corkage fee if I want to supply some of my my own drinks?",
            "acceptedAnswer": {
            "@type": "Answer",
            "text": "If you decide to provide your own drinks, including table drinks arranged by either you or another provider there will be a small corkage fee. Our corkage fee is £250.00, This fee is refunded if the bar sales exceed £2000. We do ask that all other drinks are removed from the table after the meal and that all other drinks for your event are supplied by The Pint & Pony."}
        }]
    } 

    return(
        <Layout>

            <SEO title="Contact us to find out more" description="Find out how we can be the perfect addition to your event. Contact us today" />
            <Helmet>
                <script type="application/ld+json">{JSON.stringify(schemaFAQ)}</script>
            </Helmet>

            <Hero title="Contact us" />

            <main className="container internal-main">
            
                <div className="row">
                    <div className="col-md-12 text-center">
                        <p className="alert"><BsHammer /><br />The Pint & Pony is currently under construction. We will be ready for events by May 2021.</p>
                        <hr />
                        <h2 className="text-md-left">Let's talk</h2>
                        <p className="text-md-left">Want to find out how we can be the perfect addition to your event?<br />Find out more in our frequently asked questions below. Alternativly, you can contact us via our <button className="button-text-link" onClick={handleShowForm} onKeyDown={handleShowForm} tabIndex={0}>online form</button>.</p>
                        <hr />
                    </div>
                </div>

                <div className="row">
                    <div className="col-lg-8">
                        <h2>FAQ:</h2>

                        <Accordion className={accordionStyles.accordion}>

                            <Card className={`${activeId === '0' ? `${accordionStyles.accordionItem} ${accordionStyles.accordionOpen}` : accordionStyles.accordionItem } `} >                           
                                <Accordion.Toggle onClick={() => toggleActive('0')} as={Card.Header} eventKey="0" className={accordionStyles.accordionTitle}>
                                    What packages do you offer?
                                    <BsChevronCompactDown />
                                    <BsChevronCompactUp />
                                </Accordion.Toggle>
                                <Accordion.Collapse eventKey="0">
                                    <Card.Body className={accordionStyles.accordionCollapse}>
                                        We offer paid, free and tab bar packages, find out more about them <AniLink to="/packages" paintDrip hex="#DEE2E6" duration={0.8}>here</AniLink>. We can also build a custom package to suit your needs, <button className="button-text-link" onClick={handleShowForm} onKeyDown={handleShowForm} tabIndex={0}>contact us</button> to discuss your event.
                                    </Card.Body>
                                </Accordion.Collapse>
                            </Card>

                            <Card className={`${activeId === '1' ? `${accordionStyles.accordionItem} ${accordionStyles.accordionOpen}` : accordionStyles.accordionItem } `} >                           
                                <Accordion.Toggle onClick={() => toggleActive('1')} as={Card.Header} eventKey="1" className={accordionStyles.accordionTitle}>
                                    What are minimum and maximum number of guests The Pint & Pony can cater for?
                                    <BsChevronCompactDown />
                                    <BsChevronCompactUp />
                                </Accordion.Toggle>
                                <Accordion.Collapse eventKey="1">
                                    <Card.Body className={accordionStyles.accordionCollapse}>
                                        We cater for events that have between 75 – 450 guests. If your event has less than 75 guests you might be able to hire The Pint & Pony at an additional cost, please <button className="button-text-link" onClick={handleShowForm} onKeyDown={handleShowForm} tabIndex={0}>get in touch</button> to find out more.
                                    </Card.Body>
                                </Accordion.Collapse>
                            </Card>

                            <Card className={`${activeId === '2' ? `${accordionStyles.accordionItem} ${accordionStyles.accordionOpen}` : accordionStyles.accordionItem } `} >                           
                                <Accordion.Toggle onClick={() => toggleActive('2')} as={Card.Header} eventKey="2" className={accordionStyles.accordionTitle}>
                                    How long can The Pint & Pony be hired for?
                                    <BsChevronCompactDown />
                                    <BsChevronCompactUp />
                                </Accordion.Toggle>
                                <Accordion.Collapse eventKey="2">
                                    <Card.Body className={accordionStyles.accordionCollapse}>
                                        As long as you need us! The Pint & Pony can be hired for all kinds of events, so whether it’s your wedding day or a corporate weekend, we’ve got you covered.<br />
                                        <small>Please note we’re unable to cater for events that last more than 7 days.</small>
                                    </Card.Body>
                                </Accordion.Collapse>
                            </Card>

                            <Card className={`${activeId === '3' ? `${accordionStyles.accordionItem} ${accordionStyles.accordionOpen}` : accordionStyles.accordionItem } `} >                           
                                <Accordion.Toggle onClick={() => toggleActive('3')} as={Card.Header} eventKey="3" className={accordionStyles.accordionTitle}>
                                    What distance will you travel?
                                    <BsChevronCompactDown />
                                    <BsChevronCompactUp />
                                </Accordion.Toggle>
                                <Accordion.Collapse eventKey="3">
                                    <Card.Body className={accordionStyles.accordionCollapse}>
                                        The Pint & Pony will travel to all venues within 35 miles of our base in Worthing. To see if your venue falls within our service area please <button className="button-text-link" variant="primary" onClick={handleShow} onKeyDown={handleShow} tabIndex={0}>click here</button>.
                                        <br />If your venue is further afield you might be able to hire The Pint & Pony at an additional cost, please <button className="button-text-link" onClick={handleShowForm} onKeyDown={handleShowForm} tabIndex={0}>get in touch</button> to find out more.
                                    </Card.Body>
                                </Accordion.Collapse>
                            </Card>

                            <Card className={`${activeId === '4' ? `${accordionStyles.accordionItem} ${accordionStyles.accordionOpen}` : accordionStyles.accordionItem } `} >                           
                                <Accordion.Toggle onClick={() => toggleActive('4')} as={Card.Header} eventKey="4" className={accordionStyles.accordionTitle}>
                                    Is there a travel fee to hire The Pint & Pony
                                    <BsChevronCompactDown />
                                    <BsChevronCompactUp />
                                </Accordion.Toggle>
                                <Accordion.Collapse eventKey="4">
                                    <Card.Body className={accordionStyles.accordionCollapse}>
                                        There is no travel fee providing your event is within 35 miles of our base in Worthing, and meets our minimum booking requirements (minimum 75 guests).
                                        <br />To see if your venue falls within our service area please <button className="button-text-link" variant="primary" onClick={handleShow} onKeyDown={handleShow} tabIndex={0}>click here</button>.
                                        <br />If your venue is further afield or you have less than 75 guests you might be able to hire The Pint & Pony at an additional cost, please <button className="button-text-link" onClick={handleShowForm} onKeyDown={handleShowForm} tabIndex={0}>get in touch</button> to find out more.
                                    </Card.Body>
                                </Accordion.Collapse>
                            </Card>

                            <Card className={`${activeId === '5' ? `${accordionStyles.accordionItem} ${accordionStyles.accordionOpen}` : accordionStyles.accordionItem } `} >                           
                                <Accordion.Toggle onClick={() => toggleActive('5')} as={Card.Header} eventKey="5" className={accordionStyles.accordionTitle}>
                                    Is there a corkage fee if I want to supply some of my my own drinks?
                                    <BsChevronCompactDown />
                                    <BsChevronCompactUp />
                                </Accordion.Toggle>
                                <Accordion.Collapse eventKey="5">
                                    <Card.Body className={accordionStyles.accordionCollapse}>
                                        If you decide to provide your own drinks, including table drinks arranged by either you or another provider there will be a small corkage fee.
                                        <br />Our corkage fee is £250.00, This fee is refunded if the bar sales exceed £2000. We do ask that all other drinks are removed from the table after the meal and that all other drinks for your event are supplied by The Pint & Pony.
                                    </Card.Body>
                                </Accordion.Collapse>
                            </Card>
                        </Accordion>

                    </div>
                    <div className="col-lg-4">

                        <CardComponent colour="teal" title="Want to find out more?" columnWidth="small" icon={horseShoeIcon}>
                            <p>Contact us to find out about availability, or for a personalised quotation.</p>                            
                            <div className="button cta true">
                                <button className="link" onClick={handleShowForm} onKeyDown={handleShowForm} tabIndex={0}>Lets talk</button>
                            </div>
                        </CardComponent>

                    </div>
                </div>
            </main>

            {/* 
            <PreFooter>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <p>
                                <strong>THE PINT & PONY LTD</strong><br />
                                Company number 10559328<br />
                                71-75 Shelton Street, Covent Garden, London, United Kingdom, WC2H 9JQ 
                            </p>
                        </div>
                    </div>
                </div>
            </PreFooter>
            */}

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton />
                <Modal.Body>
                    <iframe title="The Pint & Pony - Free travel radius" src="https://www.google.com/maps/d/embed?mid=1pANq1oOvd6JT880_cstgZx2OaGI6ycWr&z=8" width="100%" height="350" border="0"></iframe>
                </Modal.Body>
            </Modal>

            <Modal show={showForm} onHide={handleCloseForm}>
                <Modal.Header closeButton />
                <Modal.Body>
                    <ContactForm />
                </Modal.Body>
            </Modal>

        </Layout>
    )
}

export default ContactPage