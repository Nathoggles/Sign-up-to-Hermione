const pw1 = document.getElementById('pw1');
const pw2 = document.getElementById('pw2');

pw2.addEventListener('input', () => {
    console.log(pw1.value);
    console.log(pw2.value);
    if (pw1.value === pw2.value) {
        pw2.setCustomValidity('');
    } else {
        pw2.setCustomValidity('Passwords do not match');
    }
})