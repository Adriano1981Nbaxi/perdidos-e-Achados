import { HomeIcon, SearchIcon, PlusCircleIcon } from "lucide-react";
import Index from "./pages/Index.jsx";
import ReportLost from "./pages/ReportLost.jsx";
import ReportFound from "./pages/ReportFound.jsx";

export const navItems = [
  {
    title: "Home",
    to: "/",
    icon: <HomeIcon className="h-4 w-4" />,
    page: <Index />,
  },
  {
    title: "Report Lost",
    to: "/report-lost",
    icon: <SearchIcon className="h-4 w-4" />,
    page: <ReportLost />,
  },
  {
    title: "Report Found",
    to: "/report-found",
    icon: <PlusCircleIcon className="h-4 w-4" />,
    page: <ReportFound />,
  },
];
