function showSuccessAndCopy() {
  navigator.clipboard.writeText("wss://mc.zinc-network.net").then(() => {
    Swal.fire({
      title: "IP Copied! :D",
      text: "The address is copied to your clipboard your set and ready to play the server cant wait to see you!",
      icon: "success",
      background: "#181818",
      color: "#ffffff" // Optional: makes text readable on dark background
    });
  }).catch(err => {
    Swal.fire({
      title: "Error",
      text: "Failed to copy to clipboard.",
      icon: "error",
      background: "#181818",
      color: "#ffffff"
    });
    console.error("Clipboard error:", err);
  });
}
