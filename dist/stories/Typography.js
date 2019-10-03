'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styles = require('./styles.json');

var _styles2 = _interopRequireDefault(_styles);

var _typography = require('../styles/typography');

var _typography2 = require('../utils/typography');

var _Pullquote = require('../components/Pullquote');

var _Pullquote2 = _interopRequireDefault(_Pullquote);

var _Type = require('../components/Type');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Typography = function Typography(props) {
  return _react2.default.createElement(
    'div',
    { style: _styles2.default.main },
    _react2.default.createElement(
      'h1',
      null,
      'Typography'
    ),
    _react2.default.createElement(
      'h2',
      { style: { color: '#7f7f7f' } },
      'Desktop Type'
    ),
    _react2.default.createElement('br', null),
    _react2.default.createElement('br', null),
    _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(
        'div',
        { style: _styles2.default.smallText },
        _react2.default.createElement(
          'small',
          null,
          'H1 (Noe Display) (',
          _typography.fontSizeHeading1,
          'pt)'
        )
      ),
      _react2.default.createElement(
        _Type.Heading1,
        null,
        _react2.default.createElement(
          'span',
          { style: { display: 'block', color: '#7F7F7F' } },
          'Client Name'
        ),
        ' Project Title ',
        _react2.default.createElement('br', null),
        'Title Tk'
      )
    ),
    _react2.default.createElement('br', null),
    _react2.default.createElement('br', null),
    _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(
        'div',
        { style: _styles2.default.smallText },
        _react2.default.createElement(
          'small',
          null,
          'Card Title & Subtitle (',
          _typography.fontSizeHeading3,
          'pt)'
        )
      ),
      _react2.default.createElement(
        _Type.CardTitle,
        null,
        'Client Name'
      ),
      _react2.default.createElement(
        _Type.CardSubTitle,
        null,
        'Dek/Editorial project title that may run into two sentences'
      )
    ),
    _react2.default.createElement('br', null),
    _react2.default.createElement('br', null),
    _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(
        'div',
        { style: _styles2.default.smallText },
        _react2.default.createElement(
          'small',
          null,
          'Uppercase (9pt)'
        )
      ),
      _react2.default.createElement(
        'div',
        { style: (0, _typography2.textUppercase)() },
        'Senior Account Manager'
      )
    ),
    _react2.default.createElement('br', null),
    _react2.default.createElement('br', null),
    _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(
        'div',
        { style: _styles2.default.smallText },
        _react2.default.createElement(
          'small',
          null,
          'Atlas Grotesk Caption (12pt)'
        )
      ),
      _react2.default.createElement(
        _Type.Caption,
        null,
        'GDP divided front-of-book into three sections that each have their own distinctive look and ',
        _react2.default.createElement('br', null),
        'approach'
      )
    ),
    _react2.default.createElement('br', null),
    _react2.default.createElement('br', null),
    _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(
        'div',
        { style: _styles2.default.smallText },
        _react2.default.createElement(
          'small',
          null,
          'Heading 4 (',
          _typography.fontSizeHeading4,
          'pt)'
        )
      ),
      _react2.default.createElement(
        _Type.Heading4,
        null,
        'Top experiences in Asia'
      )
    ),
    _react2.default.createElement('br', null),
    _react2.default.createElement('br', null),
    _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(
        'div',
        { style: _styles2.default.smallText },
        _react2.default.createElement(
          'small',
          null,
          'SubHead (',
          _typography.fontSizeHeading4,
          'pt)'
        )
      ),
      _react2.default.createElement(
        _Type.SubHead,
        null,
        'Top experiences in Asia'
      )
    ),
    _react2.default.createElement('br', null),
    _react2.default.createElement('br', null),
    _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(
        'div',
        { style: _styles2.default.smallText },
        _react2.default.createElement(
          'small',
          null,
          'SubHeadBlack (',
          _typography.fontSizeHeading4,
          'pt)'
        )
      ),
      _react2.default.createElement(
        _Type.SubHeadBlack,
        null,
        'Top experiences in Asia'
      )
    ),
    _react2.default.createElement('br', null),
    _react2.default.createElement('br', null),
    _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(
        'div',
        { style: _styles2.default.smallText },
        _react2.default.createElement(
          'small',
          null,
          'Bio Header Lockup'
        )
      ),
      _react2.default.createElement(_Type.BioHeader, {
        personName: 'Scott Dadich',
        personTitle: 'Founder, Co-CEO',
        insta: 'sdadich'
      })
    ),
    _react2.default.createElement('br', null),
    _react2.default.createElement('br', null),
    _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(
        'div',
        { style: _styles2.default.smallText },
        _react2.default.createElement(
          'small',
          null,
          'Atlas Grotesk PQ'
        )
      ),
      _react2.default.createElement(
        _Pullquote2.default,
        { classAdd: 'testadd' },
        'The editorial team created new story forms and structures that could tackle big, bold ideas with provocative voice.',
        _react2.default.createElement(
          _Type.QuoteAttribution,
          { classAdd: 'testadd' },
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
        )
      )
    ),
    _react2.default.createElement('br', null),
    _react2.default.createElement('br', null),
    _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(
        'div',
        { style: _styles2.default.smallText },
        _react2.default.createElement(
          'small',
          null,
          'Atlas Grotesk Body (',
          _typography.fontSizeBodyArticleSmall,
          'pt)'
        )
      ),
      _react2.default.createElement(
        'div',
        { style: (0, _typography2.textBodyArticleSmall)() },
        'Few magazines in the world are as revered as National Geographic. For 130 years its breathtaking photography and groundbreaking narratives have helped readers discover the world through its pages. While the brand has evolved with a changing industry\u2014building a thriving television network, books and kids divisions, travel business, and social media audience (90+ million Instagram followers and counting)\u2014the magazine itself hadn\u2019t undergone a significant redesign for two decades.'
      )
    ),
    _react2.default.createElement('br', null),
    _react2.default.createElement('br', null),
    _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(
        'div',
        { style: _styles2.default.smallText },
        _react2.default.createElement(
          'small',
          null,
          'Small Caps (Noe Text) (',
          _typography.fontSizeHeading4,
          'pt)'
        )
      ),
      _react2.default.createElement(
        _Type.WiredType,
        null,
        _react2.default.createElement(
          'span',
          { style: { fontFamily: 'Noe Text' } },
          'wired'
        )
      )
    ),
    _react2.default.createElement('br', null),
    _react2.default.createElement('br', null),
    _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(
        'div',
        { style: _styles2.default.smallText },
        _react2.default.createElement(
          'small',
          null,
          'CTA Type (',
          _typography.fontSizeHeading4,
          'pt)'
        )
      ),
      _react2.default.createElement(
        _Type.InquiryText,
        null,
        _react2.default.createElement(
          'h5',
          null,
          'For speaking engagement inquiries, please contact inquiries@godfreydadich.com'
        )
      )
    ),
    _react2.default.createElement('br', null),
    _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(
        'div',
        { style: _styles2.default.smallText },
        _react2.default.createElement(
          'small',
          null,
          'Accent (',
          _typography.fontSizeAccent,
          'pt)'
        )
      ),
      _react2.default.createElement(
        'div',
        { style: (0, _typography2.textAccent)() },
        'Lorem ipsum dolor sit amet'
      )
    )
  );
};

exports.default = Typography;