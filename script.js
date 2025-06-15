const questions = [
  {
    q: "1. Besaran yang memengaruhi jumlah getaran dalam satu detik adalah...",
    options: {
      A: "Frekuensi",
      B: "Amplitudo",
      C: "Energi",
      D: "Waktu"
    },
    answer: "A",
    explanation: "Frekuensi adalah jumlah getaran per detik."
  },
  {
    q: "2. Suatu getaran memiliki amplitudo 10 cm. Ini berarti simpangan terjauh getaran tersebut adalah...",
    options: {
      A: "5 cm",
      B: "10 cm",
      C: "15 cm",
      D: "20 cm"
    },
    answer: "B",
    explanation: "Amplitudo adalah simpangan terjauh dari titik kesetimbangan."
  },
  {
    q: "3. Titik kesetimbangan pada suatu getaran adalah...",
    options: {
      A: "Titik di mana benda diam sesaat",
      B: "Titik di mana benda memiliki energi kinetik maksimum",
      C: "Titik di mana benda tidak mengalami gaya restorasi",
      D: "Titik di mana benda berhenti bergerak"
    },
    answer: "C",
    explanation: "Titik kesetimbangan adalah posisi di mana gaya restorasi pada benda bergetar adalah nol."
  },
  {
    q: "4. Sebuah benda melakukan 20 getaran dalam 4 detik. Periode getaran benda tersebut adalah...",
    options: {
      A: "0,2 detik",
      B: "0,5 detik",
      C: "2 detik",
      D: "5 detik"
    },
    answer: "A",
    explanation: "Periode ($T$) adalah waktu yang dibutuhkan untuk satu getaran penuh. $T = \text{total waktu} / \text{jumlah getaran} = 4 \text{ s} / 20 = 0,2 \text{ s}$."
  },
  {
    q: "5. Salah satu faktor yang tidak memengaruhi cepat rambat gelombang adalah...",
    options: {
      A: "Medium",
      B: "Suhu",
      C: "Frekuensi",
      D: "Jenis gelombang"
    },
    answer: "C",
    explanation: "Cepat rambat gelombang (v) pada medium tertentu umumnya tidak dipengaruhi oleh frekuensinya, melainkan oleh sifat-sifat medium."
  },
  {
    q: "6. Berikut ini adalah syarat-syarat terjadinya bunyi, kecuali...",
    options: {
      A: "Adanya sumber bunyi",
      B: "Adanya medium perambatan",
      C: "Adanya pendengar",
      D: "Adanya vakum"
    },
    answer: "D",
    explanation: "Bunyi adalah gelombang mekanik yang membutuhkan medium untuk merambat, sehingga tidak dapat merambat di ruang hampa (vakum)."
  },
  {
    q: "7. Fenomena pemantulan bunyi yang sering dimanfaatkan untuk mengukur kedalaman laut adalah...",
    options: {
      A: "Gema",
      B: "Gaung",
      C: "Resonansi",
      D: "Interferensi"
    },
    answer: "A",
    explanation: "Gema adalah bunyi pantul yang terdengar setelah bunyi asli selesai, dimanfaatkan dalam sonar untuk mengukur kedalaman laut."
  },
  {
    q: "8. Bunyi akan terdengar lebih kuat jika terjadi...",
    options: {
      A: "Interferensi",
      B: "Difraksi",
      C: "Resonansi",
      D: "Refraksi"
    },
    answer: "C",
    explanation: "Resonansi adalah peristiwa ikut bergetarnya suatu benda karena adanya getaran benda lain dengan frekuensi yang sama, sehingga bunyi terdengar lebih kuat."
  },
  {
    q: "9. Salah satu sifat cahaya adalah dapat dibiaskan. Contoh peristiwa pembiasan cahaya dalam kehidupan sehari-hari adalah...",
    options: {
      A: "Terbentuknya bayangan pada cermin",
      B: "Terjadinya pelangi",
      C: "Terbentuknya bayangan di dinding",
      D: "Terlihatnya benda di cermin datar"
    },
    answer: "B",
    explanation: "Pelangi terjadi karena pembiasan dan pemantulan cahaya matahari oleh tetesan air hujan."
  },
  {
    q: "10. Sifat cahaya yang memungkinkan kita melihat benda adalah...",
    options: {
      A: "Cahaya merambat lurus",
      B: "Cahaya dapat dipantulkan",
      C: "Cahaya dapat dibiaskan",
      D: "Cahaya adalah gelombang elektromagnetik"
    },
    answer: "B",
    explanation: "Kita dapat melihat benda karena cahaya yang dipancarkan atau dipantulkan oleh benda tersebut masuk ke mata kita."
  },
  {
    q: "11. Bayangan yang dihasilkan oleh cermin datar bersifat...",
    options: {
      A: "Nyata, terbalik, diperkecil",
      B: "Nyata, tegak, sama besar",
      C: "Maya, tegak, sama besar",
      D: "Maya, terbalik, diperbesar"
    },
    answer: "C",
    explanation: "Cermin datar selalu menghasilkan bayangan maya (tidak dapat ditangkap layar), tegak, dan sama besar dengan benda."
  },
  {
    q: "12. Jika sebuah benda diletakkan 20 cm di depan cermin datar, maka jarak bayangan ke cermin adalah...",
    options: {
      A: "10 cm",
      B: "20 cm",
      C: "30 cm",
      D: "40 cm"
    },
    answer: "B",
    explanation: "Jarak benda ke cermin datar selalu sama dengan jarak bayangan ke cermin."
  },
  {
    q: "13. Pernyataan yang benar tentang fokus cermin cembung adalah...",
    options: {
      A: "Fokus cermin cembung bersifat positif",
      B: "Fokus cermin cembung bersifat negatif",
      C: "Fokus cermin cembung terletak di depan cermin",
      D: "Fokus cermin cembung dapat nyata atau maya"
    },
    answer: "B",
    explanation: "Fokus cermin cembung bersifat maya dan terletak di belakang cermin, sehingga nilai fokusnya negatif."
  },
  {
    q: "14. Jika sebuah benda diletakkan di ruang I cermin cekung (antara F dan O), maka sifat bayangan yang terbentuk adalah...",
    options: {
      A: "Nyata, terbalik, diperkecil",
      B: "Nyata, terbalik, diperbesar",
      C: "Maya, tegak, diperkecil",
      D: "Maya, tegak, diperbesar"
    },
    answer: "D",
    explanation: "Untuk benda di ruang I cermin cekung, bayangan yang terbentuk bersifat maya, tegak, dan diperbesar."
  },
  {
    q: "15. Pada cermin cekung, benda diletakkan tepat di titik kelengkungan (2F). Sifat bayangan yang terbentuk adalah...",
    options: {
      A: "Nyata, terbalik, diperkecil",
      B: "Nyata, terbalik, sama besar",
      C: "Maya, tegak, diperbesar",
      D: "Tidak terbentuk bayangan"
    },
    answer: "B",
    explanation: "Jika benda diletakkan di titik kelengkungan (2F) cermin cekung, bayangan yang terbentuk bersifat nyata, terbalik, dan sama besar, juga di 2F."
  },
  {
    q: "16. Seseorang menderita miopi. Alat bantu penglihatan yang tepat untuk mengatasi kelainan tersebut adalah...",
    options: {
      A: "Lensa cekung",
      B: "Lensa cembung",
      C: "Cermin cekung",
      D: "Cermin cembung"
    },
    answer: "A",
    explanation: "Miopi (rabun jauh) diatasi dengan lensa cekung karena fokus bayangan jatuh di depan retina."
  },
  {
    q: "17. Titik jauh penglihatan seseorang penderita miopi adalah 200 cm. Kekuatan lensa kacamata yang dibutuhkan adalah...",
    options: {
      A: "-0,5 D",
      B: "+0,5 D",
      C: "-2 D",
      D: "+2 D"
    },
    answer: "A",
    explanation: "Kekuatan lensa ($P$) untuk miopi adalah $P = -100/PR$ (PR dalam cm). Jadi, $P = -100/200 = -0,5 \text{ D}$."
  },
  {
    q: "18. Lensa yang digunakan untuk mengamati benda-benda mikroskopis agar terlihat lebih besar adalah...",
    options: {
      A: "Lensa cekung",
      B: "Lensa cembung",
      C: "Lensa rangkap",
      D: "Lensa gabungan"
    },
    answer: "B",
    explanation: "Lensa cembung (lensa positif) digunakan untuk memperbesar bayangan, seperti pada mikroskop atau lup."
  },
  {
    q: "19. Kelainan mata yang disebabkan oleh kornea atau lensa mata yang tidak rata sehingga penglihatan kabur adalah...",
    options: {
      A: "Miopi",
      B: "Hipermetropi",
      C: "Presbiopi",
      D: "Astigmatisme"
    },
    answer: "D",
    explanation: "Astigmatisme adalah kelainan mata akibat kelengkungan kornea atau lensa mata yang tidak merata."
  },
  {
    q: "20. Lensa mata manusia berfungsi untuk...",
    options: {
      A: "Mengatur jumlah cahaya yang masuk",
      B: "Memfokuskan cahaya ke retina",
      C: "Melindungi mata dari debu",
      D: "Menghasilkan pigmen warna"
    },
    answer: "B",
    explanation: "Lensa mata berfungsi untuk membiaskan dan memfokuskan cahaya agar jatuh tepat di retina."
  },
  {
    q: "21. Perbedaan utama antara unsur dan senyawa adalah...",
    options: {
      A: "Unsur dapat diuraikan, senyawa tidak",
      B: "Unsur terdiri dari satu jenis atom, senyawa dari dua atau lebih jenis atom",
      C: "Senyawa adalah gabungan unsur secara fisik",
      D: "Unsur tidak dapat membentuk ikatan kimia"
    },
    answer: "B",
    explanation: "Unsur adalah zat murni yang tidak dapat diuraikan lagi menjadi zat yang lebih sederhana secara kimia, dan hanya terdiri dari satu jenis atom. Senyawa terbentuk dari dua atau lebih unsur yang bergabung secara kimia."
  },
  {
    q: "22. Contoh zat yang termasuk unsur adalah...",
    options: {
      A: "Air",
      B: "Garam dapur",
      C: "Oksigen",
      D: "Gula"
    },
    answer: "C",
    explanation: "Oksigen (O2) adalah unsur, sedangkan air (H2O), garam dapur (NaCl), dan gula (C12H22O11) adalah senyawa."
  },
  {
    q: "23. Senyawa terbentuk dari gabungan beberapa unsur melalui...",
    options: {
      A: "Pencampuran fisik",
      B: "Reaksi kimia",
      C: "Perubahan wujud",
      D: "Penguapan"
    },
    answer: "B",
    explanation: "Senyawa terbentuk melalui reaksi kimia antara dua atau lebih unsur."
  },
  {
    q: "24. Berikut ini adalah ciri-ciri unsur, kecuali...",
    options: {
      A: "Tidak dapat diuraikan secara kimia",
      B: "Terdiri dari satu jenis atom",
      C: "Memiliki sifat yang berbeda dengan senyawa",
      D: "Dapat dipisahkan secara fisik"
    },
    answer: "D",
    explanation: "Unsur adalah zat murni yang tidak dapat dipisahkan secara fisik maupun kimia menjadi zat yang lebih sederhana."
  },
  {
    q: "25. Contoh senyawa dalam kehidupan sehari-hari adalah...",
    options: {
      A: "Besi",
      B: "Emas",
      C: "Karbon dioksida",
      D: "Nitrogen"
    },
    answer: "C",
    explanation: "Karbon dioksida (CO2) adalah senyawa yang terdiri dari unsur karbon dan oksigen. Besi, emas, dan nitrogen adalah unsur."
  },
  {
    q: "26. Perbedaan mendasar antara unsur, senyawa, dan campuran adalah...",
    options: {
      A: "Unsur dan senyawa adalah zat murni, campuran bukan",
      B: "Unsur dan campuran dapat diuraikan, senyawa tidak",
      C: "Senyawa dan campuran memiliki komposisi tetap, unsur tidak",
      D: "Semua adalah zat murni"
    },
    answer: "A",
    explanation: "Unsur dan senyawa memiliki komposisi yang tetap dan merupakan zat murni, sedangkan campuran adalah gabungan dua atau lebih zat yang komposisinya tidak tetap dan sifat-sifatnya masih tampak."
  },
  {
    q: "27. Susu adalah contoh dari...",
    options: {
      A: "Unsur",
      B: "Senyawa",
      C: "Campuran homogen",
      D: "Campuran heterogen"
    },
    answer: "D",
    explanation: "Susu adalah campuran heterogen karena partikel-partikelnya (lemak, protein) tidak tercampur sempurna dan dapat terlihat terpisah jika didiamkan."
  },
  {
    q: "28. Garam dilarutkan dalam air akan membentuk...",
    options: {
      A: "Senyawa baru",
      B: "Campuran homogen",
      C: "Campuran heterogen",
      D: "Unsur baru"
    },
    answer: "B",
    explanation: "Garam yang larut sempurna dalam air akan membentuk larutan, yaitu campuran homogen."
  },
  {
    q: "29. Berdasarkan karakteristiknya, campuran yang komponennya masih dapat dibedakan secara langsung disebut...",
    options: {
      A: "Unsur",
      B: "Senyawa",
      C: "Campuran homogen",
      D: "Campuran heterogen"
    },
    answer: "D",
    explanation: "Dalam campuran heterogen, komponen-komponen penyusunnya masih dapat dibedakan secara visual."
  },
  {
    q: "30. Sistem periodik unsur diatur berdasarkan...",
    options: {
      A: "Massa atom",
      B: "Nomor atom",
      C: "Jumlah neutron",
      D: "Jumlah proton dan neutron"
    },
    answer: "B",
    explanation: "Sistem periodik modern disusun berdasarkan kenaikan nomor atom (jumlah proton)."
  },
  {
    q: "31. Lajur horizontal dalam sistem periodik unsur disebut...",
    options: {
      A: "Golongan",
      B: "Periode",
      C: "Blok",
      D: "Deret"
    },
    answer: "B",
    explanation: "Lajur horizontal dalam sistem periodik disebut periode, menunjukkan jumlah kulit elektron."
  },
  {
    q: "32. Unsur-unsur dalam satu golongan memiliki kesamaan dalam...",
    options: {
      A: "Jumlah kulit elektron",
      B: "Jumlah proton",
      C: "Jumlah elektron valensi",
      D: "Massa atom"
    },
    answer: "C",
    explanation: "Unsur-unsur dalam satu golongan memiliki jumlah elektron valensi yang sama, sehingga sifat kimianya mirip."
  },
  {
    q: "33. Nomor atom suatu unsur menunjukkan...",
    options: {
      A: "Jumlah neutron dalam inti atom",
      B: "Jumlah proton dalam inti atom",
      C: "Jumlah elektron di kulit terluar",
      D: "Massa total atom"
    },
    answer: "B",
    explanation: "Nomor atom suatu unsur sama dengan jumlah proton dalam inti atomnya."
  },
  {
    q: "34. Unsur dengan nomor atom 17 termasuk dalam golongan...",
    options: {
      A: "Alkali",
      B: "Alkali tanah",
      C: "Halogen",
      D: "Gas mulia"
    },
    answer: "C",
    explanation: "Unsur dengan nomor atom 17 adalah Klor (Cl), yang termasuk dalam golongan Halogen (Golongan 17 atau VIIA)."
  },
  {
    q: "35. Pemisahan campuran berdasarkan perbedaan ukuran partikel padat dan cairan dapat dilakukan dengan metode...",
    options: {
      A: "Distilasi",
      B: "Sublimasi",
      C: "Filtrasi",
      D: "Kromatografi"
    },
    answer: "C",
    explanation: "Filtrasi (penyaringan) digunakan untuk memisahkan padatan dari cairan berdasarkan perbedaan ukuran partikel."
  },
  {
    q: "36. Metode pemisahan campuran yang memanfaatkan gaya sentrifugal untuk memisahkan partikel padat dari cairan adalah...",
    options: {
      A: "Dekantasi",
      B: "Sentrifugasi",
      C: "Evaporasi",
      D: "Kristalisasi"
    },
    answer: "B",
    explanation: "Sentrifugasi menggunakan gaya sentrifugal untuk memisahkan komponen campuran berdasarkan perbedaan massa jenisnya."
  },
  {
    q: "37. Untuk memisahkan padatan tersuspensi dalam cairan dengan cepat dan efisien, metode yang paling cocok adalah...",
    options: {
      A: "Penyaringan biasa",
      B: "Sentrifugasi",
      C: "Penguapan",
      D: "Dekantasi"
    },
    answer: "B",
    explanation: "Sentrifugasi sangat efektif untuk memisahkan partikel padat halus yang tersuspensi dalam cairan."
  },
  {
    q: "38. Contoh campuran yang dapat dipisahkan dengan sentrifugasi adalah...",
    options: {
      A: "Air laut",
      B: "Susu",
      C: "Larutan gula",
      D: "Air dan minyak"
    },
    answer: "B",
    explanation: "Susu dapat dipisahkan menjadi skim milk dan krim menggunakan sentrifugasi."
  },
  {
    q: "39. Campuran homogen memiliki karakteristik...",
    options: {
      A: "Komponen penyusunnya dapat dibedakan",
      B: "Komponen penyusunnya tidak dapat dibedakan secara visual",
      C: "Terbentuk dari reaksi kimia",
      D: "Memiliki endapan"
    },
    answer: "B",
    explanation: "Dalam campuran homogen, komponen-komponennya tercampur sempurna sehingga tidak dapat dibedakan lagi secara visual."
  },
  {
    q: "40. Berikut ini yang termasuk contoh campuran heterogen adalah...",
    options: {
      A: "Udara",
      B: "Sirup",
      C: "Air kopi (tanpa ampas)",
      D: "Air dan pasir"
    },
    answer: "D",
    explanation: "Air dan pasir adalah campuran heterogen karena pasir tidak larut dalam air dan dapat terlihat terpisah."
  },
  {
    q: "41. Lapisan bumi yang paling tebal adalah...",
    options: {
      A: "Kerak bumi",
      B: "Mantel bumi",
      C: "Inti luar",
      D: "Inti dalam"
    },
    answer: "B",
    explanation: "Mantel bumi adalah lapisan paling tebal, membentang dari kedalaman sekitar 40 km hingga 2.900 km."
  },
  {
    q: "42. Lapisan bumi tempat terjadinya aktivitas geologi seperti gempa bumi dan gunung berapi adalah...",
    options: {
      A: "Inti dalam",
      B: "Inti luar",
      C: "Astenosfer",
      D: "Litosfer"
    },
    answer: "D",
    explanation: "Litosfer adalah lapisan terluar bumi yang terdiri dari kerak bumi dan bagian atas mantel, tempat terjadinya aktivitas tektonik."
  },
  {
    q: "43. Karakteristik inti dalam bumi adalah...",
    options: {
      A: "Berwujud cair",
      B: "Suhu rendah",
      C: "Berwujud padat dan kaya akan besi nikel",
      D: "Lapisan yang paling dingin"
    },
    answer: "C",
    explanation: "Inti dalam bumi berwujud padat, terdiri dari besi dan nikel, serta memiliki suhu dan tekanan yang sangat tinggi."
  },
  {
    q: "44. Fungsi utama lapisan ozon di atmosfer bumi adalah...",
    options: {
      A: "Menyerap panas matahari",
      B: "Memantulkan gelombang radio",
      C: "Melindungi bumi dari radiasi ultraviolet",
      D: "Menyediakan oksigen untuk pernapasan"
    },
    answer: "C",
    explanation: "Lapisan ozon (O3) berfungsi menyerap sebagian besar radiasi ultraviolet (UV) berbahaya dari matahari."
  },
  {
    q: "45. Lapisan atmosfer tempat terjadinya fenomena cuaca seperti awan dan hujan adalah...",
    options: {
      A: "Stratosfer",
      B: "Mesosfer",
      C: "Troposfer",
      D: "Termosfer"
    },
    answer: "C",
    explanation: "Troposfer adalah lapisan atmosfer terendah tempat sebagian besar fenomena cuaca terjadi."
  },
  {
    q: "46. Pergerakan lempeng tektonik yang saling menjauh disebut...",
    options: {
      A: "Divergen",
      B: "Konvergen",
      C: "Transform",
      D: "Subduksi"
    },
    answer: "A",
    explanation: "Pergerakan lempeng divergen adalah pergerakan di mana lempeng saling menjauh, menyebabkan terbentuknya punggung tengah samudra."
  },
  {
    q: "47. Pegunungan Himalaya terbentuk akibat pergerakan lempeng...",
    options: {
      A: "Divergen",
      B: "Konvergen",
      C: "Transform",
      D: "Subduksi"
    },
    answer: "B",
    explanation: "Pegunungan Himalaya terbentuk akibat tabrakan (konvergen) antara lempeng India dan lempeng Eurasia."
  },
  {
    q: "48. Titik di permukaan bumi yang berada tepat di atas hiposentrum gempa bumi disebut...",
    options: {
      A: "Fokus",
      B: "Episentrum",
      C: "Magma",
      D: "Inti gempa"
    },
    answer: "B",
    explanation: "Episentrum adalah titik di permukaan bumi yang berada tepat di atas hiposentrum (pusat gempa di dalam bumi)."
  },
  {
    q: "49. Upaya mitigasi bencana gunung berapi yang paling penting saat terjadi erupsi adalah...",
    options: {
      A: "Membangun pos pengamatan jauh",
      B: "Melakukan evakuasi penduduk",
      C: "Menyiapkan jalur evakuasi",
      D: "Menanam pohon di sekitar gunung"
    },
    answer: "B",
    explanation: "Saat terjadi erupsi, evakuasi penduduk adalah upaya mitigasi yang paling krusial untuk menyelamatkan nyawa."
  },
  {
    q: "50. Tahapan dalam siklus hidrologi di mana uap air berubah menjadi titik-titik air di atmosfer adalah...",
    options: {
      A: "Evaporasi",
      B: "Kondensasi",
      C: "Presipitasi",
      D: "Infiltrasi"
    },
    answer: "B",
    explanation: "Kondensasi adalah proses perubahan uap air menjadi titik-titik air atau kristal es yang membentuk awan."
  }
];

let current = 0;
const userAnswers = {};

function loadQuestion() {
  const q = questions[current];
  document.getElementById("question").textContent = q.q;

  const optionsBox = document.getElementById("options");
  optionsBox.innerHTML = "";
  for (const key in q.options) {
    const line = document.createElement("div");
    line.textContent = `${key}. ${q.options[key]}`;
    optionsBox.appendChild(line);
  }

  const feedback = document.getElementById("feedback");
  feedback.style.display = "none";
  feedback.textContent = "";
  feedback.className = "feedback";

  updateAnswerButtons();
}

function updateAnswerButtons() {
  const selected = userAnswers[current];
  ["A", "B", "C", "D"].forEach((id) => {
    const btn = document.getElementById("btn" + id);
    btn.classList.toggle("active", selected === id);
  });
}

function selectAnswer(letter) {
  userAnswers[current] = letter;
  updateAnswerButtons();

  const q = questions[current];
  const feedback = document.getElementById("feedback");
  feedback.style.display = "block";

  if (letter === q.answer) {
    feedback.textContent = "Jawaban benar!";
    feedback.className = "feedback correct";
  } else {
    feedback.textContent = `Jawaban salah. Kunci: ${q.answer}. ${q.options[q.answer]}\nPenjelasan: ${q.explanation}`;
    feedback.className = "feedback wrong";
  }
}

function nextQuestion() {
  if (current < questions.length - 1) {
    current++;
    loadQuestion();
  }
}

function prevQuestion() {
  if (current > 0) {
    current--;
    loadQuestion();
  }
}

window.onload = loadQuestion;