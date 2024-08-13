import { useState } from "react";
import "./App.css";

const faqs = [
  {
    question:
      "Bisakah Anda jelaskan lebih lanjut mengenai kolaborasi tim dalam proyek yang ada di portofolio Anda?",
    answer:
      "Tentu. Dalam banyak proyek di portofolio saya, kolaborasi tim sangat penting untuk mencapai hasil yang baik. Misalnya, dalam proyek pengembangan aplikasi internal untuk perusahaan, saya bekerja erat dengan desainer UX/UI, manajer produk, dan pengembang backend. Kami menggunakan tools seperti JIRA untuk manajemen tugas dan Git untuk kontrol versi. Setiap hari, kami mengadakan stand-up meeting singkat untuk memastikan semua orang berada di jalur yang sama dan mengatasi kendala yang mungkin muncul. Saya juga terbiasa dengan code review, yang membantu menjaga kualitas kode dan memastikan bahwa kami mengikuti best practices. Kolaborasi yang baik di tim memungkinkan kami untuk menyelesaikan proyek sesuai jadwal dan memenuhi ekspektasi pengguna.",
  },
  {
    question:
      "Bagaimana Anda menentukan prioritas dalam proyek-proyek yang Anda kerjakan?",
    answer:
      "Saat menentukan prioritas dalam proyek, saya selalu mulai dengan memahami kebutuhan bisnis dan tujuan utama dari proyek tersebut. Langkah pertama saya adalah berkomunikasi dengan pemangku kepentingan untuk memahami fitur mana yang paling penting dan mendesak. Kemudian, saya memecah proyek menjadi tugas-tugas yang lebih kecil dan memprioritaskan tugas-tugas berdasarkan dampaknya terhadap keseluruhan proyek. Saya juga selalu mempertimbangkan risiko yang mungkin timbul dan berusaha menyelesaikan bagian yang berisiko lebih tinggi lebih awal. Selain itu, saya menggunakan metode agile development, sehingga saya bisa terus menyesuaikan prioritas berdasarkan umpan balik yang diterima selama siklus pengembangan.",
  },
  {
    question:
      "Dalam portofolio Anda, ada beberapa proyek yang menggunakan teknologi berbeda. Apa yang memotivasi Anda untuk mempelajari teknologi tersebut?",
    answer:
      "Saya selalu tertarik untuk memperluas pengetahuan dan keterampilan saya di berbagai teknologi. Motivasi utama saya adalah kebutuhan pasar yang terus berkembang dan keinginan untuk menjadi developer yang serba bisa. Misalnya, saya belajar React dan Node.js karena semakin banyak perusahaan yang beralih ke teknologi JavaScript full-stack untuk pengembangan aplikasi web modern. Saya percaya bahwa dengan mempelajari berbagai teknologi, saya bisa lebih fleksibel dan siap menghadapi tantangan proyek yang beragam. Selain itu, saya juga sangat menikmati proses belajar itu sendiri dan merasa puas saat bisa menerapkan pengetahuan baru dalam proyek nyata.",
  },
  {
    question:
      "Bagaimana Anda mengelola waktu dan prioritas ketika mengerjakan beberapa proyek secara bersamaan?",
    answer:
      "Saya mengelola waktu dan prioritas dengan menggunakan metode manajemen waktu yang efisien, seperti teknik prioritas tinggi-rendah dan pembagian tugas berdasarkan urgensi dan pentingnya. Saya memulai setiap minggu dengan menyusun daftar tugas dan menetapkan tenggat waktu untuk setiap proyek, memastikan bahwa saya memiliki rencana yang jelas untuk semua tugas yang perlu diselesaikan. Ketika ada beberapa proyek yang berjalan bersamaan, saya memastikan untuk selalu berkomunikasi dengan anggota tim dan pemangku kepentingan untuk menyinkronkan prioritas dan menyesuaikan jadwal jika diperlukan. Dengan cara ini, saya bisa menjaga keseimbangan antara kualitas dan ketepatan waktu dalam menyelesaikan proyek.",
  },
];

export default function App() {
  return (
    <div>
      <Accordion data={faqs} />
    </div>
  );
}

function Accordion({ data }) {
  const [curOpen, setIsOpen] = useState(null);

  return (
    <div className="accordion">
      {data.map((faq, index) => (
        <AccordionItem
          key={index}
          curOpen={curOpen}
          onOpen={setIsOpen}
          question={faq.question}
          answer={faq.answer}
          number={index + 1}
        />
      ))}
    </div>
  );
}

function AccordionItem({ number, question, answer, curOpen, onOpen }) {
  const isOpen = number === curOpen;

  function handleToggle() {
    onOpen(isOpen ? null : number);
  }

  return (
    <div className={`item ${isOpen ? "open" : ""}`} onClick={handleToggle}>
      <p className="number">{number < 10 ? `0${number}` : number}</p>
      <p className="title">{question}</p>
      <p className="icon">{isOpen ? "-" : "+"}</p>
      {isOpen && <div className="content-box">{answer}</div>}
    </div>
  );
}
