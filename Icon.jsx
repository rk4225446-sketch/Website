import {
  LuArrowRight, LuArrowUpRight, LuMenu, LuX, LuCheck, LuDatabase, LuWorkflow, LuLayers,
  LuUsers, LuCompass, LuFileText, LuShieldCheck, LuSlidersHorizontal, LuSearch, LuPenTool,
  LuRocket, LuGauge, LuFactory, LuShoppingBag, LuLandmark, LuZap, LuPill, LuTruck,
  LuBriefcase, LuCpu, LuTarget, LuHandshake, LuSparkles, LuMail, LuMapPin, LuChartLine,
  LuEye, LuFlag, LuCircleAlert, LuCircleCheck, LuLoaderCircle, LuChevronDown, LuCopy,
} from 'react-icons/lu';

const map = {
  arrow: LuArrowRight, external: LuArrowUpRight, menu: LuMenu, close: LuX, check: LuCheck,
  database: LuDatabase, workflow: LuWorkflow, layers: LuLayers, users: LuUsers,
  compass: LuCompass, file: LuFileText, shield: LuShieldCheck, flex: LuSlidersHorizontal,
  search: LuSearch, pen: LuPenTool, rocket: LuRocket, gauge: LuGauge, factory: LuFactory,
  retail: LuShoppingBag, bank: LuLandmark, energy: LuZap, pharma: LuPill, truck: LuTruck,
  briefcase: LuBriefcase, cpu: LuCpu, target: LuTarget, handshake: LuHandshake,
  spark: LuSparkles, mail: LuMail, pin: LuMapPin, finance: LuChartLine, eye: LuEye,
  flag: LuFlag, alert: LuCircleAlert, success: LuCircleCheck, loader: LuLoaderCircle,
  chevron: LuChevronDown, copy: LuCopy,
};

export default function Icon({ name, className = 'size-5', ...rest }) {
  const Cmp = map[name] || LuSparkles;
  return <Cmp className={className} aria-hidden="true" focusable="false" {...rest} />;
}
