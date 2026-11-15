export const labCategories = ["All", "Blood", "Diabetes", "Heart", "Liver & Kidney", "Thyroid & Hormones", "Infection", "Urine & Stool", "Vitamins", "Pregnancy", "Imaging", "Cancer screening"];

// [name, category, why, prep, report, whatItShows]
const t = [
  ["CBC (Complete Blood Count)", "Blood", "Finds anaemia, infection, low platelets (dengue) and blood disorders.", "No fasting.", "Same day, 2–4 hours", "Haemoglobin, white cells, platelets"],
  ["ESR / CRP", "Blood", "Shows inflammation in the body.", "No fasting.", "Same day", "Inflammation level"],
  ["Blood group & Rh", "Blood", "Needed before surgery, transfusion and in pregnancy.", "No fasting.", "30 minutes", "A, B, AB or O; Rh positive or negative"],
  ["Peripheral smear / Malaria parasite", "Infection", "Detects malaria and abnormal blood cells.", "Ideally during fever.", "2–4 hours", "Parasites and cell shape"],
  ["Fasting blood sugar", "Diabetes", "Screens and monitors diabetes.", "8–10 hours fasting. Water allowed.", "1 hour", "Sugar level when fasting"],
  ["Random blood sugar", "Diabetes", "Quick sugar check at any time.", "None.", "30 minutes", "Current sugar level"],
  ["HbA1c", "Diabetes", "Shows average sugar over 3 months.", "No fasting.", "Same day", "Long-term control; goal usually below 7% for most adults"],
  ["OGTT (Glucose tolerance)", "Diabetes", "Detects prediabetes and gestational diabetes.", "8–10 hours fasting. Stay for 2 hours.", "Same day", "Sugar before and after glucose drink"],
  ["Lipid profile", "Heart", "Checks cholesterol and heart risk.", "9–12 hours fasting.", "Same day", "LDL, HDL, triglycerides"],
  ["Troponin I", "Heart", "Detects heart muscle damage in a heart attack.", "None. Emergency test.", "1 hour", "Heart injury marker"],
  ["ECG", "Heart", "Records heart rhythm and electrical activity.", "None.", "10 minutes", "Rhythm, blockages signs"],
  ["Echocardiography", "Heart", "Ultrasound of the heart.", "None.", "30 minutes, same day report", "Pumping strength and valves"],
  ["Liver function test (LFT)", "Liver & Kidney", "Checks liver health, jaundice and hepatitis effect.", "Fasting preferred.", "Same day", "ALT, AST, bilirubin, albumin"],
  ["Renal function test (Urea, Creatinine, eGFR)", "Liver & Kidney", "Checks kidney health.", "None.", "Same day", "Kidney filtering ability"],
  ["Serum electrolytes", "Liver & Kidney", "Sodium, potassium, chloride.", "None.", "2 hours", "Salt balance"],
  ["Uric acid", "Liver & Kidney", "Gout and kidney stones.", "Fasting preferred.", "Same day", "Uric acid level"],
  ["Hepatitis B (HBsAg) & C (Anti-HCV)", "Infection", "Screening for liver virus.", "None.", "Same day", "Hepatitis infection"],
  ["Typhidot / Blood culture", "Infection", "Detects typhoid and bloodstream infection.", "Before starting antibiotics if possible.", "Typhidot same day; culture 48–72 hours", "Typhoid, bacteria"],
  ["Dengue NS1 / IgM", "Infection", "Confirms dengue fever.", "None.", "Same day", "Dengue virus"],
  ["HIV screening", "Infection", "Confidential screening.", "None.", "Same day", "HIV antibodies"],
  ["COVID / Influenza PCR", "Infection", "Respiratory virus detection.", "Nasal swab.", "Same day", "Virus presence"],
  ["TSH, T3, T4", "Thyroid & Hormones", "Under- or over-active thyroid.", "No fasting. Take thyroxine after the test.", "Same day", "Thyroid hormones"],
  ["Prolactin, FSH, LH, Testosterone", "Thyroid & Hormones", "Fertility, PCOS and hormone problems.", "Morning sample; women: day 2–3 of cycle for some.", "1 day", "Hormone levels"],
  ["Cortisol", "Thyroid & Hormones", "Adrenal gland function.", "Morning sample.", "1 day", "Stress hormone"],
  ["Urine routine (R/E)", "Urine & Stool", "Detects infection, kidney problem and sugar in urine.", "Mid-stream clean-catch sample.", "1–2 hours", "Pus, protein, blood, sugar"],
  ["Urine culture", "Urine & Stool", "Finds bacteria and the right antibiotic.", "Clean-catch, before antibiotics.", "48 hours", "Bacteria type"],
  ["Stool routine & H. pylori antigen", "Urine & Stool", "Parasites, blood, ulcer-causing bacteria.", "Fresh sample in the clean container provided.", "Same day", "Parasites, hidden blood"],
  ["Vitamin D (25-OH)", "Vitamins", "Bone health and fatigue.", "No fasting.", "1 day", "Deficiency level"],
  ["Vitamin B12 & Ferritin", "Vitamins", "Anaemia, tingling and hair loss.", "Fasting preferred.", "1 day", "B12 and iron stores"],
  ["Pregnancy test (urine / beta-hCG)", "Pregnancy", "Confirms pregnancy.", "First morning urine is best.", "30 minutes", "Pregnant or not"],
  ["Antenatal profile", "Pregnancy", "Routine tests for every pregnancy.", "No fasting.", "Same day", "Blood group, Hb, sugar, hepatitis, urine"],
  ["Obstetric ultrasound", "Imaging", "Baby growth, heartbeat and position.", "Full bladder for early scans.", "30 minutes", "Baby health"],
  ["X-ray (chest, bone, abdomen)", "Imaging", "Fractures, pneumonia, TB signs.", "Remove metal. Tell staff if pregnant.", "30 minutes", "Bones and lungs"],
  ["CT scan", "Imaging", "Detailed body images, injury and tumours.", "Fasting 4–6 hours if contrast. Bring creatinine report.", "Same day", "Organs, bleeding, tumours"],
  ["MRI", "Imaging", "Brain, spine and joints.", "No metal or pacemaker. Takes 20–45 minutes.", "Same day", "Soft tissue detail"],
  ["PSA", "Cancer screening", "Prostate screening for men over 50.", "No cycling or intercourse for 48 hours.", "Same day", "Prostate marker"],
  ["Mammography", "Cancer screening", "Breast cancer screening after 40.", "Not in the week before a period.", "Same day", "Breast lumps"],
  ["Pap smear / HPV test", "Cancer screening", "Cervical cancer screening.", "Not during period.", "3–5 days", "Cervical cell changes"],
  ["Biopsy / Histopathology", "Cancer screening", "Confirms or rules out cancer in a tissue sample.", "As advised by the surgeon.", "3–7 days", "Tissue diagnosis"],
];
export const labTests = t.map(([name, category, why, prep, report, shows], i) => ({ id: i + 1, name, category, why, prep, report, shows }));

export const labPackages = [
  { name: "Basic Health Check", tests: ["CBC", "Sugar", "Urine R/E", "Creatinine", "Cholesterol"], for: "Healthy adults, yearly" },
  { name: "Diabetes Care", tests: ["Fasting sugar", "HbA1c", "Lipid profile", "Urine albumin", "Creatinine"], for: "People with diabetes, every 3 months" },
  { name: "Heart Check", tests: ["Lipid profile", "ECG", "Echo", "Treadmill test", "HbA1c"], for: "Over 40 or family history" },
  { name: "Women's Wellness", tests: ["CBC", "Thyroid", "Vitamin D", "Ferritin", "Mammography or Pap smear"], for: "Women over 30" },
  { name: "Senior Citizen", tests: ["CBC", "Kidney & liver profile", "Sugar", "Lipid", "Vitamin D & B12", "ECG", "Bone density"], for: "Age 60+" },
  { name: "Pre-marital & Pre-pregnancy", tests: ["Blood group", "Hb electrophoresis", "Hepatitis B & C", "HIV", "Rubella"], for: "Couples planning a family" },
];

export const labFaq = [
  { q: "Can I drink water before a fasting test?", a: "Yes. Plain water is fine and helps the nurse find your vein. Avoid tea, coffee, juice and chewing gum." },
  { q: "Should I take my medicines on the test morning?", a: "Usually yes, with water. Exceptions: diabetes tablets or insulin before a fasting sugar (ask your doctor), and thyroxine, which is taken after the thyroid blood draw." },
  { q: "How do I give a urine sample correctly?", a: "Wash hands, clean the area, pass the first few drops into the toilet, then collect the middle portion in the sterile cup. Hand it over within an hour." },
  { q: "Is home sample collection available?", a: "Yes. Book by phone or WhatsApp. A trained phlebotomist visits between 6:30 AM and 10:00 AM, so you can stay fasting." },
  { q: "How do I get my report?", a: "WhatsApp, email or counter pickup. Critical results are phoned to you or your doctor immediately." },
];
