import Three from "../../assets/chart/3";
import Four from "../../assets/chart/4";
import Five from "../../assets/chart/5";
import Six from "../../assets/chart/6";
import Seven from "../../assets/chart/7";
import Eight from "../../assets/chart/8";
import Nine from "../../assets/chart/9";
import Ten from "../../assets/chart/10";
import Eleven from "../../assets/chart/11";
import Twelve from "../../assets/chart/12";
import Thirteen from "../../assets/chart/13";
import Fourteen from "../../assets/chart/14";
import Fifteen from "../../assets/chart/15";
import Sixteen from "../../assets/chart/16";
import Seventeen from "../../assets/chart/17";
import Eighteen from "../../assets/chart/18";
import Nineteen from "../../assets/chart/19";
import Twenty from "../../assets/chart/20";
import TwentyOne from "../../assets/chart/21";
import TwentyTwo from "../../assets/chart/22";
import TwentyThree from "../../assets/chart/23";
import TwentyFour from "../../assets/chart/24";
import TwentyFive from "../../assets/chart/25";
import TwentySix from "../../assets/chart/26";
import TwentySeven from "../../assets/chart/27";
import TwentyEight from "../../assets/chart/28";
import TwentyNine from "../../assets/chart/29";
import Thirty from "../../assets/chart/30";
import ThirtyOne from "../../assets/chart/31";
import ThirtyTwo from "../../assets/chart/32";
import ThirtyThree from "../../assets/chart/33";
import ThirtyFour from "../../assets/chart/34";
import ThirtyFive from "../../assets/chart/35";
import ThirtySix from "../../assets/chart/36";
import ThirtySeven from "../../assets/chart/37";
import ThirtyEight from "../../assets/chart/38";
import ThirtyNine from "../../assets/chart/39";
import Forty from "../../assets/chart/40";
import FortyOne from "../../assets/chart/41";
import FortyTwo from "../../assets/chart/42";
import FortyThree from "../../assets/chart/43";
import FortyFour from "../../assets/chart/44";
import FortyFive from "../../assets/chart/45";
import FortySix from "../../assets/chart/46";
import FortySeven from "../../assets/chart/47";
import FortyEight from "../../assets/chart/48";
import FortyNine from "../../assets/chart/49";
import Fifty from "../../assets/chart/50";
import FiftyOne from "../../assets/chart/51";
import FiftyTwo from "../../assets/chart/52";
import FiftyThree from "../../assets/chart/53";
import FiftyFour from "../../assets/chart/54";
import FiftyFive from "../../assets/chart/55";
import FiftySix from "../../assets/chart/56";
import FiftySeven from "../../assets/chart/57";
import FiftyEight from "../../assets/chart/58";
import FiftyNine from "../../assets/chart/59";
import Sixty from "../../assets/chart/60";
import SixtyOne from "../../assets/chart/61";
import SixtyTwo from "../../assets/chart/62";
import SixtyThree from "../../assets/chart/63";
import SixtyFour from "../../assets/chart/64";
import SixtyFive from "../../assets/chart/65";
import SixtySix from "../../assets/chart/66";
import SixtySeven from "../../assets/chart/67";
import SixtyEight from "../../assets/chart/68";
import SixtyNine from "../../assets/chart/69";
import Seventy from "../../assets/chart/70";
import SeventyOne from "../../assets/chart/71";
import SeventyTwo from "../../assets/chart/72";
import SeventyThree from "../../assets/chart/73";
import SeventyFour from "../../assets/chart/74";
import SeventyFive from "../../assets/chart/75";
import SeventySix from "../../assets/chart/76";
import SeventySeven from "../../assets/chart/77";
import SeventyEight from "../../assets/chart/78";
import SeventyNine from "../../assets/chart/79";
import Eighty from "../../assets/chart/80";
import EightyOne from "../../assets/chart/81";
import EightyTwo from "../../assets/chart/82";
import EightyThree from "../../assets/chart/83";
import EightyFour from "../../assets/chart/84";
import EightyFive from "../../assets/chart/85";
import EightySix from "../../assets/chart/86";
import EightySeven from "../../assets/chart/87";
import EightyEight from "../../assets/chart/88";
import EightyNine from "../../assets/chart/89";
import Ninety from "../../assets/chart/90";
import NinetyOne from "../../assets/chart/91";
import NinetyTwo from "../../assets/chart/92";
import NinetyThree from "../../assets/chart/93";
import NinetyFour from "../../assets/chart/94";
import NinetyFive from "../../assets/chart/95";
import NinetySix from "../../assets/chart/96";
import NinetySeven from "../../assets/chart/97";

const CircleChart = ({ greenWinChance }) => {
  const chance = greenWinChance + 100;
  if (chance === 3) {
    return <Three />;
  } else if (chance === 4) {
    return <Four />;
  } else if (chance === 5) {
    return <Five />;
  } else if (chance === 6) {
    return <Six />;
  } else if (chance === 7) {
    return <Seven />;
  } else if (chance === 8) {
    return <Eight />;
  } else if (chance === 9) {
    return <Nine />;
  } else if (chance === 10) {
    return <Ten />;
  } else if (chance === 11) {
    return <Eleven />;
  } else if (chance === 12) {
    return <Twelve />;
  } else if (chance === 13) {
    return <Thirteen />;
  } else if (chance === 14) {
    return <Fourteen />;
  } else if (chance === 15) {
    return <Fifteen />;
  } else if (chance === 16) {
    return <Sixteen />;
  } else if (chance === 17) {
    return <Seventeen />;
  } else if (chance === 18) {
    return <Eighteen />;
  } else if (chance === 19) {
    return <Nineteen />;
  } else if (chance === 20) {
    return <Twenty />;
  } else if (chance === 21) {
    return <TwentyOne />;
  } else if (chance === 22) {
    return <TwentyTwo />;
  } else if (chance === 23) {
    return <TwentyThree />;
  } else if (chance === 24) {
    return <TwentyFour />;
  } else if (chance === 25) {
    return <TwentyFive />;
  } else if (chance === 26) {
    return <TwentySix />;
  } else if (chance === 27) {
    return <TwentySeven />;
  } else if (chance === 28) {
    return <TwentyEight />;
  } else if (chance === 29) {
    return <TwentyNine />;
  } else if (chance === 30) {
    return <Thirty />;
  } else if (chance === 31) {
    return <ThirtyOne />;
  } else if (chance === 32) {
    return <ThirtyTwo />;
  } else if (chance === 33) {
    return <ThirtyThree />;
  } else if (chance === 34) {
    return <ThirtyFour />;
  } else if (chance === 35) {
    return <ThirtyFive />;
  } else if (chance === 36) {
    return <ThirtySix />;
  } else if (chance === 37) {
    return <ThirtySeven />;
  } else if (chance === 38) {
    return <ThirtyEight />;
  } else if (chance === 39) {
    return <ThirtyNine />;
  } else if (chance === 40) {
    return <Forty />;
  } else if (chance === 41) {
    return <FortyOne />;
  } else if (chance === 42) {
    return <FortyTwo />;
  } else if (chance === 43) {
    return <FortyThree />;
  } else if (chance === 44) {
    return <FortyFour />;
  } else if (chance === 45) {
    return <FortyFive />;
  } else if (chance === 46) {
    return <FortySix />;
  } else if (chance === 47) {
    return <FortySeven />;
  } else if (chance === 48) {
    return <FortyEight />;
  } else if (chance === 49) {
    return <FortyNine />;
  } else if (chance === 50) {
    return <Fifty />;
  } else if (chance === 51) {
    return <FiftyOne />;
  } else if (chance === 52) {
    return <FiftyTwo />;
  } else if (chance === 53) {
    return <FiftyThree />;
  } else if (chance === 54) {
    return <FiftyFour />;
  } else if (chance === 55) {
    return <FiftyFive />;
  } else if (chance === 56) {
    return <FiftySix />;
  } else if (chance === 57) {
    return <FiftySeven />;
  } else if (chance === 58) {
    return <FiftyEight />;
  } else if (chance === 59) {
    return <FiftyNine />;
  } else if (chance === 60) {
    return <Sixty />;
  } else if (chance === 61) {
    return <SixtyOne />;
  } else if (chance === 62) {
    return <SixtyTwo />;
  } else if (chance === 63) {
    return <SixtyThree />;
  } else if (chance === 64) {
    return <SixtyFour />;
  } else if (chance === 65) {
    return <SixtyFive />;
  } else if (chance === 66) {
    return <SixtySix />;
  } else if (chance === 67) {
    return <SixtySeven />;
  } else if (chance === 68) {
    return <SixtyEight />;
  } else if (chance === 69) {
    return <SixtyNine />;
  } else if (chance === 70) {
    return <Seventy />;
  } else if (chance === 71) {
    return <SeventyOne />;
  } else if (chance === 72) {
    return <SeventyTwo />;
  } else if (chance === 73) {
    return <SeventyThree />;
  } else if (chance === 74) {
    return <SeventyFour />;
  } else if (chance === 75) {
    return <SeventyFive />;
  } else if (chance === 76) {
    return <SeventySix />;
  } else if (chance === 77) {
    return <SeventySeven />;
  } else if (chance === 78) {
    return <SeventyEight />;
  } else if (chance === 79) {
    return <SeventyNine />;
  } else if (chance === 80) {
    return <Eighty />;
  } else if (chance === 81) {
    return <EightyOne />;
  } else if (chance === 82) {
    return <EightyTwo />;
  } else if (chance === 83) {
    return <EightyThree />;
  } else if (chance === 84) {
    return <EightyFour />;
  } else if (chance === 85) {
    return <EightyFive />;
  } else if (chance === 86) {
    return <EightySix />;
  } else if (chance === 87) {
    return <EightySeven />;
  } else if (chance === 88) {
    return <EightyEight />;
  } else if (chance === 89) {
    return <EightyNine />;
  } else if (chance === 90) {
    return <Ninety />;
  } else if (chance === 91) {
    return <NinetyOne />;
  } else if (chance === 92) {
    return <NinetyTwo />;
  } else if (chance === 93) {
    return <NinetyThree />;
  } else if (chance === 94) {
    return <NinetyFour />;
  } else if (chance === 95) {
    return <NinetyFive />;
  } else if (chance === 96) {
    return <NinetySix />;
  } else if (chance === 97) {
    return <NinetySeven />;
  } else {
    return null;
  }
};

export default CircleChart;
