import departments from "./departments.js";

// [department slug, name, gender, qualification, years, fee (PKR), designation]
const rows = [
  ["cardiology", "Dr. Ayesha Rahman", "f", "MBBS, FCPS (Cardiology)", 14, 3000, "Consultant Cardiologist"],
  ["cardiology", "Prof. Dr. Imran Qureshi", "m", "MBBS, FRCP, FACC", 24, 5000, "Professor & Head of Cardiology"],
  ["cardiology", "Dr. Hassan Raza", "m", "MBBS, MD, Interventional Cardiology", 11, 3500, "Interventional Cardiologist"],
  ["neurology", "Dr. Muhammad Ali", "m", "MBBS, FCPS, MRCP", 15, 3500, "Consultant Neurologist"],
  ["neurology", "Dr. Maryam Siddiqui", "f", "MBBS, FCPS (Neurology)", 9, 3000, "Epilepsy & Headache Specialist"],
  ["general-medicine", "Dr. Faisal Mehmood", "m", "MBBS, FCPS (Medicine)", 13, 2000, "Consultant Physician"],
  ["general-medicine", "Dr. Nadia Anwar", "f", "MBBS, MRCP", 10, 2000, "Consultant Physician"],
  ["general-medicine", "Dr. Usman Tariq", "m", "MBBS, FCPS", 7, 1500, "Senior Registrar"],
  ["pulmonology", "Dr. Saima Javed", "f", "MBBS, FCPS (Pulmonology)", 12, 3000, "Consultant Pulmonologist"],
  ["pulmonology", "Dr. Kamran Butt", "m", "MBBS, MRCP, Dip. Sleep Medicine", 10, 3000, "Sleep & Chest Specialist"],
  ["gastroenterology", "Dr. Bilal Hussain", "m", "MBBS, FCPS (Gastro)", 12, 3500, "Consultant Gastroenterologist"],
  ["gastroenterology", "Dr. Hina Farooq", "f", "MBBS, FCPS, Hepatology Fellow", 9, 3500, "Liver Specialist"],
  ["nephrology", "Dr. Tahir Mahmood", "m", "MBBS, FCPS (Nephrology)", 16, 3500, "Consultant Nephrologist"],
  ["nephrology", "Dr. Sana Iqbal", "f", "MBBS, MRCP (Nephrology)", 8, 3000, "Dialysis Unit Incharge"],
  ["endocrinology", "Dr. Rabia Aslam", "f", "MBBS, FCPS (Endocrinology)", 11, 3000, "Diabetes & Thyroid Specialist"],
  ["endocrinology", "Dr. Zeeshan Ahmad", "m", "MBBS, MRCP, Dip. Diabetes", 9, 2500, "Consultant Endocrinologist"],
  ["rheumatology", "Dr. Amna Khalid", "f", "MBBS, FCPS (Rheumatology)", 10, 3000, "Consultant Rheumatologist"],
  ["infectious-disease", "Dr. Waqas Ahmed", "m", "MBBS, FCPS (Infectious Disease)", 12, 3000, "Infection Control Lead"],
  ["dermatology", "Dr. Fatima Noor", "f", "MBBS, FCPS (Dermatology)", 10, 2500, "Consultant Dermatologist"],
  ["dermatology", "Dr. Arslan Shah", "m", "MBBS, MCPS, Laser Fellowship", 8, 2500, "Laser & Cosmetic Dermatology"],
  ["psychiatry", "Dr. Sadia Hameed", "f", "MBBS, FCPS (Psychiatry)", 13, 3000, "Consultant Psychiatrist"],
  ["psychiatry", "Dr. Omer Farooq", "m", "MBBS, MRCPsych", 9, 3000, "Addiction Medicine Specialist"],
  ["oncology", "Prof. Dr. Shahid Malik", "m", "MBBS, FRCP, Medical Oncology", 22, 5000, "Professor of Oncology"],
  ["oncology", "Dr. Asma Rehman", "f", "MBBS, FCPS (Oncology)", 11, 4000, "Breast Cancer Specialist"],
  ["haematology", "Dr. Naveed Akhtar", "m", "MBBS, FCPS (Haematology)", 12, 3000, "Consultant Haematologist"],

  ["general-surgery", "Dr. Adeel Hassan", "m", "MBBS, FCPS (Surgery)", 15, 3000, "Consultant General Surgeon"],
  ["general-surgery", "Dr. Sobia Nazir", "f", "MBBS, FRCS", 10, 3000, "Laparoscopic Surgeon"],
  ["orthopedics", "Prof. Dr. Rizwan Haider", "m", "MBBS, FCPS (Ortho), Fellowship Arthroplasty", 20, 4500, "Joint Replacement Surgeon"],
  ["orthopedics", "Dr. Junaid Iqbal", "m", "MBBS, FCPS (Ortho)", 11, 3000, "Sports Injury Surgeon"],
  ["orthopedics", "Dr. Mehwish Tariq", "f", "MBBS, MS (Ortho)", 8, 2500, "Trauma & Fracture Surgeon"],
  ["neurosurgery", "Prof. Dr. Khalid Pervaiz", "m", "MBBS, FCPS (Neurosurgery)", 21, 5000, "Head of Neurosurgery"],
  ["neurosurgery", "Dr. Iqra Latif", "f", "MBBS, FRCS (Neurosurgery)", 9, 4000, "Spine Surgeon"],
  ["cardiac-surgery", "Prof. Dr. Aamir Sohail", "m", "MBBS, FRCS (CTh)", 23, 6000, "Head of Cardiac Surgery"],
  ["urology", "Dr. Salman Yousaf", "m", "MBBS, FCPS (Urology)", 13, 3500, "Consultant Urologist"],
  ["urology", "Dr. Farah Naz", "f", "MBBS, FCPS (Urology)", 8, 3000, "Female & Pediatric Urology"],
  ["ent", "Dr. Zubair Ahmed", "m", "MBBS, FCPS (ENT)", 12, 2500, "ENT & Head-Neck Surgeon"],
  ["ent", "Dr. Lubna Saeed", "f", "MBBS, DLO, FCPS", 10, 2500, "Hearing & Ear Specialist"],
  ["ophthalmology", "Dr. Mubashir Ali", "m", "MBBS, FCPS (Ophthalmology)", 14, 2500, "Cataract & Retina Surgeon"],
  ["ophthalmology", "Dr. Shazia Kamal", "f", "MBBS, FRCS (Ophth)", 11, 2500, "Glaucoma Specialist"],
  ["dental", "Dr. Hamza Rauf", "m", "BDS, FCPS (Oral Surgery)", 9, 2000, "Oral & Maxillofacial Surgeon"],
  ["dental", "Dr. Ayesha Tahir", "f", "BDS, MDS (Orthodontics)", 8, 2000, "Orthodontist"],
  ["plastic-surgery", "Dr. Kashif Nawaz", "m", "MBBS, FCPS (Plastic Surgery)", 14, 4000, "Burn & Reconstructive Surgeon"],
  ["vascular-surgery", "Dr. Nabeel Anjum", "m", "MBBS, FCPS (Vascular)", 11, 3500, "Vascular Surgeon"],

  ["gynecology", "Dr. Sara Ahmed", "f", "MBBS, MCPS, FCPS (Gynae)", 15, 3000, "Consultant Gynaecologist"],
  ["gynecology", "Prof. Dr. Shagufta Bano", "f", "MBBS, FRCOG", 25, 5000, "Professor & Fertility Specialist"],
  ["gynecology", "Dr. Rukhsana Malik", "f", "MBBS, FCPS (Gynae)", 12, 3000, "High-Risk Pregnancy Specialist"],
  ["pediatrics", "Dr. Sana Javed", "f", "MBBS, FCPS (Pediatrics)", 12, 2000, "Consultant Pediatrician"],
  ["pediatrics", "Dr. Ahmad Nadeem", "m", "MBBS, MRCPCH", 10, 2000, "Child Asthma & Allergy"],
  ["pediatrics", "Dr. Komal Riaz", "f", "MBBS, DCH, FCPS", 8, 1800, "Pediatrician"],
  ["neonatology", "Dr. Tayyaba Shafiq", "f", "MBBS, FCPS (Neonatology)", 13, 3000, "Head of NICU"],
  ["pediatric-surgery", "Dr. Fahad Mansoor", "m", "MBBS, FCPS (Pediatric Surgery)", 12, 3500, "Pediatric Surgeon"],

  ["radiology", "Dr. Nida Hashmi", "f", "MBBS, FCPS (Radiology)", 11, 0, "Consultant Radiologist"],
  ["radiology", "Dr. Asad Mehmood", "m", "MBBS, FRCR", 14, 0, "MRI & CT Specialist"],
  ["pathology", "Dr. Uzma Shahid", "f", "MBBS, FCPS (Chemical Pathology)", 13, 0, "Head of Laboratory"],
  ["pathology", "Dr. Rehan Aftab", "m", "MBBS, FCPS (Histopathology)", 10, 0, "Histopathologist"],
  ["nuclear-medicine", "Dr. Irfan Baig", "m", "MBBS, FCPS (Nuclear Medicine)", 12, 0, "Nuclear Physician"],

  ["emergency", "Dr. Talha Mirza", "m", "MBBS, FCPS (Emergency Medicine)", 12, 0, "Head of Emergency"],
  ["emergency", "Dr. Hira Batool", "f", "MBBS, MRCEM", 8, 0, "Trauma Team Lead"],
  ["icu", "Dr. Rashid Mehmood", "m", "MBBS, FCPS (Critical Care)", 15, 0, "Head of ICU"],
  ["icu", "Dr. Amber Zahid", "f", "MBBS, FFICM", 9, 0, "Intensivist"],
  ["anaesthesia", "Dr. Shoaib Akram", "m", "MBBS, FCPS (Anaesthesia)", 14, 0, "Head of Anaesthesia"],
  ["anaesthesia", "Dr. Naila Kausar", "f", "MBBS, FCPS (Pain Medicine)", 10, 2500, "Pain Clinic Specialist"],

  ["physiotherapy", "Dr. Saad Ullah", "m", "DPT, MS-PT", 9, 1500, "Senior Physiotherapist"],
  ["nutrition", "Ms. Mahnoor Zafar", "f", "BSc, MSc Dietetics", 7, 1500, "Chief Dietitian"],
  ["palliative-care", "Dr. Rubina Aziz", "f", "MBBS, Dip. Palliative Medicine", 12, 2000, "Palliative Care Physician"],
  ["health-checkup", "Dr. Danish Qayyum", "m", "MBBS, FCPS (Medicine)", 10, 1500, "Preventive Medicine Lead"],
];

const days = [
  ["Mon", "Wed", "Fri"], ["Tue", "Thu", "Sat"], ["Mon", "Tue", "Thu", "Sat"],
  ["Mon", "Tue", "Wed", "Thu", "Fri"], ["Wed", "Thu", "Fri", "Sat"],
];
const slotsSets = [
  ["09:00 AM", "09:30 AM", "10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM"],
  ["04:00 PM", "04:30 PM", "05:00 PM", "05:30 PM", "06:00 PM", "06:30 PM"],
  ["10:00 AM", "10:30 AM", "11:00 AM", "05:00 PM", "05:30 PM", "06:00 PM"],
];
const langs = ["Urdu, English", "Urdu, English, Punjabi", "Urdu, Punjabi", "Urdu, English, Pashto"];

const doctors = rows.map(([dept, name, g, qualification, years, fee, designation], i) => {
  const department = departments.find((x) => x.slug === dept);
  return {
    id: i + 1,
    slug: dept,
    name,
    gender: g,
    department: department.name,
    departmentSlug: dept,
    designation,
    qualification,
    experience: years,
    fee,
    days: days[i % days.length],
    slots: slotsSets[i % slotsSets.length],
    languages: langs[i % langs.length],
    rating: (4.5 + ((i * 7) % 5) / 10).toFixed(1),
    about: `${name} is ${designation.toLowerCase().startsWith("a") ? "an" : "a"} ${designation} in the ${department.name} department with ${years} years of experience. ${department.about}`,
    focus: department.procedures.slice(0, 4),
  };
});

export default doctors;
export const getDoctor = (id) => doctors.find((x) => x.id === Number(id));
export const doctorsByDepartment = (slug) => doctors.filter((x) => x.departmentSlug === slug);
