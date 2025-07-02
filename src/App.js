import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import GlobalStyle from "globalStyles";

import Header from "components/Header";
import Footer from "components/Footer";

import Home from "pages/home/Home";
import YearZero from "pages/year-zero/YearZero";
import Bachelor from "pages/bachelor/Bachelor";
import Master from "pages/master/MasterDegree";
import WhoWeArePage from "pages/who-we-are/WhoWeArePage";
import ContactForm from "pages/contact-form/ContactPage";
import MaintenanceLoan from "pages/finance/maintenance-loan/MaintenanceLoan";
import TuitionFeeLoanSection from "pages/finance/maintenance-loan/TuitionFeeLoanSection";
import { TuitionFeeLoanPage } from "pages/finance/maintenance-loan/TuitionFeeLoanPage";
import WhatsAppFloatingButton from "components/shared/WhatsAppFloatingButton";
import PrivacyPolicyPage from "pages/privacy-policy/PrivacyPolicyPage";
import TermsAndConditionPage from "pages/terms-and-conditions/TermsAndConditionPage";
import Cookies from "pages/cookies/Cookies";
// import Master from "./pages/Master";
// import Contact from "./pages/Contact";
// import Courses from "./pages/Courses";
// import Finance from "./pages/Finance";
// import ReferAFriend from "./pages/ReferAFriend";

const App = () => (
  <>
    <Helmet>
      <title>AdmitGo | Educational Consultancy</title>
      <meta
        name="AdmitGo"
        content="Study in the UK with expert guidance from AdmitGo"
      />
    </Helmet>
    <GlobalStyle />
    <Header />
    <Routes>
      <Route path="/" element={<Navigate to="/home" replace />} />
      <Route path="/home" element={<Home />} />
      <Route path="/study/year-zero" element={<YearZero />} />
      <Route path="/study/bachelor" element={<Bachelor />} />
      <Route path="/study/master" element={<Master />} />
      <Route path="/who-we-are" element={<WhoWeArePage />} />
      <Route path="/contact-us" element={<ContactForm />} />
      <Route path="/finance/maintenance-loan" element={<MaintenanceLoan />} />
      <Route
        path="/finance/tuition-fee-loan"
        element={<TuitionFeeLoanPage />}
      />
      <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
      <Route path="/terms-and-conditions" element={<TermsAndConditionPage />} />
      <Route path="/cookies" element={<Cookies />} />

      {/* 
      <Route path="/courses" element={<Courses />} />
      <Route path="/finance" element={<Finance />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/refer-a-friend" element={<ReferAFriend />} /> */}
    </Routes>
    <WhatsAppFloatingButton />
    <Footer />
  </>
);

export default App;
