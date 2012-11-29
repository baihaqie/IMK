var id = new Array();
var questions = new Array();
var choices = new Array();
var answers = new Array();
var response = new Array();

// To add more questions, just follow the format below.

id[0]="0";
questions[0] = "Ilmu yang menunjang interaksi manusia komputer yang digunakan untuk mempelajari kemampuan fisik dari pengguna (manusia) adalah ...";
choices[0] = new Array();
choices[0][0] = "Sosiologi";
choices[0][1] = "Psikologi";
choices[0][2] = "Astrologi";
choices[0][3] = "Ergonomi";
choices[0][4] = "Antropologi";
answers[0] = choices[0][3];

id[1]="1";
questions[1] = "Dapat dikerjakan dengan mudah dan alamiah, tanpa adanya bahaya kesalahan merupakan faktor keberhasilan sistem, yaitu ...";
choices[1] = new Array();
choices[1][0] = "Usability";
choices[1][1] = "Used";
choices[1][2] = "Usefull";
choices[1][3] = "Usable";
choices[1][4] = "Usage";
answers[1] = choices[1][3];

id[2]="2";
questions[2] = "Dibawah ini yang tidak termasuk dalam tahap pemrosesan informasi adalah ...";
choices[2] = new Array();
choices[2][0] = "Aksi";
choices[2][1] = "Reaksi";
choices[2][2] = "Perbandingan";
choices[2][3] = "Menangkap informasi";
choices[2][4] = "Pengambilan keputusan";
answers[2] = choices[2][1];

id[3]="3";
questions[3] = "Fitt’s Law menyatakan bahwa ...";
choices[3] = new Array();
choices[3][0] = "Waktu reaksi berbanding lurus dengan jarak";
choices[3][1] = "Waktu reaksi berbanding lurus dengan ukuran";
choices[3][2] = "Waktu reaksi berbanding terbalik dengan jarak";
choices[3][3] = "Waktu reaksi merupakan perkalian antara jarak dengan ukuran";
choices[3][4] = "Dibutuhkan tiga konstanta untuk menentukan waktu reaksi";
answers[3] = choices[3][0];

id[4]="4";
questions[4] = "Daya guna (usability) merupakan salah satu faktor untuk mengukur sejauh mana penerimaan pengguna terhadap sistem. Pengukuran dapat dilakukan dengan tiga hal, yaitu ...";
choices[4] = new Array();
choices[4][0] = "True";
choices[4][1] = "False";
choices[4][2] = "False";
choices[4][3] = "False";
choices[4][3] = "False";
answers[4] = choices[4][0];

id[5]="5";
questions[5] = "Pembuatan laporan keuangan dengan menggunakan Ms. Word tidak memenuhi atribut daya guna ...";
choices[5] = new Array();
choices[5][0] = "strings, numbers, BooBoos, and nulls";
choices[5][1] = "strings, text, Booleans, and nulls";
choices[5][2] = "strings, numbers, Booleans, and nulls";
choices[5][3] = "strings, numbers, Booleans, and zeros";
choices[5][4] = "strings, numbers, Booleans, and zeros";
answers[5] = choices[5][2];

id[6]="6";
questions[6] = "Ketelitian dan kelengkapan di mana user dapat mencapai tujuan merupakan atribut daya guna ...";
choices[6] = new Array();
choices[6][0] = "strings, numbers, BooBoos, and nulls";
choices[6][1] = "strings, text, Booleans, and nulls";
choices[6][2] = "strings, numbers, Booleans, and nulls";
choices[6][3] = "strings, numbers, Booleans, and zeros";
choices[6][4] = "strings, numbers, Booleans, and zeros";
answers[6] = choices[6][2];

id[7]="7";
questions[7] = "Usability life cycle terdiri dari tiga fase. Memastikan design dapat dipahami user dan konsisten serta fleksible merupakan fase ...";
choices[7] = new Array();
choices[7][0] = "strings, numbers, BooBoos, and nulls";
choices[7][1] = "strings, text, Booleans, and nulls";
choices[7][2] = "strings, numbers, Booleans, and nulls";
choices[7][3] = "strings, numbers, Booleans, and zeros";
choices[7][4] = "strings, numbers, Booleans, and zeros";
answers[7] = choices[7][2];

id[8]="8";
questions[8] = "Untuk meningkatkan usability, digunakan prinsip CRAP. Konsistensi dalam suatu sistem dalam prinsip CRAP termasuk dalam prinsip ...";
choices[8] = new Array();
choices[8][0] = "Consistency";
choices[8][1] = "Contrast";
choices[8][2] = "Repitition";
choices[8][3] = "Alignment";
choices[8][4] = "Proximity";
answers[8] = choices[8][2];

id[9]="9";
questions[9] = "Membantu pengguna untuk fokus pada bagian yang penting, yang akan menuntun pengguna untuk mengetahui apa yang harus dilakukan, merupakan prinsip CRAP, yaitu ...";
choices[9] = new Array();
choices[9][0] = "Consistency";
choices[9][1] = "Contrast";
choices[9][2] = "Repitition";
choices[9][3] = "Alignment";
choices[9][4] = "Proximity";
answers[9] = choices[9][1];

// response for getting 100%
response[0] = "Excellent, top marks!";
// response for getting 90% or more
response[1] = "Excellent, try again to get 100%!"
// response for getting 70% or more
response[2] = "Well done, that is a good score, can you do better?";
// response for getting over 50%
response[3] = "Nice one, you got more than half of the questions right, can you do better?";
// response for getting 40% or more
response[4] = "You got some questions right, you can do better!";
// response for getting 20% or more
response[5] = "You didn't do too well, why not try again!?";
// response for getting 10% or more
response[6] = "That was pretty poor!  Try again to improve!";
// response for getting 9% or less
response[7] = "Oh dear, I think you need to go back to school (or try again)!";