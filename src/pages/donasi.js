const handlePayment = async () => {
  if (!window.Pi) {
    alert("Hanya bisa dilakukan dalam Pi Browser.");
    return;
  }

  const paymentData = {
    amount: 10,
    memo: "Donasi untuk Proyek JavaPalma",
    metadata: { projectId: "javapalma_100" }
  };

  try {
    const payment = await window.Pi.createPayment(paymentData, {
      onReadyForServerApproval: (paymentId) => {
        console.log("Siap disetujui server:", paymentId);
      },
      onReadyForServerCompletion: (paymentId, txId) => {
        console.log("Pembayaran berhasil:", paymentId, txId);
      },
      onCancel: (paymentId) => {
        console.log("Dibatalkan oleh pengguna:", paymentId);
      },
      onError: (err) => {
        console.error("Error:", err);
      }
    });
  } catch (e) {
    alert("Gagal melakukan pembayaran");
  }
};
