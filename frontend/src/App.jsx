import React, { useState, useEffect } from "react";

const DISEASE_DATABASE = {
  Invalid_Image: {
    name: {
      en: "Incompatible Image / Not a Leaf",
      kn: "ಅಮೂರ್ತ ಚಿತ್ರ / ಎಲೆಯಲ್ಲ",
      hi: "अमान्य छवि / पत्ती नहीं है",
    },
    urgency: "Error",
    cause: {
      en: "The uploaded file does not contain recognized plant leaf telemetry or biological patterns.",
      kn: "ಅಪ್‌ಲೋಡ್ ಮಾಡಿದ ಚಿತ್ರದಲ್ಲಿ ಯಾವುದೇ ಸಸ್ಯದ ಎಲೆಯ ಲಕ್ಷಣಗಳು ಕಂಡುಬಂದಿಲ್ಲ.",
      hi: "अपलोड की गई फ़ाइल में पौधे की पत्ती के लक्षण नहीं हैं।",
    },
    impact: {
      en: "Model inference rejected. System cannot process text, documents, or non-botanical images.",
      kn: "ಸಿಸ್ಟಮ್ ಪಠ್ಯ ಅಥವಾ ದಾಖಲೆಗಳನ್ನು ಸ್ವೀಕರಿಸುವುದಿಲ್ಲ. ದಯವಿಟ್ಟು ಎಲೆಯ ಫೋಟೋ ಹಾಕಿ.",
      hi: "सिस्टम टेक्स्ट या अन्य फोटो स्वीकार नहीं करता। कृपया पत्ती की साफ फोटो डालें。",
    },
    treatment: {
      en: [
        "Upload a clear, well-lit photo of a crop leaf.",
        "Ensure the image is focused directly on foliar anomalies or spots.",
        "Avoid uploading screenshots, text documents, or unrelated objects.",
      ],
      kn: [
        "ದಯವಿಟ್ಟು ಬೆಳೆಯ ಎಲೆಯ ಸ್ಪಷ್ಟವಾದ ಫೋಟೋವನ್ನು ಅಪ್‌ಲೋಡ್ ಮಾಡಿ.",
        "ರೋಗವಿರುವ ಭಾಗವು ನೇರವಾಗಿ ಕಾಣುವಂತೆ ನೋಡಿಕೊಳ್ಳಿ.",
        "ಸ್ಕ್ರೀನ್‌ಶಾಟ್ ಅಥವಾ ಇತ್ಯಾದಿ ಚಿತ್ರಗಳನ್ನು ಹಾಕಬೇಡಿ.",
      ],
      hi: [
        "कृपया फसल की पत्ती की साफ तस्वीर अपलोड करें।",
        "सुनिश्चित करें कि फोटो सीधे पत्ती पर केंद्रित हो।",
        "स्क्रीनशॉट या अन्य दस्तावेजों को अपलोड न करें।",
      ],
    },
  },
  Apple___Apple_scab: {
    name: {
      en: "Apple Scab",
      kn: "ಸೇಬು ಮಚ್ಚೆ ರೋಗ (Apple Scab)",
      hi: "सेब का पपड़ी रोग",
    },
    urgency: "Medium",
    cause: {
      en: "Fungal pathogen Venturia inaequalis. Thrives in cool, wet spring weather.",
      kn: "ವೆಂಚುರಿಯಾ ಇಕ್ವಲಿಸ್ ಶಿಲೀಂಧ್ರದಿಂದ ಬರುತ್ತದೆ. ತಂಪಾದ ಮತ್ತು ಆರ್ದ್ರ ವಾತಾವರಣದಲ್ಲಿ ಬೆಳೆಯುತ್ತದೆ.",
      hi: "वेंटुरिया इनएक्वेलिस फंगस के कारण। ठंडे और गीले मौसम में पनपता है।",
    },
    impact: {
      en: "Olive-green to dark velvety lesions on leaves and fruit, leading to premature defoliation and fruit malformation.",
      kn: "ಎಲೆಗಳು ಮತ್ತು ಹಣ್ಣುಗಳ ಮೇಲೆ ಕಪ್ಪು ಕಲೆಗಳು ಮೂಡಿ, ಎಲೆಗಳು ಬೇಗನೆ ಉದುರುತ್ತವೆ.",
      hi: "पत्तियों और फलों पर काले धब्बे बनते हैं, जिससे पत्तियां समय से पहले गिर जाती हैं।",
    },
    treatment: {
      en: [
        "Remove and destroy fallen infected leaves in autumn.",
        "Apply protective fungicides during the green tip stage.",
        "Ensure proper tree pruning to maximize canopy airflow.",
      ],
      kn: [
        "ಶರತ್ಕಾಲದಲ್ಲಿ ಬಿದ್ದುಹೋದ ಸೋಂಕಿತ ಎಲೆಗಳನ್ನು ನಾಶಪಡಿಸಿ.",
        "ಶಿಲೀಂಧ್ರನಾಶಕಗಳನ್ನು ಸಮಯಕ್ಕೆ ಸರಿಯಾಗಿ ಸಿಂಪಡಿಸಿ.",
        "ಮರದ ಕೊಂಬೆಗಳನ್ನು ಸರಿಯಾಗಿ ಕತ್ತರಿಸಿ ಗಾಳಿಯಾಡುವಂತೆ ಮಾಡಿ.",
      ],
      hi: [
        "गिरे हुए संक्रमित पत्तों को नष्ट करें।",
        "उचित समय पर फफूंदनाशक का छिड़काव करें।",
        "हवा के संचार के लिए पेड़ों की छटाई करें।",
      ],
    },
  },
  Apple___Black_rot: {
    name: {
      en: "Apple Black Rot",
      kn: "ಸೇಬು ಕಪ್ಪು ಕೊಳೆ ರೋಗ",
      hi: "सेब का काला सड़न रोग",
    },
    urgency: "High",
    cause: {
      en: "Fungal agent Botryosphaeria obtusa. Affects stressed trees and unmanaged orchards.",
      kn: "ಬೊಟ್ರೋಸ್ಪೆರಿಯಾ ಆಬ್ಚುಸಾ ಶಿಲೀಂಧ್ರದಿಂದ ಉಂಟಾಗುತ್ತದೆ.",
      hi: "बोट्रिओस्फारिया ओब्टूस फंगस के कारण होता है।",
    },
    impact: {
      en: "Causes leaf spot (frogeye leaf spot), fruit rot, and cankers on branches.",
      kn: "ಎಲೆಗಳ ಮೇಲೆ ಕಲೆಗಳು, ಹಣ್ಣು ಕೊಳೆತ ಮತ್ತು ಕೊಂಬೆಗಳಲ್ಲಿ ಗಾಯಗಳು ಉಂಟಾಗುತ್ತವೆ.",
      hi: "पत्तियों पर धब्बे, फल सड़ना और शाखाओं पर छाले पड़ जाते हैं।",
    },
    treatment: {
      en: [
        "Prune out dead or diseased branches and cankers.",
        "Remove mummified fruits from the orchard.",
        "Apply appropriate copper or sulfur-based fungicidal sprays.",
      ],
      kn: [
        "ಸೋಂಕಿತ ಕೊಂಬೆಗಳನ್ನು ಕತ್ತರಿಸಿ ತೆಗೆದುಹಾಕಿ.",
        "ಗಿಡದಲ್ಲಿ ಉಳಿದುಕೊಂಡ ಒಣಗಿದ ಹಣ್ಣುಗಳನ್ನು ತೆಗೆಯಿರಿ.",
        "ಸೂಕ್ತ ಶಿಲೀಂಧ್ರನಾಶಕಗಳನ್ನು ಸಿಂಪಡಿಸಿ.",
      ],
      hi: [
        "सूखी या रोगग्रस्त शाखाओं की छटाई करें।",
        "पेड़ पर बचे सड़े फलों को हटाएं।",
        "फफूंदनाशक का छिड़काव करें।",
      ],
    },
  },
  Apple___Cedar_apple_rust: {
    name: {
      en: "Cedar Apple Rust",
      kn: "ಸಿದಾರ್ ಆಪಲ್ ರಸ್ಟ್ ರೋಗ",
      hi: "सेडर एप्पल रस्ट रोग",
    },
    urgency: "Medium",
    cause: {
      en: "Fungus Gymnospergmi-idium juniperi-virginianae. Requires juniper trees as an alternate host.",
      kn: "ಜಿಮ್ನೋಸ್ಪೊರಾಂಗಿಯಮ್ ಶಿಲೀಂಧ್ರದಿಂದ ಬರುತ್ತದೆ.",
      hi: "जिम्नोस्पोरंगियम फंगस के कारण होता है।",
    },
    impact: {
      en: "Bright orange-yellow spots on upper leaf surfaces, reducing photosynthetic capacity.",
      kn: "ಎಲೆಗಳ ಮೇಲೆ ಪ್ರಕಾಶಮಾನವಾದ ಕಿತ್ತಳೆ-ಹಳದಿ ಕಲೆಗಳು ಮೂಡುತ್ತವೆ.",
      hi: "पत्तियों पर चमकीले नारंगी-पीले धब्बे बनते हैं।",
    },
    treatment: {
      en: [
        "Remove nearby alternate host juniper trees if possible.",
        "Apply fungicides from bud break through petal fall.",
        "Plant resistant apple cultivars.",
      ],
      kn: [
        "ಸಮೀಪದಲ್ಲಿರುವ ಜುನಿಪರ್ ಮರಗಳನ್ನು ದೂರವಿಡಿ.",
        "ಮೊಗ್ಗು ಬಿಡುವ ಹಂತದಲ್ಲಿ ಶಿಲೀಂಧ್ರನಾಶಕ ಬಳಸಿ.",
        "ರೋಗ ನಿರೋಧಕ ತಳಿಗಳನ್ನು ಬೆಳೆಸಿ.",
      ],
      hi: [
        "आसपास के वैकल्पिक मेजबान पेड़ों को हटाएं।",
        "फंगसाइड का उपयोग करें।",
        "प्रतिरोधी किस्मों का चयन करें।",
      ],
    },
  },
  Potato___Late_blight: {
    name: {
      en: "Potato Late Blight",
      kn: "ಆಲೂಗಡ್ಡೆ ತಡವಾದ ರೋಗ",
      hi: "आलू का पछेती झुलसा",
    },
    urgency: "Critical",
    cause: {
      en: "Phytophthora infestans oomycete. Thrives in cool, wet conditions.",
      kn: "ಫೈಟೊಫ್ಟೋರಾ ಇನ್ಫೆಸ್ಟಾನ್ಸ್ ನಿಂದ ಉಂಟಾಗುತ್ತದೆ.",
      hi: "फाइटोफ्थोरा इन्फेस्टान्स रोगाणु द्वारा।",
    },
    impact: {
      en: "Rapid tissue necrosis on leaves and stems, destroying entire tubers quickly.",
      kn: "ಎಲೆಗಳು ಮತ್ತು ಕಾಂಡಗಳು ಬೇಗನೆ ಕಪ್ಪಾಗಿ ಕೊಳೆತುಹೋಗುತ್ತವೆ.",
      hi: "पत्तियां और तने तेजी से सड़ जाते हैं।",
    },
    treatment: {
      en: [
        "Destroy infected plants immediately.",
        "Use certified disease-free seed tubers.",
        "Apply registered protective fungicides.",
      ],
      kn: [
        "ಸೋಂಕಿತ ಗಿಡಗಳನ್ನು ತಕ್ಷಣ ನಾಶಪಡಿಸಿ.",
        "ರೋಗಮುಕ್ತ ಬೀಜಗಳನ್ನು ಬಳಸಿ.",
        "ಶಿಲೀಂಧ್ರನಾಶಕಗಳನ್ನು ಸಿಂಪಡಿಸಿ.",
      ],
      hi: [
        "संक्रमित पौधों को तुरंत नष्ट करें।",
        "रोगमुक्त बीजों का उपयोग करें।",
        "फफूंदनाशक का छिड़काव करें।",
      ],
    },
  },
  Tomato___Early_blight: {
    name: {
      en: "Tomato Early Blight",
      kn: "ಟೊಮೆಟೊ ಮುಂಗಾರು ರೋಗ",
      hi: "टमाटर का अतुमारी झुलसा",
    },
    urgency: "Medium",
    cause: {
      en: "Alternaria solani fungus. Favored by warm, humid weather and wet foliage.",
      kn: "ಆಲ್ಟರ್ನೇರಿಯಾ ಸೋಲಾನಿ ಶಿಲೀಂಧ್ರದಿಂದ ಬರುತ್ತದೆ.",
      hi: "अल्टरनेरिया सोलाणी फंगस के कारण।",
    },
    impact: {
      en: "Dark spots with concentric rings on older leaves, causing defoliation.",
      kn: "ಹಳೆಯ ಎಲೆಗಳ ಮೇಲೆ ಗುಂಡಗಿನ ಕಲೆಗಳು ಮೂಡಿ ಎಲೆಗಳು ಉದುರುತ್ತವೆ.",
      hi: "पुरानी पत्तियों पर गोल धब्बे बनते हैं और पत्तियां झड़ जाती हैं।",
    },
    treatment: {
      en: [
        "Practice crop rotation with non-host crops.",
        "Prune lower leaves to improve air circulation.",
        "Apply copper-based fungicides preventatively.",
      ],
      kn: [
        "ಬೆಳೆ ಬದಲಾವಣೆ (Crop rotation) ಪದ್ಧತಿ ಅನುಸರಿಸಿ.",
        "ಕೆಳಗಿನ ಎಲೆಗಳನ್ನು ಕತ್ತರಿಸಿ.",
        "ತಾಮ್ರ ಆಧಾರಿತ ಶಿಲೀಂಧ್ರನಾಶಕ ಬಳಸಿ.",
      ],
      hi: [
        "फसल चक्र अपनाएं।",
        "निचली पत्तियों की छटाई करें।",
        "कॉपर-युक्त फंगसाइड लगाएं।",
      ],
    },
  },
  Tomato___Late_blight: {
    name: {
      en: "Tomato Late Blight",
      kn: "ಟೊಮೆಟೊ ತಡವಾದ ರೋಗ",
      hi: "टमाटर का पछेती झुलसा",
    },
    urgency: "Critical",
    cause: {
      en: "Phytophthora infestans pathogen. Spreads rapidly in wet weather.",
      kn: "ಫೈಟೊಫ್ಟೋರಾ ಇನ್ಫೆಸ್ಟಾನ್ಸ್ ನಿಂದ ಬರುತ್ತದೆ.",
      hi: "फाइटोफ्थोरा इन्फेस्टान्स द्वारा।",
    },
    impact: {
      en: "Large, dark water-soaked patches on leaves and stems leading to collapse.",
      kn: "ಎಲೆಗಳ ಮೇಲೆ ದೊಡ್ಡ ನೀರುಕಾಡಿನ ಕಲೆಗಳು ಮೂಡಿ ಗಿಡ ಒಣಗುತ್ತದೆ.",
      hi: "पत्तियों और तनों पर बड़े काले धब्बे बनते हैं।",
    },
    treatment: {
      en: [
        "Apply systemic fungicides at first sign of disease.",
        "Remove infected crop debris completely.",
        "Avoid overhead irrigation.",
      ],
      kn: [
        "ರೋಗ ಕಂಡುಬಂದ ಕೂಡಲೇ ಶಿಲೀಂಧ್ರನಾಶಕ ಬಳಸಿ.",
        "ಸೋಂಕಿತ ಕಸಕಡ್ಡಿಗಳನ್ನು ತೆಗೆದುಹಾಕಿ.",
        "ಮೇಲಿನಿಂದ ನೀರು ಹಾಯಿಸುವುದನ್ನು ತಪ್ಪಿಸಿ.",
      ],
      hi: [
        "रोग के शुरुआती लक्षण पर फंगसाइड दें।",
        "संक्रमित अवशेषों को हटाएं।",
        "ऊपर से पानी देने से बचें।",
      ],
    },
  },
  Tomato___healthy: {
    name: {
      en: "Tomato Healthy",
      kn: "ಆರೋಗ್ಯಕರ ಟೊಮೆಟೊ ಗಿಡ",
      hi: "स्वस्थ टमाटर का पौधा",
    },
    urgency: "Low",
    cause: {
      en: "Optimal growing conditions with proper nutrition and care.",
      kn: "ಉತ್ತಮ ಪೋಷಣೆ ಮತ್ತು ಸರಿಯಾದ ಆರೈಕೆ.",
      hi: "उचित पोषण और देखभाल।",
    },
    impact: {
      en: "Plant is thriving with high photosynthetic efficiency and yield potential.",
      kn: "ಗಿಡವು ಅತ್ಯುತ್ತಮವಾಗಿದ್ದು ಹೆಚ್ಚಿನ ಇಳುವರಿ ನೀಡುವ ಸಾಮರ್ಥ್ಯ ಹೊಂದಿದೆ.",
      hi: "पौधा पूरी तरह स्वस्थ है और अच्छी पैदावार देगा।",
    },
    treatment: {
      en: [
        "Maintain regular watering and fertilization schedule.",
        "Monitor fields routinely for any early pest activity.",
      ],
      kn: [
        "ನಿಯಮಿತ ನೀರು ಮತ್ತು ಗೊಬ್ಬರ ನೀಡುವುದನ್ನು ಮುಂದುವರಿಸಿ.",
        "ಕೀಟಗಳ ಬಾಧೆಗಾಗಿ ಜಮೀನನ್ನು ಗಮನಿಸುತ್ತಿರ.",
      ],
      hi: ["नियमित सिंचाई और खाद जारी रखें।", "कीटों की निगरानी करते रहें।"],
    },
  },
  Apple___healthy: {
    name: {
      en: "Apple Healthy",
      kn: "ಆರೋಗ್ಯಕರ ಸೇಬಿನ ಮರ",
      hi: "स्वस्थ सेब का पौधा",
    },
    urgency: "Low",
    cause: {
      en: "Balanced orchard management and disease-free environment.",
      kn: "ಸಮತೋಲಿತ ತೋಟದ ನಿರ್ವಹಣೆ.",
      hi: "संतुलित बाग प्रबंधन।",
    },
    impact: {
      en: "Foliage is clean and robust, supporting normal fruit development.",
      kn: "ಎಲೆಗಳು ಸ್ವಚ್ಛವಾಗಿದ್ದು ಹಣ್ಣಿನ ಬೆಳವಣಿಗೆಗೆ ಸಹಕಾರಿಯಾಗಿದೆ.",
      hi: "पत्तियां स्वस्थ हैं और फल विकास में सहायक हैं।",
    },
    treatment: {
      en: [
        "Continue routine orchard maintenance.",
        "Ensure proper soil nutrient tracking.",
      ],
      kn: ["ತೋಟದ ಸಾಮಾನ್ಯ ನಿರ್ವಹಣೆಯನ್ನು ಮುಂದುವರಿಸಿ."],
      hi: ["बाग की सामान्य देखभाल जारी रखें।"],
    },
  },
  Potato___healthy: {
    name: {
      en: "Potato Healthy",
      kn: "ಆರೋಗ್ಯಕರ ಆಲೂಗಡ್ಡೆ ಬೆಳೆ",
      hi: "स्वस्थ आलू की फसल",
    },
    urgency: "Low",
    cause: {
      en: "Proper soil management and absence of pathogens.",
      kn: "ಸೂಕ್ತ ಮಣ್ಣಿನ ನಿರ್ವಹಣೆ.",
      hi: "उचित मिट्टी प्रबंधन।",
    },
    impact: {
      en: "Vigorous crop growth with strong tuber development capacity.",
      kn: "ಬೆಳೆಯು ಬಲವಾಗಿದ್ದು ಗೆಡ್ಡೆಗಳ ಅಭಿವೃದ್ಧಿ ಉತ್ತಮವಾಗಿದೆ.",
      hi: "फसल जोरदार है और कंद विकास अच्छा है।",
    },
    treatment: {
      en: [
        "Maintain standard crop care guidelines.",
        "Perform routine scouting.",
      ],
      kn: ["ಸಾಮಾನ್ಯ ಬೆಳೆ ನಿರ್ವಹಣಾ ಮಾರ್ಗಗಳನ್ನು ಅನುಸರಿಸಿ."],
      hi: ["मानक फसल देखभाल नियम अपनाएं।"],
    },
  },
  default: {
    name: {
      en: "Crop Pathology Condition",
      kn: "ಬೆಳೆಯ ರೋಗ ಸ್ಥಿತಿ",
      hi: "फसल रोग स्थिति",
    },
    urgency: "Medium",
    cause: {
      en: "Pathogenic or environmental stress factor identified in foliar matrix.",
      kn: "ಎಲೆಗಳಲ್ಲಿ ಗುರುತಿಸಲಾದ ರೋಗ ಅಥವಾ ಪರಿಸರ ಒತ್ತಡದ ಅಂಶ.",
      hi: "पत्तियों में पहचाना गया रोग या पर्यावरणीय तनाव कारक।",
    },
    impact: {
      en: "Potential tissue degradation and risk of yield reduction if left unmanaged.",
      kn: "ನಿರ್ವಹಿಸದಿದ್ದರೆ ಇಳುವರಿ ಕುಂಠಿತಗೊಳ್ಳುವ ಅಪಾಯ.",
      hi: "प्रबंधन न करने पर पैदावार घटने का जोखिम।",
    },
    treatment: {
      en: [
        "Isolate affected sections of the crop.",
        "Consult local agronomic advisory for precise treatment.",
        "Apply recommended protective agents.",
      ],
      kn: [
        "ಬಾಧಿತ ಭಾಗಗಳನ್ನು ಪ್ರತ್ಯೇಕಿಸಿ.",
        "ಸ್ಥಳೀಯ ಕೃಷಿ ತಜ್ಞರನ್ನು ಸಂಪರ್ಕಿಸಿ.",
        "ಶಿಫಾರಸು ಮಾಡಿದ ರಕ್ಷಕಗಳನ್ನು ಬಳಸಿ.",
      ],
      hi: [
        "प्रभावित हिस्सों को अलग करें।",
        "कृषि विशेषज्ञों की सलाह लें।",
        "अनुशंसित उपचार अपनाएं।",
      ],
    },
  },
};

export default function App() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [animatedScore, setAnimatedScore] = useState(0);
  const [theme, setTheme] = useState("dark");
  const [lang, setLang] = useState("en");

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedFile(file);
      setPreview(URL.createObjectURL(file));
      setResult(null);
      setAnimatedScore(0);
    }
  };

  const handleClear = () => {
    setSelectedFile(null);
    setPreview(null);
    setResult(null);
    setAnimatedScore(0);
  };

  const handleAnalyze = async () => {
    if (!selectedFile) return;
    setLoading(true);

    const formData = new FormData();
    formData.append("file", selectedFile);

    try {
      const response = await fetch("http://127.0.0.1:8000/predict", {
        method: "POST",
        body: formData,
      });
      const data = await response.json();
      setResult(data);
    } catch (err) {
      alert("Error connecting to diagnostic server.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (result) {
      setTimeout(() => setAnimatedScore(result.confidence), 100);
    }
  }, [result]);

  const toggleTheme = () => setTheme(theme === "dark" ? "light" : "dark");

  const getDiseaseInfo = (className) => {
    const isHealthy = className.toLowerCase().includes("healthy");

    if (DISEASE_DATABASE[className]) {
      const record = DISEASE_DATABASE[className];
      return {
        name: record.name[lang] || record.name["en"],
        urgency: record.urgency,
        cause: record.cause[lang] || record.cause["en"],
        impact: record.impact[lang] || record.impact["en"],
        treatment: record.treatment[lang] || record.treatment["en"],
      };
    }

    const cleanName = className.replace(/___/g, " - ").replace(/_/g, " ");

    if (isHealthy) {
      return {
        name: cleanName,
        urgency: "Low",
        cause:
          {
            en: `Optimal foliar telemetry detected. No pathogenic markers or necrotic lesions found.`,
            kn: `ಉತ್ತಮ ಎಲೆಯ ಆರೋಗ್ಯ ಪತ್ತೆಯಾಗಿದೆ. ಯಾವುದೇ ರೋಗಗಳು ಇಲ್ಲ.`,
            hi: `स्वस्थ पत्ती के लक्षण पाए गए हैं। कोई रोग नहीं है।`,
          }[lang] || `Optimal foliar telemetry detected.`,
        impact:
          {
            en: "Crop is thriving with normal photosynthetic activity and robust cellular structure.",
            kn: `ಬೆಳೆಯು ಆರೋಗ್ಯಕರವಾಗಿದ್ದು ಉತ್ತಮ ಬೆಳವಣಿಗೆಯಲ್ಲಿದೆ.`,
            hi: `फसल पूरी तरह स्वस्थ है और विकास सामान्य है।`,
          }[lang] || "Crop is thriving with normal activity.",
        treatment: [
          {
            en: "Continue current irrigation and balanced fertilizer schedule.",
            kn: "ಪ್ರಸ್ತುತ ನೀರಾವರಿ ಮತ್ತು ರೊಬ್ಬಿನ ನಿರ್ವಹಣೆಯನ್ನು ಮುಂದುವರಿಸಿ.",
            hi: "वर्तमान सिंचाई और खाद प्रबंधन जारी रखें。",
          },
          {
            en: "Perform routine field monitoring to maintain baseline crop health.",
            kn: "ಬೆಳೆಯ ಆರೋಗ್ಯವನ್ನು ಕಾಪಾಡಲು ನಿಯಮಿತವಾಗಿ ಗಮನಿಸಿ.",
            hi: "फसल की सेहत बनाए रखने के लिए नियमित निगरानी रखें。",
          },
        ].map((item) => item[lang] || item["en"]),
      };
    }

    const defaultRecord = DISEASE_DATABASE["default"];
    return {
      name: cleanName,
      urgency: defaultRecord.urgency,
      cause: defaultRecord.cause[lang] || defaultRecord.cause["en"],
      impact: defaultRecord.impact[lang] || defaultRecord.impact["en"],
      treatment: defaultRecord.treatment[lang] || defaultRecord.treatment["en"],
    };
  };

  const translations = {
    title: {
      en: "AgriVision Pro",
      kn: "ಅಗ್ರಿವ್ಯೂಷನ್ ಪ್ರೋ",
      hi: "एग्रीविज़न प्रो",
    },
    subtitle: {
      en: "ENTERPRISE PATHOLOGY ENGINE",
      kn: "ಸ್ಥಳೀಯ ಕೃಷಿ ರೋಗನಿರ್ಣಯ ವ್ಯವಸ್ಥೆ",
      hi: "किसान अनुकूल पाथोलॉजी इंजन",
    },
    uploadTitle: {
      en: "01. Input Biomatter Sample",
      kn: "೦೧. ಬೆಳೆ ಮಾದರಿಯನ್ನು ಅನ್ವಯಿಸಿ",
      hi: "01. फसल का नमूना अपलोड करें",
    },
    dragText: {
      en: "Tap or drop visual sample",
      kn: "ಫೋಟೋ ಆಯ್ಕೆ ಮಾಡಲು ಇಲ್ಲಿ ಒತ್ತಿ",
      hi: "फोटो चुनने के लिए यहाँ टैप करें",
    },
    supports: {
      en: "Supports mobile camera & files",
      kn: "ಮೊಬೈಲ್ ಕ್ಯಾಮೆರಾ ಮತ್ತು ಫೈಲ್‌ಗಳು",
      hi: "मोबाइल कैमरा और फ़ाइलें समर्थित",
    },
    analyzeBtn: {
      en: "Initialize Analysis",
      kn: "ರೋಗ ಪರೀಕ್ಷೆಯನ್ನು ಪ್ರಾರಂಭಿಸಿ",
      hi: "विश्लेषण शुरू करें",
    },
    processing: {
      en: "Processing...",
      kn: "ಪರಿಶೀಲಿಸಲಾಗುತ್ತಿದೆ...",
      hi: "प्रोसेसिंग हो रहा है...",
    },
    awaiting: {
      en: "Awaiting Telemetry Data",
      kn: "ಮಾದರಿಯ ವಿವರಗಳಿಗಾಗಿ ಕಾಯಲಾಗುತ್ತಿದೆ",
      hi: "डेटा की प्रतीक्षा है",
    },
    reportTitle: {
      en: "02. AI Diagnostic Report",
      kn: "೦೨. AI ರೋಗನಿರ್ಣಯ ವರದಿ",
      hi: "02. AI निदान रिपोर्ट",
    },
    anomaly: {
      en: "Detected Anomaly",
      kn: "ಪತ್ತೆಯಾದ ರೋಗ/ಸಮಸ್ಯೆ",
      hi: "पहचाना गया रोग",
    },
    confidence: {
      en: "Model Confidence",
      kn: "ಖಚಿತತೆಯ ಶೇಕಡಾವಾರು",
      hi: "सटीकता प्रतिशत",
    },
    etiology: {
      en: "Pathogen Etiology",
      kn: "ರೋಗದ ಮೂಲ ಕಾರಣ",
      hi: "रोग का कारण",
    },
    impactLabel: {
      en: "Morphological Impact",
      kn: "ಬೆಳೆಯ ಮೇಲಿನ ಪರಿಣಾಮ",
      hi: "फसल पर प्रभाव",
    },
    protocol: {
      en: "Recommended Action Protocol",
      kn: "ರೈತರಿಗೆ ಸಲಹೆ ಹಾಗೂ ಪರಿಹಾರ ಕ್ರಮಗಳು",
      hi: "सुझाए गए उपचार कदम",
    },
  };

  const t = (key) => translations[key][lang] || translations[key]["en"];
  const isInvalid = result && result.class === "Invalid_Image";

  return (
    <div className="min-h-screen transition-colors duration-500 ease-in-out bg-slate-100 dark:bg-slate-950 text-slate-800 dark:text-slate-200 p-3 sm:p-6 md:p-8 font-sans selection:bg-emerald-500/30">
      <header className="max-w-6xl mx-auto mb-6 sm:mb-10 flex flex-col sm:flex-row items-center justify-between border-b border-slate-300 dark:border-slate-800 pb-4 sm:pb-6 gap-4">
        <div className="flex items-center gap-3 w-full sm:w-auto justify-between sm:justify-start">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-xl bg-gradient-to-br from-emerald-400 to-teal-600 flex items-center justify-center shadow-lg shadow-emerald-500/20">
              <span className="text-xl sm:text-2xl">🌱</span>
            </div>
            <div>
              <h1 className="text-xl sm:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600 dark:from-emerald-400 dark:to-teal-300 tracking-tight">
                {t("title")}
              </h1>
              <p className="text-slate-500 dark:text-slate-400 text-xs sm:text-sm font-medium tracking-wide">
                {t("subtitle")}
              </p>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between w-full sm:w-auto gap-3">
          <select
            value={lang}
            onChange={(e) => setLang(e.target.value)}
            className="bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-xl px-3 py-2 text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-200 focus:outline-none focus:border-emerald-500 shadow-sm cursor-pointer"
          >
            <option value="en">English</option>
            <option value="kn">ಕನ್ನಡ</option>
            <option value="hi">हिन्दी</option>
          </select>

          <button
            onClick={toggleTheme}
            className="p-2.5 rounded-full bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-200 hover:scale-110 transition-transform shadow-md border border-slate-200 dark:border-slate-800"
            title="Toggle Theme"
          >
            {theme === "dark" ? "☀️" : "🌙"}
          </button>
        </div>
      </header>

      <main className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8">
        <div className="lg:col-span-5 bg-white dark:bg-slate-900/60 backdrop-blur-xl rounded-3xl border border-slate-200 dark:border-slate-800 p-4 sm:p-6 shadow-xl relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-500 to-teal-400 opacity-50"></div>

          <h2 className="text-xs sm:text-sm font-bold text-slate-600 dark:text-slate-300 uppercase tracking-widest mb-4 sm:mb-6 flex items-center gap-2">
            <span className="text-emerald-600 dark:text-emerald-400">#</span>{" "}
            {t("uploadTitle")}
          </h2>

          <div className="flex flex-col items-center justify-center border-2 border-dashed border-slate-300 dark:border-slate-700 hover:border-emerald-500 transition-all duration-300 rounded-2xl p-3 bg-slate-50 dark:bg-slate-950/50 relative h-60 sm:h-72">
            {preview ? (
              <div className="relative w-full h-full animate-in fade-in zoom-in-95 duration-500">
                <img
                  src={preview}
                  alt="Sample"
                  className="w-full h-full object-cover rounded-xl border border-slate-200 dark:border-slate-700"
                />
                <button
                  onClick={handleClear}
                  className="absolute top-3 right-3 bg-white/90 dark:bg-slate-800 text-slate-800 dark:text-white hover:bg-red-500 hover:text-white backdrop-blur-md h-9 w-9 sm:h-10 sm:w-10 rounded-full flex items-center justify-center font-bold shadow-xl transition-all border border-slate-200 dark:border-slate-700"
                >
                  ✕
                </button>
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center text-center text-slate-400 dark:text-slate-500 w-full h-full px-2">
                <div className="h-16 w-16 sm:h-20 sm:w-20 bg-slate-100 dark:bg-slate-800 rounded-full flex items-center justify-center mb-3 shadow-inner border border-slate-200 dark:border-slate-700">
                  <span className="text-2xl sm:text-3xl text-emerald-500">
                    📸
                  </span>
                </div>
                <p className="text-xs sm:text-sm font-medium text-slate-600 dark:text-slate-300">
                  {t("dragText")}
                </p>
                <p className="text-[10px] sm:text-xs text-slate-400 dark:text-slate-500 mt-1">
                  {t("supports")}
                </p>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleFileChange}
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                />
              </div>
            )}
          </div>

          <button
            onClick={handleAnalyze}
            disabled={!selectedFile || loading}
            className={`w-full mt-5 sm:mt-6 py-3.5 sm:py-4 rounded-xl font-bold text-xs sm:text-sm tracking-widest uppercase transition-all duration-300 flex items-center justify-center gap-3 ${
              !selectedFile || loading
                ? "bg-slate-100 dark:bg-slate-800 text-slate-400 dark:text-slate-600 cursor-not-allowed border border-slate-200 dark:border-slate-700"
                : "bg-gradient-to-r from-emerald-500 to-teal-500 text-white hover:from-emerald-400 hover:to-teal-400 shadow-lg shadow-emerald-500/30"
            }`}
          >
            {loading ? (
              <>
                <svg
                  className="animate-spin h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                {t("processing")}
              </>
            ) : (
              t("analyzeBtn")
            )}
          </button>
        </div>

        <div className="lg:col-span-7 flex flex-col">
          {!result ? (
            <div className="flex-1 bg-white dark:bg-slate-900/40 backdrop-blur-sm rounded-3xl border border-slate-200 dark:border-slate-800 flex flex-col items-center justify-center text-slate-400 dark:text-slate-600 p-6 sm:p-8 shadow-inner min-h-[250px] lg:min-h-0">
              <svg
                className="w-12 h-12 sm:w-16 sm:h-16 text-slate-300 dark:text-slate-700 mb-3 animate-pulse"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1"
                  d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
                />
              </svg>
              <p className="font-mono text-xs sm:text-sm tracking-widest uppercase">
                {t("awaiting")}
              </p>
            </div>
          ) : (
            <div className="flex-1 bg-white dark:bg-slate-900/60 backdrop-blur-xl rounded-3xl border border-slate-200 dark:border-slate-800 p-4 sm:p-6 shadow-xl animate-in slide-in-from-bottom-5 fade-in duration-700 flex flex-col gap-4 sm:gap-6">
              <h2 className="text-xs sm:text-sm font-bold text-slate-600 dark:text-slate-300 uppercase tracking-widest flex items-center gap-2">
                <span className="text-emerald-600 dark:text-emerald-400">
                  #
                </span>{" "}
                {t("reportTitle")}
              </h2>

              <div
                className={`rounded-2xl p-4 sm:p-6 border relative overflow-hidden transition-colors ${
                  isInvalid
                    ? "bg-red-50 dark:bg-red-950/40 border-red-300 dark:border-red-500/40"
                    : "bg-slate-50 dark:bg-slate-950 border-slate-200 dark:border-slate-800"
                }`}
              >
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-4 sm:mb-6 relative z-10">
                  <div>
                    <p
                      className={`text-[10px] sm:text-xs font-bold uppercase tracking-widest mb-1 ${isInvalid ? "text-red-600 dark:text-red-400" : "text-slate-500 dark:text-slate-400"}`}
                    >
                      {t("anomaly")}
                    </p>
                    <h3
                      className={`text-xl sm:text-2xl md:text-3xl font-black capitalize flex flex-wrap items-center gap-2 sm:gap-3 ${isInvalid ? "text-red-700 dark:text-red-300" : "text-slate-800 dark:text-white"}`}
                    >
                      {getDiseaseInfo(result.class).name}
                      <span
                        className={`text-[10px] sm:text-xs px-2.5 py-0.5 rounded-full border tracking-widest uppercase font-bold shadow-sm ${
                          isInvalid
                            ? "bg-red-200 text-red-800 border-red-400 dark:bg-red-500/20 dark:text-red-300 dark:border-red-500/40"
                            : "bg-amber-100 text-amber-600 border-amber-300 dark:bg-amber-400/10 dark:text-amber-400 dark:border-amber-400/30"
                        }`}
                      >
                        {getDiseaseInfo(result.class).urgency}
                      </span>
                    </h3>
                  </div>
                  <div className="text-left sm:text-right w-full sm:w-auto flex sm:flex-col justify-between items-center sm:items-end border-t sm:border-t-0 pt-2 sm:pt-0 border-slate-200 dark:border-slate-800">
                    <p className="text-[10px] sm:text-xs text-slate-500 dark:text-slate-400 font-bold uppercase tracking-widest">
                      {t("confidence")}
                    </p>
                    <span
                      className={`text-2xl sm:text-3xl md:text-4xl font-black ${isInvalid ? "text-red-600 dark:text-red-400" : "text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-500 dark:from-emerald-400 dark:to-teal-300"}`}
                    >
                      {result.confidence}%
                    </span>
                  </div>
                </div>

                <div className="w-full bg-slate-200 dark:bg-slate-800 rounded-full h-2 relative z-10 overflow-hidden shadow-inner">
                  <div
                    className={`h-2 rounded-full transition-all duration-1000 ease-out shadow-md ${isInvalid ? "bg-red-500" : "bg-gradient-to-r from-emerald-500 to-teal-400"}`}
                    style={{ width: `${animatedScore}%` }}
                  ></div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700/50 rounded-2xl p-4 sm:p-5 shadow-sm">
                  <div
                    className={`h-7 w-7 sm:h-8 sm:w-8 rounded-lg flex items-center justify-center mb-3 border ${isInvalid ? "bg-red-100 dark:bg-red-500/10 border-red-200 dark:border-red-500/20 text-red-500" : "bg-rose-100 dark:bg-rose-500/10 border-rose-200 dark:border-rose-500/20 text-rose-500"}`}
                  >
                    <span className="text-sm">🦠</span>
                  </div>
                  <h4 className="text-xs sm:text-sm font-bold text-slate-800 dark:text-slate-200 uppercase tracking-wider mb-1.5">
                    {t("etiology")}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    {getDiseaseInfo(result.class).cause}
                  </p>
                </div>

                <div className="bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700/50 rounded-2xl p-4 sm:p-5 shadow-sm">
                  <div
                    className={`h-7 w-7 sm:h-8 sm:w-8 rounded-lg flex items-center justify-center mb-3 border ${isInvalid ? "bg-red-100 dark:bg-red-500/10 border-red-200 dark:border-red-500/20 text-red-500" : "bg-amber-100 dark:bg-amber-500/10 border-amber-200 dark:border-amber-500/20 text-amber-500"}`}
                  >
                    <span className="text-sm">⚠️</span>
                  </div>
                  <h4 className="text-xs sm:text-sm font-bold text-slate-800 dark:text-slate-200 uppercase tracking-wider mb-1.5">
                    {t("impactLabel")}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    {getDiseaseInfo(result.class).impact}
                  </p>
                </div>
              </div>

              {!isInvalid && (
                <div className="bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700/50 rounded-2xl p-4 sm:p-5 shadow-sm">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="text-xs sm:text-sm font-bold text-slate-800 dark:text-slate-200 uppercase tracking-wider flex items-center gap-2">
                      <span>📊</span>{" "}
                      {result.class.toLowerCase().includes("healthy")
                        ? "Crop Health Status"
                        : "Estimated Severity Index"}
                    </h4>
                    <span
                      className={`text-[10px] sm:text-xs px-2.5 py-0.5 rounded-full font-bold uppercase tracking-wider ${
                        result.class.toLowerCase().includes("healthy")
                          ? "bg-emerald-100 text-emerald-600 dark:bg-emerald-500/20 dark:text-emerald-300"
                          : result.confidence > 80
                            ? "bg-red-100 text-red-600 dark:bg-red-500/20 dark:text-red-300"
                            : result.confidence > 50
                              ? "bg-amber-100 text-amber-600 dark:bg-amber-400/10 dark:text-amber-400"
                              : "bg-emerald-100 text-emerald-600 dark:bg-emerald-500/20 dark:text-emerald-300"
                      }`}
                    >
                      {result.class.toLowerCase().includes("healthy")
                        ? "100% Healthy"
                        : result.confidence > 80
                          ? "Critical Impact"
                          : result.confidence > 50
                            ? "Moderate Spread"
                            : "Early Stage"}
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    {result.class.toLowerCase().includes("healthy")
                      ? "This crop sample exhibits optimal cellular integrity and active photosynthetic properties. No chemical intervention is required."
                      : result.confidence > 80
                        ? "High probability of advanced foliar degradation and rapid spore propagation. Immediate systemic containment is strongly advised."
                        : "Moderate anomaly signatures identified across the leaf matrix. Monitor field spread and maintain balanced irrigation scheduling."}
                  </p>
                </div>
              )}

              <div
                className={`rounded-2xl p-4 sm:p-5 relative overflow-hidden border ${isInvalid ? "bg-red-50/50 dark:bg-red-950/20 border-red-200 dark:border-red-500/20" : "bg-emerald-50/50 dark:bg-slate-800/40 border-emerald-200 dark:border-emerald-500/20"}`}
              >
                <h4
                  className={`text-xs sm:text-sm font-bold uppercase tracking-wider mb-3 flex items-center gap-2 ${isInvalid ? "text-red-700 dark:text-red-400" : "text-emerald-700 dark:text-emerald-400"}`}
                >
                  <span>🛡️</span> {t("protocol")}
                </h4>
                <div className="space-y-2.5 relative z-10">
                  {getDiseaseInfo(result.class).treatment.map((step, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-2.5 bg-white dark:bg-slate-900/60 p-2.5 sm:p-3 rounded-xl border border-slate-200 dark:border-slate-700/50 shadow-sm"
                    >
                      <span
                        className={`flex-shrink-0 h-5 w-5 sm:h-6 sm:w-6 rounded-full flex items-center justify-center text-[10px] sm:text-xs font-bold border ${isInvalid ? "bg-red-100 dark:bg-red-500/10 text-red-600 dark:text-red-400 border-red-200 dark:border-red-500/20" : "bg-emerald-100 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-200 dark:border-emerald-500/20"}`}
                      >
                        {index + 1}
                      </span>
                      <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                        {step}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
