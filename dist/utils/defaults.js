"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.video1 = exports.image3 = exports.image2 = exports.image1 = exports.galleries = exports.imageGallery3 = exports.imageGallery2 = exports.imageGallery = exports.imgSixteenNine = exports.isCarousel = exports.viewMode = exports.addDropShadow = exports.countIndicator = exports.sidebarLocations = exports.contentOrientations = exports.horizontalAligns = exports.verticalAligns = exports.aspectRatios = exports.breadCrumbData = exports.captionsArray = exports.defaultCaption = exports.defaultCopyBlock = exports.defaultCta = exports.defaultSubTitle = exports.defaultTitle = void 0;

/* Copy */
var defaultTitle = 'Title Tk';
exports.defaultTitle = defaultTitle;
var defaultSubTitle = 'Subtitle Tk';
exports.defaultSubTitle = defaultSubTitle;
var defaultCta = 'CTA Tk';
exports.defaultCta = defaultCta;
var defaultCopyBlock = 'Copy Tk ipsem lorem dolor elis malesada congue. Maect as sed imperet ex, egetejku uismod enim.';
exports.defaultCopyBlock = defaultCopyBlock;
var defaultCaption = 'Caption tk ipsem lorem dolor elis malesada congue. Maect as sed imperet ex, egetejku uismod enim. Donec vivra ut ibh. Culpa ulmco eiusmod uterif dolor ipsem lorem dol onsecteur mis moguet fila.';
exports.defaultCaption = defaultCaption;
var captionsArray = ['caption1 fjkfkjdhg dhkgjhfjsdhjhkdg kdghjgfdsjh fgjhdgf jhksd', 'caption2 fjkfkjdhg dhkgjhfjsdhjhkdg kdghjgfdsjh fgjhdgf jhksd', 'caption3 fjkfkjdhg dhkgjhfjsdhjhkdg kdghjgfdsjh fgjhdgf jhksd', 'caption4 fjkfkjdhg dhkgjhfjsdhjhkdg kdghjgfdsjh fgjhdgf jhksd', 'caption5 fjkfkjdhg dhkgjhfjsdhjhkdg kdghjgfdsjh fgjhdgf jhksd', 'caption6 fjkfkjdhg dhkgjhfjsdhjhkdg kdghjgfdsjh fgjhdgf jhksd', 'caption7 fjkfkjdhg dhkgjhfjsdhjhkdg kdghjgfdsjh fgjhdgf jhksd'];
exports.captionsArray = captionsArray;
var breadCrumbData = [{
  title: 'home',
  slug: 'http://google.com'
}, {
  title: 'work',
  slug: 'http://google.com'
}, {
  title: 'wired',
  slug: 'http://google.com'
}];
/* Options */

exports.breadCrumbData = breadCrumbData;
var aspectRatios = ['sixteen', 'standard', 'square', 'cropped', 'noAspect'];
exports.aspectRatios = aspectRatios;
var verticalAligns = ['top', 'center', 'bottom'];
exports.verticalAligns = verticalAligns;
var horizontalAligns = ['left', 'center', 'right'];
exports.horizontalAligns = horizontalAligns;
var contentOrientations = ['top', 'left', 'right', 'bottom'];
exports.contentOrientations = contentOrientations;
var sidebarLocations = ['left-top', 'right-top', 'left-bottom', 'right-bottom'];
exports.sidebarLocations = sidebarLocations;
var countIndicator = ['counter', 'dots', 'none'];
exports.countIndicator = countIndicator;
var addDropShadow = ['yes', 'no']; // TODO: Transition this to a boolean

exports.addDropShadow = addDropShadow;
var viewMode = ['lightMode', 'darkMode'];
exports.viewMode = viewMode;
var isCarousel = ['yes', 'no'];
/* Media */

exports.isCarousel = isCarousel;
var imgSixteenNine = 'https://d3q6cdqcttrgvi.cloudfront.net/eyJidWNrZXQiOiJnZHAtc2l0ZSIsImtleSI6ImF0dGFjaG1lbnRzL2NqemtxeHhjZjAwaDI5dmI0djRlZGpoOGYtMjMwN2h3LW9wZW5lci1sby1yMi5wbmciLCJlZGl0cyI6eyJyZXNpemUiOnsid2l0aG91dEVubGFyZ2VtZW50Ijp0cnVlLCJ3aWR0aCI6MTAyNH19fQ==';
exports.imgSixteenNine = imgSixteenNine;
var imageGallery = ['http://gdp-site.s3.amazonaws.com/attachments/cjzlzvn6e00av0injox68giu4-06-1316wieaopen002.full.jpg', 'http://gdp-site.s3.amazonaws.com/attachments/cjzlzvmzs004y0ipgfjyriq15-03-1316wicxopen001.full.jpg'];
exports.imageGallery = imageGallery;
var imageGallery2 = ['https://d3q6cdqcttrgvi.cloudfront.net/eyJidWNrZXQiOiJnZHAtc2l0ZSIsImtleSI6ImF0dGFjaG1lbnRzL2NqemtxeHhjZjAwaDI5dmI0djRlZGpoOGYtMjMwN2h3LW9wZW5lci1sby1yMi5wbmciLCJlZGl0cyI6eyJyZXNpemUiOnsid2l0aG91dEVubGFyZ2VtZW50Ijp0cnVlLCJ3aWR0aCI6MTAyNH19fQ==', 'https://d3q6cdqcttrgvi.cloudfront.net/eyJidWNrZXQiOiJnZHAtc2l0ZSIsImtleSI6ImF0dGFjaG1lbnRzL2Nqemx3eHoyNzAwNXkwaXA3ZnQ0cTcyeDctMjQxMmZmLWFtZXJpY2EtbG8tcjMucG5nIiwiZWRpdHMiOnsicmVzaXplIjp7IndpdGhvdXRFbmxhcmdlbWVudCI6dHJ1ZSwid2lkdGgiOjEwMjR9fX0=', 'https://d3q6cdqcttrgvi.cloudfront.net/eyJidWNrZXQiOiJnZHAtc2l0ZSIsImtleSI6ImF0dGFjaG1lbnRzL2Nqemx3eHozdDAwNWQwaXFlcnJ3NWg2cDgtMjIwOWZmLW1hbmdvLWxvLXIyNS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2l0aG91dEVubGFyZ2VtZW50Ijp0cnVlLCJ3aWR0aCI6MTAyNH19fQ==', 'https://d3q6cdqcttrgvi.cloudfront.net/eyJidWNrZXQiOiJnZHAtc2l0ZSIsImtleSI6ImF0dGFjaG1lbnRzL2Nqemx3eHoxdDAwNWMwaXFlZ243bWwxZWotMjMwNWZmLXdhdGNoLWxvLXIyMy5wbmciLCJlZGl0cyI6eyJyZXNpemUiOnsid2l0aG91dEVubGFyZ2VtZW50Ijp0cnVlLCJ3aWR0aCI6MTAyNH19fQ==', 'https://d3q6cdqcttrgvi.cloudfront.net/eyJidWNrZXQiOiJnZHAtc2l0ZSIsImtleSI6ImF0dGFjaG1lbnRzL2Nqemx3em01ZjAwNjAwaXFlMXJoM213Y2MtMjMwMmZmLW5hZGVsbGEtbG8tcjIucG5nIiwiZWRpdHMiOnsicmVzaXplIjp7IndpdGhvdXRFbmxhcmdlbWVudCI6dHJ1ZSwid2lkdGgiOjEwMjR9fX0=', 'https://d3q6cdqcttrgvi.cloudfront.net/eyJidWNrZXQiOiJnZHAtc2l0ZSIsImtleSI6ImF0dGFjaG1lbnRzL2Nqemx3em04eDAxZWowaW5qNnlyd3hpdWstMjMwMmZmLW5hZGVsbGEtbG8tcjIyLnBuZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aXRob3V0RW5sYXJnZW1lbnQiOnRydWUsIndpZHRoIjoxMDI0fX19', 'https://d3q6cdqcttrgvi.cloudfront.net/eyJidWNrZXQiOiJnZHAtc2l0ZSIsImtleSI6ImF0dGFjaG1lbnRzL2Nqemx3em1haDAxZWswaW5qc3lla2cxamwtMjMxMnN3LWpqaW50ZXJ2aWV3LWxvLXIyLmpwZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aXRob3V0RW5sYXJnZW1lbnQiOnRydWUsIndpZHRoIjoxMDI0fX19'];
exports.imageGallery2 = imageGallery2;
var imageGallery3 = ['http://gdp-site.s3.amazonaws.com/attachments/cjzlzvn4w00au0injsf6wzl76-05-1316wiwkopen001.full.jpg', 'http://gdp-site.s3.amazonaws.com/attachments/cjzlzvn2m00at0injl51tmrkf-07-1316wismopen001.full.jpg'];
exports.imageGallery3 = imageGallery3;
var galleries = [{
  name: '',
  thumb: 'http://gdp-site.s3.amazonaws.com/attachments/cjzlzeyr8002w0inj5mvflwjl-01-gxxl-58826efa-d964-4c67-bfff-66d80a771fd0.full.jpg',
  images: imageGallery,
  startIndex: 0
}, {
  name: '',
  thumb: 'http://gdp-site.s3.amazonaws.com/attachments/cjzlzgbp6003g0ip74bkqmpco-01-final-150331-white-v12rgb-blackbg-jmo-w-eh1-1800x1047.full.jpg',
  images: imageGallery2,
  startIndex: 2
}, {
  name: '',
  thumb: 'http://gdp-site.s3.amazonaws.com/attachments/cjzlzu2z4008m0injiij0kd20-01-1016widpnike002.full.jpg',
  images: imageGallery3,
  startIndex: 4
}, {
  name: '',
  thumb: 'http://gdp-site.s3.amazonaws.com/attachments/cjzlzvmwp00as0injrv5vtwcu-01-1316wicvcove001.full.jpg',
  images: imageGallery,
  startIndex: 6
}, {
  name: '',
  thumb: 'http://gdp-site.s3.amazonaws.com/attachments/cjzlzfcno003q0injf7jh699h-01-1214wi1dnola001.full.jpg',
  images: imageGallery2,
  startIndex: 8
}, {
  name: '',
  thumb: 'http://gdp-site.s3.amazonaws.com/attachments/cjzlzqfs4005q0inj3sn07a7l-01-0615wiffilmf035.full.jpg',
  images: imageGallery3,
  startIndex: 10
}, {
  name: '',
  thumb: 'http://gdp-site.s3.amazonaws.com/attachments/cjzlzul8t009e0injparsz6s7-01-0616wiaiffgo001.full.jpg',
  images: imageGallery,
  startIndex: 12
}, {
  name: '',
  thumb: 'http://gdp-site.s3.amazonaws.com/attachments/cjzlzw2av005s0ipgsubr4uuf-01-0916wiffbees004.full.jpg',
  images: imageGallery2,
  startIndex: 14
}, {
  name: '',
  thumb: 'http://gdp-site.s3.amazonaws.com/attachments/cjzlzfv3i00170ip7dxa6mfyo-01-caitoppermann-2017-01-24-wired-nike-kenya-dsc0397.full.jpg',
  images: imageGallery3,
  startIndex: 16
}, {
  name: '',
  thumb: 'http://gdp-site.s3.amazonaws.com/attachments/cjzlzsmzc006m0inj8c09q04j-0516wiglessa001.full.jpg',
  images: imageGallery,
  startIndex: 18
}, {
  name: '',
  thumb: 'http://gdp-site.s3.amazonaws.com/attachments/cjzlzv3e500a90inj7pcvmrbu-01-0914wiffmang008.full.jpg',
  images: imageGallery2,
  startIndex: 20
}, {
  name: '',
  thumb: 'http://gdp-site.s3.amazonaws.com/attachments/cjzlzwndg00cs0injhf78powl-01-0314wimpmusi003.full.jpg',
  images: imageGallery3,
  startIndex: 22
}];
/* Static Images */

exports.galleries = galleries;
var image1 = 'https://media.wired.com/photos/593256d2edfced5820d0fb9d/master/w_1025,c_limit/20140514-AMAZON-PHOENIX-0110edit.jpg';
exports.image1 = image1;
var image2 = 'https://d3q6cdqcttrgvi.cloudfront.net/eyJidWNrZXQiOiJnZHAtc2l0ZSIsImtleSI6ImF0dGFjaG1lbnRzL2NqemtxeHhjZjAwaDI5dmI0djRlZGpoOGYtMjMwN2h3LW9wZW5lci1sby1yMi5wbmciLCJlZGl0cyI6eyJyZXNpemUiOnsid2l0aG91dEVubGFyZ2VtZW50Ijp0cnVlLCJ3aWR0aCI6MTAyNH19fQ==';
exports.image2 = image2;
var image3 = 'https://i.vimeocdn.com/video/738220216_1000.jpg';
/* Static Videos */

exports.image3 = image3;
var video1 = 'https://vimeo.com/299978304';
exports.video1 = video1;