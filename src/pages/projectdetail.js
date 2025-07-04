import React from 'react';
import { useParams } from 'react-router-dom';

const ProjectDetail = () => {
  const { id } = useParams();

  return (
    <main>
      <h1>Detail Proyek #{id}</h1>
      <p>Deskripsi lengkap proyek pertanian, rencana kerja, dan laporan perkembangan.</p>
      <button>Donasi Sekarang</button>
      <button>Invest Sekarang</button>
    </main>
  );
};

export default ProjectDetail;
