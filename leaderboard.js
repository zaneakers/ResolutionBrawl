document.addEventListener('DOMContentLoaded', () => {
    fetchLeaderboardData();
});

function fetchLeaderboardData() {
    fetch('/api/leaderboard')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            populateLeaderboard(data);
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
        });
}

function populateLeaderboard(data) {
    const leaderboardBody = document.getElementById('leaderboard').getElementsByTagName('tbody')[0];
    leaderboardBody.innerHTML = '';

    data.forEach((entry, index) => {
        const row = leaderboardBody.insertRow();
        const rankCell = row.insertCell(0);
        const nameCell = row.insertCell(1);
        const scoreCell = row.insertCell(2);

        rankCell.textContent = index + 1;
        nameCell.textContent = entry.name;
        scoreCell.textContent = entry.score;
    });
}
