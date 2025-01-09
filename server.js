const express = require('express');
const app = express();
const port = 3000;
const { getLeaderboardData } = require('./database');

app.use(express.static('public'));

app.get('/api/leaderboard', async (req, res) => {
    try {
        const data = await getLeaderboardData();
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch leaderboard data' });
    }
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
