import { generateIcon, Icon } from "settings/generate-icon";
import TuitionFeeLoanSection from "./TuitionFeeLoanSection";

export const TuitionFeeLoanPage = () => {
  const lang = localStorage.getItem("lang") || "en";
  return (
    // English version
    <div>
      <Icon src={generateIcon("w9")} />
      <TuitionFeeLoanSection language={lang} />
    </div>
  );
};
