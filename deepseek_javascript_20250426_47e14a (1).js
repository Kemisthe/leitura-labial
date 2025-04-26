document.querySelectorAll('.options button').forEach(button => {
    button.addEventListener('click', (e) => {
        const isCorrect = e.target.textContent.includes('descansou'); // Adapte para cada vídeo
        const resultDiv = e.target.closest('.level').querySelector('.result');
        
        resultDiv.classList.remove('hidden');
        resultDiv.querySelector('.score').textContent = isCorrect ? '100%' : '0%';
    });
});