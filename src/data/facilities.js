export const bloodGroups = [
  { group: "O−", canGiveTo: ["Everyone"], canReceiveFrom: ["O−"], note: "Universal red-cell donor. Used first in emergencies." },
  { group: "O+", canGiveTo: ["O+", "A+", "B+", "AB+"], canReceiveFrom: ["O+", "O−"], note: "Most common group." },
  { group: "A−", canGiveTo: ["A−", "A+", "AB−", "AB+"], canReceiveFrom: ["A−", "O−"], note: "" },
  { group: "A+", canGiveTo: ["A+", "AB+"], canReceiveFrom: ["A+", "A−", "O+", "O−"], note: "" },
  { group: "B−", canGiveTo: ["B−", "B+", "AB−", "AB+"], canReceiveFrom: ["B−", "O−"], note: "" },
  { group: "B+", canGiveTo: ["B+", "AB+"], canReceiveFrom: ["B+", "B−", "O+", "O−"], note: "" },
  { group: "AB−", canGiveTo: ["AB−", "AB+"], canReceiveFrom: ["AB−", "A−", "B−", "O−"], note: "" },
  { group: "AB+", canGiveTo: ["AB+"], canReceiveFrom: ["Everyone"], note: "Universal recipient for red cells. Universal plasma donor." },
];

export const bloodComponents = [
  { name: "Whole blood", life: "35 days (2–6 °C)", use: "Major bleeding, surgery, accidents" },
  { name: "Packed red cells", life: "42 days (2–6 °C)", use: "Anaemia, thalassaemia, surgery" },
  { name: "Platelets", life: "5 days (20–24 °C, gently agitated)", use: "Dengue with very low platelets, chemotherapy, bleeding" },
  { name: "Fresh frozen plasma", life: "1 year (−30 °C)", use: "Clotting problems, liver disease, burns" },
  { name: "Cryoprecipitate", life: "1 year (−30 °C)", use: "Haemophilia A, low fibrinogen" },
];

export const donorRules = {
  can: ["Age 18–60 years", "Weight at least 50 kg", "Haemoglobin 12.5 g/dL or more", "Pulse 50–100 and BP 100–180 / 60–100", "Feeling well on the day"],
  wait: ["Fever, cold or infection: wait until fully recovered", "Tooth extraction: 1 week", "Tattoo or piercing: 6 months", "Malaria: 3 months after full recovery", "Pregnancy: until 6 months after delivery", "Last donation: men 3 months, women 4 months"],
  cannot: ["HIV, hepatitis B or C", "Heart disease or epilepsy", "Cancer", "Insulin-dependent diabetes", "Injecting drug use"],
};

export const donationSteps = [
  { t: "Register and screening", d: "Short form, ID check and a private health questionnaire." },
  { t: "Quick check-up", d: "Pulse, BP, temperature, weight and a finger-prick haemoglobin test." },
  { t: "Donation (8–10 minutes)", d: "Sterile single-use kit. You give about 350–450 ml." },
  { t: "Rest and refreshment", d: "15 minutes rest with juice and snacks. Your body replaces the volume in 24–48 hours." },
  { t: "Testing and storage", d: "Every unit is tested for HIV, hepatitis B and C, syphilis and malaria and cross-matched before use." },
];

export const bloodFaq = [
  { q: "Is donating blood safe?", a: "Yes. Equipment is sterile, single-use and cannot give you any infection. Healthy donors do not become weak." },
  { q: "What should I eat before donating?", a: "A normal meal and extra fluids. Avoid fatty food in the 3 hours before. Do not come fasting." },
  { q: "How do I arrange blood for a patient?", a: "Bring the doctor's blood request form and a replacement donor if possible. For emergencies, blood is released immediately and replaced later." },
  { q: "Can I donate platelets?", a: "Yes. Apheresis takes about 90 minutes and can be repeated every 2 weeks. It helps dengue and cancer patients." },
  { q: "Thalassaemia patients", a: "Regular transfusion patients can register with our Thalassaemia Day-care for scheduled, pre-matched units." },
];

export const icuUnits = [
  { name: "Medical ICU", beds: 12, text: "Pneumonia, sepsis, diabetic emergencies, poisoning." },
  { name: "Surgical ICU", beds: 10, text: "Recovery after major surgery." },
  { name: "Cardiac Care Unit (CCU)", beds: 10, text: "Heart attack, arrhythmia and heart failure." },
  { name: "Neuro ICU", beds: 8, text: "Stroke, head injury, brain surgery recovery." },
  { name: "NICU", beds: 14, text: "Premature and sick newborns." },
  { name: "PICU", beds: 8, text: "Critically ill children." },
  { name: "Burn Unit", beds: 6, text: "Isolated, sterile burn care." },
  { name: "Isolation ICU", beds: 4, text: "Negative-pressure rooms for airborne infections." },
];

export const icuMachines = [
  { name: "Ventilator", what: "A machine that breathes for or with the patient through a tube. Used when lungs cannot work alone.", worry: "The tube is not painful because patients are sedated. Most patients come off in days." },
  { name: "Cardiac monitor", what: "Continuously shows heart rhythm, BP, oxygen and breathing on the bedside screen.", worry: "Alarms beep for small changes, loose wires or movement. A beep is not always an emergency." },
  { name: "Infusion pumps", what: "Deliver medicine and fluids at an exact speed.", worry: "Never touch or silence the pump. Call the nurse." },
  { name: "Dialysis machine", what: "Cleans the blood when kidneys fail.", worry: "Often temporary in acute illness." },
  { name: "Defibrillator", what: "Gives a controlled shock to reset a dangerous heart rhythm.", worry: "It is kept at every bed for safety." },
  { name: "ECMO", what: "A heart-lung machine for the sickest patients.", worry: "A specialist team runs it day and night." },
];

export const icuVisiting = {
  hours: ["12:00 PM – 12:20 PM", "6:00 PM – 6:20 PM"],
  rules: ["Two visitors at a time, no children under 12", "Sanitise hands, wear gown and mask", "Phones on silent. No photos or video", "No flowers, food or outside medicines", "Family briefing by the doctor at 11:00 AM and 6:00 PM", "A family waiting lounge with prayer room is on the ground floor"],
  families: ["Ask the doctor three things: What is the main problem? What is today's plan? What are we waiting for?", "Appoint one family member to talk to the team and update everyone else", "Take care of yourself. Eat, rest and go home to sleep. Patients need you well."],
};

export const otTypes = [
  { name: "General & laparoscopic", examples: "Hernia, gallbladder, appendix" },
  { name: "Orthopedic & trauma", examples: "Fracture fixation, knee & hip replacement" },
  { name: "Cardiac", examples: "Bypass, valve surgery (dedicated theatre)" },
  { name: "Neurosurgery", examples: "Brain tumour, spine, head injury" },
  { name: "Gynae & obstetric", examples: "C-section, hysterectomy" },
  { name: "ENT & eye", examples: "Cataract, sinus, tonsils" },
  { name: "Urology", examples: "Stones, prostate" },
  { name: "Plastic & burns", examples: "Grafts, reconstruction" },
  { name: "Pediatric", examples: "Child-friendly, play therapy before surgery" },
  { name: "Emergency OT", examples: "Open 24/7 for life-saving surgery" },
];

export const surgeryJourney = [
  { t: "Consultation & decision", d: "Your surgeon explains the diagnosis, options, benefits and risks. Ask about non-surgical options. A second opinion is welcome." },
  { t: "Pre-operative checks", d: "Blood tests, ECG, chest X-ray and an anaesthetist visit. Tell the team about all medicines, allergies and previous surgeries." },
  { t: "Admission and fasting", d: "Do not eat for 6 hours and drink no water for 2 hours, unless told otherwise. Stop certain medicines only if advised (blood thinners, diabetes tablets)." },
  { t: "WHO surgical safety checklist", d: "Before the first cut, the team confirms your name, procedure, site, allergies and blood availability out loud." },
  { t: "The operation", d: "The anaesthetist monitors you the whole time. The surgeon updates your family when it ends." },
  { t: "Recovery room", d: "1–2 hours observation, pain control and oxygen. Then ward or ICU." },
  { t: "Going home", d: "Written discharge plan with wound care, medicines, warning signs and follow-up date. Physiotherapy is arranged if needed." },
];

export const otSafety = [
  "Laminar-flow, HEPA-filtered air in every theatre",
  "Surgical instruments sterilised in CSSD with tracked batches",
  "Surgical count of swabs and instruments before closing",
  "Antibiotic given within 60 minutes before the incision",
  "Warm-patient policy to prevent infection and shivering",
  "Two-person identity and site check, including marking for left/right",
];

export const anaesthesiaTypes = [
  { t: "General", d: "You are fully asleep. For major and long operations." },
  { t: "Spinal / Epidural", d: "Numbs the lower body. You stay awake or lightly sedated. Used for C-section, knee and hip surgery." },
  { t: "Nerve block", d: "Numbs one limb. Good pain relief afterwards." },
  { t: "Local with sedation", d: "Numb area plus relaxation. Minor procedures, cataract." },
];

export const emergencyGuides = [
  { title: "Heart attack", icon: "🫀", signs: "Chest pressure or pain, pain in arm, jaw or back, sweating, breathlessness, nausea", doThis: ["Call 1122 immediately", "Sit the person down and keep them calm", "Chew one 300 mg aspirin unless allergic", "Loosen tight clothes", "If they collapse and stop breathing: start CPR"], dont: ["Do not let them walk or drive", "Do not give food or drink"] },
  { title: "Stroke (FAST)", icon: "🧠", signs: "Face drooping, Arm weakness, Speech slurred, Time to call", doThis: ["Call 1122 immediately", "Note the exact time symptoms started", "Lay them down with head slightly raised", "Do not give medicines"], dont: ["Do not give food or water", "Do not wait to see if it passes"] },
  { title: "Severe bleeding", icon: "🩸", signs: "Blood that spurts or soaks through cloth", doThis: ["Press firmly with a clean cloth for 10 minutes without lifting", "Raise the injured limb", "Add more cloth on top if soaked, do not remove the first", "Call 1122"], dont: ["Do not remove embedded objects", "Do not apply powders or turmeric"] },
  { title: "Choking", icon: "😮‍💨", signs: "Cannot speak, cough or breathe", doThis: ["Adult: 5 back blows then 5 abdominal thrusts (Heimlich)", "Baby: 5 back blows and 5 chest thrusts, head lower than body", "Call 1122 if not cleared"], dont: ["Do not put fingers in the mouth blindly"] },
  { title: "Burns", icon: "🔥", signs: "Redness, blisters, charred skin", doThis: ["Cool under clean running water for 20 minutes", "Remove rings and watches before swelling", "Cover loosely with clean non-stick cloth", "Large or facial burns: come to Emergency"], dont: ["No ice, toothpaste, butter or ink", "Do not burst blisters"] },
  { title: "Poisoning", icon: "☠️", signs: "Drowsiness, vomiting, burns around mouth, strange smell", doThis: ["Call 1122 and bring the container or tablets", "Note what, how much and when", "Keep the person awake and on their side"], dont: ["Do not induce vomiting", "Do not give milk or salt water"] },
  { title: "Seizure", icon: "⚡", signs: "Sudden jerking, loss of awareness", doThis: ["Move hard objects away", "Cushion the head and turn on side after jerking stops", "Time the seizure", "Call 1122 if over 5 minutes"], dont: ["Do not put anything in the mouth", "Do not hold them down"] },
  { title: "Road accident", icon: "🚗", signs: "Injury, pain, unconsciousness", doThis: ["Make the scene safe and call 1122", "Do not move the person unless there is fire or danger", "Keep head and neck still", "Stop bleeding with pressure"], dont: ["Do not remove a helmet unless breathing is blocked", "Do not give water"] },
  { title: "Snake or dog bite", icon: "🐍", signs: "Fang marks, swelling, pain", doThis: ["Keep the person still and the bitten limb below heart level", "Wash dog bite thoroughly with soap and water for 15 minutes", "Come to Emergency: anti-venom and anti-rabies injections are available"], dont: ["No cutting, sucking or tourniquet", "Do not apply herbs"] },
  { title: "High fever in a child", icon: "🌡️", signs: "Temperature above 39 °C, stiff neck, rash, convulsion", doThis: ["Remove extra clothes and give paracetamol by weight", "Give fluids", "Come in if under 3 months, if rash, stiff neck, fit or unresponsive"], dont: ["Do not give aspirin", "Do not use ice-cold water"] },
];

export const triageLevels = [
  { level: "Red", wait: "Immediately", examples: "Cardiac arrest, severe bleeding, unconscious, not breathing", color: "#e5484d" },
  { level: "Orange", wait: "Within 10 minutes", examples: "Chest pain, stroke signs, severe breathing difficulty", color: "#f76808" },
  { level: "Yellow", wait: "Within 60 minutes", examples: "Fractures, high fever, moderate pain", color: "#f5c518" },
  { level: "Green", wait: "Within 2 hours", examples: "Minor cuts, mild illness", color: "#30a46c" },
];

export const hospitalFloors = [
  { floor: "Basement", items: ["Mortuary & ambulance bay", "CSSD sterilisation", "Laundry & kitchen", "Parking"] },
  { floor: "Ground", items: ["Emergency & Trauma", "Registration & billing", "Pharmacy 24/7", "Laboratory", "Radiology", "Blood bank", "Prayer room & cafeteria"] },
  { floor: "1st", items: ["OPD clinics: Medicine, Cardiology, Neurology", "Dialysis unit", "Day-care chemotherapy", "Physiotherapy"] },
  { floor: "2nd", items: ["OPD clinics: Surgery, Orthopedics, ENT, Eye", "Dental", "Skin & Plastic", "Health check-up centre"] },
  { floor: "3rd", items: ["Operation theatres ×10", "Surgical ICU & Cardiac Care Unit", "Recovery room"] },
  { floor: "4th", items: ["Medical ICU, Neuro ICU", "Burn Unit, Isolation ICU", "High-dependency unit"] },
  { floor: "5th", items: ["Gynae & Labour suite", "NICU & PICU", "Pediatric ward", "Maternity ward"] },
  { floor: "6th–8th", items: ["Private rooms & deluxe suites", "General wards", "Oncology ward"] },
];

export const faqs = [
  { q: "What are the OPD timings?", a: "Monday to Saturday, 9:00 AM – 8:00 PM. Emergency, laboratory, pharmacy and blood bank are open 24 hours." },
  { q: "How do I book an appointment?", a: "Use the Book Appointment page, call the helpline, or message on WhatsApp. You will receive a reference number instantly." },
  { q: "What should I bring on my first visit?", a: "CNIC, any previous reports and X-rays, a list of current medicines, and your insurance or Sehat card if you have one." },
  { q: "Do you accept insurance and Sehat Card?", a: "Panel insurance and Sehat Card are accepted for admission. Ask our helpdesk to confirm cover before admission." },
  { q: "Is there an ambulance service?", a: "Yes. Call 1122 or our ambulance line. Our ambulances carry oxygen, defibrillator and a trained paramedic." },
  { q: "Can I get a second opinion?", a: "Yes. Send reports to the department and our tumour board or consultant panel will review them." },
];
