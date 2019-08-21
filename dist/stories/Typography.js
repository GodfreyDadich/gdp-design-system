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

var _Type = require("../components/Type");

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
          'Super (',
          _typography.fontSizeSuper,
          ')'
        )
      ),
      _react2.default.createElement(
        _Type.HeadingSuper,
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
          'Heading 1 (',
          _typography.fontSizeHeading1,
          ')'
        )
      ),
      _react2.default.createElement(
        _Type.Heading1,
        null,
        _react2.default.createElement(
          'span',
          { style: { display: 'block', color: '#7F7F7F' } },
          'National Geographic'
        ),
        ' Redefining the nature of exploration'
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
          'Heading 2 (',
          _typography.fontSizeHeading2,
          ')'
        )
      ),
      _react2.default.createElement(
        _Type.Heading2,
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
          'Heading 3 (',
          _typography.fontSizeHeading3,
          ')'
        )
      ),
      _react2.default.createElement(
        _Type.Heading3,
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
          'Heading 4 (',
          _typography.fontSizeHeading4,
          ')'
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
          "SubHead (",
          _typography.fontSizeHeading4,
          ")"
        )
      ),
      _react2.default.createElement(
        _Type.SubHead,
        null,
        "Top experiences in Asia"
      )
    ),
    _react2.default.createElement("br", null),
    _react2.default.createElement("br", null),
    _react2.default.createElement(
      "div",
      null,
      _react2.default.createElement(
        "div",
        { style: _styles2.default.smallText },
        _react2.default.createElement(
          "small",
          null,
          "Heading 5 (",
          _typography.fontSizeHeading5,
          ')'
        )
      ),
      _react2.default.createElement(
        'div',
        { style: (0, _typography2.textHeading5)() },
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
          'Heading 6 (',
          _typography.fontSizeHeading6,
          ')'
        )
      ),
      _react2.default.createElement(
        'div',
        { style: (0, _typography2.textHeading6)() },
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
          'Heading 7 (',
          _typography.fontSizeHeading7,
          ')'
        )
      ),
      _react2.default.createElement(
        'div',
        { style: (0, _typography2.textHeading7)() },
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
          'Heading 8 (',
          _typography.fontSizeHeading8,
          ')'
        )
      ),
      _react2.default.createElement(
        'div',
        { style: (0, _typography2.textHeading8)() },
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
          'Body article (',
          _typography.fontSizeBodyArticle,
          ')'
        )
      ),
      _react2.default.createElement(
        'p',
        null,
        'Few magazines in the world are as revered as ',
        _react2.default.createElement(
          'span',
          { style: { fontStyle: 'italic' } },
          'National Geographic'
        ),
        '. For 130 years its breathtaking photography and groundbreaking narratives have helped readers discover the world through its pages. While the brand has evolved with a changing industry\u2014building a thriving television network, books and kids divisions, travel business, and social media audience (90+ million Instagram followers and counting)\u2014the magazine itself hadn\u2019t undergone a significant redesign for two decades.'
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
          'Body article small (',
          _typography.fontSizeBodyArticleSmall,
          ')'
        )
      ),
      _react2.default.createElement(
        'div',
        { style: (0, _typography2.textBodyArticleSmall)() },
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sed mauris sit amet massa interdum bibendum. Ut ac ex leo. Cras blandit enim ut metus feugiat, vitae pharetra massa aliquet.'
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
          "WiredType (",
          _typography.fontSizeHeading4,
          ")"
        )
      ),
      _react2.default.createElement(
        _Type.WiredType,
        null,
        "wired"
      )
    ),
    _react2.default.createElement("br", null),
    _react2.default.createElement("br", null),
    _react2.default.createElement(
      "div",
      null,
      _react2.default.createElement(
        "div",
        { style: _styles2.default.smallText },
        _react2.default.createElement(
          "small",
          null,
          "Pull Quote"
        )
      ),
      _react2.default.createElement(
        _Pullquote2.default,
        { classAdd: 'testadd' },
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sed mauris sit amet massa interdum bibendum.'
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
          'Body small (',
          _typography.fontSizeBodySmall,
          ')'
        )
      ),
      _react2.default.createElement(
        'div',
        { style: (0, _typography2.textBodySmall)() },
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sed mauris sit amet massa interdum bibendum. Ut ac ex leo. Cras blandit enim ut metus feugiat, vitae pharetra massa aliquet.'
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
          'Accent (',
          _typography.fontSizeAccent,
          ')'
        )
      ),
      _react2.default.createElement(
        'div',
        { style: (0, _typography2.textAccent)() },
        'Lorem ipsum dolor sit amet'
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
          'Uppercase (',
          _typography.fontSizeUppercase,
          ')'
        )
      ),
      _react2.default.createElement(
        'div',
        { style: (0, _typography2.textUppercase)() },
        'Sectional navigation'
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
          'Left Carving'
        )
      ),
      _react2.default.createElement(
        'div',
        { style: { width: '65%', margin: 'auto', fontSize: '15px', fontFamily: 'Noe Text' } },
        _react2.default.createElement(
          _Type.LeftCarving,
          null,
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabi in lobortis massa, at mollis mauris. nec commodo eros, id hendrerit est. Vestibulum eu volutpat  Nam id mauris metus.'
        ),
        "Lorem ipsum dolor sit amet, adipiscing elit. Curabi in lobortis massa, at mollis mauris. nec commodo eros, id hendrerit est. Vestibulum eu volutpat  Nam id mauris metus. Lorem ipsum dolor sit amet, adipiscing elit. Curabi in lobortis massa, at mollis mauris. nec commodo eros, id hendrerit est. Vestibulum eu volutpat  Nam id mauris metus. Lorem ipsum dolor sit amet, adipiscing elit. Curabi in lobortis massa, at mollis mauris. nec commodo eros, id hendrerit est. Vestibulum eu volutpat  Nam id mauris metus. Lorem ipsum dolor sit amet, adipiscing elit. Curabi in lobortis massa, at mollis mauris. nec commodo eros, id hendrerit est. Vestibulum eu volutpat  Nam id mauris metus. Lorem ipsum dolor sit amet, adipiscing elit. Curabi in lobortis massa, at mollis mauris. nec commodo eros, id hendrerit est. Vestibulum eu volutpat  Nam id mauris metus. Lorem ipsum dolor sit amet, adipiscing elit. Curabi in lobortis massa, at mollis mauris. nec commodo eros, id hendrerit est. Vestibulum eu volutpat  Nam id mauris metus. Lorem ipsum dolor sit amet, adipiscing elit. Curabi in lobortis massa, at mollis mauris. nec commodo eros, id hendrerit est. Vestibulum eu volutpat  Nam id mauris metus. Lorem ipsum dolor sit amet, adipiscing elit. Curabi in lobortis massa, at mollis mauris. nec commodo eros, id hendrerit est. Vestibulum eu volutpat  Nam id mauris metus. Lorem ipsum dolor sit amet, adipiscing elit. Curabi in lobortis massa, at mollis mauris. nec commodo eros, id hendrerit est. Vestibulum eu volutpat  Nam id mauris metus."
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
          'Quote Block'
        )
      ),
      _react2.default.createElement(
        "div",
        null,
        _react2.default.createElement(
          _Pullquote2.default,
          { pqOptions: "quote-block" },
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabi in lobortis massa, at mollis mauris. nec commodo eros, id hendrerit est. Vestibulum eu volutpat  Nam id mauris metus."
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
          'Sidebar Quote'
        )
      ),
      _react2.default.createElement(
        "div",
        null,
        _react2.default.createElement(
          _Type.SidebarQuote,
          null,
          "Lorem ipsum dolor sit amet, adipiscing elit. Curabi in lobortis massa, at mollis mauris. nec commodo eros, id hendrerit est. Vestibulum eu volutpat  Nam id mauris metus."
        )
      ),
      _react2.default.createElement(
        "div",
        { style: { width: '59%', fontSize: '15px', margin: 'auto', fontFamily: 'Noe Text' } },
        "Lorem ipsum dolor sit amet, adipiscing elit. Curabi in lobortis massa, at mollis mauris. nec commodo eros, id hendrerit est. Vestibulum eu volutpat  Nam id mauris metus. Lorem ipsum dolor sit amet, adipiscing elit. Curabi in lobortis massa, at mollis mauris. nec commodo eros, id hendrerit est. Vestibulum eu volutpat  Nam id mauris metus. Lorem ipsum dolor sit amet, adipiscing elit. Curabi in lobortis massa, at mollis mauris. nec commodo eros, id hendrerit est. Vestibulum eu volutpat  Nam id mauris metus. Lorem ipsum dolor sit amet, adipiscing elit. Curabi in lobortis massa, at mollis mauris. nec commodo eros, id hendrerit est. Vestibulum eu volutpat  Nam id mauris metus. Lorem ipsum dolor sit amet, adipiscing elit. Curabi in lobortis massa, at mollis mauris. nec commodo eros, id hendrerit est. Vestibulum eu volutpat  Nam id mauris metus. Lorem ipsum dolor sit amet, adipiscing elit. Curabi in lobortis massa, at mollis mauris. nec commodo eros, id hendrerit est. Vestibulum eu volutpat  Nam id mauris metus. Lorem ipsum dolor sit amet, adipiscing elit. Curabi in lobortis massa, at mollis mauris. nec commodo eros, id hendrerit est. Vestibulum eu volutpat  Nam id mauris metus. Lorem ipsum dolor sit amet, adipiscing elit. Curabi in lobortis massa, at mollis mauris. nec commodo eros, id hendrerit est. Vestibulum eu volutpat  Nam id mauris metus. Lorem ipsum dolor sit amet, adipiscing elit. Curabi in lobortis massa, at mollis mauris. nec commodo eros, id hendrerit est. Vestibulum eu volutpat  Nam id mauris metus. Lorem ipsum dolor sit amet, adipiscing elit. Curabi in lobortis massa, at mollis mauris. nec commodo eros, id hendrerit est. Vestibulum eu volutpat  Nam id mauris metus. Lorem ipsum dolor sit amet, adipiscing elit. Curabi in lobortis massa, at mollis mauris. nec commodo eros, id hendrerit est. Vestibulum eu volutpat  Nam id mauris metus."
      )
    )
  );
};

exports.default = Typography;