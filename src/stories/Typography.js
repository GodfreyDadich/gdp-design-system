import React from 'react'
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

export default {
  title: 'Design System|Typography'
}

export const H1 = () =>
  <Heading1>
    <span style={{ display: 'block', color: '#7F7F7F' }} >Client Name</span> Project Title <br />Title Tk
  </Heading1>

export const H2 = () =>
  <Heading2>
    Top experiences in Asia
  </Heading2>

export const H3 = () =>
  <Heading3>
    Top experiences in Asia
  </Heading3>

export const H4 = () =>
  <Heading4>Top experiences in Asia</Heading4>

export const Subheading = () =>
  <SubHead>Top experiences in Asia</SubHead>

export const CardTitleAndSubtitle = () =>
  <div>
    <CardTitle>Client Name</CardTitle>
    <CardSubTitle>Dek/Editorial project title that may run into two sentences</CardSubTitle>
  </div>

export const Uppercase = () =>
  <div style={textUppercase()}>
    Senior Account Manager
  </div>

export const PhotoCaption = () =>
  <Caption>GDP divided front-of-book into three sections that each have their own distinctive look and approach</Caption>

export const ImageSidebar = () =>
  <div style={{ position: 'relative', width: '25%', margin: '50px auto' }}>
    <SideBar sideBar={{
      text: 'Smaller length, Sidebar text area.',
      image: 'https://d3q6cdqcttrgvi.cloudfront.net/eyJidWNrZXQiOiJnZHAtc2l0ZSIsImtleSI6ImF0dGFjaG1lbnRzL2NqemtpN3Y4aTAycmJmemF3aG54bmZxeHctd2lyZWQtbG9nby1yZ2IucG5nIn0=',
      location: 'left-top'
    }} isVisible />
  </div>

export const ImageSidebarAsQuote = () =>
  <div style={{ position: 'relative', width: '25%', margin: '50px auto' }}>
    <SideBar sideBar={{
      text: 'Smaller length, Sidebar text area.',
      image: 'https://d3q6cdqcttrgvi.cloudfront.net/eyJidWNrZXQiOiJnZHAtc2l0ZSIsImtleSI6ImF0dGFjaG1lbnRzL2NqemtpN3Y4aTAycmJmemF3aG54bmZxeHctd2lyZWQtbG9nby1yZ2IucG5nIn0=',
      isQuote: true,
      quoter: '—Scott Dadich',
      location: 'left-top'
    }} isVisible />
  </div>

export const PullQuote = () =>
  <Pullquote classAdd='testadd'>
    The editorial team created new story forms and structures that could tackle big, bold ideas with provocative voice.
  </Pullquote>

export const PullquoteAttribution = () =>
  <QuoteAttribution classAdd='testadd'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</QuoteAttribution>

export const PullquoteWithAttribution = () =>
  <Pullquote classAdd='testadd'>
    The editorial team created new story forms and structures that could tackle big, bold ideas with provocative voice.
    <QuoteAttribution classAdd='testadd'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    </QuoteAttribution>
  </Pullquote>

export const SmallCaps = () =>
  <WiredType><span style={{ fontFamily: 'Noe Text' }}>wired</span></WiredType>

export const ItalicsHeading = () =>
  <InquiryText>For speaking engagement inquiries, please contact <a href='mailto:inquiries@godfreydadich.com'>inquiries@godfreydadich.com</a></InquiryText>

export const BioPageHeader = () =>
  <BioHeader
    personName='Scott Dadich'
    personTitle='Founder, Co-CEO'
    insta='sdadich'
  />
