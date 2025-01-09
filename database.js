const { Pool } = require('pg');
const pool = new Pool({
    user: 'your_database_user',
    host: 'your_database_host',
    database: 'your_database_name',
    password: 'your_database_password',
    port: 5432,
});

async function getLeaderboardData() {
    const client = await pool.connect();
    try {
        const res = await client.query('SELECT name, score FROM leaderboard ORDER BY score DESC');
        return res.rows;
    } finally {
        client.release();
    }
}

module.exports = {
    getLeaderboardData,
};
