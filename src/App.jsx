import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Departments from "./pages/Departments";
import DepartmentDetail from "./pages/DepartmentDetail";
import Doctors from "./pages/Doctors";
import DoctorDetail from "./pages/DoctorDetail";
import Appointment from "./pages/Appointment";
import Emergency from "./pages/Emergency";
import Facilities from "./pages/Facilities";
import Pharmacy from "./pages/Pharmacy";
import Laboratory from "./pages/Laboratory";
import BloodBank from "./pages/BloodBank";
import ICU from "./pages/ICU";
import OperationTheatre from "./pages/OperationTheatre";
import HospitalGuide from "./pages/HospitalGuide";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="departments" element={<Departments />} />
        <Route path="departments/:slug" element={<DepartmentDetail />} />
        <Route path="doctors" element={<Doctors />} />
        <Route path="doctors/:id" element={<DoctorDetail />} />
        <Route path="appointment" element={<Appointment />} />
        <Route path="emergency" element={<Emergency />} />
        <Route path="facilities" element={<Facilities />} />
        <Route path="facilities/pharmacy" element={<Pharmacy />} />
        <Route path="facilities/laboratory" element={<Laboratory />} />
        <Route path="facilities/blood-bank" element={<BloodBank />} />
        <Route path="facilities/icu" element={<ICU />} />
        <Route path="facilities/operation-theatre" element={<OperationTheatre />} />
        <Route path="facilities/hospital" element={<HospitalGuide />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
