const questions = [
  // 1. Getaran (Amplitudo, frekuensi, Titik keseimbangan, 1 getaran)
  {
    q: "1. Titik di mana benda yang bergetar tidak mengalami simpangan disebut titik...",
    options: {
      A: "Puncak",
      B: "Lembah",
      C: "Keseimbangan",
      D: "Simpang"
    },
    answer: "C",
    explanation: "Titik keseimbangan adalah posisi di mana benda tidak memiliki gaya pemulih atau simpangan."
  },
  {
    q: "2. Jarak simpangan terjauh dari titik keseimbangan saat benda bergetar disebut...",
    options: {
      A: "Frekuensi",
      B: "Periode",
      C: "Amplitudo",
      D: "Panjang gelombang"
    },
    answer: "C",
    explanation: "Amplitudo adalah simpangan maksimum dari posisi setimbang."
  },
  {
    q: "3. Banyaknya getaran yang terjadi dalam satu detik disebut...",
    options: {
      A: "Periode",
      B: "Amplitudo",
      C: "Frekuensi",
      D: "Panjang gelombang"
    },
    answer: "C",
    explanation: "Frekuensi adalah jumlah getaran atau siklus per satuan waktu."
  },
  {
    q: "4. Satu getaran penuh pada pegas dimulai dari titik keseimbangan ke kanan, lalu kembali ke titik keseimbangan, ke kiri, dan kembali ke titik keseimbangan. Gerak ini dapat digambarkan dari:",
    options: {
      A: "A-B-C-B-A",
      B: "A-B-A-C-A",
      C: "A-B-C",
      D: "A-B"
    },
    answer: "A", // Misal A=titik keseimbangan, B=kanan, C=kiri
    explanation: "Satu getaran penuh mencakup satu siklus lengkap bolak-balik melewati titik keseimbangan."
  },

  // 2. Gelombang (Lambda, Amplitudo, cepat rambat, periode, frekuensi)
  {
    q: "5. Jarak antara dua puncak gelombang yang berurutan atau dua lembah gelombang yang berurutan disebut...",
    options: {
      A: "Amplitudo",
      B: "Periode",
      C: "Frekuensi",
      D: "Panjang gelombang (λ)"
    },
    answer: "D",
    explanation: "Panjang gelombang (λ) adalah jarak antara dua titik fase yang sama pada gelombang yang berurutan."
  },
  {
    q: "6. Simpangan maksimum dari posisi setimbang pada gelombang disebut...",
    options: {
      A: "Frekuensi",
      B: "Amplitudo",
      C: "Periode",
      D: "Cepat rambat"
    },
    answer: "B",
    explanation: "Amplitudo gelombang adalah simpangan maksimum dari posisi setimbang."
  },
  {
    q: "7. Jika sebuah gelombang memiliki frekuensi 5 Hz dan panjang gelombang 2 meter, berapakah cepat rambat gelombang tersebut?",
    options: {
      A: "0,4 m/s",
      B: "2,5 m/s",
      C: "10 m/s",
      D: "7 m/s"
    },
    answer: "C",
    explanation: "Cepat rambat gelombang (v) = frekuensi (f) × panjang gelombang (λ). Jadi, v = 5 Hz × 2 m = 10 m/s."
  },
  {
    q: "8. Waktu yang dibutuhkan untuk satu gelombang sempurna melewati suatu titik disebut...",
    options: {
      A: "Frekuensi",
      B: "Amplitudo",
      C: "Periode",
      D: "Panjang gelombang"
    },
    answer: "C",
    explanation: "Periode (T) adalah waktu yang dibutuhkan untuk satu gelombang (atau satu siklus) lengkap."
  },
  {
    q: "9. Hubungan antara periode (T) dan frekuensi (f) gelombang adalah...",
    options: {
      A: "T = f",
      B: "T = 1/f",
      C: "T = f/2",
      D: "T = 2f"
    },
    answer: "B",
    explanation: "Periode adalah kebalikan dari frekuensi, dan sebaliknya (T = 1/f)."
  },

  // 3. Mencari kedalaman bunyi
  {
    q: "10. Untuk mengukur kedalaman laut, kapal mengirimkan gelombang bunyi ke dasar laut. Jika bunyi pantul diterima kembali setelah 4 detik dan cepat rambat bunyi di air laut adalah 1500 m/s, berapakah kedalaman laut tersebut?",
    options: {
      A: "1500 m",
      B: "3000 m",
      C: "6000 m",
      D: "750 m"
    },
    answer: "B",
    explanation: "Jarak tempuh total = v × t = 1500 m/s × 4 s = 6000 m. Karena bunyi pergi dan kembali, kedalaman laut = jarak tempuh total / 2 = 6000 m / 2 = 3000 m."
  },
  {
    q: "11. Sebuah sonar digunakan untuk mendeteksi objek di bawah air. Jika bunyi dipancarkan dan gema diterima dalam 0,6 detik, dan cepat rambat bunyi di air adalah 1400 m/s, berapa jarak objek tersebut dari sonar?",
    options: {
      A: "420 m",
      B: "529 m",
      C: "221 m",
      D: "104 m"
    },
    answer: "A",
    explanation: "Jarak total = v × t = 1400 m/s × 0,6 s = 840 m. Jarak objek = Jarak total / 2 = 840 m / 2 = 420 m."
  },

  // 4. Syarat terjadinya bunyi
  {
    q: "12. Syarat utama terjadinya bunyi adalah sebagai berikut, kecuali...",
    options: {
      A: "Adanya sumber bunyi",
      B: "Adanya medium perantara",
      C: "Adanya pendengar",
      D: "Adanya ruang hampa"
    },
    answer: "D",
    explanation: "Bunyi memerlukan medium untuk merambat, sehingga tidak dapat merambat di ruang hampa."
  },
  {
    q: "13. Medium yang paling baik dalam merambatkan bunyi adalah...",
    options: {
      A: "Udara",
      B: "Air",
      C: "Padatan",
      D: "Ruang hampa"
    },
    answer: "C",
    explanation: "Bunyi merambat paling cepat dan efisien melalui medium padat, kemudian cair, dan paling lambat di gas."
  },

  // 5. Sifat Cahaya
  {
    q: "14. Ketika cahaya mengenai permukaan cermin, cahaya tersebut akan...",
    options: {
      A: "Dibiaskan",
      B: "Dipantulkan",
      C: "Diserap",
      D: "Dihamburkan"
    },
    answer: "B",
    explanation: "Cermin memantulkan cahaya. Ini adalah sifat refleksi cahaya."
  },
  {
    q: "15. Peristiwa pembelokan arah rambat cahaya ketika melewati dua medium yang berbeda kerapatan optiknya disebut...",
    options: {
      A: "Refleksi",
      B: "Difraksi",
      C: "Refraksi",
      D: "Dispersi"
    },
    answer: "C",
    explanation: "Refraksi atau pembiasan adalah peristiwa pembelokan cahaya saat melewati dua medium dengan indeks bias berbeda."
  },
  {
    q: "16. Mengapa sendok yang diletakkan sebagian di dalam gelas berisi air terlihat bengkok?",
    options: {
      A: "Karena sendok memuai",
      B: "Karena cahaya mengalami difraksi",
      C: "Karena cahaya mengalami refraksi",
      D: "Karena air menyebabkan ilusi optik"
    },
    answer: "C",
    explanation: "Pembiasan cahaya terjadi saat cahaya merambat dari air ke udara (atau sebaliknya), menyebabkan sendok terlihat bengkok."
  },
  {
    q: "17. Sifat cahaya yang memungkinkan kita melihat warna-warni pelangi adalah...",
    options: {
      A: "Refleksi",
      B: "Refraksi",
      C: "Difraksi",
      D: "Dispersi"
    },
    answer: "D",
    explanation: "Dispersi cahaya adalah penguraian cahaya putih menjadi spektrum warna (pelangi) saat melewati prisma atau tetesan air."
  },

  // 6. Sifat bayangan cermin datar
  {
    q: "18. Bayangan yang dibentuk oleh cermin datar bersifat...",
    options: {
      A: "Nyata, terbalik, diperkecil",
      B: "Nyata, tegak, diperbesar",
      C: "Maya, tegak, sama besar",
      D: "Maya, terbalik, sama besar"
    },
    answer: "C",
    explanation: "Cermin datar selalu membentuk bayangan yang maya (tidak dapat ditangkap layar), tegak, dan ukurannya sama dengan benda aslinya."
  },
  {
    q: "19. Jika Anda berdiri 1 meter di depan cermin datar, berapa jarak bayangan Anda di dalam cermin dari posisi Anda berdiri?",
    options: {
      A: "0,5 meter",
      B: "1 meter",
      C: "2 meter",
      D: "Tidak terhingga"
    },
    answer: "C",
    explanation: "Jarak benda ke cermin sama dengan jarak bayangan ke cermin. Jadi, jarak bayangan dari Anda adalah 1m (benda ke cermin) + 1m (cermin ke bayangan) = 2 meter."
  },

  // 7. Menentukan sifat bayangan, jarak fokus, jarak benda pada cermin cekung
  {
    q: "20. Benda diletakkan 10 cm di depan cermin cekung dengan titik fokus 5 cm. Sifat bayangan yang terbentuk adalah...",
    options: {
      A: "Nyata, terbalik, diperkecil",
      B: "Nyata, terbalik, sama besar",
      C: "Maya, tegak, diperbesar",
      D: "Nyata, terbalik, diperbesar"
    },
    answer: "B",
    explanation: "Jika benda diletakkan di R (jari-jari kelengkungan, R=2f=10cm), bayangan yang terbentuk adalah nyata, terbalik, dan sama besar di R juga."
  },
  {
    q: "21. Jika sebuah benda diletakkan pada jarak 20 cm di depan cermin cekung, dan bayangan nyata terbentuk pada jarak 30 cm di belakang cermin, berapakah jarak fokus cermin cekung tersebut?",
    options: {
      A: "10 cm",
      B: "12 cm",
      C: "50 cm",
      D: "60 cm"
    },
    answer: "B",
    explanation: "Menggunakan rumus lensa/cermin: 1/f = 1/s + 1/s'. Dengan s=20 cm dan s'=30 cm, maka 1/f = 1/20 + 1/30 = 3/60 + 2/60 = 5/60. Jadi, f = 60/5 = 12 cm."
  },
  {
    q: "22. Bayangan maya, tegak, dan diperbesar oleh cermin cekung akan terbentuk jika benda diletakkan di antara...",
    options: {
      A: "Titik fokus dan pusat kelengkungan",
      B: "Pusat kelengkungan dan tak hingga",
      C: "Titik fokus dan cermin",
      D: "Titik pusat kelengkungan"
    },
    answer: "C",
    explanation: "Bayangan maya, tegak, dan diperbesar pada cermin cekung hanya terbentuk jika benda diletakkan di antara titik fokus (F) dan cermin."
  },

  // 8. Menghitung kekuatan lensa pada penyakit miopi
  {
    q: "23. Seseorang menderita miopi dan tidak dapat melihat jelas benda lebih dari 2 meter. Berapa kekuatan lensa kacamata yang dibutuhkan agar ia dapat melihat benda jauh dengan jelas?",
    options: {
      A: "-0,5 dioptri",
      B: "+0,5 dioptri",
      C: "-2 dioptri",
      D: "+2 dioptri"
    },
    answer: "A",
    explanation: "Untuk miopi, kekuatan lensa P = -1/PR, di mana PR adalah titik jauh mata (punctum remotum). Dalam kasus ini, PR = 2 m. Jadi, P = -1/2 = -0,5 dioptri."
  },
  {
    q: "24. Titik jauh mata (punctum remotum) dari seorang penderita miopi adalah 50 cm. Kekuatan lensa yang dibutuhkan agar dapat melihat benda jauh adalah...",
    options: {
      A: "+2 dioptri",
      B: "-2 dioptri",
      C: "+0,5 dioptri",
      D: "-0,5 dioptri"
    },
    answer: "B",
    explanation: "PR = 50 cm = 0,5 m. P = -1/PR = -1/0,5 = -2 dioptri."
  },

  // 9. Kelainan mata & kaca mata yang digunakan
  {
    q: "25. Kelainan mata di mana seseorang tidak dapat melihat benda jauh dengan jelas disebut...",
    options: {
      A: "Hipermetropi",
      B: "Miopi",
      C: "Presbiopi",
      D: "Astigmatisma"
    },
    answer: "B",
    explanation: "Miopi atau rabun jauh adalah kelainan mata di mana benda jauh terlihat kabur."
  },
  {
    q: "26. Kaca mata yang digunakan untuk penderita miopi adalah lensa...",
    options: {
      A: "Cembung (positif)",
      B: "Cekung (negatif)",
      C: "Silinder",
      D: "Bifokal"
    },
    answer: "B",
    explanation: "Lensa cekung digunakan untuk miopi karena membantu menyebarkan cahaya sehingga fokus jatuh tepat di retina."
  },
  {
    q: "27. Kelainan mata di mana seseorang tidak dapat melihat benda dekat dengan jelas disebut...",
    options: {
      A: "Miopi",
      B: "Hipermetropi",
      C: "Presbiopi",
      D: "Astigmatisma"
    },
    answer: "B",
    explanation: "Hipermetropi atau rabun dekat adalah kelainan mata di mana benda dekat terlihat kabur."
  },
  {
    q: "28. Kaca mata yang digunakan untuk penderita hipermetropi adalah lensa...",
    options: {
      A: "Cekung (negatif)",
      B: "Cembung (positif)",
      C: "Silinder",
      D: "Bifokal"
    },
    answer: "B",
    explanation: "Lensa cembung digunakan untuk hipermetropi karena membantu mengumpulkan cahaya sehingga fokus jatuh tepat di retina."
  },

  // 10. Membedakan unsur & senyawa
  {
    q: "29. Zat tunggal yang tidak dapat diuraikan lagi menjadi zat yang lebih sederhana melalui reaksi kimia biasa disebut...",
    options: {
      A: "Senyawa",
      B: "Campuran",
      C: "Unsur",
      D: "Larutan"
    },
    answer: "C",
    explanation: "Unsur adalah zat murni yang hanya terdiri dari satu jenis atom dan tidak dapat dipecah lebih lanjut."
  },
  {
    q: "30. Gabungan dua atau lebih unsur yang terikat secara kimia dengan perbandingan tertentu disebut...",
    options: {
      A: "Unsur",
      B: "Campuran",
      C: "Senyawa",
      D: "Suspensi"
    },
    answer: "C",
    explanation: "Senyawa terbentuk dari dua atau lebih unsur yang berikatan kimia dan memiliki sifat yang berbeda dari unsur penyusunnya."
  },

  // 11. Ciri unsur logam
  {
    q: "31. Berikut ini adalah ciri-ciri unsur logam, kecuali...",
    options: {
      A: "Konduktor panas dan listrik yang baik",
      B: "Berwujud padat pada suhu kamar (kecuali merkuri)",
      C: "Bersifat rapuh",
      D: "Dapat ditempa dan ditarik"
    },
    answer: "C",
    explanation: "Logam umumnya bersifat liat (dapat ditempa) dan ulet (dapat ditarik), bukan rapuh. Nonlogam cenderung rapuh."
  },
  {
    q: "32. Unsur yang memiliki kilau metalik dan umumnya mengkilap adalah...",
    options: {
      A: "Gas",
      B: "Nonlogam",
      C: "Logam",
      D: "Metaloid"
    },
    answer: "C",
    explanation: "Kilau metalik adalah salah satu ciri khas unsur logam."
  },

  // 12. Contoh senyawa
  {
    q: "33. Contoh senyawa kimia yang sering kita temukan sehari-hari adalah...",
    options: {
      A: "Emas (Au)",
      B: "Oksigen (O2)",
      C: "Air (H2O)",
      D: "Udara"
    },
    answer: "C",
    explanation: "Air (H2O) adalah senyawa karena terdiri dari unsur Hidrogen dan Oksigen yang terikat kimia. Emas dan Oksigen adalah unsur, udara adalah campuran."
  },
  {
    q: "34. Garam dapur (NaCl) merupakan contoh dari...",
    options: {
      A: "Unsur",
      B: "Senyawa",
      C: "Campuran homogen",
      D: "Campuran heterogen"
    },
    answer: "B",
    explanation: "Garam dapur (Natrium Klorida) adalah senyawa yang terbentuk dari unsur Natrium (Na) dan Klorin (Cl) yang berikatan kimia."
  },

  // 13. Membedakan unsur senyawa & campuran berdasarkan karakteristiknya
  {
    q: "35. Zat yang sifatnya masih menunjukkan sifat-sifat zat penyusunnya, serta dapat dipisahkan secara fisika, adalah...",
    options: {
      A: "Unsur",
      B: "Senyawa",
      C: "Campuran",
      D: "Larutan"
    },
    answer: "C",
    explanation: "Campuran adalah gabungan dua atau lebih zat di mana setiap zat mempertahankan sifat kimianya sendiri dan dapat dipisahkan secara fisik."
  },
  {
    q: "36. Gula yang dilarutkan dalam air membentuk...",
    options: {
      A: "Unsur",
      B: "Senyawa",
      C: "Campuran homogen",
      D: "Campuran heterogen"
    },
    answer: "C",
    explanation: "Larutan gula adalah campuran homogen karena gula terlarut sempurna dalam air dan tidak dapat dibedakan secara kasat mata."
  },
  {
    q: "37. Manakah di antara berikut ini yang merupakan campuran heterogen?",
    options: {
      A: "Udara",
      B: "Air gula",
      C: "Tanah",
      D: "Tembaga"
    },
    answer: "C",
    explanation: "Tanah adalah campuran heterogen karena komponen-komponennya (pasir, kerikil, humus, dll.) masih dapat dibedakan secara kasat mata."
  },

  // 14. Sistem periodik unsur (Golongan, Periode, no atom).
  {
    q: "38. Dalam sistem periodik unsur, unsur-unsur yang memiliki jumlah kulit elektron yang sama terletak dalam...",
    options: {
      A: "Golongan yang sama",
      B: "Periode yang sama",
      C: "Blok yang sama",
      D: "Jenis yang sama"
    },
    answer: "B",
    explanation: "Periode dalam sistem periodik menunjukkan jumlah kulit elektron yang dimiliki oleh atom-atom dalam periode tersebut."
  },
  {
    q: "39. Unsur-unsur dalam satu golongan pada sistem periodik memiliki...",
    options: {
      A: "Jumlah kulit elektron yang sama",
      B: "Massa atom yang sama",
      C: "Sifat kimia yang mirip",
      D: "Nomor atom yang sama"
    },
    answer: "C",
    explanation: "Unsur dalam satu golongan memiliki konfigurasi elektron valensi yang sama, sehingga sifat kimia mereka mirip."
  },
  {
    q: "40. Nomor atom suatu unsur menunjukkan...",
    options: {
      A: "Jumlah neutron dalam inti atom",
      B: "Jumlah massa atom",
      C: "Jumlah proton dalam inti atom",
      D: "Jumlah elektron valensi"
    },
    answer: "C",
    explanation: "Nomor atom (Z) suatu unsur sama dengan jumlah proton dalam inti atom, yang juga sama dengan jumlah elektron pada atom netral."
  },

  // 15. Pemisahan campuran filtrasi & sentrifugasi
  {
    q: "41. Metode pemisahan campuran yang digunakan untuk memisahkan zat padat dari cairan dengan melewatkannya melalui saringan atau filter disebut...",
    options: {
      A: "Sentrifugasi",
      B: "Distilasi",
      C: "Filtrasi",
      D: "Evaporasi"
    },
    answer: "C",
    explanation: "Filtrasi adalah teknik pemisahan padatan tak larut dari cairan menggunakan media filter."
  },
  {
    q: "42. Metode pemisahan yang memanfaatkan gaya sentrifugal untuk memisahkan partikel padat dari cairan berdasarkan perbedaan massa jenisnya, seperti pada pemisahan sel darah, disebut...",
    options: {
      A: "Filtrasi",
      B: "Kristalisasi",
      C: "Sentrifugasi",
      D: "Sublimasi"
    },
    answer: "C",
    explanation: "Sentrifugasi menggunakan putaran cepat untuk memisahkan komponen campuran berdasarkan perbedaan massa jenis."
  },

  // 16. Membedakan campuran homo & heterogen
  {
    q: "43. Campuran di mana komponen-komponennya tercampur sempurna dan tidak dapat dibedakan lagi secara kasat mata disebut campuran...",
    options: {
      A: "Heterogen",
      B: "Koloid",
      C: "Suspensi",
      D: "Homogen"
    },
    answer: "D",
    explanation: "Campuran homogen adalah campuran yang seragam di seluruh bagiannya, seperti larutan."
  },
  {
    q: "44. Contoh campuran heterogen adalah...",
    options: {
      A: "Udara bersih",
      B: "Larutan garam",
      C: "Air dan minyak",
      D: "Perunggu"
    },
    answer: "C",
    explanation: "Air dan minyak tidak saling melarut dan membentuk dua lapisan yang terpisah, menjadikannya campuran heterogen."
  },

  // 17. Karakteristik lapisan bumi
  {
    q: "45. Lapisan bumi paling luar yang dihuni oleh makhluk hidup adalah...",
    options: {
      A: "Inti bumi",
      B: "Mantel bumi",
      C: "Kerak bumi",
      D: "Litosfer"
    },
    answer: "C",
    explanation: "Kerak bumi adalah lapisan terluar bumi tempat kita tinggal."
  },
  {
    q: "46. Lapisan bumi yang tersusun dari batuan padat dan berada di bawah kerak bumi adalah...",
    options: {
      A: "Inti luar",
      B: "Inti dalam",
      C: "Mantel bumi",
      D: "Atmosfer"
    },
    answer: "C",
    explanation: "Mantel bumi adalah lapisan di bawah kerak bumi yang sebagian besar tersusun dari batuan padat silikat."
  },
  {
    q: "47. Bagian paling dalam dari bumi yang tersusun dari nikel dan besi adalah...",
    options: {
      A: "Kerak bumi",
      B: "Mantel bumi",
      C: "Inti luar",
      D: "Inti dalam"
    },
    answer: "D",
    explanation: "Inti dalam bumi dipercaya tersusun dari paduan besi dan nikel yang padat."
  },

  // 18. Lapisan atmosfer bumi & fungsinya
  {
    q: "48. Lapisan atmosfer yang merupakan tempat terjadinya fenomena cuaca seperti hujan, awan, dan angin adalah...",
    options: {
      A: "Stratosfer",
      B: "Mesosfer",
      C: "Termosfer",
      D: "Troposfer"
    },
    answer: "D",
    explanation: "Troposfer adalah lapisan atmosfer terendah tempat sebagian besar fenomena cuaca terjadi."
  },
  {
    q: "49. Lapisan atmosfer yang mengandung lapisan ozon dan berfungsi melindungi bumi dari radiasi ultraviolet berbahaya adalah...",
    options: {
      A: "Troposfer",
      B: "Stratosfer",
      C: "Mesosfer",
      D: "Termosfer"
    },
    answer: "B",
    explanation: "Stratosfer mengandung lapisan ozon yang menyerap sebagian besar radiasi UV dari matahari."
  },
  {
    q: "50. Lapisan atmosfer tempat terjadinya pembakaran meteor yang jatuh ke bumi adalah...",
    options: {
      A: "Stratosfer",
      B: "Mesosfer",
      C: "Termosfer",
      D: "Eksosfer"
    },
    answer: "B",
    explanation: "Mesosfer adalah lapisan di mana meteoroid terbakar akibat gesekan dengan molekul udara."
  },
  {
    q: "51. Lapisan atmosfer yang sangat panas dan tempat terjadinya aurora adalah...",
    options: {
      A: "Troposfer",
      B: "Stratosfer",
      C: "Mesosfer",
      D: "Termosfer (Ionosfer)"
    },
    answer: "D",
    explanation: "Termosfer (yang juga mencakup ionosfer) adalah lapisan dengan suhu sangat tinggi dan tempat terjadinya aurora."
  },

  // 19. Pergeseran lempeng (nama & gambarnya) - Fokus pada nama & jenis pergeseran
  // Catatan: Karena tidak bisa menampilkan gambar, saya fokus pada konsep jenis pergeseran.
  {
    q: "52. Pergerakan lempeng tektonik yang saling menjauh satu sama lain disebut batas lempeng...",
    options: {
      A: "Divergen",
      B: "Konvergen",
      C: "Transform",
      D: "Subduksi"
    },
    answer: "A",
    explanation: "Batas divergen adalah tempat lempeng saling menjauh, menyebabkan pembentukan kerak baru (misalnya, punggungan tengah samudra)."
  },
  {
    q: "53. Zona di mana dua lempeng tektonik bergerak saling mendekat dan salah satu lempeng menunjam di bawah yang lain disebut batas lempeng...",
    options: {
      A: "Divergen",
      B: "Konvergen",
      C: "Transform",
      D: "Ekstensi"
    },
    answer: "B",
    explanation: "Batas konvergen adalah tempat lempeng saling mendekat, yang dapat menyebabkan subduksi, pegunungan, atau gunung berapi."
  },
  {
    q: "54. Pergerakan lempeng tektonik yang saling bergeser secara horizontal, tanpa ada penghancuran atau pembentukan kerak bumi yang signifikan, disebut batas lempeng...",
    options: {
      A: "Divergen",
      B: "Konvergen",
      C: "Transform",
      D: "Subduksi"
    },
    answer: "C",
    explanation: "Batas transform adalah tempat lempeng saling bergeser ke samping, menyebabkan gempa bumi yang kuat (misalnya, Sesar San Andreas)."
  },

  // 20. Letak episentrum & hiposentrum, kekuatan gempa
  {
    q: "55. Titik di permukaan bumi yang berada tepat di atas sumber gempa di dalam bumi disebut...",
    options: {
      A: "Hiposentrum",
      B: "Episentrum",
      C: "Fokus gempa",
      D: "Patahan"
    },
    answer: "B",
    explanation: "Episentrum adalah titik di permukaan bumi yang paling merasakan dampak langsung dari gempa."
  },
  {
    q: "56. Titik di dalam bumi tempat gempa bumi berasal atau pecahnya batuan pertama kali disebut...",
    options: {
      A: "Episentrum",
      B: "Fokus gempa",
      C: "Pusat gempa",
      D: "Semua jawaban benar"
    },
    answer: "B", // Atau C, tergantung terminologi. Fokus gempa adalah istilah yang lebih spesifik.
    explanation: "Fokus gempa atau hiposentrum adalah titik asal gempa di bawah permukaan bumi."
  },
  {
    q: "57. Skala yang paling umum digunakan untuk mengukur kekuatan atau magnitudo gempa bumi adalah Skala...",
    options: {
      A: "Mercalli",
      B: "Richter",
      C: "Beaufort",
      D: "Celsius"
    },
    answer: "B",
    explanation: "Skala Richter adalah skala logaritmik yang mengukur magnitudo gempa bumi berdasarkan amplitudo gelombang seismik."
  },

  // 21. Mitigasi bencana gunung berapi.
  {
    q: "58. Tindakan mitigasi yang tepat dilakukan SAAT terjadi letusan gunung berapi adalah...",
    options: {
      A: "Membangun pos pengamatan gunung berapi",
      B: "Membuat peta kawasan rawan bencana",
      C: "Mengungsi ke tempat aman yang telah ditentukan",
      D: "Melakukan simulasi evakuasi secara berkala"
    },
    answer: "C",
    explanation: "Mengungsi adalah tindakan darurat yang dilakukan saat bencana terjadi untuk menyelamatkan diri."
  },
  {
    q: "59. Berikut ini adalah upaya mitigasi bencana letusan gunung berapi yang bersifat pra-bencana (sebelum kejadian), kecuali...",
    options: {
      A: "Sosialisasi jalur evakuasi",
      B: "Pembuatan sistem peringatan dini",
      C: "Pemberian bantuan logistik kepada pengungsi",
      D: "Penyusunan rencana kontinjensi"
    },
    answer: "C",
    explanation: "Pemberian bantuan logistik adalah upaya pasca-bencana atau saat tanggap darurat, bukan pra-bencana."
  },
  {
    q: "60. Salah satu tanda-tanda awal gunung berapi akan meletus adalah...",
    options: {
      A: "Suhu udara di sekitar gunung menjadi lebih dingin",
      B: "Meningkatnya aktivitas gempa vulkanik",
      C: "Tumbuhan di lereng gunung tumbuh subur",
      D: "Sumber mata air di sekitar gunung menjadi lebih banyak"
    },
    answer: "B",
    explanation: "Peningkatan frekuensi dan intensitas gempa vulkanik menunjukkan adanya pergerakan magma di bawah permukaan."
  },

  // 22. Siklus hidrologi / air hujan
  {
    q: "61. Proses perubahan air dari permukaan bumi menjadi uap air dan naik ke atmosfer disebut...",
    options: {
      A: "Kondensasi",
      B: "Presipitasi",
      C: "Evaporasi",
      D: "Infiltrasi"
    },
    answer: "C",
    explanation: "Evaporasi adalah proses penguapan air dari permukaan bumi (sungai, danau, laut)."
  },
  {
    q: "62. Proses pembentukan awan di mana uap air di atmosfer mendingin dan berubah menjadi titik-titik air atau kristal es disebut...",
    options: {
      A: "Evaporasi",
      B: "Transpirasi",
      C: "Kondensasi",
      D: "Presipitasi"
    },
    answer: "C",
    explanation: "Kondensasi adalah proses perubahan uap air menjadi cairan atau padat (awan)."
  },
  {
    q: "63. Air hujan, salju, atau embun yang jatuh dari atmosfer ke permukaan bumi disebut...",
    options: {
      A: "Evaporasi",
      B: "Kondensasi",
      C: "Presipitasi",
      D: "Runoff"
    },
    answer: "C",
    explanation: "Presipitasi adalah segala bentuk jatuhnya air dari atmosfer ke permukaan bumi."
  },
  {
    q: "64. Air hujan yang meresap ke dalam tanah dan mengisi cadangan air tanah disebut proses...",
    options: {
      A: "Evaporasi",
      B: "Transpirasi",
      C: "Infiltrasi",
      D: "Runoff"
    },
    answer: "C",
    explanation: "Infiltrasi adalah proses peresapan air ke dalam lapisan tanah."
  },

  // 23-40. Infografis
  // Bagian ini tidak dapat saya buatkan soal karena 'infografis' adalah format penyajian, bukan materi konten.
  // Jika Anda memiliki detail materi spesifik yang ada di infografis, mohon berikan detailnya.
  // Misalnya, jika infografis berisi tentang 'struktur sel tumbuhan', maka saya bisa buat soal tentang itu.
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

  updateQuestionCounter();
  updateAnswerButtons();
}

function updateQuestionCounter() {
  document.getElementById("current-question-num").textContent = current + 1;
  document.getElementById("total-questions").textContent = questions.length;
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

// Fungsi untuk menampilkan modal ringkasan
function showSummary() {
  const summaryModal = document.getElementById("summary-modal");
  const summaryList = document.getElementById("summary-list");
  summaryList.innerHTML = ""; // Bersihkan daftar sebelumnya

  for (let i = 0; i < questions.length; i++) {
    const listItem = document.createElement("li");
    listItem.dataset.questionIndex = i; // Simpan indeks soal di data attribute
    listItem.onclick = function() { // Tambahkan event listener saat klik
      goToQuestion(parseInt(this.dataset.questionIndex));
    };

    const questionNumberSpan = document.createElement("span");
    questionNumberSpan.classList.add("summary-question-number");
    questionNumberSpan.textContent = `${i + 1}.`;
    listItem.appendChild(questionNumberSpan);

    const userAnswer = userAnswers[i];
    const correctAnswer = questions[i].answer;
    const answerSpan = document.createElement("span");
    answerSpan.classList.add("summary-answer");

    if (userAnswer) {
      answerSpan.textContent = userAnswer;
      if (userAnswer === correctAnswer) {
        answerSpan.classList.add("correct");
      } else {
        answerSpan.classList.add("wrong");
      }
    } else {
      answerSpan.textContent = "-";
      answerSpan.classList.add("unanswered");
    }
    listItem.appendChild(answerSpan);

    summaryList.appendChild(listItem);
  }

  summaryModal.style.display = "flex";
}

// Fungsi untuk pergi ke soal tertentu dari ringkasan
function goToQuestion(index) {
  current = index;
  loadQuestion();
  closeSummary(); // Tutup modal setelah pindah soal
}

// Fungsi untuk menutup modal ringkasan
function closeSummary() {
  const summaryModal = document.getElementById("summary-modal");
  summaryModal.style.display = "none";
}

// Tambahkan event listener untuk menutup modal saat mengklik di luar konten modal
window.onclick = function(event) {
  const summaryModal = document.getElementById("summary-modal");
  if (event.target == summaryModal) {
    summaryModal.style.display = "none";
  }
}

window.onload = () => {
  loadQuestion();
  updateQuestionCounter();
};

// ... (kode JavaScript Anda sebelumnya) ...

function showSummary() {
  const summaryModal = document.getElementById("summary-modal");
  const summaryList = document.getElementById("summary-list");
  const summaryScoreDisplay = document.getElementById("summary-score"); // Ambil elemen skor

  summaryList.innerHTML = ""; // Bersihkan daftar sebelumnya

  let correctCount = 0; // Inisialisasi penghitung skor benar
  let totalQuestions = questions.length; // Total soal

  for (let i = 0; i < questions.length; i++) {
    const listItem = document.createElement("li");
    listItem.dataset.questionIndex = i;
    listItem.onclick = function() {
      goToQuestion(parseInt(this.dataset.questionIndex));
    };

    const questionNumberSpan = document.createElement("span");
    questionNumberSpan.classList.add("summary-question-number");
    questionNumberSpan.textContent = `${i + 1}.`;
    listItem.appendChild(questionNumberSpan);

    const userAnswer = userAnswers[i];
    const correctAnswer = questions[i].answer;
    const answerSpan = document.createElement("span");
    answerSpan.classList.add("summary-answer");

    if (userAnswer) {
      answerSpan.textContent = userAnswer;
      if (userAnswer === correctAnswer) {
        answerSpan.classList.add("correct");
        correctCount++; // Tambahkan jika jawaban benar
      } else {
        answerSpan.classList.add("wrong");
      }
    } else {
      answerSpan.textContent = "-";
      answerSpan.classList.add("unanswered");
    }
    listItem.appendChild(answerSpan);

    summaryList.appendChild(listItem);
  }

  // Hitung persentase atau skor total
  const scorePercentage = (correctCount / totalQuestions) * 100;
  // Perbarui teks total skor di modal
  summaryScoreDisplay.textContent = `(Skor: ${correctCount}/${totalQuestions} - ${scorePercentage.toFixed(0)}%)`;


  summaryModal.style.display = "flex";
}

// ... (kode JavaScript Anda lainnya) ...
