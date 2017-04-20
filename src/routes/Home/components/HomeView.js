import React, { Component } from 'react';
import Anchor from 'grommet/components/Anchor';
import Box from 'grommet/components/Box';
import Button from 'grommet/components/Button';
import Card from 'grommet/components/Card';
import Chart, { Area, Axis, Base, Layers } from 'grommet/components/chart/Chart';
import Footer from 'grommet/components/Footer';
import FormField from 'grommet/components/FormField';
import Heading from 'grommet/components/Heading';
import Hero from 'grommet/components/Hero';
import Image from 'grommet/components/Image';
import Label from 'grommet/components/Label';
import Paragraph from 'grommet/components/Paragraph';
import Quote from 'grommet/components/Quote';
import Section from 'grommet/components/Section';
import SocialShare from 'grommet/components/SocialShare';
import Video from 'grommet/components/Video';
import CirclePlayIcon from 'grommet/components/icons/base/CirclePlay';
import wheel from './WHEEL.jpg'

import Section1 from './section-1.jpg'
import marquee from './marquee.jpg'
import caseStudy from './case_study.png'
import Section2 from './section-2.jpg'
import suburb from './surburbs-from-overhead-masthead.jpg'
import solar1 from './surburbs-from-overhead-masthead.jpg'
import solar2 from './still-wind-trubine.jpg'
import sungif from './sungif.gif'
import bg2 from './bg2.jpg'
import slide1 from './slide1.jpg'
import slide2 from './slide2.jpg'
import slide3 from './slide3.jpg'
import NewsFeed from './NewsFeed'
export default class HomeView extends Component {
  render() {
    return (
      <Box>


        <Hero size="large" backgroundImage={solar2} colorIndex="grey-1"
          justify="start">
          <Card

            heading={
              <Heading className="firstHeader" strong={true}>
                Reposit knows.
              </Heading>
            }
            description="The sun doesn’t always shine and the wind doesn’t always blow.
            With Reposit, when energy companies struggle to meet demand, you can earn
            GridCredits – credits towards your next power bill – by selling your energy
            back to the grid at a premium.
"
            label="Sometimes you can sell back to the grid."
            size="large"
            link={
              <Anchor href="#" primary={true} label="Learn More" />
            } />
        </Hero>

        <Section
          align="center"
          pad="large"
          full="horizontal"
        >
          <Box
            align="center"
            direction="row"
          >
            <Box basis="1/2" pad={{horizontal: 'large'}}>
              <Box direction="row" responsive={false} pad={{between: 'medium'}}>
                <Image
                  full="horizontal"
                  src={sungif}
                  alt="smaple image"
                  className="solar"
                />

              </Box>

            </Box>
            <Card
              contentPad="large"
              heading="Lowering the cost of power,well into the future."
              label="The brainpower in your standard solar battery is limited,
                but with Reposit we can make it nothing short of genius.
                Reposit’s advanced software learns, adapts and predicts your energy
                usage so you get the most from your solar.
                In the evening, you can enjoy free solar power when grid prices
                are highest. What’s more, you’ll save on your energy bills.
                Reposit even sells your power back to the grid when the prices are
                highest – earning you GridCredits™ and an even lower power bill."
              link={<Anchor href="http://www.grommet.io/docs/" primary={true}>
                Learn More</Anchor>}
              separator="left"
            />
          </Box>
        </Section>

        <Section pad="none" align="center" colorIndex="light-2">
          <Box
            size={{width: 'xxlarge'}}
            pad={{horizontal: 'large', vertical: 'medium'}}
          >
            <Heading margin="small" strong>Meet the Weedens – lower your power bill</Heading>
            <Paragraph size="large" margin="small">
              Despite only the two of them living in their four-bedroom house, the Weedens are never lonely with a constant stream of visitors especially from their adventurous grandchildren.Looking for a way to lower their power bills the Weedens installed a Reposit solar storage system.
            </Paragraph>
            <Paragraph size="large" margin="small">
              Reposit sat down with Jan and David Weeden to see how Reposit has helped to lower their bills and find out how the installation process went.
            </Paragraph>
          </Box>
          <Box
            align="center"
            direction="row"
            justify="center"
            size={{width: 'xxlarge'}}
            pad={{horizontal: 'large', vertical: 'medium', between: 'large'}}
            margin={{bottom: 'large'}}
          >
            <Box basis="1/3">
              <Quote
                pad="medium"
                borderColorIndex="accent-1"
                credit="Jen Weeden, NSW"
                size="full"
              >
                <Paragraph size="xlarge">
                  What I have found is that our electricity bills have done a summersault and we have started receiving nice big credits every time the power bill comes.
                </Paragraph>
              </Quote>
            </Box>
            <Box basis="2/3">
              <Paragraph size="large" margin="small">
                Lorem dolores incidunt similique aliquid rerum reiciendis est!
                Placeat minima voluptas quis tenetur deleniti harum. Nesciunt
                aut consequatur consequuntur sequi delectus quam qui. Illo odio
                dolorem sunt cupiditate nihil, ad veniam quibusdam suscipit unde
                laboriosam, laborum ratione, dicta nihil culpa.
                Dolor eveniet possimus possimus aut praesentium dignissimos sit
                debitis. Fugit minima totam provident optio aliquam! Magni tenetur
                doloremque rem tempore amet voluptatibus ipsum. Eos aliquid
                debitis sed mollitia laudantium sit?
              </Paragraph>
              <Box pad={{vertical: 'medium'}}>
                <Image
                  full="horizontal"
                  src={wheel}
                  alt="smaple image"
                />
              </Box>
              <Paragraph size="large" margin="small">
                Dolor amet voluptate nisi molestias praesentium. Eveniet
                consectetur aliquid earum reprehenderit nam dicta tempora!
                Maiores nostrum eius quo odit et facere quaerat maxime beatae
                minus nihil expedita non facere ipsa cupiditate minus velit
                beatae. Assumenda nemo quis ad maxime modi.
              </Paragraph>
            </Box>
          </Box>
        </Section>

        <Section pad="none" align="center">
          <Box
            size={{width: 'xxlarge'}}
            pad={{horizontal: 'large', vertical: 'medium'}}
          >
            <Heading margin="small" strong>How Reposit works in two minutes</Heading>
            <Paragraph size="large" margin="small">
              Ever wondered how Reposit works to drives down your power bills and boosts the performance of your solar battery system?

              With Reposit, when the sun rises, your solar battery system stores energy for when you need it most. So in the evening, you can enjoy free solar power when grid prices are highest. You’re only connected to the grid when you have to be, and when energy prices are at their lowest.
            </Paragraph>
            <Box margin={{top: 'large'}}>

                <iframe type="text/html"
                        width="640"
                        height="385"
                        src="http://www.youtube.com/embed/2xdpTTDJqoU"
                        frameborder="0">
                </iframe>

              <Paragraph margin="small">
                Photos by Michael Blumenfeld
              </Paragraph>
            </Box>
            <Paragraph size="large" margin="small">
              Reposit’s advanced software learns when you use energy and how much, so it knows what you’ll need and when you’ll need it. It predicts the weather, and controls when your home’s powered by solar, the battery, or the grid. Reposit always stays one step ahead of your needs, taking away the uncertainty from the grid.

              When electricity demands are high, Reposit will automatically trade your excess energy for GridCredits. Every GridCredit earnt, is another dollar off your bill. Reposit makes big bills a distant memory, delivering you savings, day after day, year after year.
              doloremque.
            </Paragraph>
          </Box>


          <Chart vertical={true} full={true}>
            <Base height="small" width="full" />
            <Layers>
              <Area colorIndex="graph-1" values={[100, 95, 80, 82, 75, undefined, 60, 55, 0, 15, 40, 50]} />
              <Area colorIndex="graph-2" values={[50, 40, 15, 0, 55, 60, undefined, 75, 82, 80, 95, 100]} />
            </Layers>
            <Axis ticks={true} count={6} labels={[
              {"index": 0, "label": "May 16"},
              {"index": 1, "label": "May 17"},
              {"index": 2, "label": "May 18"},
              {"index": 3, "label": "May 19"},
              {"index": 4, "label": "May 20"},
              {"index": 5, "label": "May 21"}
            ]} />
          </Chart>

          <Box colorIndex="light-2" pad={{vertical: "large"}} align="center">
            <Box align="center"
                 size={{"width": "xxlarge"}} pad={{horizontal: "large"}}>
              <Heading tag="h2" strong={true}>
                Recent News
              </Heading>
            </Box>
            <NewsFeed />
          </Box>



        </Section>
        <Footer>
          <footer className="site-footer" role="contentinfo">
            <div className="container">
              <div className="logo">
                <img src="http://www.repositpower.com/wp-content/themes/web-reposit-public/assets/img/logo-icon-blue.svg" width="30" />
              </div>
              <div className="footer-grid">
                <div className="column">
                  <div className="item">
                    <h6>Product</h6>
                  </div>
                  <div className="item"><a href="">Pricing</a>
                  </div>
                  <div className="item"><a href="">Why Reposit Power</a>
                  </div>
                  <div className="item"><a href="">How It Works</a>
                  </div>
                </div>
                <div className="column">
                  <div className="item">
                    <h6>Company</h6>
                  </div>
                  <div className="item"><a href="">About Us</a>
                  </div>
                  <div className="item"><a href="">Blog</a>
                  </div>
                  <div className="item"><a href="">Jobs</a>
                  </div>
                  <div className="item"><a href="">Press</a>
                  </div>
                </div>
                <div className="column">
                  <div className="item">
                    <h6>Learn</h6>
                  </div>
                  <div className="item"><a href="">Help & Support</a>
                  </div>
                  <div className="item"><a href="">Documentation</a>
                  </div>
                </div>

                <div className="contact">
                  <div className="column">
                    <div className="item">
                      <h6>Contact</h6>
                    </div>
                    <div className="item item-text">17/2 Yallourn St
                      <br/>Suite 700
                      <br/>17/2 Yallourn St Fyshwick, ACT 2609</div>
                  </div>
                  <div className="column no-heading">
                    <div className="item"><a href="">+1 (888) 235-2699</a>
                    </div>
                    <div className="item"><a href="">+1 (425) 312-6521</a>
                    </div>
                    <div className="item"><a href="">Support Center</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="colophon">
                <div className="column">
                  <div className="social">
                    <div className="twitter">
                      <iframe frameBorder="0" className="twitter" allowtransparency="true" frameborder="0" scrolling="no" src="//platform.twitter.com/widgets/follow_button.html?screen_name=RepositPower" data-show-screen-name="true"></iframe>
                    </div>
                    <div className="linkendin">
                      <script src="//platform.linkedin.com/in.js" type="text/javascript">
                        lang: en_US
                      </script>
                      <script type="IN/FollowCompany" data-id="3089380" data-counter="right"></script>
                    </div>
                    <div className="facebook">
                      <iframe frameBorder="0" className="facebook" src="//www.facebook.com/plugins/like.php?href=https%3A%2F%2Ffacebook.com%2FgetRepositPower&amp;width&amp;layout=button_count&amp;action=like&amp;show_faces=false&amp;show_count=false&amp;share=false&amp;height=21&amp;appId=507756515938786"
                              scrolling="no" frameborder="0" allowtransparency="true"></iframe>
                    </div>
                  </div>
                </div>
                <div className="column">
                  <ul className="list-inline text-right">
                    <li><a href="">Privacy Policy</a>
                    </li>
                    <li><a href="">Terms of Service</a>
                    </li>
                    <li><span>&copy; 2017 Reposit Power&reg; Inc. All Rights Reserved.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </footer>
        </Footer>
      </Box>
    );
  }
};
