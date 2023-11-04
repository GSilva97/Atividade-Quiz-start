function AvaliarRespostas() {
        const respostasCorretas = {
            q1: '1',
            q2: '2',
            q3: '3',
            q4: '1',
            q5: '2',
        };
        const RespostasSelecionadas = {
            q1: document.querySelector('input[name="q1"]:checked').value,
            q2: document.querySelector('input[name="q2"]:checked').value,
            q3: document.querySelector('input[name="q3"]:checked').value,
            q4: document.querySelector('input[name="q4"]:checked').value,
            q5: document.querySelector('input[name="q5"]:checked').value,
        };
        let Pontuacao = 0;
        for (const perguntas in respostasCorretas) {
            if (respostasCorretas[perguntas] === RespostasSelecionadas[perguntas]) {
                Pontuacao++;
            }
        }

        const pontuacaoElement = document.getElementById('Pontuacao');
        pontuacaoElement.textContent = `Pontuação: ${Pontuacao} de 5`;
        if (Pontuacao === 5) {
            pontuacaoElement.textContent += " Parabéns!!!!!!";
            const gifImage = document.createElement('img');
            gifImage.src = "https://media.tenor.com/UKKPyTd7AS0AAAAM/manoel-gomes.gif";
            document.body.appendChild(gifImage);
        }
        else if (Pontuacao >= 1 && Pontuacao <= 4) {
            pontuacaoElement.textContent += " Quase lá, não desista!";
        }
        else if (Pontuacao === 0) {
            pontuacaoElement.textContent += " você... não... não acertou nenhuma pergunta?!!!";
            const imagem = document.createElement('img');
            imagem.src = "https://th.bing.com/th/id/OIP.970XsL2XvjGgZHhFCumF6QHaHG?w=193&h=185&c=7&r=0&o=5&pid=1.7";
            document.body.appendChild(imagem);
        }
    }