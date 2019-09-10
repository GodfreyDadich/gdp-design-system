import React from 'react'
import styles from './styles.json'
import {
  fontSizeSuper,
  fontSizeHeading1,
  fontSizeHeading2,
  fontSizeHeading3,
  fontSizeHeading4,
  fontSizeHeading5,
  fontSizeHeading6,
  fontSizeHeading7,
  fontSizeHeading8,
  fontSizeBodyArticle,
  fontSizeBodyArticleSmall,
  fontSizeBodySmall,
  fontSizeAccent,
  fontSizeUppercase,
} from '../styles/typography';

import {
  textHeading5,
  textHeading6,
  textHeading7,
  textHeading8,
  textBodyArticleSmall,
  textBodySmall,
  textAccent,
  textUppercase
} from '../utils/typography'

import Pullquote from '../components/Pullquote'

import {
  HeadingSuper,
  Heading1,
  Heading2,
  Heading3,
  Heading4,
  InquiryText,
  SubHead,
  SubHeadBlack,
  WiredType,
  QuoteAttribution,
  LeftCarving,
  SidebarQuote,
  BioHeader,
  CardTitle,
  CardSubTitle,
  Caption
} from '../components/Type'

const Typography = props =>

  <div style={styles.main}>
    <h1>Typography</h1>
    <h2 style={{ color: '#7f7f7f' }}>Desktop Type</h2>

    <br /><br />

    <div>
      <div style={styles.smallText}><small>H1 (Noe Display) ({fontSizeHeading1}pt)</small></div>
      <Heading1><span style={{ display: 'block', color: '#7F7F7F' }} >Client Name</span> Project Title <br />Title Tk</Heading1>
    </div>

    <br /><br />

    <div>
      <div style={styles.smallText}><small>Card Title & Subtitle ({fontSizeHeading3}pt)</small></div>
      <CardTitle>Client Name</CardTitle>
      <CardSubTitle>Dek/Editorial project title that may run into two sentences</CardSubTitle>
    </div>

    <br /><br />

    <div>
      <div style={styles.smallText}><small>Uppercase ({fontSizeUppercase}pt)</small></div>
      <div style={textUppercase()}>
        Senior Account Manager
    </div>
    </div>

    <br /><br />

    <div>
      <div style={styles.smallText}><small>Atlas Grotesk Caption (12pt)</small></div>
      <Caption>GDP divided front-of-book into three sections that each have their own distinctive look and <br></br>approach</Caption>
    </div>

    <br /><br />
    

    {/* <div>
      <div style={styles.smallText}><small>Super ({fontSizeSuper}pt)</small></div>
      <HeadingSuper>Top experiences in Asia</HeadingSuper>
    </div> */}

    {/* <br /><br /> */}


    {/* <div>
      <div style={styles.smallText}><small>Heading 2 ({fontSizeHeading2}pt)</small></div>
      <Heading2>Top experiences in Asia</Heading2>
    </div>

    <br /><br />

    <div>
      <div style={styles.smallText}><small>Heading 3 ({fontSizeHeading3}pt)</small></div>
      <Heading3>Top experiences in Asia</Heading3>
    </div>

    <br /><br />

    <div>
      <div style={styles.smallText}><small>Heading 4 ({fontSizeHeading4}pt)</small></div>
      <Heading4>Top experiences in Asia</Heading4>
    </div>

    <br /><br />

    <div>
      <div style={styles.smallText}><small>SubHead ({fontSizeHeading4}pt)</small></div>
      <SubHead>Top experiences in Asia</SubHead>
    </div>

    <br /><br />


    <div>
      <div style={styles.smallText}><small>SubHeadBlack ({fontSizeHeading4}pt)</small></div>
      <SubHeadBlack>Top experiences in Asia</SubHeadBlack>
    </div>

    <br /><br /> */}


    {/* <div>
      <div style={styles.smallText}><small>Bio Header Lockup</small></div>
      <BioHeader
        personName='Scott Dadich'
        personTitle='Founder, Co-CEO'
        insta='sdadich'
      />
    </div>

    <br /><br /> */}

    {/* <div>
      <div style={styles.smallText}><small>Heading 5 ({fontSizeHeading5}pt)</small></div>
      <div style={textHeading5()}>Top experiences in Asia</div>
    </div>

    <br /><br />

    <div>
      <div style={styles.smallText}><small>Heading 6 ({fontSizeHeading6}pt)</small></div>
      <div style={textHeading6()}>Top experiences in Asia</div>
    </div>

    <br /><br />

    <div>
      <div style={styles.smallText}><small>Heading 7 ({fontSizeHeading7}pt)</small></div>
      <div style={textHeading7()}>Top experiences in Asia</div>
    </div>

    <br /><br />

    <div>
      <div style={styles.smallText}><small>Heading 8 ({fontSizeHeading8}pt)</small></div>
      <div style={textHeading8()}>Top experiences in Asia</div>
    </div>

    <br /><br /> */}

    {/* <div>
      <div style={styles.smallText}><small>Body article ({fontSizeBodyArticle}pt)</small></div>
      <p>
        Few magazines in the world are as revered as <span style={{ fontStyle: 'italic' }}>National Geographic</span>. For 130 years its breathtaking photography and groundbreaking narratives have helped readers discover the world through its pages. While the brand has evolved with a changing industry—building a thriving television network, books and kids divisions, travel business, and social media audience (90+ million Instagram followers and counting)—the magazine itself hadn’t undergone a significant redesign for two decades.
        </p>
    </div>

    <br /><br /> */}


    <div>
      <div style={styles.smallText}><small>Pull Quote</small></div>
      <Pullquote classAdd='testadd'>
      The editorial team created new story forms and structures that could tackle big, bold ideas with provocative voice.
    <QuoteAttribution classAdd='testadd'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    </QuoteAttribution>
      </Pullquote>
    </div>

    <br /><br />


    <div>
      <div style={styles.smallText}><small>Body article small ({fontSizeBodyArticleSmall}pt)</small></div>
      <div style={textBodyArticleSmall()}>
        Few magazines in the world are as revered as National Geographic. For 130 years its breathtaking photography and groundbreaking narratives have helped readers discover the world through its pages. While the brand has evolved with a changing industry—building a thriving television network, books and kids divisions, travel business, and social media audience (90+ million Instagram followers and counting)—the magazine itself hadn’t undergone a significant redesign for two decades.
        </div>
    </div>

    <br /><br />

    {/* <div>
      <div style={styles.smallText}><small>Small Caps (Noe Text) ({fontSizeHeading4}pt)</small></div>
      <WiredType><span style={{ fontFamily: 'Noe Text' }}>wired</span></WiredType>
    </div>

    <br /><br />

    <div>
      <div style={styles.smallText}><small>CTA Type ({fontSizeHeading4}pt)</small></div>
      <InquiryText><h5>For speaking engagement inquiries, please contact inquiries@godfreydadich.com</h5></InquiryText>
    </div>

    <br /><br />

    <div>
      <div style={styles.smallText}><small>Body small ({fontSizeBodySmall}pt)</small></div>
      <div style={textBodySmall()}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sed
        mauris sit amet massa interdum bibendum. Ut ac ex leo. Cras blandit
        enim ut metus feugiat, vitae pharetra massa aliquet.
        </div>
    </div>

    <br /><br />

    <div>
      <div style={styles.smallText}><small>Accent ({fontSizeAccent}pt)</small></div>
      <div style={textAccent()}>
        Lorem ipsum dolor sit amet
        </div>
    </div> */}

    {/* <br /><br />

    <div>
      <div style={styles.smallText}><small>Left Carving</small></div>
      <div style={{ width: '65%', margin: 'auto', fontSize: '15px', fontFamily: 'Noe Text' }}>
        <LeftCarving>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabi in lobortis massa, at mollis mauris. nec commodo eros, id hendrerit est. Vestibulum eu volutpat  Nam id mauris metus.
        </LeftCarving>
        Lorem ipsum dolor sit amet, adipiscing elit. Curabi in lobortis massa, at mollis mauris. nec commodo eros, id hendrerit est. Vestibulum eu volutpat  Nam id mauris metus.
        Lorem ipsum dolor sit amet, adipiscing elit. Curabi in lobortis massa, at mollis mauris. nec commodo eros, id hendrerit est. Vestibulum eu volutpat  Nam id mauris metus.
        Lorem ipsum dolor sit amet, adipiscing elit. Curabi in lobortis massa, at mollis mauris. nec commodo eros, id hendrerit est. Vestibulum eu volutpat  Nam id mauris metus.
        Lorem ipsum dolor sit amet, adipiscing elit. Curabi in lobortis massa, at mollis mauris. nec commodo eros, id hendrerit est. Vestibulum eu volutpat  Nam id mauris metus.
        Lorem ipsum dolor sit amet, adipiscing elit. Curabi in lobortis massa, at mollis mauris. nec commodo eros, id hendrerit est. Vestibulum eu volutpat  Nam id mauris metus.
        Lorem ipsum dolor sit amet, adipiscing elit. Curabi in lobortis massa, at mollis mauris. nec commodo eros, id hendrerit est. Vestibulum eu volutpat  Nam id mauris metus.
        Lorem ipsum dolor sit amet, adipiscing elit. Curabi in lobortis massa, at mollis mauris. nec commodo eros, id hendrerit est. Vestibulum eu volutpat  Nam id mauris metus.
        Lorem ipsum dolor sit amet, adipiscing elit. Curabi in lobortis massa, at mollis mauris. nec commodo eros, id hendrerit est. Vestibulum eu volutpat  Nam id mauris metus.
        Lorem ipsum dolor sit amet, adipiscing elit. Curabi in lobortis massa, at mollis mauris. nec commodo eros, id hendrerit est. Vestibulum eu volutpat  Nam id mauris metus.
      </div>
    </div>

    <br /><br />

    <div>
      <div style={styles.smallText}><small>Quote Block</small></div>
      <div>
        <Pullquote pqOptions='quote-block'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabi in lobortis massa, at mollis mauris. nec commodo eros, id hendrerit est. Vestibulum eu volutpat  Nam id mauris metus.
        </Pullquote>
      </div>
    </div>

    <br /><br />

    <div>
      <div style={styles.smallText}><small>Sidebar Quote</small></div>
      <div>
        <SidebarQuote>
          Lorem ipsum dolor sit amet, adipiscing elit. Curabi in lobortis massa, at mollis mauris. nec commodo eros, id hendrerit est. Vestibulum eu volutpat  Nam id mauris metus.
        </SidebarQuote>
      </div>
      <div style={{ width: '59%', fontSize: '15px', margin: 'auto', fontFamily: 'Noe Text' }}>
        Lorem ipsum dolor sit amet, adipiscing elit. Curabi in lobortis massa, at mollis mauris. nec commodo eros, id hendrerit est. Vestibulum eu volutpat  Nam id mauris metus.
        Lorem ipsum dolor sit amet, adipiscing elit. Curabi in lobortis massa, at mollis mauris. nec commodo eros, id hendrerit est. Vestibulum eu volutpat  Nam id mauris metus.
        Lorem ipsum dolor sit amet, adipiscing elit. Curabi in lobortis massa, at mollis mauris. nec commodo eros, id hendrerit est. Vestibulum eu volutpat  Nam id mauris metus.
        Lorem ipsum dolor sit amet, adipiscing elit. Curabi in lobortis massa, at mollis mauris. nec commodo eros, id hendrerit est. Vestibulum eu volutpat  Nam id mauris metus.
        Lorem ipsum dolor sit amet, adipiscing elit. Curabi in lobortis massa, at mollis mauris. nec commodo eros, id hendrerit est. Vestibulum eu volutpat  Nam id mauris metus.
        Lorem ipsum dolor sit amet, adipiscing elit. Curabi in lobortis massa, at mollis mauris. nec commodo eros, id hendrerit est. Vestibulum eu volutpat  Nam id mauris metus.
        Lorem ipsum dolor sit amet, adipiscing elit. Curabi in lobortis massa, at mollis mauris. nec commodo eros, id hendrerit est. Vestibulum eu volutpat  Nam id mauris metus.
        Lorem ipsum dolor sit amet, adipiscing elit. Curabi in lobortis massa, at mollis mauris. nec commodo eros, id hendrerit est. Vestibulum eu volutpat  Nam id mauris metus.
        Lorem ipsum dolor sit amet, adipiscing elit. Curabi in lobortis massa, at mollis mauris. nec commodo eros, id hendrerit est. Vestibulum eu volutpat  Nam id mauris metus.
        Lorem ipsum dolor sit amet, adipiscing elit. Curabi in lobortis massa, at mollis mauris. nec commodo eros, id hendrerit est. Vestibulum eu volutpat  Nam id mauris metus.
        Lorem ipsum dolor sit amet, adipiscing elit. Curabi in lobortis massa, at mollis mauris. nec commodo eros, id hendrerit est. Vestibulum eu volutpat  Nam id mauris metus.
        </div>
    </div> */}

  </div>

export default Typography;