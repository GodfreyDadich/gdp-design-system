import React from "react";
import styles from "./styles.json";
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
} from "../styles/typography";

import {
  textSuper,
  textHeading1,
  textHeading2,
  textHeading3,
  textHeading4,
  textHeading5,
  textHeading6,
  textHeading7,
  textHeading8,
  textBodyArticle,
  textBodyArticleSmall,
  textBodySmall,
  textAccent,
  textUppercase,
} from "../utils/typography";

import Pullquote from '../components/Pullquote'

import {
  HeadingSuper,
  Heading1,
  Heading2,
  Heading3,
  Heading4,
  SubHead,
  WiredType,
  LeftCarving,
  QuoteBlock,
  SidebarQuote
} from '../components/Type';
import { relative } from "path";


const Typography = props =>

  <div style={styles.main}>
    <h1>Typography</h1>

    <br /><br />

    <div>
      <div style={styles.smallText}><small>Super ({fontSizeSuper})</small></div>
      <HeadingSuper>Top experiences in Asia</HeadingSuper>
    </div>

    <br /><br />

    <div>
      <div style={styles.smallText}><small>Heading 1 ({fontSizeHeading1})</small></div>
      <Heading1><span style={{ display: 'block', color: '#7F7F7F' }} >National Geographic</span> Redefining the nature of exploration</Heading1>
    </div>

    <br /><br />

    <div>
      <div style={styles.smallText}><small>Heading 2 ({fontSizeHeading2})</small></div>
      <Heading2>Top experiences in Asia</Heading2>
    </div>

    <br /><br />

    <div>
      <div style={styles.smallText}><small>Heading 3 ({fontSizeHeading3})</small></div>
      <Heading3>Top experiences in Asia</Heading3>
    </div>

    <br /><br />

    <div>
      <div style={styles.smallText}><small>Heading 4 ({fontSizeHeading4})</small></div>
      <Heading4>Top experiences in Asia</Heading4>
    </div>

    <br /><br />

    <div>
      <div style={styles.smallText}><small>SubHead ({fontSizeHeading4})</small></div>
      <SubHead>Top experiences in Asia</SubHead>
    </div>

    <br /><br />

    <div>
      <div style={styles.smallText}><small>Heading 5 ({fontSizeHeading5})</small></div>
      <div style={textHeading5()}>Top experiences in Asia</div>
    </div>

    <br /><br />

    <div>
      <div style={styles.smallText}><small>Heading 6 ({fontSizeHeading6})</small></div>
      <div style={textHeading6()}>Top experiences in Asia</div>
    </div>

    <br /><br />

    <div>
      <div style={styles.smallText}><small>Heading 7 ({fontSizeHeading7})</small></div>
      <div style={textHeading7()}>Top experiences in Asia</div>
    </div>

    <br /><br />

    <div>
      <div style={styles.smallText}><small>Heading 8 ({fontSizeHeading8})</small></div>
      <div style={textHeading8()}>Top experiences in Asia</div>
    </div>

    <br /><br />

    <div>
      <div style={styles.smallText}><small>Body article ({fontSizeBodyArticle})</small></div>
      <p>
        Few magazines in the world are as revered as <span style={{ fontStyle: 'italic' }}>National Geographic</span>. For 130 years its breathtaking photography and groundbreaking narratives have helped readers discover the world through its pages. While the brand has evolved with a changing industry—building a thriving television network, books and kids divisions, travel business, and social media audience (90+ million Instagram followers and counting)—the magazine itself hadn’t undergone a significant redesign for two decades.
        </p>
    </div>

    <br /><br />

    <div>
      <div style={styles.smallText}><small>Body article small ({fontSizeBodyArticleSmall})</small></div>
      <div style={textBodyArticleSmall()}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sed
        mauris sit amet massa interdum bibendum. Ut ac ex leo. Cras blandit
        enim ut metus feugiat, vitae pharetra massa aliquet.
        </div>
    </div>

    <br /><br />

    <div>
      <div style={styles.smallText}><small>WiredType ({fontSizeHeading4})</small></div>
      <WiredType>wired</WiredType>
    </div>


    <br /><br />

    <div>
      <div style={styles.smallText}><small>Pull Quote</small></div>
      <Pullquote classAdd='testadd'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sed
        mauris sit amet massa interdum bibendum.
        </Pullquote>
    </div>

    <br /><br />

    <div>
      <div style={styles.smallText}><small>Body small ({fontSizeBodySmall})</small></div>
      <div style={textBodySmall()}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sed
        mauris sit amet massa interdum bibendum. Ut ac ex leo. Cras blandit
        enim ut metus feugiat, vitae pharetra massa aliquet.
        </div>
    </div>

    <br /><br />

    <div>
      <div style={styles.smallText}><small>Accent ({fontSizeAccent})</small></div>
      <div style={textAccent()}>
        Lorem ipsum dolor sit amet
        </div>
    </div>

    <br /><br />

    <div>
      <div style={styles.smallText}><small>Uppercase ({fontSizeUppercase})</small></div>
      <div style={textUppercase()}>
        Sectional navigation
        </div>
    </div>

    <br /><br />

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
        <QuoteBlock>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabi in lobortis massa, at mollis mauris. nec commodo eros, id hendrerit est. Vestibulum eu volutpat  Nam id mauris metus.
        </QuoteBlock>
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
    </div>

  </div>

export default Typography;