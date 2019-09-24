import React from 'react'
import { storiesOf } from '@storybook/react'
import {
  textUppercase
} from '../utils/typography'

import Pullquote from '../components/Pullquote'

import {
  BioHeader,
  Caption,
  CardTitle,
  CardSubTitle,
  Heading1,
  Heading2,
  Heading3,
  Heading4,
  InquiryText,
  QuoteAttribution,
  SideBar,
  SubHead,
  WiredType
} from '../components/Type'

storiesOf('Typeography', module)

  .add(
    'H1',
    () =>
      <Heading1>
        <span style={{ display: 'block', color: '#7F7F7F' }} >Client Name</span> Project Title <br />Title Tk
      </Heading1>
  )

  .add(
    'H2',
    () =>
      <Heading2>
        Top experiences in Asia
      </Heading2>
  )

  .add(
    'H3',
    () =>
      <Heading3>
        Top experiences in Asia
      </Heading3>
  )

  .add(
    'H4',
    () => <Heading4>Top experiences in Asia</Heading4>
  )

  .add(
    'Subhead',
    () => <SubHead>Top experiences in Asia</SubHead>
  )

  .add(
    'Card Title & Subtitle',
    () =>
      <div>
        <CardTitle>Client Name</CardTitle>
        <CardSubTitle>Dek/Editorial project title that may run into two sentences</CardSubTitle>
      </div>
  )

  .add(
    'Uppercase',
    () =>
      <div style={textUppercase()}>
        Senior Account Manager
      </div>
  )

  .add(
    'Caption',
    () => <Caption>GDP divided front-of-book into three sections that each have their own distinctive look and approach</Caption>
  )

  .add(
    'Sidebar',
    () => <div style={{ position: 'relative', width: '25%', margin: '50px auto' }}>
      <SideBar sideBar={{
        text: 'Smaller length, Sidebar text area.',
        image: 'https://d3q6cdqcttrgvi.cloudfront.net/eyJidWNrZXQiOiJnZHAtc2l0ZSIsImtleSI6ImF0dGFjaG1lbnRzL2NqemtpN3Y4aTAycmJmemF3aG54bmZxeHctd2lyZWQtbG9nby1yZ2IucG5nIn0=',
        location: 'left-top'
      }} isVisible />
    </div>
  )

  .add(
    'Sidebar as Quote',
    () => <div style={{ position: 'relative', width: '25%', margin: '50px auto' }}>
      <SideBar sideBar={{
        text: 'Smaller length, Sidebar text area.',
        image: 'https://d3q6cdqcttrgvi.cloudfront.net/eyJidWNrZXQiOiJnZHAtc2l0ZSIsImtleSI6ImF0dGFjaG1lbnRzL2NqemtpN3Y4aTAycmJmemF3aG54bmZxeHctd2lyZWQtbG9nby1yZ2IucG5nIn0=',
        isQuote: true,
        quoter: '—Scott Dadich',
        location: 'left-top'
      }} isVisible />
    </div>
  )

  .add(
    'Pullquote',
    () => <Pullquote classAdd='testadd'>
    The editorial team created new story forms and structures that could tackle big, bold ideas with provocative voice.
    </Pullquote>
  )

  .add(
    'Pullquote Attribution',
    () => <QuoteAttribution classAdd='testadd'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</QuoteAttribution>
  )

  .add(
    'Pullquote w/ attribution',
    () => <Pullquote classAdd='testadd'>
    The editorial team created new story forms and structures that could tackle big, bold ideas with provocative voice.
      <QuoteAttribution classAdd='testadd'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </QuoteAttribution>
    </Pullquote>
  )

  .add(
    'Wired Type',
    () => <WiredType><span style={{ fontFamily: 'Noe Text' }}>wired</span></WiredType>
  )

  .add(
    'Inquiry Text',
    () => <InquiryText>For speaking engagement inquiries, please contact <a href='mailto:inquiries@godfreydadich.com'>inquiries@godfreydadich.com</a></InquiryText>
  )

  .add(
    'BioHeader',
    () => <BioHeader
      personName='Scott Dadich'
      personTitle='Founder, Co-CEO'
      insta='sdadich'
    />
  )
