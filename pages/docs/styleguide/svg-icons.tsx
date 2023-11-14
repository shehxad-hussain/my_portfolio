import { FC } from 'react';
import color from 'utils/color';
import DocLayout from 'components/layouts/DocLayout';
// =================================
import Gift from 'icons/lineal/Gift';
import Team from 'icons/lineal/Team';
import Home from 'icons/lineal/Home';
import List from 'icons/lineal/List';
import User from 'icons/lineal/User';
import Check from 'icons/lineal/Check';
import Earth from 'icons/lineal/Earth';
import Medal from 'icons/lineal/Medal';
import Rocket from 'icons/lineal/Rocket';
import Design from 'icons/lineal/Design';
import IdCard from 'icons/lineal/IdCard';
import Shield from 'icons/lineal/Shield';
import Target from 'icons/lineal/Target';
import Search from 'icons/lineal/Search';
import ChatTwo from 'icons/lineal/ChatTwo';
import Printer from 'icons/lineal/Printer';
import Browser from 'icons/lineal/Browser';
import Loading from 'icons/lineal/Loading';
import Savings from 'icons/lineal/Savings';
import ShopTwo from 'icons/lineal/ShopTwo';
import AwardTwo from 'icons/lineal/AwardTwo';
import Settings from 'icons/lineal/Settings';
import BarChart from 'icons/lineal/BarChart';
import RocketTwo from 'icons/lineal/RocketTwo';
import Analytics from 'icons/lineal/Analytics';
import LightBulb from 'icons/lineal/LightBulb';
import Megaphone from 'icons/lineal/Megaphone';
import SearchTwo from 'icons/lineal/SearchTwo';
import Telephone from 'icons/lineal/Telephone';
import PrinterTwo from 'icons/lineal/PrinterTwo';
import ClockThree from 'icons/lineal/ClockThree';
import PieChartTwo from 'icons/lineal/PieChartTwo';
import BriefcaseTwo from 'icons/lineal/BriefcaseTwo';
import TeleMarketer from 'icons/lineal/TeleMarketer';
import SmartphoneTwo from 'icons/lineal/SmartphoneTwo';
import SettingsThree from 'icons/lineal/SettingsThree';
import CloudComputing from 'icons/lineal/CloudComputing';
import ShoppingBasket from 'icons/lineal/ShoppingBasket';
// =================================
import Script from 'icons/solid-duo/Script';
import Server from 'icons/solid-duo/Server';
import Setting from 'icons/solid-duo/Setting';
import Director from 'icons/solid-duo/Director';
import TargetTwo from 'icons/solid-duo/TargetTwo';
import CloudGroup from 'icons/solid-duo/CloudGroup';
import BarChartTwo from 'icons/solid-duo/BarChartTwo';
import CloudNetwork from 'icons/solid-duo/CloudNetwork';
import EmployeesTwo from 'icons/solid-duo/EmployeesTwo';
// =================================
import Bulb from 'icons/solid-mono/Bulb';
import Edit from 'icons/solid-mono/Edit';
import Lamp from 'icons/solid-mono/Lamp';
import Share from 'icons/solid-mono/Share';
import Alarm from 'icons/solid-mono/Alarm';
import Verify from 'icons/solid-mono/Verify';
import Wallet from 'icons/solid-mono/Wallet';
import Puzzle from 'icons/solid-mono/Puzzle';
import Compare from 'icons/solid-mono/Compare';
import TeamTwo from 'icons/solid-mono/TeamTwo';
import Building from 'icons/solid-mono/Building';
import PushCart from 'icons/solid-mono/PushCart';
import Shipment from 'icons/solid-mono/Shipment';
import Employees from 'icons/solid-mono/Employees';
import Headphone from 'icons/solid-mono/Headphone';
import VideoCall from 'icons/solid-mono/VideoCall';
import VideoChat from 'icons/solid-mono/VideoChat';
import DeliveryBox from 'icons/solid-mono/DeliveryBox';
import PartnerShip from 'icons/solid-mono/PartnerShip';
// -------- data -------- //
const quickAccess = [
  { title: 'Lineal', url: 'snippet-1' },
  { title: 'Solid Mono', url: 'snippet-2' },
  { title: 'Solid Duo', url: 'snippet-3' }
];

const sizes = ['icon-svg-lg', 'icon-svg-md', 'icon-svg-sm', 'icon-svg-xs'];
const duoColors = [
  'text-green-fuchsia',
  'text-purple-aqua',
  'text-blue-pink',
  'text-navy-green',
  'text-grape-green',
  'text-green-red',
  'text-grape-yellow',
  'text-purple-pink',
  'text-red-yellow',
  'text-grape-fuchsia',
  'text-sky-pink',
  'text-navy-sky'
];

const SvgIcons: FC = () => {
  const linealIcons = [
    Analytics,
    AwardTwo,
    BarChart,
    BriefcaseTwo,
    Browser,
    Check,
    ClockThree,
    CloudComputing,
    Design,
    Earth,
    Gift,
    Home,
    IdCard,
    LightBulb,
    List,
    Loading,
    Medal,
    Megaphone,
    PieChartTwo,
    Printer,
    Rocket,
    Savings,
    SearchTwo,
    Settings,
    SettingsThree,
    Shield,
    ShoppingBasket,
    ShopTwo,
    SmartphoneTwo,
    Target,
    Team,
    TeleMarketer,
    Telephone,
    User,
    ChatTwo,
    Search
  ];

  const solidDuoIcons = [
    BarChartTwo,
    CloudGroup,
    CloudNetwork,
    Director,
    EmployeesTwo,
    Script,
    Server,
    Setting,
    TargetTwo
  ];

  const solidMonoIcons = [
    Alarm,
    Building,
    Bulb,
    Compare,
    DeliveryBox,
    Edit,
    Employees,
    Headphone,
    Lamp,
    PartnerShip,
    PushCart,
    Puzzle,
    Share,
    Shipment,
    TeamTwo,
    Verify,
    VideoCall,
    VideoChat,
    Wallet
  ];

  return (
    <DocLayout
      pageTitle="SVG Icons"
      quickAccssLinks={quickAccess}
      description="Below you can find the list of all SVG icons included in Sandbox. Copy their codes easily with the copy buttons."
    >
      {/* ========== section 1 ========== */}
      <section id="snippet-1" className="wrapper pt-16">
        <h2 className="display-5 mb-3">Lineal</h2>
        <p className="lead mb-8">
          Below you can find the list of all lineal SVG icons with their code snippets. All these retina-ready icons can
          easily be styled by color and size. To reach the resource of this set visit{' '}
          <a
            href="https://www.flaticon.com/authors/monochrome/yellow"
            target="_blank"
            className="hover more"
            rel="noreferrer"
          >
            Flaticon
          </a>
        </p>

        <h2 className="mb-5 mt-n15 pt-15 zindex-n">Colors</h2>

        <div className="card mb-12">
          <div className="card-body">
            <div className="row gy-8 text-center">
              {Object.keys(color)
                .sort()
                .map((item) => (
                  <div className="col-6 col-md-4 col-lg-3" key={item}>
                    <div>
                      <Printer className={`icon-svg-xs text-${item} mx-2`} />
                      <Rocket className={`icon-svg-xs text-${item} mx-2`} />
                    </div>
                    <code className="code text-nowrap mt-4">text-{item}</code>
                  </div>
                ))}
            </div>
          </div>
        </div>

        <h2 className="mb-5 mt-n15 pt-15 zindex-n">Sizes</h2>

        <div className="card mb-12">
          <div className="card-body">
            <div className="row gy-8 text-center d-flex align-items-end">
              {sizes.map((item) => (
                <div className="col-6 col-lg-3" key={item}>
                  <div>
                    <Printer className={`${item} text-blue mx-2`} />
                    <Rocket className={`${item} text-blue mx-2`} />
                  </div>
                  <code className="code text-nowrap mt-4">{item}</code>
                </div>
              ))}
            </div>
          </div>
        </div>

        <h2 className="mb-5 mt-n15 pt-15 zindex-n">Icons</h2>

        <ul className="glyphs glyphs-svg row row-cols-2 row-cols-md-4 row-cols-lg-5 gy-6">
          {linealIcons.sort().map((Icon, i) => (
            <li className="col text-center" key={i}>
              <div className="card h-100">
                <div className="card-body">
                  <Icon className="icon-svg-sm text-primary" />
                  <span>{Icon.name}</span>
                </div>
                <div className="card-footer position-relative">
                  <a
                    className="stretched-link link-body btn-copy-icon"
                    data-clipboard-text={`<${Icon.name} className="icon-svg-sm text-primary" />`}
                  >
                    Copy
                  </a>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </section>

      {/* ========== section 2 ========== */}
      <section id="snippet-2" className="wrapper pt-16">
        <h2 className="display-5 mb-3">Solid Mono</h2>
        <p className="lead mb-8">
          Below you can find the list of all solid mono SVG icons with their code snippets. All these retina-ready icons
          can easily be styled by color and size. To reach the resource of this set visit{' '}
          <a
            href="https://www.flaticon.com/authors/pixel-perfect/tritone"
            target="_blank"
            className="hover more"
            rel="noreferrer"
          >
            Flaticon
          </a>
        </p>

        <h2 className="mb-5 mt-n15 pt-15 zindex-n">Colors</h2>

        <div className="card mb-12">
          <div className="card-body">
            <div className="row gy-8 text-center">
              {Object.keys(color)
                .sort()
                .map((item) => (
                  <div className="col-6 col-md-4 col-lg-3" key={item}>
                    <div>
                      <PrinterTwo className={`icon-svg-xs solid-mono text-${item} mx-2`} />
                      <RocketTwo className={`icon-svg-xs solid-mono text-${item} mx-2`} />
                    </div>
                    <code className="code text-nowrap mt-4">text-{item}</code>
                  </div>
                ))}
            </div>
          </div>
        </div>

        <h2 className="mb-5 mt-n15 pt-15 zindex-n">Sizes</h2>

        <div className="card mb-12">
          <div className="card-body">
            <div className="row gy-8 text-center d-flex align-items-end">
              {sizes.map((item) => (
                <div className="col-6 col-lg-3" key={item}>
                  <div>
                    <PrinterTwo className={`${item} solid-mono text-blue mx-2`} />
                  </div>
                  <code className="code text-nowrap mt-4">{item}</code>
                </div>
              ))}
            </div>
          </div>
        </div>

        <h2 className="mb-5 mt-n15 pt-15 zindex-n">Icons</h2>

        <ul className="glyphs glyphs-svg row row-cols-2 row-cols-md-4 row-cols-lg-5 gy-6">
          {solidMonoIcons.sort().map((Icon, i) => (
            <li className="col text-center" key={i}>
              <div className="card h-100">
                <div className="card-body">
                  <Icon className="icon-svg-xs text-primary" />
                  <span>{Icon.name}</span>
                </div>
                <div className="card-footer position-relative">
                  <a
                    className="stretched-link link-body btn-copy-icon"
                    data-clipboard-text={`<${Icon.name} className="icon-svg-xs text-primary" />`}
                  >
                    Copy
                  </a>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </section>

      {/* ========== section 3 ========== */}
      <section id="snippet-3" className="wrapper py-16">
        <h2 className="display-5 mb-3">Solid Duo</h2>
        <p className="lead mb-8">
          Below you can find the list of all solid duo SVG icons with their code snippets. All these retina-ready icons
          can easily be styled by color and size. To reach the resource of this set visit{' '}
          <a
            href="https://www.flaticon.com/authors/pixel-perfect/tritone"
            target="_blank"
            className="hover more"
            rel="noreferrer"
          >
            Flaticon
          </a>
        </p>

        <h2 className="mb-5 mt-n15 pt-15 zindex-n">Colors</h2>

        <div className="card mb-12">
          <div className="card-body">
            <div className="row gy-8 text-center">
              {duoColors.sort().map((item) => (
                <div className="col-6 col-md-4 col-lg-3" key={item}>
                  <div>
                    <PrinterTwo className={`icon-svg-xs solid-duo ${item} mx-2`} />
                    <RocketTwo className={`icon-svg-xs solid-duo ${item} mx-2`} />
                  </div>
                  <code className="code text-nowrap mt-4">{item}</code>
                </div>
              ))}
            </div>
          </div>
        </div>

        <h2 className="mb-5 mt-n15 pt-15 zindex-n">Sizes</h2>

        <div className="card mb-12">
          <div className="card-body">
            <div className="row gy-8 text-center d-flex align-items-end">
              {sizes.map((item) => (
                <div className="col-6 col-lg-3" key={item}>
                  <div>
                    <PrinterTwo className={`${item} solid-duo text-navy-sky mx-2`} />
                  </div>
                  <code className="code text-nowrap mt-4">{item}</code>
                </div>
              ))}
            </div>
          </div>
        </div>

        <ul className="glyphs glyphs-svg row row-cols-2 row-cols-md-4 row-cols-lg-5 gy-6">
          {solidDuoIcons.sort().map((Icon, i) => (
            <li className="col text-center" key={i}>
              <div className="card h-100">
                <div className="card-body">
                  <Icon className="icon-svg-xs text-navy-sky" />
                  <span>{Icon.name}</span>
                </div>
                <div className="card-footer position-relative">
                  <a
                    className="stretched-link link-body btn-copy-icon"
                    data-clipboard-text={`<${Icon.name} className="icon-svg-xs text-navy-sky" />`}
                  >
                    Copy
                  </a>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </DocLayout>
  );
};

export default SvgIcons;
