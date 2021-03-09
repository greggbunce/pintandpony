import React from "react"
import Layout from "../../components/layout/layout"
import Hero from "../../components/hero/hero"
import CardComponent from "../../components/card/card"
import Button from "../../components/button/button"
import SEO from "../../components/seo/seo"

// icons
import pintIcon from "../../images/icons/pint-icon.svg"
import wineIcon from "../../images/icons/wine-icon.svg"
import champagneIcon from "../../images/icons/champagne-icon.svg"
import horseShoeIcon from "../../images/icons/horse-shoe-icon.svg"

const Packages = () => {
    return (
        <Layout class="withBackground">

            <SEO title="Bar hire & drinks packages" description="Choose from our drinks packages, and see the wide range of drinks we offer as standard. Contact us today" />

            <Hero title="Packages" />

            <main className="container internal-main">

                <div className="row">
                    <div className="col-12 text-lg-center">
                        <h2>Whatever the event, we have an option that's right for you</h2>
                        <p class="larger-text">We offer a full bar service, providing experienced bar staff, glassware and licensing for your event.</p>
                        <hr />
                    </div>
                </div>

                <div className="row margin-bottom">
                    <div className="col-md-6">
                        <p>Fully equipped with two draught beer taps, two cask ale pumps and a great range of wines, spirts and mixers chilling in the on-board fridge. The Pint & Pony is everything you need to celebrate in style.</p>
                    </div>
                    <div className="col-md-6">
                        <p>Our fully stocked, reasonably priced bar can serve a variety of drinks based on your requirements, with both cash and card payment facilities available.</p>
                    </div>
                </div>

                <div className="row equalized-components">
                    <div className="col-lg-4">
                        <CardComponent colour="teal" title="Pay Bar" icon={pintIcon} columnWidth="small">
                            <p>This is the most popular option as your guests can just pay as they go.<br /> Cash or card accepted.</p>
                            <Button type="white" embedded="true" link="/contact">Find out more</Button>
                        </CardComponent>
                    </div>
                    <div className="col-lg-4">
                        <CardComponent colour="green" title="Tab Bar" icon={wineIcon} columnWidth="small">
                            <p>Let your guests have a drink on you! Leave a set amount behind the bar and once that’s gone, we will move to a pay bar.</p>
                            <Button type="white" embedded="true" link="/contact">Find out more</Button>
                        </CardComponent>
                    </div>
                    <div className="col-lg-4">
                        <CardComponent colour="teal" title="Open Bar" icon={champagneIcon} columnWidth="small">
                            <p>Your guests will have access to a free bar, and we’ll settle up with you after the event.</p>
                            <Button type="white" embedded="true" link="/contact">Find out more</Button>
                        </CardComponent>
                    </div>
                </div>

                <div className="row">
                    <div className="col-12 text-lg-center">
                        <h3>A sample of our well stocked bar</h3>
                        <hr />
                    </div>
                </div>

                <div className="row margin-bottom white-bg">
                    <div className="col-lg-4">
                        <h3>Beer & cider</h3>
                        <table width="100%" cellPadding="5" cellSpacing="0" border="0">
                            <tr>
                                <th width="90%"><strong>Draught beers</strong></th>
                                <th><strong>£4.50*</strong></th>
                            </tr>
                            <tr>
                                <td colSpan="2">
                                    <small><strong>For example:</strong> <em>Amstel, Becks, Budweiser, Guinness, Kronenbourg 1664, Long Man Helles Lager, and others.</em></small>
                                </td>
                            </tr>
                        </table>

                        <table width="100%" cellPadding="5" cellSpacing="0" border="0">
                            <tr>
                                <th width="90%"><strong>Draught ciders</strong></th>
                                <th><strong>£4.50*</strong></th>
                            </tr>
                            <tr>
                                <td colSpan="2">
                                    <small><strong>For example:</strong> <em>Appleshed Premium Cider, Appleshed Dark Fruit, and others.</em></small>
                                </td>
                            </tr>
                        </table>

                        <table width="100%" cellPadding="5" cellSpacing="0" border="0">
                            <tr>
                                <th width="90%"><strong>Cask beer</strong></th>
                                <th><strong>£4.50*</strong></th>
                            </tr>
                            <tr>
                                <td colSpan="2">
                                    <small><strong>For example:</strong> <em>Arundel Sussex Gold, Dark Star Hophead, Hogs Back Tea, Long Man Best Bitter, and others.</em></small>
                                </td>
                            </tr>
                        </table>

                        <table width="100%" cellPadding="5" cellSpacing="0" border="0">
                            <tr>
                                <th width="90%"><strong>Bottled beer &amp; cider</strong></th>
                                <th><strong>£3.80*</strong></th>
                            </tr>
                            <tr>
                                <td colSpan="2">
                                    <small><strong>For example:</strong> <em>Budweiser, Corona Extra, Heineken, Hepworth Sussex Best, Rekorderlig Strawbury &amp; lime, and others.</em></small>
                                </td>
                            </tr>
                        </table>

                        <br />

                    </div>
                    <div className="col-lg-4">
                        <h3>Wines</h3>
                        <table width="100%" cellPadding="5" cellSpacing="0" border="0">
                            <tr>
                                <th width="90%"><strong>Red wine</strong></th>
                                <th><strong>£3.50*</strong></th>
                            </tr>
                            <tr>
                                <td colSpan="2">
                                    <small><strong>For example:</strong> <em>Trivento Tribu Malbec, Vina Cerrada Tempranillo Rioja, Luna Azul Merlot, and others.</em></small>
                                </td>
                            </tr>
                        </table>

                        <table width="100%" cellPadding="5" cellSpacing="0" border="0">
                            <tr>
                                <th width="90%"><strong>White wine</strong></th>
                                <th><strong>£3.50*</strong></th>
                            </tr>
                            <tr>
                                <td colSpan="2">
                                    <small><strong>For example:</strong> <em>Turtle Bay Sauvignon Blanc, Pinot Grigio Altana Di Vico, and others.</em></small>
                                </td>
                            </tr>
                        </table>

                        <table width="100%" cellPadding="5" cellSpacing="0" border="0">
                            <tr>
                                <th width="90%"><strong>Rose wine</strong></th>
                                <th><strong>£3.50*</strong></th>
                            </tr>
                            <tr>
                                <td colSpan="2">
                                    <small><strong>For example:</strong> <em>Pinot Grigio Altana Di Vico Rose, Charlie Zin Rose, and others.</em></small>
                                </td>
                            </tr>
                        </table>

                        <table width="100%" cellPadding="5" cellSpacing="0" border="0">
                            <tr>
                                <th width="90%"><strong>Sparkling wine</strong></th>
                                <th><strong>£3.50*</strong></th>
                            </tr>
                            <tr>
                                <td colSpan="2">
                                    <small><strong>For example:</strong> <em>Famiglia Botter Prosecco, Pirani Prosecco Extra Dry, and others.</em></small>
                                </td>
                            </tr>
                        </table>

                        <br />

                    </div>
                    <div className="col-lg-4">
                        <h3>Spirits &amp; mixers</h3>

                        <table width="100%" cellPadding="5" cellSpacing="0" border="0">
                            <tr>
                                <th width="90%"><strong>Spirits</strong></th>
                                <th><strong>£3.50*</strong></th>
                            </tr>
                            <tr>
                                <td colSpan="2">
                                    <small><strong>For example:</strong> <em>Absolut Vodka, Bacardi Rum, Bells Whisky, Jamesons Irish Whiskey, Gordons Gin (also pink), Brighton Gin, Three Barrels Brandy and others.</em></small>
                                </td>
                            </tr>
                        </table>

                        <table width="100%" cellPadding="5" cellSpacing="0" border="0">
                            <tr>
                                <th width="90%"><strong>Soft drinks &amp; mixers</strong></th>
                                <th><strong>£1.50*</strong></th>
                            </tr>
                            <tr>
                                <td colSpan="2">
                                    <small><strong>For example:</strong> <em>Coca Cola, Fever Tree Ginger Ale, Fever Tree Tonic Water, J20 (various flavours), Schweppes Appletiser / Lemonade / Tomato Juice, and others.</em></small>
                                </td>
                            </tr>
                        </table>

                        <br />
                        <p><small>
                            <em>
                            Contact us for the full range of drinks we offer.<br />
                            * Prices start from
                            </em>
                        </small></p>

                    </div>
                </div>
                
                <div className="row">
                    <div className="col-lg-2"></div>
                    <div className="col-lg-8">
                        <CardComponent colour="blue" title="After something different?" icon={horseShoeIcon}>
                            <p>If our standard drinks package isn’t what you're looking for, don’t worry! We can help you build a bespoke drinks package perfect for your event.</p>
                            <Button type="white" embedded="true" link="/contact">Lets chat</Button>
                        </CardComponent>
                    </div>
                    <div className="col-lg-2"></div>
                </div>

            </main>
        </Layout>
    )
}

export default Packages