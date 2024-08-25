function updateClock() {
    const now = new Date();
    const hrs = now.getHours().toString().padStart(2, '0');
    const mins = now.getMinutes().toString().padStart(2, '0');
    const secs = new.getSeconds().toString().padStart(2, '0');
    const time ='${hrs}:${mins}:${secs}';
}