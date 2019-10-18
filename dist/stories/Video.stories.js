"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.VideoCarousel = exports.FramelessPlayOnHover = exports.DeviceVideo = exports.VideoWithSidebar = exports.VideoWithCaption = exports.VideoEmbedAutoplay = exports.VideoEmbed = exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _addonKnobs = require("@storybook/addon-knobs");

var _HoverVideo = _interopRequireDefault(require("../components/HoverVideo"));

var _Video = _interopRequireDefault(require("../components/Video"));

var _Device = _interopRequireDefault(require("../components/Device"));

var _CircularCarousel = _interopRequireDefault(require("../components/CircularCarousel"));

var videoEnded = function videoEnded() {// console.log('video over')
};

var _default = {
  title: 'Design System|Videos',
  component: _Video["default"]
};
exports["default"] = _default;

var VideoEmbed = function VideoEmbed() {
  return _react["default"].createElement(_Video["default"], {
    title: "",
    aspectRatio: "cropped",
    fullBleed: false,
    vidSource: "https://vimeo.com/299756718",
    thumb: "https://i.vimeocdn.com/video/737947212_1000.jpg"
  });
};

exports.VideoEmbed = VideoEmbed;

var VideoEmbedAutoplay = function VideoEmbedAutoplay() {
  return _react["default"].createElement(_Video["default"], {
    title: "",
    aspectRatio: "sixteen",
    fullBleed: false,
    autoplay: true,
    volume: 0,
    vidSource: "https://vimeo.com/299777569",
    thumb: "https://i.vimeocdn.com/video/737702480_1000.jpg",
    onEnd: videoEnded
  });
};

exports.VideoEmbedAutoplay = VideoEmbedAutoplay;

var VideoWithCaption = function VideoWithCaption() {
  return _react["default"].createElement(_Video["default"], {
    title: "",
    aspectRatio: "sixteen",
    fullBleed: false,
    vidSource: "https://vimeo.com/299543193",
    thumb: "https://i.vimeocdn.com/video/737702480_1000.jpg",
    caption: (0, _addonKnobs.text)('Caption', 'Caption tk ipsem lorem dolor elis malesada congue. Maect as sed imperet ex, egetejku uismod enim. Donec vivra ut ibh. Culpa ulmco eiusmod uterif dolor ipsem lorem dol onsecteur mis moguet fila.')
  });
};

exports.VideoWithCaption = VideoWithCaption;

var VideoWithSidebar = function VideoWithSidebar() {
  return _react["default"].createElement(_Video["default"], {
    title: "",
    aspectRatio: "sixteen",
    fullBleed: false,
    vidSource: "https://vimeo.com/299543193",
    thumb: "https://i.vimeocdn.com/video/737702480_1000.jpg",
    sideBar: {
      text: (0, _addonKnobs.text)('Sidebar Text', 'Smaller length, Sidebar text area.'),
      image: 'https://d3q6cdqcttrgvi.cloudfront.net/eyJidWNrZXQiOiJnZHAtc2l0ZSIsImtleSI6ImF0dGFjaG1lbnRzL2NqemtpN3Y4aTAycmJmemF3aG54bmZxeHctd2lyZWQtbG9nby1yZ2IucG5nIiwiZWRpdHMiOnsid2VicCI6eyJxdWFsaXR5Ijo5MH19fQ==',
      isQuote: true,
      location: (0, _addonKnobs.select)('Sidebar Location', {
        TopLeft: 'left-top',
        TopRight: 'right-top',
        BottomLeft: 'left-bottom',
        BottomRight: 'right-bottom'
      }, 'top-left')
    }
  });
};

exports.VideoWithSidebar = VideoWithSidebar;

var DeviceVideo = function DeviceVideo() {
  return _react["default"].createElement(_Device["default"], {
    deviceColor: (0, _addonKnobs.select)('Device Color', {
      black: 'black',
      white: 'white'
    }, 'black')
  }, _react["default"].createElement(_Video["default"], {
    title: "",
    aspectRatio: "standard",
    vidSource: "https://vimeo.com/299978313",
    autoplay: true,
    loop: true,
    skipIntro: true,
    config: {
      vimeo: {
        playerOptions: {
          background: 1,
          transparent: 0
        }
      }
    },
    thumb: "https://i.vimeocdn.com/video/737702480_1000.jpg"
  }));
};

exports.DeviceVideo = DeviceVideo;

var FramelessPlayOnHover = function FramelessPlayOnHover() {
  return _react["default"].createElement(_HoverVideo["default"], {
    vidSource: "https://player.vimeo.com/video/324374859",
    thumb: "https://i.vimeocdn.com/video/767777887",
    aspectRatio: "custom",
    autoplay: true,
    customPadding: "62%"
  });
};

exports.FramelessPlayOnHover = FramelessPlayOnHover;

var VideoCarousel = function VideoCarousel() {
  return _react["default"].createElement(_CircularCarousel["default"], {
    aspectRatio: "sixteen"
  }, _react["default"].createElement(_Video["default"], {
    title: "",
    aspectRatio: "sixteen",
    fullBleed: false,
    volume: 0,
    loadActive: true,
    vidSource: "https://vimeo.com/299777569",
    thumb: "https://i.vimeocdn.com/video/737702480_1000.jpg",
    onEnd: videoEnded
  }), _react["default"].createElement(_Video["default"], {
    title: "",
    aspectRatio: "sixteen",
    fullBleed: false,
    volume: 0,
    loadActive: true,
    vidSource: "https://vimeo.com/299777569",
    thumb: "https://i.vimeocdn.com/video/737702480_1000.jpg",
    onEnd: videoEnded
  }), _react["default"].createElement(_Video["default"], {
    title: "",
    aspectRatio: "sixteen",
    fullBleed: false,
    volume: 0,
    loadActive: true,
    vidSource: "https://vimeo.com/299777569",
    thumb: "https://i.vimeocdn.com/video/737702480_1000.jpg",
    onEnd: videoEnded
  }), _react["default"].createElement(_Video["default"], {
    title: "",
    aspectRatio: "sixteen",
    fullBleed: false,
    volume: 0,
    loadActive: true,
    vidSource: "https://vimeo.com/299777569",
    thumb: "https://i.vimeocdn.com/video/737702480_1000.jpg",
    onEnd: videoEnded
  }));
};

exports.VideoCarousel = VideoCarousel;