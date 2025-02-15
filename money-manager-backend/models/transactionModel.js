const pool = require("../config/db");

const addTransaction = async (userId, amount, type, category) => {
  const result = await pool.query(
    "INSERT INTO transactions (user_id, amount, type, category) VALUES ($1, $2, $3, $4) RETURNING *",
    [userId, amount, type, category]
  );
  return result.rows[0];
};

module.exports = { addTransaction };
