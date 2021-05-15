const scores = JSON.parse(localStorage.getItem('highscores')) || [];

                        scores.push(wpmDisplay.textContent);

                        // sort from low to high
                        scores.sort();

                        if(scores.length > 10){
                            scores.shift();
                        }

                        localStorage.setItem('highscores', JSON.stringify(scores));
                        // refresh the page
                        window.location.reload();